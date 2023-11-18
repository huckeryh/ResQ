import pypyodbc as odbc #pip install pypyodbc
from queries import *

server = 'resq.database.windows.net'
database = 'resq'
connection_string =  'Driver={ODBC Driver 18 for SQL Server};Server=tcp:resq.database.windows.net,1433;Database=resq;Uid=hayden;Pwd=Truckaduck1!;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
conn = odbc.connect(connection_string)

cur = conn.cursor()
cur.execute(read_all_query()
)
print(cur.fetchall())
