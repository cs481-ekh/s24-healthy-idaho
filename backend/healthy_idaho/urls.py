
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("create/", views.healthyIdahoCreate, name="create"),
    path("read-all/", views.healthyIdahoReadAll, name="read-all"),
    path("read-one/<str:pk>", views.healthyIdahoReadOne, name="read-one"),
    path("update/<str:pk>", views.healthyIdahoUpdate, name="update"),
    path("delete/<str:pk>", views.healthyIdahoDelete, name="delete"),
]