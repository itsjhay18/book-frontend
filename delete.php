<?php require('header.php'); ?>

<div id="header">
    <div class="wrapper">
        <h1>Books<h1>
    </div>
</div>

<div class="wrapper">
    <div class="block">
        <div id="message">
            <span class="alert">Are you sure you want to delete the following</span>
        </div>
        <div class="block head">
            <h2 class="booktitle" id="title">Title</h2>
            <h3>by <h3 id="author"></h3>
            </h3>
        </div>
        <div class="head head2">
            <form method="delete">
                <input id="btnDelete1" class=btnDelete type="text" name="btnDelete" value="Delete"></input>
                <span class="btnRegular"><a href="index.php">Cancel</a></span>
            </form>
        </div>
    </div>
</div>

<!-- <script src="assets/js/view.js"></script> -->
<script src="assets/js/delete.js"></script>

<?php require('footer.php'); ?>