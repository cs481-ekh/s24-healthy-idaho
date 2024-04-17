CREATE DATABASE IF NOT EXISTS healthy_idaho_db;
USE healthy_idaho_db;
CREATE TABLE IF NOT EXISTS healthy_idaho(
  id                                  INT AUTO_INCREMENT PRIMARY KEY,
  County                              CHAR(20) NOT NULL,
  FIPS                                BIGINT,
  OverallVulnerability                VARCHAR(20),
  HousingTypeandTransportation        VARCHAR(20),
  SocioeconomicStatus                 VARCHAR(20),
  HouseholdCompositionandDisability	  VARCHAR(20),
  MinorityStatusandLanguage	          VARCHAR(20),
  Greenness	                          VARCHAR(20),
  HeatIsland	                        VARCHAR(20),
  LSTMax	                            VARCHAR(20),
  LSTMean	                            VARCHAR(20),
  Smoke	                              VARCHAR(20),
  Population                          VARCHAR(20),
  Area                                VARCHAR(20),
  PM25                                VARCHAR(20),
  Heatwave                            VARCHAR(20),
  DensityPopulation                   VARCHAR(20),
  Year                                INT(4)
);