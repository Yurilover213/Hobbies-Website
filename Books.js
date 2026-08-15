function toggleContent(button) {
    var container = button.closest(".books");
    var node = container.querySelector(".dropdown");


    //Opens and closes extra content
    if (node.style.display === "none" ) {
        node.style.display = "block";
        button.style.transform = "rotate(180deg)";
    } else {
        node.style.display = "none";
        button.style.transform = "rotate(0deg)";
    }
}

function searchContent() {
    //Makes searched content into lowercase and removes extra whitespace at front and back
    const input = document
        .getElementById("search") .value .toLowerCase().trim();

    const books = document.querySelectorAll(".book-title");
    const noResults = document.querySelector('.no-results');

    let titles = 0

    //Comparing searched content to titles in the site
    books.forEach(function (bookTitle) {
        const title = bookTitle.textContent.toLowerCase();
        const bookContainer = bookTitle.closest(".books");
            

        if (title.includes(input)) {
            titles ++;
            bookContainer.style.display = "block";
        } else {
            bookContainer.style.display = "none";
        }

        //Shown if no titles 
        if (titles === 0){
            noResults.style.display = "block"
            }
        else{
            noResults.style.display = "none"

    }
    });
}

function currentPage(){
    const location = window.location.href; 
    const links = document.querySelectorAll(".nav-link")

    //Makes current page selector darker
    links.forEach(function(link) {
        if (link.href === location){
            link.style.backgroundColor = "rgb(104, 34, 34)"
        }
    

    })
    
}
//currentPage function loaded when page loads
window.addEventListener("DOMContentLoaded", currentPage);    

function filterTag(tag) {
    const books = document.querySelectorAll(".books");
    const title = document.querySelector(".category-shown")

    //Filtering out books without selected tag
    books.forEach(function(book) {
        const bookTags = book.querySelector(".tags").textContent;
    
        if (bookTags.includes(tag)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
    //Changes archive title to tag name
     title.textContent = tag
}

function showAll() {
    const books = document.querySelectorAll(".books");
    const title = document.querySelector(".category-shown")

    //Removes any tag filtering
    books.forEach(function(book) {
        book.style.display = "block";
    });

    title.textContent = "Recently Read"
}


    
    

    






