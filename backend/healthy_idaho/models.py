from django.db import models

# Model for the HealthyIdaho table
class HealthyIdaho(models.Model):
    id = models.AutoField(primary_key=True)
    County = models.CharField(max_length=20)
    FIPS = models.BigIntegerField()
    OverallVulnerability = models.CharField(max_length=20)
    HousingTypeandTransportation = models.CharField(max_length=20)
    SocioencomicStatus = models.CharField(max_length=20)
    HouseholdCompositionandDisability = models.CharField(max_length=20)
    MinorityStatusandLanguage = models.CharField(max_length=20)
    Greenness = models.CharField(max_length=20)
    HeatIsland = models.CharField(max_length=20)    
    LSTMAX = models.CharField(max_length=20)
    LSTMean = models.CharField(max_length=20)
    Smoke = models.CharField(max_length=20)
    Popultatuion = models.CharField(max_length=20)
    RPLTHEME3 = models.CharField(max_length=20)
    RPLTHEMES = models.CharField(max_length=20)
    RPLTHEME4 = models.CharField(max_length=20)
    RPLTHEME2 = models.CharField(max_length=20)
    RPLTHEME1 = models.CharField(max_length=20)

    class Meta:
        db_table = 'healthy_idaho'

