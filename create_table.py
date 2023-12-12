import sqlite3

conn = sqlite3.connect('database.sqlite')


conn.execute('DROP TABLE IF EXISTS "Order"')
conn.execute('DROP TABLE IF EXISTS Staff')
conn.execute('DROP TABLE IF EXISTS Restaurant')
conn.execute('DROP TABLE IF EXISTS Order_Item')
conn.execute('DROP TABLE IF EXISTS "Table"')
conn.execute('DROP TABLE IF EXISTS Queue')
conn.execute('DROP TABLE IF EXISTS Menu_Item')
conn.execute('DROP TABLE IF EXISTS Customer')
conn.execute('CREATE TABLE "Order" (order_id INTEGER, customer_id INTEGER, staff_id INTEGER, time_placed TEXT, status TEXT, eta TEXT)')
conn.execute('CREATE TABLE Staff (staff_id INTEGER, name TEXT, position TEXT, contact_info TEXT, restaurant_id, INTEGER)')
conn.execute('CREATE TABLE Restaurant (restaurant_id INTEGER, name TEXT, address TEXT, contact_info TEXT, operating_hours TEXT)')
conn.execute('CREATE TABLE Order_Item (order_id INTEGER, item_id INTEGER, quantity INTEGER)')
conn.execute('CREATE TABLE "Table" (table_id INTEGER, restaurant_id INTEGER, capacity INTEGER, loc_desc TEXT)')
conn.execute('CREATE TABLE Queue (queue_id, customer_id, partysize INTEGER, checkin_time TEXT, table_id INTEGER, status TEXT)')
conn.execute('CREATE TABLE Menu_Item (item_id INTEGER, name TEXT, desc TEXT, price TEXT, prep_time, INTEGER)')
conn.execute('CREATE TABLE Customer (customer_id INTEGER, name TEXT, phone TEXT)')

conn.execute('INSERT INTO "Order" (order_id, customer_id, staff_id, time_placed, status, eta) VALUES (1, 2321, 930100, "12:00", "In Progress", "NULL") ')
conn.execute('INSERT INTO Staff (staff_id, name, position, contact_info, restaurant_id) VALUES (930100, "Josh", "Waiter", "1234567890", 021) ')      
conn.execute('INSERT INTO Restaurant (restaurant_id, name, address, contact_info, operating_hours) VALUES (021, "Just Regular Foods", "123 Regular Foods St.", "098-765-4321", "8am to 6pm") ')
conn.execute('INSERT INTO Order_Item (order_id, item_id, quantity) VALUES (1, 23, 2) ')
conn.execute('INSERT INTO Order_Item (order_id, item_id, quantity) VALUES (1, 25, 2) ')
conn.execute('INSERT INTO "Table" (table_id, restaurant_id, capacity, loc_desc) VALUES (3, 021, 4, "Left of the main entrance") ')
conn.execute('INSERT INTO Queue (queue_id, customer_id, partysize, checkin_time, table_id, status) VALUES (38, 9302, 2, "2:01pm", 3, "In-progress") ')
conn.execute('INSERT INTO Menu_Item (item_id, name, desc, price, prep_time) VALUES (23, "Strawberry Lemonade", "Strawberry mixed with lemonade.", "$4.00", 8) ')
conn.execute('INSERT INTO Menu_Item (item_id, name, desc, price, prep_time) VALUES (25, "Double Cheeseburger Special", "Double cheeseburger with fries and a drink.", "$8.00", 20) ')
conn.execute('INSERT INTO Customer (customer_id, name, phone) VALUES (9302, "Chad", "392-921-5939") ')   


conn.commit()


conn.close()