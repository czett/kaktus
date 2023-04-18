from flask import Flask, render_template, redirect, session
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"
cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority")

db = cluster["mrkaktus"]
login = db["login"]

def check_if_logged_in():
	try:
		test = session["logged_in"]
	except:
		session["logged_in"] = False

@app.route("/")
def start():
	check_if_logged_in()
	return render_template("index.html", logged_in=session["logged_in"])

@app.route("/shop")
def shop():
	return render_template("Shop.html")

@app.route("/entdecken")
def entdecken():
	return render_template("Entdecken.html")

@app.route("/support")
def support():
	return render_template("Support.html")

@app.route("/profil")
def profil():
	return render_template("Profil.html")

@app.route("/auswahl")
def auswahl():
	return render_template("Auswahl.html")

if __name__ == "__main__":
	app.run(debug=True, port=5000)