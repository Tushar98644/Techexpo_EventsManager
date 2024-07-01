from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-schools/', views.SchoolList.as_view(), name='SchoolList'),
    path('add-school/', views.SchoolCreate.as_view(), name='SchoolCreate'),
    path('school/<int:pk>/', views.SchoolRetrieveUpdateDestroy.as_view(), name='SchoolRetrieveUpdateDestroy'),
]