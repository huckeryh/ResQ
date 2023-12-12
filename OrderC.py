import sqlite3

class Order:  # Pull an order from the database into an object
    def __init__(self, order_id, customer_id, staff_id, time_placed, status, eta):
        self.order_id = order_id
        self.customer_id = customer_id
        self.staff_id = staff_id
        self.time_placed = time_placed
        self.status = status
        self.eta = eta

    def get_order_id(self):
        return self.order_id

    def get_customer_id(self):
        return self.customer_id

    def get_staff_id(self):
        return self.staff_id

    def get_time_placed(self):
        return self.time_placed

    def get_status(self):
        return self.status

    def get_eta(self):
        return self.eta

    def set_order_id(self, order_id):
        self.order_id = order_id
            # randomly gen value
            # check if value is present in hashmap
            # re-roll
            # set id

    def set_customer_id(self, customer_id):
        self.customer_id = customer_id

    def set_staff_id(self, staff_id):
            self.staff_id = staff_id

    def set_time_placed(self, time_placed):
        self.time_placed = time_placed

    def set_status(self, status):
        self.status = status

    def set_eta(self, eta):
        self.eta = eta

    def find_order_items(self, conn):
        query = "Select * FROM Order_Item WHERE order_id = " + str(self.get_order_id())
        cursor = conn.execute(query)
        report = cursor.fetchall()

        order_items = []
        for row in report:
            order_items.append(row)

            # use orderID within order_items table to find order_items
            ##
            ##

        return order_items

    def calculate_eta(self, conn):
        item_list = self.find_order_items(conn)
        max_prep_time = 0
        for item in item_list:
            query = "SELECT prep_time FROM Menu_Item WHERE item_id = " + str(item[1])
            cursor = conn.execute(query)
            report = cursor.fetchone()
            max_prep_time = max(max_prep_time, report[0])
        return (max_prep_time + 5)


