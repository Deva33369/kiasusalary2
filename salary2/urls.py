# salary2/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('discussion_forum/', views.discussion_forum, name='discussion_forum'),
    path('infographic/', views.infographic, name='infographic'),
    path('survey/', views.survey, name='survey'),
]
