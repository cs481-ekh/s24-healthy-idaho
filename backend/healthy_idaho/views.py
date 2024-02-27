
from django.http import JsonResponse
from .models import HealthyIdaho

def index(request):
    data = list(HealthyIdaho.objects.values())
    return JsonResponse({'data': data})    