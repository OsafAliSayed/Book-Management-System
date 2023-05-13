# Book-Management-System
Book Management System is Django application that uses CRUD operations on API to maintain the database. It uses PostgreSQL as database, AJAX and JavaScript to interact with API. (Built by Osaf Ali Sayed)

## Tasks
### Create a django project with an app of your chosen resource
The app that I have chosen is Book Management System. To run this project you must have the following installed on your environment:
+ Python
+ Django
+ Django REST Framework
+ PostgreSQL
+ PG Admin 4

Simply download the project and set it up as a normal Django Project. Start by creating and executing migrations, and installing above requirements.

### Setting PostgreSQL database and configure the project to use it
To do this first we open pgadmin 4 and we create a new database. Simply right-click on PostgreSQL 15 > Create > database
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/4a5f94ff-c26b-47a8-910c-8b340b852216)
This current project has been configured to the database name api_book
Once the PostgreSQL setup is completed we simply replace the DATABASES with the following lines of code in settings.py file in bookapi folder.
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'djangodb',
        'USER': 'postgres',
        'PASSWORD': '1234',
        'HOST': '127.0.0.1',
        'PORT': '5432'
    }
}
```
This will setup our PostgreSQL as default database.

### Create models for your chosen resource and run migrations to create the database tables.
Inside models.py file within api folder, we define our model for storing and managing books as follows:
``` 
class Book(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    year = models.DateField(null=True)
```

### Create views and serializers to implement CRUD functionality for your resource.
To serialize our objects we need serializers. First we start by creating a serializers.py file inside api folder, and here we define a serializer for our book class as follows:

```
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'name', 'author', 'year')
        # fields = '__all__'
```

Now we can write our views to handle the CRUD operations as follows:

```
# Creating a book and displaying 
class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# to retrieve update or delete
class BookRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
```

Finally we setup urls for the api in urls.py{Inside api folder not bookapi} file:
```
urlpatterns = [
    path('books', BookListCreate.as_view(), name="Create Book list"),
    path('book/<int:pk>', BookRetrieveUpdateDelete.as_view(), name="Book Details"),
    path('', index, name='index'),
    path('edit/<int:id>', edit, name='edit'),
    path('create', create, name="create")
]
```
First two URLS are for handling the API, The other three are for handling requests made from HTML pages.

### Use Bootstrap and CSS to create a simple front-end for the API.
Here are the screenshots of simple UI Design that i implemented on several pages.


Home page:
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/4699ffef-67e4-42ee-a2e1-ca2757edd444)


Create a new book entry:
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/a1d5c6f5-620d-4972-8186-c761aa62dd1a)


Edit a book entry:
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/1ad07fe9-f0c8-4308-9e03-98c5e8941507)

### Use JavaScript and AJAX to implement client-side functionality for the front-end
To refer this part, please have a look at the code written in static folder.

### Test your API using Postman to ensure it is functioning correctly and returning expected responses.
To test my API, I created five tests in a collection. Each test is used to test a request that can be made to the API.
Tests:
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/63e75418-5f17-40db-90f6-eabeaa575c44)


Test Results:
![image](https://github.com/OsafAliSayed/Book-Management-System/assets/99737087/cfd32bd0-5f77-4b00-b7cc-7f8179f0f5b0)

## Challenges faced
The project was lengthy for the given time period which made it very challenging. Their were many minor problems such as how to setup PostgreSQL server, how to link it to Django etc. However It was completed none the less as listed above. This project really helped me grow my knowledge as a web developer.


