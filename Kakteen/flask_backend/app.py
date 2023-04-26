from flask import Flask, render_template, redirect, session, request, jsonify
#import funcs as funcs
import pymongo, certifi, string, random
from datetime import datetime
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "qwerizfugwoegfliugdshkg"

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = cluster["mrkaktus"]
logreg = db["login"]
userdata = db["userdata"]
forum = db["forum"]

def create_id(length):
	letter_list = []
	
	for i in range(length):
		letter_list.append(random.choice(string.ascii_lowercase))

	return ''.join(letter_list)

def add_entry(collection, to_insert):
	collection.insert_one(to_insert)

def find_in_coll(collection, to_find):
	result = collection.find_one(to_find)
	return result

def flogin(username, password):
	search_result = find_in_coll(logreg, {"username": username})

	if search_result != None:
		if search_result["password"] == password:
			return True #can log in
		else:
			return False, "p" #p = password wrong
	else:
		return False, "e" #e = doesn't exist

def fregister(username, password):
	search_result = find_in_coll(logreg, {"username": username})

	pot_id = create_id(16)

	if search_result == None:
		while find_in_coll(logreg, {"_id": pot_id}) != None:
			pot_id = create_id(16)

		add_entry(logreg, {"_id": pot_id, "username": username, "password": password})

		return True
	else:
		return False, "e" #e = exists

def fill_notification_box():
	freqs = find_in_coll(userdata, {"_id": session["data"]["user_id"]})["notifications"]
	
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

def read_products_file():
	with open("shop.csv", "r", encoding="utf-8") as f:
		file = f.readlines()

		products = []
		product = {}
		line_since_break = 0
		
		for line in file:

			if line != "\n":
				line = line.replace("\n", "")
				if line_since_break == 0:
					product["name"] = line
				if line_since_break == 1:
					product["desc"] = line
				if line_since_break == 2:
					product["price"] = line
				else:
					product["img"] = line

				line_since_break += 1
			else:
				product["_id"] = len(products)
				products.append(product)
				product = {}
				line_since_break = 0

	return products

@app.route("/")
def start():
	check_if_logged_in()
	return render_template("index.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/shop")
def shop():
	check_if_logged_in()

	products = read_products_file()

	for product in products:
		product["price"] = product["price"].replace(",", ".")
		product["price"] = product["price"].replace("€", "")
		product["price"] = float(product["price"])

	return render_template("Shop.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], products=products)

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
	pimg = find_in_coll(userdata, {"_id": uid})["pimg"]
	friends = find_in_coll(userdata, {"_id": uid})["friends"]

	session["data"]["friends"] = friends
	session.modified = True
	return render_template("Profil.html", logged_in=session["logged_in"], data=session["data"], profile_data=session["data"], warnings=session["warnings"])

@app.route("/auswahl")
def auswahl():
	check_if_logged_in()
	return render_template("Auswahl.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/shop/warenkorb")
def warenkorb():
	check_if_logged_in()

	if check_for_session("warenkorb", create_empty=False) == False:
		session["warenkorb"] = []

	return render_template("warenkorb.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], warenkorb=session["warenkorb"])

@app.route("/kaufen")
def kaufen():
	check_if_logged_in()
	return render_template("kaufen.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/produkt/<num>")
def produktseite(num):
	check_if_logged_in()
	products = read_products_file()

	product = products[int(num)]
	product["price"] = product["price"].replace(",", ".")
	product["price"] = product["price"].replace("€", "")
	product["price"] = float(product["price"])

	return render_template("p1.html", num=num, product=product, logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/weiter1")
def weiter1():
	check_if_logged_in()
	return render_template("weiter1.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/weiter2")
def weiter2():
	check_if_logged_in()
	return render_template("weiter2.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

@app.route("/fertig")
def fertig():
	check_if_logged_in()
	return render_template("fertig.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"])

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

	log_return = flogin(un, pw)

	if log_return == True:
		session["logged_in"] = True

		uid = find_in_coll(logreg, {"username": un})["_id"]
		pimg = find_in_coll(userdata, {"_id": uid})["pimg"]
		friends = find_in_coll(userdata, {"_id": uid})["friends"]

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

	reg_return = fregister(un, pw)

	if reg_return == True:
		session["logged_in"] = True

		uid = find_in_coll(logreg, {"username": un})["_id"]

		session["data"] = {"user_id": uid, "username": un, "pimg": None, "friends": [], "own_profile": True}

		add_entry(userdata, {"_id": uid, "friends": [], "pimg": None, "notifications": [], "reports": 0})

		return redirect("/profil")
	else:
		session["warnings"]["logreg"] = [reg_return[1], "r"]
		session.modified = True
		return redirect("/")

@app.route("/profil/suche", methods=["POST"])
def profilsuche():
	check_if_logged_in()
	
	profil = request.form.get("profil")

	res = find_in_coll(logreg, {"username": profil})
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

	uid = find_in_coll(logreg, {"username": profil})["_id"]
	user_ud = find_in_coll(userdata, {"_id": uid})

	usersfriends = find_in_coll(userdata, {"_id": find_in_coll(logreg, {"username": profil})["_id"]})["friends"]

	for friend in usersfriends:
		if find_in_coll(logreg, {"username": friend}) == None:
			usersfriends.remove(friend)
	
	userdata.update_one({"_id": str(find_in_coll(logreg, {"username": profil})["_id"])}, {"$set": {"friends": usersfriends}})

	if session["logged_in"] == True and session["data"]["user_id"] == uid:
		profile_data = {"user_id": uid, "username": profil, "friends": user_ud["friends"], "pimg": user_ud["pimg"], "own_profile": True}
	else:
		profile_data = {"user_id": uid, "username": profil, "friends": user_ud["friends"], "pimg": user_ud["pimg"], "own_profile": False}

	return render_template("Profil.html", profile_data=profile_data, warnings=session["warnings"], data=session["data"], logged_in=session["logged_in"])

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
	uid = find_in_coll(logreg, {"username": profil})["_id"]
	freqs = find_in_coll(userdata, {"_id": uid})["notifications"]
	friends = find_in_coll(userdata, {"_id": uid})["friends"]

	freq_exists = False

	for index, item in enumerate(freqs):
		if item["type"] == "freq":
			if item["person"] == session["data"]["username"]:
				freq_exists = True

	if freq_exists == False and str(session["data"]["username"]) not in friends:
		freqs.append({"type": "freq", "person": session["data"]["username"]})

		query = {"_id": uid}
		newvals = {"$set": {"notifications": freqs}}
		userdata.update_one(query, newvals)

	return redirect("/profil")

@app.route("/freq/<action>/<person>")
def handle_freq(action, person):
	uid = session["data"]["user_id"]
	freqs = find_in_coll(userdata, {"_id": uid})["notifications"]
	friends = find_in_coll(userdata, {"_id": uid})["friends"]

	for index, notif in enumerate(freqs):
		if notif["type"] == "freq":
			if notif["person"] == person:
				freqs.pop(index)	

	userdata.update_one(find_in_coll(userdata, {"_id": uid}), {"$set": {"notifications": freqs}})

	if action == "accept" and str(person) not in friends:
		friends = find_in_coll(userdata, {"_id": uid})["friends"]
		friends.append(person)

		query = {"_id": uid}
		newvals = {"$set": {"friends": friends}}
		userdata.update_one(query, newvals)

		friends = find_in_coll(userdata, {"_id": find_in_coll(logreg, {"username": person})["_id"]})["friends"]
		friends.append(find_in_coll(logreg, {"_id": uid})["username"])

		query = {"_id": find_in_coll(logreg, {"username": person})["_id"]}
		newvals = {"$set": {"friends": friends}}
		userdata.update_one(query, newvals)

	try:
		for index, notif in enumerate(session["data"]["notifications"]):
			if notif["type"] == "freq":
				if notif["person"] == person:
					session["data"]["notifications"].pop(index)		
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
		post_id = create_id(16)

		if find_in_coll(forum, {"_id": post_id}) == None:
			post_id_exists = False
		else:
			post_id_exists = True
	
	username = session["data"]["username"]
	user_id = session["data"]["user_id"]
	
	post_dict = {"_id": post_id, "title": title, "desc": desc, "date": datetime.now(), "creator": username, "creator_id": user_id, "likes": [], "comments": [], "shares": 0, "reports": 0, "clicks": 0}

	add_entry(forum, post_dict)

	return redirect("/forum")

@app.route("/forum/beitrag/<beitrag_id>/<action>")
def forum_beitrag(beitrag_id, action):
	if find_in_coll(forum, {"_id": beitrag_id}) != None:
		post = find_in_coll(forum, {"_id": beitrag_id})
		clicks = post["clicks"]
		clicks += 1

		forum.update_one({"_id": beitrag_id}, {"$set": {"clicks": clicks}})		

		if (datetime.now() - post["date"]).total_seconds() > 120:
			post["hot"] = False
		else:
			post["hot"] = True

		if action == "view":
			return render_template("beitrag.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], post=post)
		elif action == "sent":
			own_notis = find_in_coll(userdata, {"_id": session["data"]["user_id"]})["notifications"]
			for index, item in enumerate(own_notis):
				#return "wöoifhwpöeuhgfuefwgöiwegf"
				if item["type"] == "forum_post":
					if item["post_id"] == beitrag_id:
						own_notis.pop(index)

			userdata.update_one({"_id": session["data"]["user_id"]}, {"$set": {"notifications": own_notis}})
			session["data"]["notifications"] = own_notis
			session.modified = True

			return render_template("beitrag.html", logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], post=post)
		else:
			return render_template("beitrag.html", action=action, logged_in=session["logged_in"], data=session["data"], warnings=session["warnings"], post=post)
	else:
		return redirect("/forum")

@app.route("/forum/beitrag-loeschen/<beitrag_id>")
def beitrag_loeschen(beitrag_id):
	if find_in_coll(forum, {"_id": beitrag_id})["creator_id"] == session["data"]["user_id"]:
		forum.delete_one({"_id": beitrag_id})
	
	return redirect("/forum")

@app.route("/forum/beitrag-liken/<beitrag_id>")
def beitrag_like_toggle(beitrag_id):
	if session["data"]["user_id"] not in find_in_coll(forum, {"_id": beitrag_id})["likes"]:
		likes = find_in_coll(forum, {"_id": beitrag_id})["likes"]
		likes.append(session["data"]["user_id"])
		
		forum.update_one({"_id": beitrag_id}, {"$set": {"likes": likes}})
	else:
		likes = find_in_coll(forum, {"_id": beitrag_id})["likes"]
		likes.remove(session["data"]["user_id"])
		
		forum.update_one({"_id": beitrag_id}, {"$set": {"likes": likes}})
	
	return redirect("/forum")

@app.route("/forum/beitrag/<postid>/kommentar-hinzufuegen", methods=["POST"])
def kommentar_hinzufuegen(postid):
	try:
		text = request.form.get("comment")
		comments = find_in_coll(forum, {"_id": postid})["comments"]

		comment_id_exists = True

		while comment_id_exists:
			cid = create_id(16)
			was_found = False

			for comment in find_in_coll(forum, {"_id": postid})["comments"]:
				if comment["_id"] == cid:
					was_found = True

			if was_found == True:
				comment_id_exists = True
			else:
				comment_id_exists = False

		comments.append({"_id": cid, "creator": session["data"]["username"], "creator_id": session["data"]["user_id"], "text": text, "likes": [], "replies": []})

		forum.update_one({"_id": postid}, {"$set": {"comments": comments}})

		return redirect(f"/forum/beitrag/{postid}/view")
	except:
		return redirect(f"/forum/beitrag/{postid}/view")

@app.route("/forum/beitrag/<postid>/kommentar-loeschen/<comment_id>")
def kommentar_loeschen(postid, comment_id):
	comments = find_in_coll(forum, {"_id": postid})["comments"]
	
	for count, item in enumerate(comments):
		if item["_id"] == comment_id:
			comment_index = count
			comment = item

	if comment["creator_id"] == session["data"]["user_id"]:

		comments.pop(comment_index)

		forum.update_one({"_id": postid}, {"$set": {"comments": comments}})
	
	return redirect(f"/forum/beitrag/{postid}/view")

@app.route("/forum/beitrag/<beitrag_id>/<comment_id>/kommentar-antwort", methods=["POST"])
def kommentar_antworten(beitrag_id, comment_id):
	comment_reply_text = request.form.get("comment-reply")

	comment_reply = {"text": comment_reply_text, "creator": session["data"]["username"], "creator_id": session["data"]["user_id"]}

	comments = find_in_coll(forum, {"_id": beitrag_id})["comments"]

	for index, item in enumerate(comments):
		if item["_id"] == comment_id:
			comments.pop(index)
			comment = item

	comment["replies"].append(comment_reply)
	comments.append(comment)

	forum.update_one({"_id": beitrag_id}, {"$set": {"comments": comments}})

	return redirect(f"/forum/beitrag/{beitrag_id}/view")

@app.route("/forum/beitrag-teilen/<post_id>/<receiver>")
def beitrag_teilen(post_id, receiver):
	if receiver in find_in_coll(userdata, {"_id": session["data"]["user_id"]})["friends"]:
		receiver_id = find_in_coll(logreg, {"username": receiver})["_id"]
		receiver_ud = find_in_coll(userdata, {"_id": receiver_id})
		receiver_notifications = receiver_ud["notifications"]

		receiver_notifications.append({"type": "forum_post", "sender": session["data"]["username"], "sender_id": session["data"]["user_id"], "post_id": post_id})
		receiver_ud["notifications"] = receiver_notifications

		userdata.update_one({"_id": receiver_id}, {"$set": {"notifications": receiver_notifications}})

		post = find_in_coll(forum, {"_id": post_id})
		shares = post["shares"]
		shares += 1
		forum.update_one({"_id": post_id}, {"$set": {"shares": shares}})

	return redirect(f"/forum/beitrag/{post_id}/view")

# Shop

@app.route("/shop/warenkorb/add/<produkt_id>", methods=["POST"])
def add_cart(produkt_id):
	quan = int(request.form["anzahl"])

	if check_for_session("warenkorb", create_empty=False) == False:
		session["warenkorb"] = []

	products = read_products_file()
	warenkorb_product = products[int(produkt_id)]

	was_found = False

	for index, item in enumerate(session["warenkorb"]):
		if item["num"] == produkt_id:
			item_index = index
			was_found = True
	
	if was_found:
		session["warenkorb"][item_index]["quantity"] += quan
	else:
		warenkorb_product["quantity"] = int(quan)
		warenkorb_product["num"] = produkt_id

		session["warenkorb"].append(warenkorb_product)

	session.modified = True

	return redirect("/shop/warenkorb")

if __name__ == "__main__":
	app.run(debug=True, port=5000)
