from rest_framework.views import APIView
from rest_framework.response import Response 
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
  return HttpResponse("hi from root")