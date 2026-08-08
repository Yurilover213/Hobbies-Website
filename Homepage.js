async function generateRead() {

    const book = document.querySelector(".book-generated");
    const card = document.querySelector(".card-bg");

    let books = [
    {
        "title": "Miss Forensics",
        "image": "Images/miss-forensics-1.webp",
        "synopsis": "A forensic-themed story.",
        "type": "Manhua",
        "tags": ["Mystery", "Drama", "Thriller"]
    },
    {
        "title": "Tamen De Gushi",
        "image": "Images/tamende gushi.jpg",
        "synopsis": "A story of the daily life of a pair of highschool students",
        "type": "Manhua",
        "tags": ["Romance", "Comedy"]
    },
        {
        "title": "My Food Looks Very Cute",
        "image": "Images/My food looks very cute today.webp",
        "synopsis": "A story of found friendship and mythical beings ",
        "type": "Manhua",
        "tags": ["Slice-Of-Life", "Supernatural", "Fluff"]
    }
]



   
        // Pick random book
        const randomIndex = Math.floor(Math.random() * books.length);

        const randomBook = books[randomIndex];

        // Change book cover
        book.src = randomBook.image;
        book.alt = randomBook.title;

        // Restart animation
        book.classList.remove("generated");
        book.classList.remove("enhanced");

        void book.offsetWidth;

        book.classList.add("generated");

        book.style.display = "block";

        // Update card information\
        const colour = ["lightsteelblue", "lightblue", "lightgreen"]
        
      
        if (card) {

            const title = card.querySelector("h2");
            const synopsis = card.querySelector(".synopsis");
            const type = card.querySelector(".type");
            const tags = card.querySelector(".tags");

            if (title) {
                title.textContent = randomBook.title;
            }

            if (synopsis) {
                synopsis.innerHTML = "<b>" + "Synopsis: " + "</b>" + randomBook.synopsis
            }

            if (type) {
                type.innerHTML = "<b>" + "Type: " + "</b>" + randomBook.type
               
            }

            if (tags) {

                tags.innerHTML = "";

                randomBook.tags.forEach(function(tag) {

                    const li = document.createElement("li");
                    const randomColor = Math.floor(Math.random() * colour.length);

                    li.style.backgroundColor = colour[randomColor];
                    li.style.borderColor = colour[randomColor]
                    li.textContent = tag;

                    tags.appendChild(li);

                    

                });
            }

            card.style.display = "none";
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


