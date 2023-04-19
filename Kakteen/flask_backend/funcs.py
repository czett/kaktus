import pymongo, random
from pymongo import MongoClient
import string, random

cluster = MongoClient("mongodb+srv://kaktusmensch:kaktusdevgobrr@mrkaktus.icfdq08.mongodb.net/?retryWrites=true&w=majority")

db = cluster["mrkaktus"]
logreg = db["login"]

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