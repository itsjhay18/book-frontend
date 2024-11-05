window.onload = function () {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API.book.find);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.response);

            for (let row of result.data) {
                document.getElementById("book_data").insertAdjacentHTML(
                    "beforeend",
                    `<tr>
                            <td>${row.title}</th>
                            <td>${row.author}</th>
                            <td>${row.description}</th>
                            <td>
                                <span id="view-${row.bookid}" class="btnRegular"><a href="view.php">Read</a></span>
                                <span id="edit-${row.bookid}" class="btnEdit"><a href="edit.php">Edit</a></span>
                                <span id="delete-${row.bookid}" class="btnDelete"><a href="delete.php">Delete</a></span>
                            </td>
                        </tr>`
                );

                const data = {
                    bookid: row.bookid,
                    title: row.title,
                    author: row.author,
                    year_published: row.year_published,
                    publisher: row.publisher,
                    description: row.description,
                    category: row.category
                }

                let viewButton = document.getElementById(`view-${row.bookid}`);
                viewButton.addEventListener("click", function () {
                    localStorage.bookid = row.bookid;
                })

                let editButton = document.getElementById(`edit-${row.bookid}`);
                editButton.addEventListener("click", function () {
                    localStorage.setItem("data", JSON.stringify(data));
                })

                let deleteButton = document.getElementById(`delete-${row.bookid}`);
                deleteButton.addEventListener("click", function () {
                    localStorage.setItem("data", JSON.stringify(data));
                })
            }
        }
    };
}