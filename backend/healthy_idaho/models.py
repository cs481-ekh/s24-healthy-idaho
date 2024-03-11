from django.db import models

# Model for the HealthyIdaho table
class HealthyIdaho(models.Model):
    id = models.AutoField(primary_key=True)
    County = models.CharField(max_length=20)
    FIPS = models.BigIntegerField()
    OverallVulnerability = models.CharField(max_length=20)
    HousingTypeandTransportation = models.CharField(max_length=20)
    SocioeconomicStatus= models.CharField(max_length=20)
    HouseholdCompositionandDisability = models.CharField(max_length=20)
    MinorityStatusandLanguage = models.CharField(max_length=20)
    Greenness = models.CharField(max_length=20)
    HeatIsland = models.CharField(max_length=20)    
    LSTMax = models.CharField(max_length=20)
    LSTMean = models.CharField(max_length=20)
    Smoke = models.CharField(max_length=20)
    Population = models.CharField(max_length=20)
    Area = models.CharField(max_length=20)
    PM25 = models.CharField(max_length=20)
    Heatwave = models.CharField(max_length=20)
    DensityPopulation = models.CharField(max_length=20)
    Year = models.IntegerField()

    class Meta:
        db_table = 'healthy_idaho'

