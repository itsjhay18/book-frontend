window.onload = function () {

    const data = localStorage.getItem("data");
    const bookData = JSON.parse(data);

    if (!bookData.bookid) {
        alert("Book ID not found");
        return;
    }
    //fetch data to display
    diplayBookDetails(bookData);
    const btnDelete = document.getElementById("btnDelete1");
    btnDelete.addEventListener("click", () => deleteBook(bookData.bookid));
}


function diplayBookDetails(bookData) {
    document.getElementById("title").innerHTML = bookData.title;
    document.getElementById("author").innerHTML = bookData.author;
}

function deleteBook(bookid) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", API.book.delete + "?bookid=" + bookid);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            alert(response.message);
            window.location.href = "/book_frontend/index.php";
        } else if (this.readyState == 4 && this.status == 400) {
            let response = JSON.parse(this.response);
            let messageDiv = document.getElementById("message");
            messageDiv.innerHTML = `<span class="alert">${response.message}</span>`
        }
    }
}