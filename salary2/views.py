# salary2/views.py
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def discussion_forum(request):
    return render(request, 'discussion_forum.html')

def infographic(request):
    return render(request, 'infographic.html')

def survey(request):
    return render(request, 'survey.html')
