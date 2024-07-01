from rest_framework import generics
from .models import Minute
from .serializers import MinuteSerializer

class MinuteList(generics.ListAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class MinuteCreate(generics.CreateAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class MinuteRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

