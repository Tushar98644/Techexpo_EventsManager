from django.db import models

class School(models.Model):
    name=models.CharField(max_length=20,blank=False,null=False)
    location=models.CharField(max_length=30,blank=False,null=False)
    email=models.EmailField(max_length=30,blank=True,null=True,default='')
    contact=models.PositiveIntegerField(blank=False,null=False,max_length=10)
    
    def __str__(self):
        return self.Name
