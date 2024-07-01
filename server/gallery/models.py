from django.db import models

class Gallery(models.Model):
    title = models.CharField(max_length=100,blank=False,null=False)
    image = models.ImageField(upload_to='images/',blank=False,null=False)

    def __str__(self):
        return self.Title
