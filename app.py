from flask import Flask, render_template, request, session, redirect,url_for, Markup
from oauth2client.client import flow_from_clientsecrets
import json
app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def login():
    return render_template("index.html")

@app.route("/verified")
def verified():
    print "it worked"
    return render_template("index.html", verified=True)

@app.route("/denied")
def denied():
    return render_template("index.html", error="You do not have permission!")


if __name__ == "__main__":
    app.debug=True
    app.secret_key="sikewrongkey"
    app.run(host='0.0.0.0',port=8000)
