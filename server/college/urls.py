from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-college/', views.CollegeList.as_view(), name='CollegeList'),
    path('add-college/', views.CollegeCreate.as_view(), name='CollegeCreate'),
    path('college/<int:pk>/', views.CollegeRetrieveUpdateDestroy.as_view(), name='CollegeRetrieveUpdateDestroy'),
        re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)