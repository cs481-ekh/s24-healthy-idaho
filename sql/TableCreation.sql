CREATE DATABASE IF NOT EXISTS healthy_idaho_db;
USE healthy_idaho_db;
CREATE TABLE IF NOT EXISTS healthy_idaho(
    COUNTY          CHAR(11) NOT NULL
    ,FIPS           BIGINT NOT NULL PRIMARY KEY
    ,MINSTATLANG    VARCHAR(20)
    ,OVERVULN       VARCHAR(20)
    ,TYPETRANS      VARCHAR(20)
    ,COMPDIS        VARCHAR(20)
    ,SOCIOECO       VARCHAR(20)
    ,GREEN          VARCHAR(20)
    ,HEATISLAND     VARCHAR(20)
    ,LST_MAX        VARCHAR(20)
    ,LST_MEAN       VARCHAR(20)
    ,SMOKE          VARCHAR(20)
    ,POPULAT        INT
    ,PM25           VARCHAR(20)
);
CREATE INDEX COUNTY_ID
    ON healthy_idaho(FIPS);
