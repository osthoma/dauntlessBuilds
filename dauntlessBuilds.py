from flask import Flask, render_template


@app.route('/')
def index():
    return render_template('home.html')


if __name__ == '__main__':
    app.run()
