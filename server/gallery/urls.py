from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-gallery/', views.GalleryList.as_view(), name='GalleryList'),
    path('add-image/', views.GalleryCreate.as_view(), name='GalleryCreate'),
    path('image/<int:pk>/', views.GalleryRetrieveUpdateDestroy.as_view(), name='GalleryRetrieveUpdateDestroy'),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)