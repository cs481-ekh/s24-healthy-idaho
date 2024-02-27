import csv
import mysql.connector
from pathlib import Path
import os

###
# Note:
# 1) For datasets, there are typos such as "Socioencomic Status, DB will reflect same typos
# 2) "Ada County" and "Ada" are both specified in datasets, DB will reflect same


allAttrList = ["COUNTY", "FIPS", "Overall Vulnerability", "Housing Type and Transportation", 
                 "Socioencomic Status", "Household Composition and Disability", 
                 "Minority Status and Language", "Greenness", "Heat_Island", "LST-Max", 
                 "LST-Mean", "Smoke","Popultatuion", "RPL_THEME3", "RPL_THEMES",  
                 "RPL_THEME4", "RPL_THEME2", "RPL_THEME1"]


def makeSQLQuery():
    insertIntoDB = "INSERT INTO healthy_idaho"
    allAttr = "(" + str(allAttrList)[1:-1] + ") "
    f_param = allAttr.replace("\'","").replace(" ", "").replace("-","").replace("_","")
    values = "VALUES ( " + "%s, " * len(allAttrList);
    values = values[:-2] + " )"
    sql = insertIntoDB + f_param + values
    return sql

def estCnx():
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
    return connection

def insertDataIntoTable (csvFilepath, f_sql):
    
    # Needed for running sql queries
    cnx = estCnx()
    cursor = cnx.cursor()

    try:
        with open(csvFilepath, 'r') as csvFile:
            
          csvReader = csv.reader(csvFile)
          headers = next(csvReader)
          insert = [None] * len(allAttrList)

          count = 0
          for x in headers:
              if x == "":
                  continue
              #print("x="+str(x))
              x=x.rstrip()
              insert[allAttrList.index(x)] = count
              #print(str(allAttrList[allAttrList.index(x)]) + "=" +str(count))
              count+=1
          vals = [""] * len(allAttrList)
          for row in csvReader:
              row = row[1:]
              for i in range(len(row)):
                  vals[insert.index(i)] = row[i]
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
    l=[x for x in os.listdir(csvPath)]

    for x in l:
      file = os.path.join(os.getcwd(), "data", x)
      insertDataIntoTable(file, makeSQLQuery())
    
processDataDir()