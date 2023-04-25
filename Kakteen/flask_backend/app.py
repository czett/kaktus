from flask import Flask, render_template, redirect, session, request, jsonify
import funcs as funcs
import pymongo, certifi
from datetime import datetime
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = cluster["mrkaktus"]
logreg = db["login"]
userdata = db["userdata"]
forum = db["forum"]

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

@app.route("/baukasten")
def kaubasten():
	check_if_logged_in()
	return render_template("Kaktus_baukasten.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/snake")
def snake():
	check_if_logged_in()
	return render_template("startespiel.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/forum")
def forum_render():
	check_if_logged_in()

	posts = []

	for post in forum.find():
		posts.append(post)

		if (datetime.now() - post["date"]).total_seconds() > 120:
			post["hot"] = False
		else:
			post["hot"] = True

	posts.reverse() # neue posts oben

	return render_template("forum.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], posts=posts)

@app.route("/forum/neuer-beitrag", methods=["POST"])
def neuer_beitrag():
	title = request.form.get("title")
	desc = request.form.get("description")
	post_id_exists = True

	while post_id_exists:
		post_id = funcs.create_id(16)

		if funcs.find_in_coll(forum, {"_id": post_id}) == None:
			post_id_exists = False
		else:
			post_id_exists = True
	
	username = session["data"]["username"]
	user_id = session["data"]["user_id"]
	
	post_dict = {"_id": post_id, "title": title, "desc": desc, "date": datetime.now(), "creator": username, "creator_id": user_id, "likes": [], "comments": [], "shares": 0, "reports": 0, "clicks": 0}

	funcs.add_entry(forum, post_dict)

	return redirect("/forum")

@app.route("/forum/beitrag/<beitrag_id>/<action>")
def forum_beitrag(beitrag_id, action):
	if funcs.find_in_coll(forum, {"_id": beitrag_id}) != None:
		post = funcs.find_in_coll(forum, {"_id": beitrag_id})
		clicks = post["clicks"]
		clicks += 1

		forum.update_one({"_id": beitrag_id}, {"$set": {"clicks": clicks}})		

		if action == "view":
			return render_template("beitrag.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], post=post)
		else:
			return render_template("beitrag.html", action=action, logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], post=post)
	else:
		return redirect("/forum")

@app.route("/forum/beitrag-loeschen/<beitrag_id>")
def beitrag_loeschen(beitrag_id):
	if funcs.find_in_coll(forum, {"_id": beitrag_id})["creator_id"] == session["data"]["user_id"]:
		forum.delete_one({"_id": beitrag_id})
	
	return redirect("/forum")

@app.route("/forum/beitrag-liken/<beitrag_id>")
def beitrag_like_toggle(beitrag_id):
	if session["data"]["user_id"] not in funcs.find_in_coll(forum, {"_id": beitrag_id})["likes"]:
		likes = funcs.find_in_coll(forum, {"_id": beitrag_id})["likes"]
		likes.append(session["data"]["user_id"])
		
		forum.update_one({"_id": beitrag_id}, {"$set": {"likes": likes}})
	else:
		likes = funcs.find_in_coll(forum, {"_id": beitrag_id})["likes"]
		likes.remove(session["data"]["user_id"])
		
		forum.update_one({"_id": beitrag_id}, {"$set": {"likes": likes}})
	
	return redirect("/forum")

@app.route("/forum/beitrag/<postid>/kommentar-hinzufuegen", methods=["POST"])
def kommentar_hinzufuegen(postid):
	try:
		text = request.form.get("comment")
		comments = funcs.find_in_coll(forum, {"_id": postid})["comments"]

		comment_id_exists = True

		while comment_id_exists:
			cid = funcs.create_id(16)
			was_found = False

			for comment in funcs.find_in_coll(forum, {"_id": postid})["comments"]:
				if comment["_id"] == cid:
					was_found = True

			if was_found == True:
				comment_id_exists = True
			else:
				comment_id_exists = False

		comments.append({"_id": cid, "creator": session["data"]["username"], "creator_id": session["data"]["user_id"], "text": text, "likes": []})

		forum.update_one({"_id": postid}, {"$set": {"comments": comments}})

		return redirect(f"/forum/beitrag/{postid}/view")
	except:
		return redirect(f"/forum/beitrag/{postid}/view")

@app.route("/forum/beitrag/<postid>/kommentar-loeschen/<comment_id>")
def kommentar_loeschen(postid, comment_id):
	comments = funcs.find_in_coll(forum, {"_id": postid})["comments"]
	
	for count, item in enumerate(comments):
		if item["_id"] == comment_id:
			comment_index = count
			comment = item

	if comment["creator_id"] == session["data"]["user_id"]:

		comments.pop(comment_index)

		forum.update_one({"_id": postid}, {"$set": {"comments": comments}})
	
	return redirect(f"/forum/beitrag/{postid}/view")

if __name__ == "__main__":
	app.run(debug=True, port=5000)
