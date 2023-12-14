import sqlite3
import OrderC
conn = sqlite3.connect('flask-server/database.sqlite')
query = 'SELECT * FROM "Order" WHERE order_id = 1'
cursor = conn.execute(query)
report = cursor.fetchall()[0]

ord = OrderC.Order(report[0], report[1], report[2], report[3], report[4], report[5])
ord.calculate_eta(conn)



