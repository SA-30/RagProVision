"""RagProVision api"""

from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    """Home route"""
    return "Hello World, from RagProVision!"
