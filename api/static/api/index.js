window.addEventListener("load", () => {
    
    // loading table body to fill the data
    table_body = document.querySelector("#table-body");
    // instantiating an xhr object
    const xhr = new XMLHttpRequest();

    // Get request to recieve the data
    xhr.open('GET', '/books', true);

    // function to load the data into table
    xhr.onload = function()  {
        if (this.status === 200) {
            // converting text data to json
            var data = JSON.parse(this.responseText)

            console.log(this.responseText)
            // loading data to table 
            for(var i = 0; i < data.length; i++) {
                // creating a row and setting its id 
                var tr = document.createElement('tr');
                tr.id  = i;
                
                // adding columns to the row
                // # column
                var th = document.createElement('th');
                th.setAttribute("scope", "row");
                th.innerHTML = data[i].id;
                tr.appendChild(th);

                // Book column
                var td1 = document.createElement('td');
                td1.innerHTML = data[i].name;
                tr.appendChild(td1);

                // Author column
                var td2 = document.createElement('td');
                td2.innerHTML = data[i].author;
                tr.appendChild(td2);

                // Publishment year column
                var td3 = document.createElement('td');
                td3.innerHTML = data[i].year;
                tr.appendChild(td3);

                // Operations column
                var td4 = document.createElement('td');

                // Edit button
                var crbtn = document.createElement('btn');
                crbtn.setAttribute("type", "button");
                crbtn.setAttribute("class", "btn btn-primary");
                crbtn.setAttribute("onclick", `edit_data(${data[i].id})`);
                

                crbtn.style.margin = "0px 50px 0px 0px";
                crbtn.innerHTML = "Edit";
                td4.appendChild(crbtn);
                
                // Delete button
                var delbtn = document.createElement('btn');
                delbtn.setAttribute("type", "button");
                delbtn.setAttribute("class", "btn btn-danger p-2");
                delbtn.setAttribute("onclick", `delete_data(${data[i].id})`);
                
                delbtn.style.margin = "0px 50px 0px 50px";
                delbtn.innerHTML = "Delete";
                td4.appendChild(delbtn);

                tr.appendChild(td4);

                // appending row to body
                table_body.appendChild(tr);
            }   
        }
        else {
            console.log("An error occured!")
        }
    }

    xhr.send();
})

function delete_data (id) {
    // instantiating xhr object
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/book/${id}`, true);
    
    // reloading current page if the request is completed successfully
    xhr.onload = function() {
        console.log(this.status);
        if (this.status == 204) {
            console.log(`The attribute no: ${id} is deleted`);
            location.reload();
        }
        else {
            console.log("An error occured");
        }
    }

    // sending the request
    xhr.send();

}

function edit_data (id) {
    // redirecting to the page of each book for edit
    window.location.href = `edit/${id}`
}
