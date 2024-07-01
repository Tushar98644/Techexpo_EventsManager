from rest_framework import serializers
from .models import Minute

class MinuteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Minute
        fields = ('id','title','description','image','date')

