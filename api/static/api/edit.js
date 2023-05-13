// get the edit form
var editForm = document.querySelector(".editForm");

// Eventlistener for submit 
editForm.addEventListener("submit", (e) => {
    // prevent default refreshing on form submit    
    e.preventDefault();
    
    // Getting all the required data
    var id = editForm.id;
    var book = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var year = document.querySelector("#publishment").value;

    // instantiating an xhr object
    const xhr = new XMLHttpRequest();

    // PUT request to update the data
    xhr.open('PUT', `/book/${id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    // param - string of object that has to be sent to api request.     
    var param = `{
        "id": ${id},
        "name": "${book}",
        "author": "${author}",
        "year": "${year}"
    }`;
    // Reloading page on successfull submission
    xhr.onload = function() {
        console.log("Request sent");
        if (this.status == 200) {
            console.log("request sent");
            window.location.href = "/";
        }
    }
    
    //sending the request
    xhr.send(param);


})
