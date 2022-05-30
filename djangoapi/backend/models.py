from django.db import models

# Create your models here.
class Livsmedel(models.Model):
    namn = models.CharField(max_length=30)
    kcal = models.FloatField(blank=False, default = 0)
    prot = models.FloatField(blank=True, default = 0)
    carb = models.FloatField(blank=True, default = 0)
    fat = models.FloatField(blank=True, default = 0)

    def __str__(self):
        return self.namn

class Recept(models.Model):
    namn = models.CharField(blank=False, max_length=50)
    instruktioner = models.TextField(max_length=500, blank=True)
    portioner = models.FloatField(default = 1)
    livsmedel = models.ManyToManyField(Livsmedel, through="Ingredienser")
    def __str__(self):
        return self.namn

class Ingredienser(models.Model):
    ingrediens_id = models.AutoField(primary_key=True)
    livsmedel = models.ForeignKey(Livsmedel, on_delete=models.CASCADE)#)
    recept = models.ForeignKey(Recept, on_delete=models.CASCADE, related_name='ingredienser')
    gram = models.FloatField(default = 100)
    def __str__(self):
        return self.livsmedel.namn

class Units(models.Model):
    Livsmedel = models.OneToOneField(Livsmedel, on_delete=models.CASCADE)
    literPer100g = models.FloatField(blank=False, default = 0)
    dlPer100g = models.FloatField(blank=False, default = 0)
    mlPer100g = models.FloatField(blank=False, default = 0)
    clPer100g = models.FloatField(blank=False, default = 0)