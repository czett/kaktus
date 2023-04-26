import pymongo, random, certifi
from pymongo import MongoClient
import string, random
from datetime import datetime

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = cluster["mrkaktus"]
logreg = db["login"]
userdata = db["userdata"]

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

def login(username, password):
	search_result = find_in_coll(logreg, {"username": username})

	if search_result != None:
		if search_result["password"] == password:
			return True #can log in
		else:
			return False, "p" #p = password wrong
	else:
		return False, "e" #e = doesn't exist

def register(username, password):
	search_result = find_in_coll(logreg, {"username": username})

	pot_id = create_id(16)

	if search_result == None:
		while find_in_coll(logreg, {"_id": pot_id}) != None:
			pot_id = create_id(16)

		add_entry(logreg, {"_id": pot_id, "username": username, "password": password})

		return True
	else:
		return False, "e" #e = exists
	
with open("static/shop.csv", "r", encoding="utf-8") as f:
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
				product["other"] = line

			line_since_break += 1
		else:
			products.append(product)
			product = {}
			line_since_break = 0

print(products)