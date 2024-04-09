import csv
import os
import re
from pathlib import Path
from time import sleep

allAttrList = ["COUNTY", "FIPS", "Overall Vulnerability", "Housing Type and Transportation", 
                 "Socioeconomic Status", "Household Composition and Disability", 
                 "Minority Status and Language", "Greenness", "Heat_Island", "LST-Max", 
                 "LST-Mean", "Smoke","Population", "Area", "PM-2-5", "Heatwave", "Density_Population", "Year"]

def writeDataToCSV(csvFilepath, output_file):
    # Extract year from filename
    filename = os.path.basename(csvFilepath)
    year_matches = re.findall(r'\d+', str(filename))
    year = year_matches[0] if year_matches else 'Unknown Year'

    with open(csvFilepath, 'r') as csvFile:
        csvReader = csv.reader(csvFile)
        headers = next(csvReader)
        insert = [None] * len(allAttrList)
        count = 0
        for x in headers:
            if x == "":
                continue
            x = x.rstrip()
            insert[allAttrList.index(x)] = count
            count += 1
        vals = [""] * len(allAttrList)
        for row in csvReader:
            # append the year to the row based on the filename
            for i in range(len(row)):
                vals[insert.index(i)] = row[i]
            vals[allAttrList.index("Year")] = year  # Add year to the row
            output_file.writerow(vals)

def processDataDir():
    script_dir = Path(__file__).parent
    csvPath = os.path.join(script_dir, "data")
    output_dir = os.path.join(script_dir, "data")
    output_file = csv.writer(open("FCensus_Combined.csv", "w"))
    output_file.writerow(allAttrList)  # Write headers to the output file

    l = [x for x in os.listdir(csvPath) if x.startswith("FCensus") and x != "FCensus_Combined.csv"]
    for x in l:
        print(f"Processing file {x}...")
        file = os.path.join(csvPath, x)
        writeDataToCSV(file, output_file)

processDataDir()