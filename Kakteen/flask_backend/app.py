from flask import Flask, render_template, redirect, session, request
import funcs

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"

def check_if_logged_in():
	try:
		test = session["logged_in"]
	except:
		session["logged_in"] = False

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
	return render_template("index.html", logged_in=session["logged_in"], warning=session["warning"])

@app.route("/shop")
def shop():
	check_if_logged_in()
	return render_template("Shop.html")

@app.route("/entdecken")
def entdecken():
	check_if_logged_in()
	return render_template("Entdecken.html")

@app.route("/support")
def support():
	check_if_logged_in()
	return render_template("Support.html")

@app.route("/profil")
def profil():
	check_if_logged_in()
	return render_template("Profil.html")

@app.route("/auswahl")
def auswahl():
	check_if_logged_in()
	return render_template("Auswahl.html")

@app.route("/login", methods=["POST"])
def login():
	un = request.form.get("username")
	pw = request.form.get("password")

	log_return = funcs.login(un, pw)

	if log_return == True:
		#return "wolugf"
		session["logged_in"] = True
		return redirect("/")
	else:
		session["warning"] = [log_return[1], "l"]
		#return str(session["warning"])
		return redirect("/")

@app.route("/register", methods=["POST"])
def register():
	un = request.form.get("username")
	pw = request.form.get("password")

	reg_return = funcs.register(un, pw)

	if reg_return == True:
		session["logged_in"] = True
		return redirect("/")
	else:
		session["warning"] = [reg_return[1], "r"]
		return redirect("/")

@app.route("/logout")
def logout():
	session.clear()
	return redirect("/")

if __name__ == "__main__":
	app.run(debug=True, port=5000)