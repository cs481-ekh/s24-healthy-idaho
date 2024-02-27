
from django.http import JsonResponse
from .models import HealthyIdaho

def index(request):
    data = list(HealthyIdaho.objects.values())
    return JsonResponse({'message': 'Backend API for Healthy Idaho Portal', 'data': data})    