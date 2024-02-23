import mysql.connector

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

# NEED CHANGE
# Following variables need to be changed to take in input from front end
yearChoice = 2020
countyChoice = "Ada"
fipsChoice = 16001000101

# cursor needed
cursor = connection.cursor()

def search_by_year(year):
    # Select Query for year
    selectYear = """ SELECT * FROM HEALTHY_IDAHO WHERE YEAR = %s """ 

    # Execute
    cursor.execute(selectYear, yearChoice)

    rows = cursor.fetchall()

    # NEED CHANGE
    # Output needs to be moved from console, to front end. Perhaps return the data
    if rows:
        print(f"Results for the year: {yearChoice}")
        for row in rows:
            print(row)
    else:
        print(f"No results found for {yearChoice}")

def search_by_country(county):
    # Select for county
    selectCounty = """ SELECT * FROM HEALTHY_IDAHO WHERE COUNTY = %s """

    # Execute
    cursor.execute(selectCounty, countyChoice)

    rows = cursor.fetchall()

    # NEED CHANGE
    # Output needs to be moved from console, to front end. Perhaps return the data
    if rows:
        print(f"Results for the county: {countyChoice}")
        for row in rows:
            print(row)
    else:
        print(f"No results found for {countyChoice}")

def search_by_fips(fips):
    # Select for FIPS
    selectFips = """ SELECT * FROM HEALTHY_IDAHO WHERE FIPS = %s """

    # Execute
    cursor.execute(selectFips, fipsChoice)

    rows = cursor.fetchall()

    # NEED CHANGE
    # Output needs to be moved from console, to front end. Perhaps return the data
    if rows:
        print(f"Results for the FIPS: {fipsChoice}")
        for row in rows:
            print(row)
    else:
        print(f"No results found for {fipsChoice}")


# Example
search_by_year(2020)

# Close connection
connection.close()