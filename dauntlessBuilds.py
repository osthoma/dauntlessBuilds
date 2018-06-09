import json
from flask import Flask, render_template
app = Flask(__name__)


with open("json/armorList.json") as f:
    armorData = json.load(f)

with open("json/weaponList.json") as f:
    weaponData = json.load(f)

with open("json/cellList.json") as f:
    cellData = json.load(f)

with open("json/lanternList.json") as f:
    lanternData = json.load(f)


@app.route('/')
def index():
    return render_template('home.html', weaponData=weaponData, armorData=armorData, cellData=cellData, lanternData=lanternData)


if __name__ == '__main__':
    app.run()
