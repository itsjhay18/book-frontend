<?php require("header.php"); ?>
<div id="header">
    <div class="wrapper">
        <h1>Books</h1>
    </div>
</div>

<div class="wrapper">
    <div class="block">
        <h2>Add Book</h2>
        <div id="message"></div>
        <form name="create_book">
            <div class="block-1-2">
                <label for="title">Title:</label>
                <input type="text" id="title" class="textbox-1" name="txtTitle" value="" />

                <label for="author">Author:</label>
                <input type="text" id="author" class="textbox-1" name="txtAuthor" value="" />

                <span class="block-1-2">
                    <label for="year_published">Year Published:</label>
                    <input type="text" id="year_published" class="textbox-2" name="txtYear" value="" />
                </span>

                <span class="block-2-2">
                    <label for="category">Category:</label>
                    <input type="text" id="category" class="textbox-2" name="txtCategory" value="" />
                </span>

                <label for="publisher">Publisher:</label>
                <input type="text" id="publisher" class="textbox-1" name="txtPublisher" value="" />
            </div>
            <div class="block-2-2">
                <label for="description">Description:</label>
                <textarea id="description" name="textDescription"></textarea>
            </div>
            <div class="controls">
                <input id="btnSubmit" type="button" name="btnSubmit" class="btnRegular" value="Save" />
                <span class="btnRegular"><a href="index.php">Cancel</a></span>
            </div>
        </form>
    </div>
</div>

<script src="assets/js/create.js"></script>
<?php require('footer.php'); ?>