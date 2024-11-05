<?php require('header.php'); ?>

<div id="header">
    <div class="wrapper">
        <h1>Books<h1>
    </div>
</div>

<div class="wrapper">
    <div class="block">
        <h2>Edit Book</h2>
        <div id="message"></div>
        <form method="put">
            <div class="block-1-2">
                <div class="block-1-2">
                    <label for="txtTitle">Title:</label>
                    <input id="title" type="text" class="textbox-1" name="txtTitle" value="" />
                    <label for="txtAuthor">Author:</label>
                    <input id="author" type="text" class="textbox-1" name="txtAuthor" value="" />
                    <span class="block-1-2">
                        <label for="txtYear">Year Published:</label>
                        <input id="year_published" type="text" class="textbox-2" name="txtYear" class="textbox_v2" value="" />
                    </span>
                    <span class="block-2-2">
                        <label for="txtCategory">Category:</label>
                        <input id="category" type="text" class="textbox-2" name="txtCategory" class="textbox_v2" value="" />
                    </span>
                    <label for="txtPublisher">Publisher:</label>
                    <input id="publisher" type="text" class="textbox-1" name="txtPublisher" value="" />
                </div>
                <div class="block-2-2">
                    <label for="txtDescription">Description:</label>
                    <textarea id="description" name="textDescription"></textarea>
                </div>
                <div class="controls">
                    <input id="btnSubmit" type="button" name="btnSubmit" class="btnRegular" value="Save" />
                    <span class="btnRegular"><a href="index.php">Cancel</a></span>
                </div>
            </div>
        </form>
    </div>
</div>

<script src="assets/js/update.js"></script>

<?php require('footer.php'); ?>