from django.urls import path, re_path
from . import views
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('hello/', views.index, name='index'),
    path('get-minutes/', views.MinuteList.as_view(), name='MinuteList'),
    path('add-minute/', views.MinuteCreate.as_view(), name='MinuteCreate'),
    path('minutes/<int:pk>/', views.MinuteRetrieveUpdateDestroy.as_view(), name='MinuteRetrieveUpdateDestroy'),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)