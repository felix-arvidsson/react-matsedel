from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls'))
    path('accounts/', include('accounts.urls')),
    path('profile/', include('user_profile.urls'))
]