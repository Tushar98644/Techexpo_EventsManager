from rest_framework import generics
from .models import Minute, Gallery, School, College
from .serializers import MinuteSerializer, GallerySerializer, SchoolSerializer, CollegeSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.The request method is %s" % request.method)

class MinuteListCreate(generics.ListCreateAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class MinuteRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class GalleryListCreate(generics.ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class SchoolListCreate(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class SchoolRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class CollegeListCreate(generics.ListCreateAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class CollegeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
