from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-gallery/', views.GalleryList.as_view(), name='GalleryList'),
    path('add-image/', views.GalleryCreate.as_view(), name='GalleryCreate'),
    path('image/<int:pk>/', views.GalleryRetrieveUpdateDestroy.as_view(), name='GalleryRetrieveUpdateDestroy'),
]