from django.urls import path
from .views import conversations, messages

urlpatterns = [
    path('conversations/', conversations, name='conversations'),
    path('messages/<str:username>/', messages, name='messages'),
]

