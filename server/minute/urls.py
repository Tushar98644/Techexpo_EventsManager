from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-minutes/', views.MinuteList.as_view(), name='MinuteList'),
    path('add-minute/', views.MinuteCreate.as_view(), name='MinuteCreate'),
    path('minute/<int:pk>/', views.MinuteRetrieveUpdateDestroy.as_view(), name='MinuteRetrieveUpdateDestroy'),
]