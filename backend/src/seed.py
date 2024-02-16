import mysql.connector 
_user = "admin"
_password = "pass"
_host = "localhost"
_database = "HEALTHY_IDAHO_DB"
cnx = mysql.connector.connect(user=_user, password=_password, host=_host, database=_database)

cnx.close()