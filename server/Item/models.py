from django.db import models
from datetime import datetime

class Minute(models.Model):
    name = models.CharField(max_length=100,blank=False,null=False)
    description = models.TextField(blank=False)
    date = models.DateField(default=datetime.now)
    image = models.ImageField(upload_to='images/',blank=True,null=True)

    def __str__(self):
        return self.name

class Gallery(models.Model):
    Title = models.CharField(max_length=100,blank=False,null=False)
    image = models.ImageField(upload_to='images/',blank=False,null=False)

    def __str__(self):
        return self.Title

class School(models.Model):
    Name=models.CharField(max_length=20,blank=False,null=False)
    Location=models.CharField(max_length=30,blank=False,null=False)
    Email=models.EmailField(max_length=30,blank=True,null=True,default='')
    Contact=models.PositiveIntegerField(blank=False,null=False,max_length=10)
    
    def __str__(self):
        return self.Name

class College(models.Model):
    Name=models.CharField(max_length=20,blank=False,null=False)
    Location=models.CharField(max_length=30,blank=False,null=False,)
    Email=models.EmailField(max_length=30,blank=True,null=True,default='')
    Contact=models.PositiveIntegerField(blank=False,null=False,max_length=10)
    
    def __str__(self):
        return self.Name

