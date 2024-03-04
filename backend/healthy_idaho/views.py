
from django.http import JsonResponse
from .models import HealthyIdaho
from .serializers import HealthyIdahoSerializer
from django.http import HttpResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status, views
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from json import JSONDecodeError
from django.db.models import Q
def index(request):
    html="""<em>remember to upload data!</em><p>Available endpoints: <br>
          /healthyIdaho/Create"  <br>
          /healthyIdaho/read-all <br>
          /healthyIdaho/read-one/&ltstr:pk&gt <br>
          /healthyIdaho/update/&ltstr:pk&gt <br>
          /healthyIdaho/delete/&ltstr:pk&gt</p>"""
    return HttpResponse(html)

#class HealthyIdahoAPIView(views.APIView):
#    serializer_class=HealthyIdahoSerializer
#    def get_serializer_context(self):
#        return {
#            "request": self.request,
#            "format": self.format_kwarg,
#            "view":self
#        }  
#    def get_serializer(self, *args, **kwargs):
#        kwargs['context']=self.get_serializer_context()
#        return self.serializer_class(*args, **kwargs)
#    
#    def get(self, request):
#        print("HERE")
#        try:
#            data=JSONParser.parse(request)
#            serializer=HealthyIdahoSerializer(data=data)
#            if serializer.is_valid(raise_exception=True):
#                return Response(serializer.data)
#            else:
#                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#        except JSONDecodeError:
#            return JsonResponse({"result": "error", "message": "JSON decoding error"}, status=400)
#             
@api_view(["POST"])
def healthyIdahoCreate(request):
    serializer=HealthyIdahoSerializer(data=request.data)
    if serializer.is_valid():
        #seralizer.save()
        pass 
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def healthyIdahoReadAll(request):
    dataPoints=HealthyIdaho.objects.all()
    serializer=HealthyIdahoSerializer(dataPoints, many=True)     
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def healthyIdahoReadOne(request, pk):
    dataPoints=HealthyIdaho.objects.get(id=pk)
    serializer=HealthyIdahoSerializer(dataPoints, many=False)     
    return Response(serializer.data, status=status.HTTP_200_OK)



#healthy_idaho/query/?year=xxxx&attr=attribute
@api_view(["GET"])
def healthyIdahoQuery(request):
    qyear=request.query_params["year"]
    qattr=request.query_params["attr"]
    year=HealthyIdaho.objects.filter(Year=qyear)
    serializer=HealthyIdahoSerializer(year,fields=("FIPS", qattr), many=True)
    return Response(serializer.data)



@api_view(["POST"])
def healthyIdahoUpdate(request, pk):
    dataPoint=HealthyIdaho.objects.get(id=pk)
    serializer=HealthyIdahoSerializer(instance=dataPoint, data=request.data)     
    if serializer.is_valid():
        #seralizer.save()
        pass
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["DELETE"])
def healthyIdahoDelete(request, pk):
    dataPoint=HealthyIdaho.objects.get(id=pk)
    dataPoint.delete()
    return Response("Item deleted", status=status.HTTP_200_OK)