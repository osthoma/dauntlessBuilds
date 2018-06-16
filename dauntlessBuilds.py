import json

import logging
logging.basicConfig(level=logging.WARNING)

from flask import Flask, render_template


app = Flask(__name__)


with open('static/assets/json/armorList.json') as f:
    armorData = json.load(f)
    logging.info('Loaded armorData from assets/json/armorList.json')

with open('static/assets/json/weaponList.json') as f:
    weaponData = json.load(f)
    logging.info('Loaded weaponData from assets/json/weaponList.json')

with open('static/assets/json/lanternList.json') as f:
    lanternData = json.load(f)
    logging.info('Loaded lanternData from assets/json/lanternList.json')

with open('static/assets/json/cellList.json') as f:
    cellData = json.load(f)
    logging.info('Loaded cellData from assets/json/cellList.json')


@app.route('/')
def index():
    return render_template('home.html', weaponData=weaponData, armorData=armorData, cellData=cellData, lanternData=lanternData)


@app.route('/b/<buildString>')
def show_build(buildString):
    return render_template('home.html', buildString=buildString, weaponData=weaponData, armorData=armorData, cellData=cellData, lanternData=lanternData)


if __name__ == '__main__':
    app.run()
