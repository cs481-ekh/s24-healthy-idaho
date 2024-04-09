import csv
import mysql.connector
from pathlib import Path
from decouple import config
import os
import re
from time import sleep

allAttrList = ["COUNTY", "FIPS", "Overall Vulnerability", "Housing Type and Transportation", 
                 "Socioeconomic Status", "Household Composition and Disability", 
                 "Minority Status and Language", "Greenness", "Heat_Island", "LST-Max", 
                 "LST-Mean", "Smoke","Population", "Area", "PM-2-5", "Heatwave", "Density_Population", "Year"]

# def checkSQLConnection():
#     try:
#         conn = mysql.connector.connect(user=config("MYSQL_ROOT_USERNAME"), password=config("MYSQL_ROOT_PASSWORD"), host='localhost', port=config("MYSQL_PORT"), database=config("MYSQL_DATABASE"))
#         conn.close()
#         return True
#     except mysql.connector.Error as e:
#         return False

def makeSQLQuery():
    insertIntoDB = "INSERT INTO healthy_idaho"
    allAttr = "(" + str(allAttrList)[1:-1] + ") "
    f_param = allAttr.replace("\'","").replace(" ", "").replace("-","").replace("_","")
    values = "VALUES ( " + "%s, " * len(allAttrList);
    values = values[:-2] + " )"
    sql = insertIntoDB + f_param + values
    return sql

def estCnx():
    # Assignments
    connection = mysql.connector.connect (
        user = config("MYSQL_ROOT_USERNAME"),
        password = config("MYSQL_ROOT_PASSWORD"),
        host = "localhost",
        port = config("MYSQL_PORT"),
        database = config("MYSQL_DATABASE")
    )
    return connection

def insertDataIntoTable (csvFilepath, f_sql):
    # Needed for running sql queries
    cnx = estCnx()
    cursor = cnx.cursor()

    # Extract year from filename
    filename = os.path.basename(csvFilepath)
    year=re.findall(r'\d+', str(filename))[0]
    # Insert data into table
    try:
        with open(csvFilepath, 'r') as csvFile:
          
          csvReader = csv.reader(csvFile)
          headers = next(csvReader)
          insert = [None] * len(allAttrList)
          count = 0
          for x in headers:
              if x == "":
                  continue
              x=x.rstrip()
              insert[allAttrList.index(x)] = count
              count+=1
          vals = [""] * len(allAttrList)
          for row in csvReader:
              # append the year to the row based on the filename
              for i in range(len(row)):
                  vals[insert.index(i)] = row[i]
              vals[allAttrList.index("Year")] = year  # Add year to the row
              valsTuple = tuple(vals)
              cursor.execute(f_sql, valsTuple) 

    except Exception as e:
        print(f"Error inserting data: {e}")
    finally:
    # Commit and close
        cnx.commit()
        cnx.close()


    
def processDataDir():
    csvPath = os.path.join(Path(__file__).parent, "data")

    #print(csvPath)
    l=[x for x in os.listdir(csvPath) if x.startswith("FCensus")]
    for x in l:
      file = os.path.join(os.getcwd(), "data", x)
      insertDataIntoTable(file, makeSQLQuery())


# while not checkSQLConnection():
#     print("SQL Connection not established. Retrying...")
#     sleep(10)
#     continue

# print("SQL Connection established.")
processDataDir()