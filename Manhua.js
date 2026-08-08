function toggleContent(button) {
    var container = button.closest(".books");
    var node = container.querySelector(".dropdown");

    if (node.style.display === "none" || node.style.display === "") {
        node.style.display = "block";
        button.style.transform = "rotate(180deg)";
    } else {
        node.style.display = "none";
        button.style.transform = "rotate(0deg)";
    }
}

function searchContent() {
    const input = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const books = document.querySelectorAll(".book-title");
    const noResults = document.querySelector('.no-results');

    let titles = 0

    books.forEach(function (bookTitle) {
        const title = bookTitle.textContent.toLowerCase();
        const bookContainer = bookTitle.closest(".books");
        

     ;

        if (title.includes(input)) {
            titles ++;
            bookContainer.style.display = "block";
        } else {
            bookContainer.style.display = "none";
        }

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

    links.forEach(function(link) {
        if (link.href === location){
            link.style.backgroundColor = "rgb(104, 34, 34)"
        }
    

    })
    
}

window.addEventListener("DOMContentLoaded", currentPage);



function filterTag(tag) {
    let tag = document.querySelectorAll()
    const books = document.querySelectorAll(".books");
    const title = document.querySelector(".category-shown")


    books.forEach(function(book) {
        const bookTags = book.querySelector(".tags").textContent;

        if (bookTags.includes(tag)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
     title.textContent = tag
}

function showAll() {
    const books = document.querySelectorAll(".books");
    const title = document.querySelector(".category-shown")

    books.forEach(function(book) {
        book.style.display = "block";
    });

    title.textContent = "Recently Read"
}


    
    

    






