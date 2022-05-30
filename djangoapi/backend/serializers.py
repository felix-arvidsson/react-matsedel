from django.contrib.auth.models import User, Group
from .models import Livsmedel, Ingredienser, Recept
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active']
        read_only_field = ['is_active']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LivsmedelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Livsmedel
        fields = ['id', 'namn', 'kcal', 'prot', 'carb', 'fat', 'url']

class IngredienserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredienser
        fields = ['gram', 'livsmedel']

class ReceptSerializer(serializers.ModelSerializer):
    ingredienser = IngredienserSerializer(many=True)

    class Meta:
        model = Recept
        fields = ['id', 'namn', 'instruktioner', 'portioner', 'ingredienser']