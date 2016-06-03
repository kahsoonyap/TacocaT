from flask import Flask, render_template, request, session, redirect,url_for, Markup
from oauth2client.client import flow_from_clientsecrets
import json
import query

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def login():
    return render_template("drawTest.html")

@app.route("/verified")
def verified():
    print "it worked"
    return render_template("index.html", verified=True)

@app.route("/denied")
def denied():
    return render_template("index.html", error="You do not have permission!")

@app.route("/coords")
def coords():
    roomNum = request.args.get("room")
    room = query.get_xy(roomNum)
    return json.dumps(room)

@app.route("/intersect")
def intersect():
    roomNum = request.args.get("room")
    direct = request.args.get("direction")
    intersection = query.get_intersection(roomNum, direct)
    return json.dumps(intersection)

@app.route("/stairs")
def stairs():
    roomNum = request.args.get("room")
    staircase = query.get_staircase(roomNum)
    return json.dumps(staircase)

@app.route("/intersectXY")
def intersectXY():
    intersect = request.args.get("intersect")
    xy = query.get_intersectXY(intersect)
    return json.dumps(xy)

@app.route("/intersectDirect")
def intersectDirect():
    intersect = request.args.get("intersect")
    direct = request.args.get("direct")
    direction = query.get_intersectDirect(intersect, direct)
    return json.dumps(direction)

if __name__ == "__main__":
    app.debug=True
    app.secret_key="sikewrongkey"
    app.run(host='0.0.0.0',port=8000)
