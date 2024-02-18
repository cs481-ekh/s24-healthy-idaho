import csv
import mysql.connector

# Database connections, might be able to pull from elsewhere
db_connection = {
    'user' : 'root',
    'password' : 'pass',
    'host' : 'localhost',
    'port' : '3306',
    'database' : 'HEALTHY_IDAHO_DB'
}

csvFileName = "s24-healthy-idaho/sql/data/Final_Census2020.csv"
# CSV file, link variable to outside source for input choice
csvFilePath = csvFileName

# Assignments
connection = mysql.connector.connect (
    user = db_connection['user'],
    password = db_connection['password'],
    host = db_connection['host'],
    port = db_connection['port'],
    database = db_connection['database']
)

# Needed for running sql queries
cursor = connection.cursor()

# Oh ya INSERT time
insertQuery = """
    INSERT INTO HEALTHY_IDAHO (COUNTY, FIPS, MINSTATLANG, OVERVULN, TYPETRANS, COMPDIS, SOCIOECO, GREEN, HEATISLAND, LST_MAX, LST_MEAN, SMOKE, POPULAT, PM25)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

with open(csvFilePath, 'r') as csvFile:
    csvReader = csv.reader(csvFile)
    next(csvReader) # Don't want header row
    for row in csvReader:
        cursor.execute(insertQuery, row)

# Commit and close
    connection.commit()
    connection.close()

print('We were able to insert data \n')