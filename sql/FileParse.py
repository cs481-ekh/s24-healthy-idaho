import csv
import mysql.connector

def insertDataIntoTable (tableName, csvFilepath):
    # Database connections, might be able to pull from elsewhere
    db_connection = {
        'user' : 'root',
        'password' : 'pass',
        'host' : 'localhost',
        'port' : '3306',
        'database' : 'HEALTHY_IDAHO_DB'
    }
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
    try:
        with open(csvFilepath, 'r') as csvFile:
            csvReader = csv.reader(csvFile)
            next(csvReader) # Don't want header row
            for row in csvReader:
                dataTuple = tuple(row)
                cursor.execute(insertQuery, dataTuple)

    except Exception as e:
        print(f"Error inserting data into {tableName}: {e}")
    
    finally:
    # Commit and close
        connection.commit()
        connection.close()

tablesAndFiles = {
    'HEALTHY_IDAHO_2002' : 'sql/data/Final_Census2002.csv',
    'HEALTHY_IDAHO_2020' : 'sql/data/Final_Census2020.csv',
}

for table, filePath in tablesAndFiles():
    insertDataIntoTable(table, filePath)