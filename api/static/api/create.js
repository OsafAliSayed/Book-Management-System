var createForm = document.querySelector(".createForm");

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var book = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var year = document.querySelector("#publishment").value;

    // instantiating an xhr object
    const xhr = new XMLHttpRequest();

    // PUT request to update the data
    xhr.open('POST', `/books`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var param = `{
        "name": "${book}",
        "author": "${author}",
        "year": "${year}"
    }`;
    xhr.onload = function() {
        console.log("Request sent");
        if (this.status == 201) {
            console.log("request sent");
            window.location.href = "/";
        }
    }
    xhr.send(param);


})