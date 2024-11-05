window.onload = function () {

    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", createBook);

    function createBook() {
        const forms = document.querySelectorAll("form");
        const form = forms[0];

        var data = formToObject(form);
        
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", API.book.create);
        xhttp.send(JSON.stringify(data));
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) {
                let response = JSON.parse(this.response);
                alert(response.message);
                window.location.href = "/book_frontend/index.php";
            } else if (this.readyState == 4 && this.status == 400) {
                let response = JSON.parse(this.response);
                let messageDiv = document.getElementById("message");
                messageDiv.innerHTML = `<span class="alert">${response.message}</span>`
            } else if (this.readyState == 4 && this.status == 409) {
                let response = JSON.parse(this.response);
                let messageDiv = document.getElementById("message");
                messageDiv.innerHTML = `<span class="alert">${response.message}</span>`
            }
        };
    }

    // helper function
    function formToObject(formArray) {
        // serialize data function
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++) {
            returnArray[formArray[i]["id"]] = formArray[i]["value"];
        }
        return returnArray;
    }
};