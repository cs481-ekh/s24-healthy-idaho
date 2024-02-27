import mysql.connector 
import config
cnx=mysql.connector.connect(user="root", 
                            password="rootpassword", 
                            host="localhost",
                            database="healthy_idaho_db") 
cursor = cnx.cursor(buffered=True)



cursor.close()
cnx.close()