from django.shortcuts import render
from rest_framework import generics
from .models import Gallery
from .serializers import GallerySerializer

class GalleryList(generics.ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryCreate(generics.CreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class GalleryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer