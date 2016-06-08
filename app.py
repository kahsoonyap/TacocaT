from flask import Flask, render_template, request, session, redirect,url_for, Markup
from oauth2client.client import flow_from_clientsecrets
import json
import query

app = Flask(__name__)
@app.route("/",methods=['GET','POST'])
def login():
    if 'logged_in' in session and session['logged_in']:
        return render_template("index.html", verified=True)
    else:
        return render_template("index.html" , verified=False)

@app.route("/searchRoom")
def searchRoom():
    room = request.args.get("room")
    floor = query.getFloorOf(room)
    json.dumps(query.getXY(room, floor))

@app.route("/search")
def search():
    if 'logged_in' in session and session['logged_in']:
        return render_template("search.html")
    else:
        return redirect(url_for("denied"))

@app.route("/getFloor")
def getFloor():
    room = request.args.get("room")
    floor = query.getFloorOf(room)
    return json.dumps(floor)

@app.route("/getLogin")
def getLogin():
    if 'logged_in' in session:
        return json.dumps(session["logged_in"])
    else:
        return json.dumps("false")

@app.route("/directions")
def directions():
    if 'logged_in' in session:
        return render_template("drawTest.html")
    else:
        return redirect(url_for("login"))

@app.route("/loggedin")
def loggedin():
    session['logged_in'] = True;
    
    return redirect(url_for("login"))

@app.route("/logout")
def logout():
    session['logged_in'] = False;
    return redirect(url_for("login"))


@app.route("/denied")
def denied():
    return render_template("index.html", error="You are not a Stuyvesant High School Student. Please Contact school personnel or offical for access")

@app.route("/getXY")
def getXYCoord():
    room = request.args.get("room")
    floor = query.getFloorOf(room)
    coords = query.getXY(room,floor)
    return json.dumps(coords)


@app.route("/drawPath")
def drawPath():
    source = request.args.get("source")
    dest = request.args.get("dest")
    path = query.findPath(source,dest)
    return json.dumps(path)

if __name__ == "__main__":
    app.debug=True
    app.secret_key="sikewrongkey"
    app.run(host='0.0.0.0',port=8000)
