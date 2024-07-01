from rest_framework import generics
from .models import School
from .serializers import SchoolSerializer

class SchoolCreate(generics.ListAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class SchoolList(generics.CreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class SchoolRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
