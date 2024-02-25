import csv
import mysql.connector

def insertDataIntoTable (csvFilepath):
    # Database connections, might be able to pull from elsewhere
    db_connection = {
        'user' : 'root',
        'password' : 'rootpassword',
        'host' : 'localhost',
        'port' : '3306',
        'database' : 'healthy_idaho_db'
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
        INSERT INTO healthy_idaho (COUNTY, FIPS, MINSTATLANG, OVERVULN, TYPETRANS, COMPDIS, SOCIOECO, GREEN, HEATISLAND, LST_MAX, LST_MEAN, SMOKE, POPULAT, PM25)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    try:
        with open(csvFilepath, 'r') as csvFile:
            csvReader = csv.reader(csvFile)
            next(csvReader) # Don't want header row
            for row in csvReader:
                dataList = list(row)
                dataList.pop(0)
                dataTuple = tuple(dataList)
                cursor.execute(insertQuery, dataTuple)

    except Exception as e:
        print(f"Error inserting data: {e}")
    
    finally:
    # Commit and close
        connection.commit()
        connection.close()

files = {
    'data/Final_Census2020.csv',
    #'data/Final_Census2002.csv',
}
for filepath in files: 
    insertDataIntoTable(filepath)

