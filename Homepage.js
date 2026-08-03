function generateRead() {
    
    const allBooks = {
        "Miss Forensics": "Images/miss-forensics-1.webp",
        "Tamen De Gushi": "Images/tamende gushi.jpg"
    };

    const book = document.querySelector(".book-generated");
    const card = document.querySelector(".card-bg");

    if (!book) {
        console.error("Could not find .book-generated");
        return;
    }

    const bookTitles = Object.keys(allBooks);
    const randomIndex = Math.floor(Math.random() * bookTitles.length);
    const randomBookTitle = bookTitles[randomIndex];
    const randomBookCover = allBooks[randomBookTitle];

    book.src = randomBookCover;
    book.alt = randomBookTitle;

    // Restart the animation
    book.classList.remove("generated");
    void book.offsetWidth;
    book.classList.add("generated");

    book.style.display = "block" // Show the book image

    // Optional: display the title inside the card
    if (card) {
        const title = card.querySelector("h2");

        if (title) {
            title.textContent = randomBookTitle;
        }
    }
}
    

function enhance() {
    const book = document.querySelector(".book-generated");
    const card = document.querySelector(".card-bg");

    if (!book || !card) return;

    const isOpen = book.classList.contains("enhanced");

    if (isOpen) {
        // Close both
        book.classList.remove("enhanced");
        card.style.display = "none";
    } else {
        // Show both at the same time
        book.classList.remove("generated");
        book.classList.add("enhanced");
        card.style.display = "block";
    }
}




