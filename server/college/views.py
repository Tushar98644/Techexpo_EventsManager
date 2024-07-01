from rest_framework import generics
from .models import College
from .serializers import CollegeSerializer

class CollegeCreate(generics.ListAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class CollegeList(generics.CreateAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

class CollegeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer
