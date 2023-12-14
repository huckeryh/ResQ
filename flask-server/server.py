from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.sqlite')
    conn.row_factory = sqlite3.Row
    return conn

#@app.route('/')
#def index():
 #   return "Restaurant Order Tracker Backend is Running"

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route('/orders', methods=['POST'])
def create_order():
    conn = get_db_connection()
    new_order = request.json
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    conn.execute('''
        INSERT INTO orders (customer_name, order_details, total_price, order_time)
        VALUES (?, ?, ?, ?)
    ''', (new_order['customer_name'], new_order['order_details'], new_order['total_price'], timestamp))
    conn.commit()
    conn.close()
    return jsonify(new_order), 201
# Add more routes here for CRUD operations


def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT NOT NULL,
            order_details TEXT,
            total_price REAL,
            order_time TEXT
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    app.run(debug=True)

# Call this function at the bottom of your app.py
init_db()



