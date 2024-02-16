from django.db import models

class DataPoint(models.Model):
  dataPointName = models.CharField(max_length=100)
  def __str__(self):
    return self.dataPointName