from flask import Flask, render_template, redirect, session, request, jsonify
import funcs as funcs
import pymongo, certifi
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = cluster["mrkaktus"]
logreg = db["login"]
userdata = db["userdata"]

def fill_notification_box():
	freqs = funcs.find_in_coll(userdata, {"_id": session["data"]["user_id"]})["friend_requests"]
	
	session["data"]["notifications"] = []

	for req in freqs:
		session["data"]["notifications"].append(req)
		session.modified = True

def check_if_logged_in():
	try:
		test = session["logged_in"]

		fill_notification_box()
	except:
		session["logged_in"] = False
		session["data"] = {}
		session["data"]["pimg"] = None

		session.modified = True

	try:
		war = session["warnings"]
	except:
		session["warnings"] = {}

def check_for_session(session_var_name, **kwargs):
	if kwargs["create_empty"] == True:
		try:
			test = session[session_var_name]
			return True
		except:
			session[session_var_name] = None
			return False
	else:
		try:
			test = session[session_var_name]
			return True
		except:
			return False

@app.route("/")
def start():
	check_if_logged_in()
	return render_template("index.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/shop")
def shop():
	check_if_logged_in()
	return render_template("Shop.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/entdecken")
def entdecken():
	check_if_logged_in()
	return render_template("Entdecken.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/agb")
def agb():
	check_if_logged_in()
	return render_template("agb.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/support")
def support():
	check_if_logged_in()
	return render_template("Support.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/profil")
def profil():
	check_if_logged_in()
	uid = session["data"]["user_id"]
	pimg = funcs.find_in_coll(userdata, {"_id": uid})["pimg"]
	friends = funcs.find_in_coll(userdata, {"_id": uid})["friends"]

	session["data"]["friends"] = friends
	session.modified = True
	return render_template("Profil.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/auswahl")
def auswahl():
	check_if_logged_in()
	return render_template("Auswahl.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/warenkorb")
def warenkorb():
	check_if_logged_in()
	return render_template("warenkorb.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/kaufen")
def kaufen():
	check_if_logged_in()
	return render_template("kaufen.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/auswahl/bestaetigen", methods=["POST"])
def auswahlbestaetigen():
	check_if_logged_in()

	bild = request.form.get("profilbild")
	
	query = {"_id": session["data"]["user_id"]}
	newvals = {"$set": {"pimg": bild}}
	userdata.update_one(query, newvals)

	session["data"]["pimg"] = bild
	session.modified = True

	return redirect("/profil")

@app.route("/quiz")
def quiz():
	check_if_logged_in()
	return render_template("quiz.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/p1")
def p1():
	check_if_logged_in()
	return render_template("p1.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/login", methods=["POST"])
def login():
	un = request.form.get("username")
	pw = request.form.get("password")

	log_return = funcs.login(un, pw)

	if log_return == True:
		session["logged_in"] = True

		uid = funcs.find_in_coll(logreg, {"username": un})["_id"]
		pimg = funcs.find_in_coll(userdata, {"_id": uid})["pimg"]
		friends = funcs.find_in_coll(userdata, {"_id": uid})["friends"]

		session["data"] = {"user_id": uid, "username": un, "pimg": pimg, "friends": friends, "own_profile": True}
		return redirect("/profil")
	else:
		session["warnings"]["logreg"] = [log_return[1], "l"]
		session.modified = True
		return redirect("/")

@app.route("/register", methods=["POST"])
def register():
	un = request.form.get("username")
	pw = request.form.get("password")

	reg_return = funcs.register(un, pw)

	if reg_return == True:
		session["logged_in"] = True

		uid = funcs.find_in_coll(logreg, {"username": un})["_id"]

		session["data"] = {"user_id": uid, "username": un, "pimg": None, "friends": [], "own_profile": True}

		funcs.add_entry(userdata, {"_id": uid, "friends": [], "pimg": None, "friend_requests": []})

		return redirect("/profil")
	else:
		session["warnings"]["logreg"] = [reg_return[1], "r"]
		session.modified = True
		return redirect("/")

@app.route("/profil/suche", methods=["POST"])
def profilsuche():
	check_if_logged_in()
	
	profil = request.form.get("profil")

	res = funcs.find_in_coll(logreg, {"username": profil})
	if res != None:
		session["warnings"]["search"] = False
		session.modified = True
		return redirect(f"/profil/{profil}")
	else:
		#return str(session["warnings"])
		session["warnings"]["search"] = True
		session.modified = True
		return redirect("/")

@app.route("/profil/<profil>")
def anderesprofil(profil):
	session["warnings"] = {}
	session.modified = True

	uid = funcs.find_in_coll(logreg, {"username": profil})["_id"]
	user_ud = funcs.find_in_coll(userdata, {"_id": uid})

	usersfriends = funcs.find_in_coll(userdata, {"_id": funcs.find_in_coll(logreg, {"username": profil})["_id"]})["friends"]

	for friend in usersfriends:
		if funcs.find_in_coll(logreg, {"username": friend}) == None:
			usersfriends.remove(friend)
	
	userdata.update_one({"_id": str(funcs.find_in_coll(logreg, {"username": profil})["_id"])}, {"$set": {"friends": usersfriends}})

	if session["logged_in"] == True and session["data"]["user_id"] == uid:
		profile_data = {"user_id": uid, "username": profil, "friends": user_ud["friends"], "pimg": user_ud["pimg"], "own_profile": True}
	else:
		profile_data = {"user_id": uid, "username": profil, "friends": user_ud["friends"], "pimg": user_ud["pimg"], "own_profile": False}

	return render_template("Profil.html", data=profile_data, warnings=session["warnings"], own_pimg=session["data"]["pimg"], logged_in=session["logged_in"])

@app.route("/delete-account")
def delete_account():
	uid = session["data"]["user_id"]

	userdata.delete_one({"_id": uid})
	logreg.delete_one({"_id": uid})

	return redirect("/logout")

@app.route("/change-password", methods=["POST"])
def change_password():
	uid = session["data"]["user_id"]
	newpw = request.form.get("newpw")

	query = {"_id": uid}
	newvals = {"$set": {"password": newpw}}
	logreg.update_one(query, newvals)

	return redirect("/profil")

@app.route("/freund-hinzufuegen/<profil>")
def freund_hinzufuegen(profil):
	uid = funcs.find_in_coll(logreg, {"username": profil})["_id"]
	freqs = funcs.find_in_coll(userdata, {"_id": uid})["friend_requests"]
	friends = funcs.find_in_coll(userdata, {"_id": uid})["friends"]

	if str(session["data"]["username"]) not in freqs and str(session["data"]["username"]) not in friends:
		freqs.append(session["data"]["username"])

		query = {"_id": uid}
		newvals = {"$set": {"friend_requests": freqs}}
		userdata.update_one(query, newvals)

	return redirect("/profil")

@app.route("/freq/<action>/<person>")
def handle_freq(action, person):
	uid = session["data"]["user_id"]
	freqs = funcs.find_in_coll(userdata, {"_id": uid})["friend_requests"]
	friends = funcs.find_in_coll(userdata, {"_id": uid})["friends"]

	freqs.remove(person)
	userdata.update_one(funcs.find_in_coll(userdata, {"_id": uid}), {"$set": {"friend_requests": freqs}})

	if action == "accept" and str(person) not in friends:
		friends = funcs.find_in_coll(userdata, {"_id": uid})["friends"]
		friends.append(person)

		query = {"_id": uid}
		newvals = {"$set": {"friends": friends}}
		userdata.update_one(query, newvals)

		friends = funcs.find_in_coll(userdata, {"_id": funcs.find_in_coll(logreg, {"username": person})["_id"]})["friends"]
		friends.append(funcs.find_in_coll(logreg, {"_id": uid})["username"])

		query = {"_id": funcs.find_in_coll(logreg, {"username": person})["_id"]}
		newvals = {"$set": {"friends": friends}}
		userdata.update_one(query, newvals)

	try:
		session["data"]["notifications"].remove(person)
	except:
		pass

	session["data"]["friends"] = friends
	session.modified = True

	return redirect(f"/profil")

@app.route("/logout")
def logout():
	session.clear()
	return redirect("/")

@app.route("/forum")
def forum():
	return "forum"

if __name__ == "__main__":
	app.run(debug=True, port=5000)
