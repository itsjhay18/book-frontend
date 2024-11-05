window.onload = function () {
    const data = localStorage.getItem("data");
    const result = JSON.parse(data);

    displayBookDetails(result);

    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", () => updateBook(result.bookid));

}

function displayBookDetails(result) {
    const data = result;
    const elements = {
        title: "title",
        author: "author",
        year_published: "year_published",
        category: "category",
        publisher: "publisher",
        description: "description"
    };

    Object.entries(elements).forEach(([key, id]) => {
        document.getElementById(id).value = data[key];
    });
}


function updateBook(bookid) {
    const forms = document.querySelectorAll("form");
    const form = forms[0];
    console.log(form);

    var data = formToObject(form);
    data.bookid = bookid;

    var xhttp = new XMLHttpRequest();
    var bookid = localStorage.bookid;
    xhttp.open("PUT", API.book.update + "?bookid=" + bookid);
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.response);
            alert(result.message);
            window.location.href = "/book_frontend/index.php";
        } else if (this.readyState == 4 && this.status == 400) {
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
        console.log(returnArray[formArray[i]["id"]] = formArray[i]["value"]);

    }
    return returnArray;
}