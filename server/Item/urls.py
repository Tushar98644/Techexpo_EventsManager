from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('hello/', views.index, name='index'),
    path('add-minute/', views.MinuteListCreate.as_view(), name='MinuteListCreate'),
    path('minutes/<int:pk>/', views.MinuteRetrieveUpdateDestroy.as_view(), name='MinuteRetrieveUpdateDestroy'),
    path('add-image/', views.GalleryListCreate.as_view(), name='GalleryListCreate'),
    path('add-image/<int:pk>/', views.GalleryRetrieveUpdateDestroy.as_view(), name='GalleryRetrieveUpdateDestroy'),
    path('add-school/', views.SchoolListCreate.as_view(), name='SchoolListCreate'),
    path('add-school/<int:pk>/', views.SchoolRetrieveUpdateDestroy.as_view(), name='SchoolRetrieveUpdateDestroy'),
    path('add-college/', views.CollegeListCreate.as_view(), name='CollegeListCreate'),
    path('add-college/<int:pk>/', views.CollegeRetrieveUpdateDestroy.as_view(), name='CollegeRetrieveUpdateDestroy'),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)