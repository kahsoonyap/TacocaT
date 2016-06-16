from flask import Flask, render_template, request, session, redirect,url_for, Markup
import json
import query
import os.path
import os

#path =  os.path.dirname(__file__) + "/templates"
path = ""

app = Flask(__name__)
@app.route("/",methods=['GET','POST'])
def login():
    if 'logged_in' in session and session['logged_in']:
        return render_template(path + "index.html", verified=True)
    else:
        return render_template(path + "index.html" , verified=False)

@app.route("/searchRoom")
def searchRoom():
    room = request.args.get("room")
    floor = query.getFloorOf(room)
    json.dumps(query.getXY(room, floor))

@app.route("/search")
def search():
    if 'logged_in' in session and session['logged_in']:
        return render_template(path + "search.html")
    else:
        return redirect("/denied")

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
        return render_template(path + "drawTest.html")
    else:
        return redirect("/")

@app.route("/loggedin")
def loggedin():
    session['logged_in'] = True;
    
    return redirect("/")

@app.route("/logout")
def logout():
    session['logged_in'] = False;
    return redirect("/")


@app.route("/denied")
def denied():
    return render_template(os.path.dirname(__file__) + "/templates/index.html", error="You are not a Stuyvesant High School Student. Please Contact school personnel or offical for access")

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

app.secret_key= os.urandom(24)
print app.secret_key
if __name__ == "__main__":
    app.debug=True
    #app.run(host='0.0.0.0',port=8000)
    app.run()
        
