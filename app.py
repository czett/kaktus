from flask import Flask, render_template, redirect, session
import os

app = Flask(__name__)

template_dir = os.path.abspath('Kakteen/flask_backend')
app = Flask(__name__, template_folder=template_dir)

@app.route("/")
def start():
	return render_template("index.html")

if __name__ == "__main__":
	app.run(debug=True, port=5000)