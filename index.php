<?php require("header.php"); ?>

<div id="header">
    <div class="wrapper">
        <h1>Books<h1>
    </div>
</div>

<div class="wrapper">
    <div class="btnContainer">
        <a href="create.php" class="btnPrimary">Add Book</a>
    </div>
    <div class="table-container">
        <table id="book_data">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th></th>
            </tr>
        </table>
    </div>
</div>

<script src="assets/js/index.js"></script>

<?php require("footer.php"); ?>