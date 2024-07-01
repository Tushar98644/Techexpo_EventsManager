from rest_framework import generics
from .models import Minute
from .serializers import MinuteSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.The request method is %s" % request.method)

class MinuteList(generics.ListAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class MinuteCreate(generics.CreateAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

class MinuteRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Minute.objects.all()
    serializer_class = MinuteSerializer

