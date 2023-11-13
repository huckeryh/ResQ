class Table:
    def __init__(self, id, status, current_order):
        self.id = id
        self.status = status
        self.current_order = current_order

    def display_info(self):
        print(f"Table {self.id}")
        print(f"Status: {self.status}")
        if self.current_order:
            print(f"Current Order: {self.current_order}")
        else:
            print("No current order")
        print("\n")

def main():
    tables = [
        Table(1, "Occupied", "Order #101"),
        Table(2, "Free", None),
        Table(3, "Occupied", "Order #102"),
        Table(4, "Free", None)
    ]

    for table in tables:
        table.display_info()

if __name__ == "__main__":
    main()


