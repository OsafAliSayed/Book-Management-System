//select the form from front end
var createForm = document.querySelector(".createForm");

// Adding submit event listener
createForm.addEventListener("submit", (e) => {
    // Prevent default page refreshing 
    e.preventDefault();
    var book = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var year = document.querySelector("#publishment").value;

    // instantiating an xhr object
    const xhr = new XMLHttpRequest();

    // PUT request to update the data
    xhr.open('POST', `/books`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    //creating a parameter i.e simple a string of object required by api to create new object.
    var param = `{
        "name": "${book}",
        "author": "${author}",
        "year": "${year}"
    }`;
    
    //if the request is successfull redirect to homepage
    xhr.onload = function() {
        console.log("Request sent");
        if (this.status == 201) {
            console.log("request sent");
            window.location.href = "/";
        }
    }
    
    //send the request with parameter(param)
    xhr.send(param);


})
