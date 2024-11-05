<?php require('header.php'); ?>

<div id="header">
    <div class="wrapper">
        <h1>Books</h1>
    </div>
</div>

<div class="wrapper">
    <div class="block">
        <div id="data" class="content-container">
            <div id="book-details" class="book-details">
                <h3 id="title" class="title"><strong>Title</strong></h3>
                <h4 id="subtitle" class="subtitle">Subtitle</h4>
                <p><strong>Published:</strong>
                <p id="published"></p>
                </p>
                <p><strong>Author:</strong>
                <p id="author"></p>
                </p>
                <p><strong>Publisher:</strong>
                <p id="publisher"></p>
                </p>
                <h3>Overview</h3>
                <p><strong>Description:</strong>
                <p id="description"></p>
                </p>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/view.js"></script>

<?php require('footer.php'); ?>