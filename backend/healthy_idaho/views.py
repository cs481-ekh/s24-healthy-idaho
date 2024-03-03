
from django.http import JsonResponse
from .models import HealthyIdaho

def index(request):
    # Access GET parameters
    year = request.GET.get('year', None)
    variable 

    # Access POST parameters
    if request.method == 'GET' and year:
        data = list(HealthyIdaho.objects.filter(Year=year).values())
        return JsonResponse({'data': data})

    data = list(HealthyIdaho.objects.values())
    return JsonResponse({'data': data})    