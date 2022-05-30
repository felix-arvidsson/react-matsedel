from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    weight = models.FloatField(blank=False, default= 0)
    birth_date = models.DateField(blank=False)

    def __str__(self):
        return self.first_name