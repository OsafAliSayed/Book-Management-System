from django.shortcuts import render
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer


# Create your views here. 
# Creating a book and displaying 
class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# to retrieve update or delete
class BookRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer 

# functions to handle html pages
def index(request):  
    return render(request, "api/index.html")

def edit(request, id):
    book = Book.objects.filter(id=id)
    if len(book) == 1:
        return render(request, "api/edit.html", {
            "book" : book[0]
        })
    else:
        return render(request, "api/error.html")


def create(request):
    return render(request, "api/create.html")