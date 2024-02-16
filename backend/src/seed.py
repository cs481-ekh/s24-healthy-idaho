import mysql.connector 
from mysql.connector import errorcode

_user = "root"
_password = "pass"
_host = "localhost"
_database = "HEALTHY_IDAHO_DB"
try: 
  cnx = mysql.connector.connect(user=_user, password=_password, host=_host, database=_database)
  print("CONNECTED TO DB")
except mysql.connector.Error as err: 
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
  cnx.close()
cnx.close()