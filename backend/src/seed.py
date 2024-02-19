import mysql.connector 
import config
cnx=mysql.connector.connect(user="admin", 
                            password="password", 
                            host="localhost",
                            database="healthy_idaho_db") 
cnx.close()