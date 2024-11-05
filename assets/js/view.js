window.onload = function () {

    var xhttp = new XMLHttpRequest();
    var bookid = localStorage.bookid;
    console.log(bookid);

    xhttp.open("GET", API.book.find + "?bookid=" + bookid);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.response);
            displayBookDetails(result);

            document.getElementById("data").insertAdjacentHTML(
                "beforeend",
                `
                <div class="controls">
                    <span id="view-${result.data.bookid}" class="btnRegular"><a href="index.php">Go Back</a></span>
                    <span id="edit-${result.data.bookid}" class="btnEdit"><a href="edit.php">Edit</a></span>
                    <span id="delete-${result.data.bookid}" class="btnDelete"><a href="delete.php">Delete</a></span>
                </div>
                `
            );

            const data = {
                bookid: result.data.bookid,
                title: result.data.title,
                author: result.data.author,
                year_published: result.data.year_published,
                publisher: result.data.publisher,
                description: result.data.description,
                category: result.data.category
            }
            let editButton = document.getElementById(`edit-${result.data.bookid}`);
            editButton.addEventListener("click", function () {
                localStorage.setItem("data", JSON.stringify(data));
            })

            let deleteButton = document.getElementById(`delete-${result.data.bookid}`);
            deleteButton.addEventListener("click", function () {
                localStorage.setItem("data", JSON.stringify(data));
            })
        };
    }
}


function displayBookDetails(result) {
    const data = result.data;

    const elements = {
        title: "title",
        category: "subtitle",
        year_published: "published",
        author: "author",
        publisher: "publisher",
        description: "description"
    };

    Object.entries(elements).forEach(([key, id]) => {
        document.getElementById(id).innerHTML = data[key];
    });
}
