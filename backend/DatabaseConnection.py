#This file might not be needed!

import mysql.connector

db = mysql.connector.connect(
    host = "localhost",
    user = "personal_username",
    password = "personal_password",
    databse = "personal_database_name"
)

cursor = db.cursor()