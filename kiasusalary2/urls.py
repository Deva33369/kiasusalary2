from django.contrib import admin
from django.urls import include, path
from salary2 import views

urlpatterns = [
    path('', views.home, name='home'),  # Root URL maps to home view
    path('home/', views.home),  # Home URL maps to home view
    path('discussion_forum/', views.discussion_forum, name='discussion_forum'),
    path('infographic/', views.infographic, name='infographic'),
    path('survey/', views.survey, name='survey'),
    path('admin/', admin.site.urls),
]
