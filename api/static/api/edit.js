var editForm = document.querySelector(".editForm");

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var id = editForm.id;
    var book = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var year = document.querySelector("#publishment").value;

    // instantiating an xhr object
    const xhr = new XMLHttpRequest();

    // PUT request to update the data
    xhr.open('PUT', `/book/${id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var param = `{
        "id": ${id},
        "name": "${book}",
        "author": "${author}",
        "year": "${year}"
    }`;
    xhr.onload = function() {
        console.log("Request sent");
        if (this.status == 200) {
            console.log("request sent");
            window.location.href = "/";
        }
    }
    xhr.send(param);


})