from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-colleges/', views.CollegeList.as_view(), name='CollegeList'),
    path('add-college/', views.CollegeCreate.as_view(), name='CollegeCreate'),
    path('college/<int:pk>/', views.CollegeRetrieveUpdateDestroy.as_view(), name='CollegeRetrieveUpdateDestroy'),
]