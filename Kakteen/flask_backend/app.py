from flask import Flask, render_template, redirect, session
import os

app = Flask(__name__)

@app.route("/")
def start():
	return render_template("index.html")

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

if __name__ == "__main__":
	app.run(debug=True, port=5000)