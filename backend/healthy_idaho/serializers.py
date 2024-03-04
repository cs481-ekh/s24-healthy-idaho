from rest_framework import serializers
from .models import HealthyIdaho

class DynamicFieldsModelSerializer(serializers.ModelSerializer):
  def __init__(self, *args, **kwargs):
    # Don't pass the 'fields' arg up to the superclass
    print("TEST")
    fields = kwargs.pop('fields', None)
    print(fields)
    super().__init__(*args, **kwargs)
    if fields is not None:
      allowed=set(fields)
      existing=set(self.fields)
      res=existing-allowed
      print("res="+str(res))
      for x in res:
        self.fields.pop(x)

class HealthyIdahoSerializer(DynamicFieldsModelSerializer):
  class Meta:
    model=HealthyIdaho
    fields="__all__"
