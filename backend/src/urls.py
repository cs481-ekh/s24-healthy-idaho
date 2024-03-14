from django.contrib import admin
from django.urls import path, include
from .settings import APP_ROOT
urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{APP_ROOT}/', include('healthy_idaho.urls'))
]
