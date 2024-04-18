#!/bin/bash

echo "🟠 Copying csv to files directory..."
cp ../FCensus_Combined.csv /var/lib/mysql-files

echo "🟠 Uploading data..."
mysql -u$MYSQL_ROOT_USERNAME -p$MYSQL_ROOT_PASSWORD <<EOF
    USE healthy_idaho_db;
    LOAD DATA INFILE '/var/lib/mysql-files/FCensus_Combined.csv'
    INTO TABLE healthy_idaho
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (County, FIPS, OverallVulnerability, HousingTypeandTransportation, SocioeconomicStatus, HouseholdCompositionandDisability, MinorityStatusandLanguage, Greenness, HeatIsland, LSTMax, LSTMean, Smoke, Population, Area, PM25, Heatwave, DensityPopulation, Year);
EOF

if [ $? -eq 0 ]; then
    echo "🟢 Data uploaded successfully!"
    exit 0
else
    echo "🔴 Error uploading data!"
    exit 1
fi
exit 0