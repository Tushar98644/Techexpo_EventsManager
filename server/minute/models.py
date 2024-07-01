from django.db import models
from datetime import datetime

class Minute(models.Model):
    title = models.CharField(max_length=100,blank=False,null=False)
    description = models.TextField(blank=False)
    date = models.DateField(default=datetime.now)
    image = models.ImageField(upload_to='images/',blank=True,null=True)

    def __str__(self):
        return self.name