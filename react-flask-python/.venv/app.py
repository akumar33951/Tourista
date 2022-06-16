from flask import Flask
from flask_cors import CORS
from datetime import datetime
from flask import request
import re
from Christofedes import tsp

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/find_path", methods=['POST'])
def hello_there():
    places = request.json

    for place in places:
        print(place["name"], " ", place["lat"], " ", place["long"])
    
    length, path = tsp(places)

    res_path = []

    for i in path:
        res_path.append(places[i]["name"])

    res = {"length": length, "path": res_path}
    
    return res