CREATE DATABASE IF NOT EXISTS healthy_idaho_db;
USE healthy_idaho_db;
CREATE TABLE IF NOT EXISTS healthy_idaho(
  id                                  INT AUTO_INCREMENT PRIMARY KEY,
  County                              CHAR(20) NOT NULL,
  FIPS                                BIGINT,
  OverallVulnerability                VARCHAR(20),
  HousingTypeandTransportation        VARCHAR(20),
  SocioencomicStatus                  VARCHAR(20),
  HouseholdCompositionandDisability	  VARCHAR(20),
  MinorityStatusandLanguage	          VARCHAR(20),
  Greenness	                          VARCHAR(20),
  HeatIsland	                        VARCHAR(20),
  LSTMax	                            VARCHAR(20),
  LSTMean	                            VARCHAR(20),
  Smoke	                              VARCHAR(20),
  Popultatuion                        VARCHAR(20),
  RPLTHEME3                           VARCHAR(20),
  RPLTHEMES                           VARCHAR(20),
  RPLTHEME4                           VARCHAR(20),
  RPLTHEME2                           VARCHAR(20),
  RPLTHEME1                           VARCHAR(20)
);