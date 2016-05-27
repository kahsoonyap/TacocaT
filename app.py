from flask import Flask, render_template, request, session, redirect,url_for, Markup
from oauth2client.client import flow_from_clientsecrets
import json
app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def login():
    return render_template("login.html")

@app.route("/verify")
def verify():
    return render_template("index.html")

if __name__ == "__main__":
    app.debug=True
    app.secret_key="sikewrongkey"
    app.run(host='0.0.0.0',port=8000)
