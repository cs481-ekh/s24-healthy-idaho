CREATE DATABASE IF NOT EXISTS healthy_idaho_db;
USE healthy_idaho_db;
CREATE TABLE IF NOT EXISTS healthy_idaho(
    COUNTY          CHAR(11) NOT NULL
    ,FIPS           BIGINT NOT NULL PRIMARY KEY
    ,MINSTATLANG    VARCHAR(5)
    ,OVERVULN       VARCHAR(5)
    ,TYPETRANS      VARCHAR(5)
    ,COMPDIS        VARCHAR(5)
    ,SOCIOECO       VARCHAR(5)
    ,GREEN          VARCHAR(18)
    ,HEATISLAND     VARCHAR(20)
    ,LST_MAX        VARCHAR(20)
    ,LST_MEAN       VARCHAR(20)
    ,SMOKE          VARCHAR(20)
    ,POPULAT        INT
    ,PM25           VARCHAR(20)
);
CREATE INDEX COUNTY_ID
    ON healthy_idaho(FIPS);
