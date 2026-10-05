from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/resume/<filename>")
def resume(filename):
    return send_from_directory("resume", filename)


if __name__ == "__main__":
    app.run(debug=True)