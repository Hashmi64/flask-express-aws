from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask Backend Running!"

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    print("Received:", name, email)
    return "Data received successfully!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
