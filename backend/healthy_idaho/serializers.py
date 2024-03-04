from rest_framework import serializers
from .models import HealthyIdaho

class HealthyIdahoSerializer(serializers.ModelSerializer):
  class Meta:
    model=HealthyIdaho
    fields="__all__"