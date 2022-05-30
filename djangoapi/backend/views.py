from django.contrib.auth.models import User, Group
from .models import Livsmedel, Recept, Ingredienser
from rest_framework import viewsets
from rest_framework import permissions
from backend.serializers import IngredienserSerializer, UserSerializer, GroupSerializer, LivsmedelSerializer, ReceptSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class LivsmedelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Livsmedel.objects.all()
    serializer_class = LivsmedelSerializer

class IngredienserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Ingredienser.objects.all()
    serializer_class = IngredienserSerializer

class ReceptViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Recept.objects.all()
    serializer_class = ReceptSerializer