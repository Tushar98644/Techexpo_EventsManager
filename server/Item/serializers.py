from rest_framework import serializers
from .models import Minute,Gallery,School,College

# convert model to json
class MinuteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Minute
        fields = ('id','name','description','image','date')

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id','Title','image')


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('id','Name','Location','Contact','Email')


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ('id','Name','Location','Contact','Email')

