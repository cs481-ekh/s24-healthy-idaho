
from django.http import JsonResponse
from .models import HealthyIdaho
from .serializers import HealthyIdahoSerializer, HealthyIdahoDataSerializer
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



#healthy_idaho/query/?year="xxxx"&attr="attribute"
@api_view(["GET"])
def healthyIdahoQuery(request):
    print(request.query_params)
    print(request.query_params["year"])
    print(request.query_params["attr"])
    year=HealthyIdaho.objects.filter(Year=request.query_params["year"])
    serializer=HealthyIdahoDataSerializer(year, many=True, context={'attr': request.query_params["attr"]})
    return Response({
        "year": request.query_params["year"],
        "variable": request.query_params["attr"],
        "data": serializer.data
    })

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