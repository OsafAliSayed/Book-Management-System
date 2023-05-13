from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('books', BookListCreate.as_view(), name="Create Book list"),
    path('book/<int:pk>', BookRetrieveUpdateDelete.as_view(), name="Book Details"),
    path('', index, name='index'),
    path('edit/<int:id>', edit, name='edit'),
    path('create', create, name="create")
]
