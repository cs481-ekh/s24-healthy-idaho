#!/bin/bash

echo "🟠 Copying csv to files directory..."
cp ../FCensus_Combined.csv /var/lib/mysql-files

echo "🟠 Uploading data..."
mysql -uroot -p$MYSQL_ROOT_PASSWORD <<EOF
    USE healthy_idaho_db;
    LOAD DATA INFILE '/var/lib/mysql-files/FCensus_Combined.csv'
    INTO TABLE healthy_idaho
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (County, FIPS, OverallVulnerability, HousingTypeandTransportation, SocioeconomicStatus, HouseholdCompositionandDisability, MinorityStatusandLanguage, Greenness, HeatIsland, LSTMax, LSTMean, Smoke, Population, Area, PM25, Heatwave, DensityPopulation, Year);
EOF

echo "🟢 Data uploaded."
exit 0