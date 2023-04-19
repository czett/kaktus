from flask import Flask, render_template, redirect, session, request
import funcs, pymongo, certifi
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = cluster["mrkaktus"]
logreg = db["login"]
userdata = db["userdata"]

def check_if_logged_in():
	try:
		test = session["logged_in"]
	except:
		session["logged_in"] = False
		session["pimg"] = None

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
	check_for_session("warning", create_empty=True)
	return render_template("index.html", logged_in=session["logged_in"], warning=session["warning"], pimg=session["pimg"])

@app.route("/shop")
def shop():
	check_if_logged_in()
	return render_template("Shop.html", logged_in=session["logged_in"], pimg=session["pimg"])

@app.route("/entdecken")
def entdecken():
	check_if_logged_in()
	return render_template("Entdecken.html", logged_in=session["logged_in"], pimg=session["pimg"])

@app.route("/agb")
def agb():
	check_if_logged_in()
	return render_template("agb.html")

@app.route("/support")
def support():
	check_if_logged_in()
	return render_template("Support.html", logged_in=session["logged_in"], pimg=session["pimg"])

@app.route("/profil")
def profil():
	check_if_logged_in()
	return render_template("Profil.html", logged_in=session["logged_in"], username=session["username"], user_id=session["user_id"], friends=0, pimg=session["pimg"])

@app.route("/auswahl")
def auswahl():
	check_if_logged_in()
	return render_template("Auswahl.html", logged_in=session["logged_in"], pimg=session["pimg"])

@app.route("/auswahl/bestaetigen", methods=["POST"])
def auswahlbestaetigen():
	check_if_logged_in()

	bild = request.form.get("profilbild")
	
	query = {"_id": session["user_id"]}
	newvals = {"$set": {"pimg": bild}}
	userdata.update_one(query, newvals)

	session["pimg"] = bild

	return redirect("/profil")

@app.route("/quiz")
def quiz():
	check_if_logged_in()
	return render_template("quiz.html")

@app.route("/login", methods=["POST"])
def login():
	un = request.form.get("username")
	pw = request.form.get("password")

	log_return = funcs.login(un, pw)

	if log_return == True:
		session["logged_in"] = True
		session["username"] = un

		uid = funcs.find_in_coll(logreg, {"username": un})["_id"]
		pimg = funcs.find_in_coll(userdata, {"_id": uid})["pimg"]

		session["user_id"] = uid
		session["pimg"] = pimg
		return redirect("/profil")
	else:
		session["warning"] = [log_return[1], "l"]
		return redirect("/")

@app.route("/register", methods=["POST"])
def register():
	un = request.form.get("username")
	pw = request.form.get("password")

	reg_return = funcs.register(un, pw)

	if reg_return == True:
		session["logged_in"] = True
		session["username"] = un

		uid = funcs.find_in_coll(logreg, {"username": un})["_id"]
		session["user_id"] = uid
		session["pimg"] = None

		funcs.add_entry(userdata, {"_id": uid, "pimg": None})

		return redirect("/profil")
	else:
		session["warning"] = [reg_return[1], "r"]
		return redirect("/")

@app.route("/logout")
def logout():
	session.clear()
	return redirect("/")

if __name__ == "__main__":
	app.run(debug=True, port=5000)