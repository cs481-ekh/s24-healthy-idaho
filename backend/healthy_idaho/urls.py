
from django.urls import path

from . import views

urlpatterns = [
    path("api/", views.index, name="index"),
    path("api/create/", views.healthyIdahoCreate, name="create"),
    path("api/read-all/", views.healthyIdahoReadAll, name="read-all"),
    path("api/read-one/<str:pk>", views.healthyIdahoReadOne, name="read-one"),
    path("api/update/<str:pk>", views.healthyIdahoUpdate, name="update"),
    path("api/delete/<str:pk>", views.healthyIdahoDelete, name="delete"),


    path("api/query/", views.healthyIdahoQuery, name="query"),
]