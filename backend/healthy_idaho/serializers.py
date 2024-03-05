from rest_framework import serializers
from .models import HealthyIdaho

class DynamicFieldsModelSerializer(serializers.ModelSerializer):
  def __init__(self, *args, **kwargs):
    # Don't pass the 'fields' arg up to the superclass
    fields = kwargs.pop('fields', None)
    print(fields)
    super().__init__(*args, **kwargs)
    if fields is not None:
      allowed=set(fields)
      existing=set(self.fields)
      res=existing-allowed
      for x in res:
        self.fields.pop(x)

class HealthyIdahoSerializer(DynamicFieldsModelSerializer):
  class Meta:
    model=HealthyIdaho
    fields="__all__"

class HealthyIdahoDataSerializer(serializers.Serializer):
    id = serializers.IntegerField(source='FIPS')
    value = serializers.SerializerMethodField()

    def get_value(self, obj):
        attr = self.context.get('attr')
        return getattr(obj, attr)
