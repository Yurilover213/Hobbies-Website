function generateRead(button){
    const book = document.querySelector(".book-generated");
    // const bookpage = book.getAttribute("src");
const bookContainer = document.querySelector("#book-container");

async function fetchBooks() {
    try {
        const response = await fetch("./data.json");

        if (!response.ok) {
            throw new Error(`Failed to load books: ${response.status}`);
        }

        const books = await response.json();

        displayBooks(books);
    } catch (error) {
        console.error(error);

        bookContainer.innerHTML = `
            <p>Sorry, the books could not be loaded.</p>
        `;
    }
}

fetchBooks();

    const bookValues = Object.values(allBooks);
    const bookKeys = Object.keys(allBooks);
    const randomIndex = Math.floor(Math.random() * bookValues.length);
    const randomBookCover = bookValues[randomIndex];
    const randomBookTitle = bookKeys[randomIndex] ;
    const card = document.querySelector(".card-bg")

    book.src = randomBookCover;
    book.classList.add("generated");


    book.classList.remove("generated");
    void book.offsetWidth;
    book.classList.toggle('generated');
    book.classList.remove("enhanced");
    card.style.display = 'none'
    

}
    
function enhance(){

     const book = document.querySelector(".book-generated")
     const card = document.querySelector(".card-bg")

    if (!book) return; 
    book.classList.toggle("enhanced");
    book.classList.remove("generated");
    
    if (card.style.display == 'none'){
        card.style.display = 'block'
    }
    
    else{
        card.style.display = 'none'

    }
    
  

 
    
    
}



    
    

