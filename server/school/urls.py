from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get-schools/', views.SchoolList.as_view(), name='SchoolList'),
    path('add-school/', views.SchoolCreate.as_view(), name='SchoolCreate'),
    path('school/<int:pk>/', views.SchoolRetrieveUpdateDestroy.as_view(), name='SchoolRetrieveUpdateDestroy'),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)