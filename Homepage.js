function generateRead() {

    const book = document.querySelector(".book-generated");
    const card = document.querySelector(".card-bg");

//Books found in website

    let books = [
        {
            "title": "Miss Forensics",
            "image": "Images/MissForensicsCover.webp",
            "synopsis": "A forensic expert and a sharp detective investigate difficult cases while gradually building a close bond.",
            "type": "Manhua",
            "tags": ["Drama", "Mystery", "Thriller"]
        },

        {
            "title": "My Food Looks Very Cute!",
            "image": "Images/MyFoodLooksVeryCuteTodayCover.webp",
            "synopsis": "A wandering werewolf accidentally awakens a vampire and the two begin travelling together after becoming connected by a mysterious curse.",
            "type": "Manhua",
            "tags": ["Slice-Of-Life", "Supernatural", "Fluff"]
        },

        {
            "title": "Sora & Haena",
            "image": "Images/Sora&HaenaCover.png",
            "synopsis": "Shy Sora and outgoing Haena make a deal to help each other with romance and college, only for their relationship to grow closer.",
            "type": "Manhwa",
            "tags": ["Comedy", "Drama", "School Life"]
        },

        {
            "title": "The Love Doctor",
            "image": "Images/TheLoveDoctorCover.webp",
            "synopsis": "Jung Erae seeks romantic advice from love doctor Cha Yoon but unexpectedly begins developing feelings for her instead.",
            "type": "Manhwa",
            "tags": ["Comedy", "Drama", "Slice-Of-Life"]
        },

        {
            "title": "Can't Defy The Lonely Girl",
            "image": "Images/ICan'tSayNoToTheLonelyGirlCover.jpg",
            "synopsis": "Ayaka agrees to help delinquent Sora return to school in exchange for a recommendation, but Sora asks for something unexpected in return.",
            "type": "Manga",
            "tags": ["Drama", "School Life", "Slice-Of-Life"]
        },

        {
            "title": "Yuri is Forbidden for Yuri Ota?!",
            "image": "Images/YuriIsATabooSubjectForAYuriOtakuCover.webp",
            "synopsis": "Yuri fan Fuyu enters an all-girls school hoping to observe perfect romances but finds herself unexpectedly drawn into one with energetic Rika.",
            "type": "Manga",
            "tags": ["Comedy", "Drama", "School Life"]
        },

        {
            "title": "The Summer You Were There",
            "image": "Images/TheSummerYouWereThereCover.jpg",
            "synopsis": "Reclusive writer Shizuku is approached by Kaori, who suggests they date so Shizuku can use their relationship as inspiration for her next story.",
            "type": "Manga",
            "tags": ["Drama", "Tragedy", "Slice-Of-Life", "Medical", "Psychological"]
        },

        {
        "title": "Tamen De Gushi",
        "image": "Images/TamenDeGushiCover.jpg",
        "synopsis": "Sun Jing and Qiu Tong attend different high schools, and their friendship slowly develops into something more.",
        "type": "Manhua",
        "tags": ["Fluff", "Slice-Of-Life", "Highschool"]
        },

        {
        "title": "Clear and Muddy Loss of Love",
        "image": "Images/Clear&MuddyLossOfLoveCover.jpeg",
        "synopsis": "After losing her homeland in war, a former prince enters the enemy kingdom seeking revenge but is unexpectedly appointed as the princess's spouse.",
        "type": "Manhua",
        "tags": ["Drama", "Historical", "Action"]
        }
    ]

    //Randomly selects a book from book list

    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];

    //Changes image and alt text
    book.src = randomBook.image;
    book.alt = randomBook.title + "Book Cover";

    //Resets book generator
    book.classList.remove("generated");
    book.classList.remove("enhanced");
    void book.offsetWidth;

    //Book appearance
    book.classList.add("generated");
    book.style.display = "block";

    //Color of tags
    const colour = ["lightsteelblue", "lightblue", "lightgreen"]
      

    const title = card.querySelector("h2");
    const synopsis = card.querySelector(".synopsis");
    const type = card.querySelector(".type");
    const tags = card.querySelector(".tags");
    
    //changes content of html elements of pop-up card
    title.textContent = randomBook.title;
    synopsis.innerHTML = "<b>" + "Synopsis: " + "</b>" + randomBook.synopsis
    type.innerHTML = "<b>" + "Type: " + "</b>" + randomBook.type
    tags.innerHTML = "";

    //Creating genre tags
    randomBook.tags.forEach(function(tag) {

        const li = document.createElement("li");
        const randomColor = Math.floor(Math.random() * colour.length);

        li.style.backgroundColor = colour[randomColor];
        li.style.borderColor = colour[randomColor]
        li.textContent = tag;

        tags.appendChild(li);

                    

    });
}


function enhance() {
    const book = document.querySelector(".book-generated");
    const card = document.querySelector(".card-bg");

    const isOpen = book.classList.contains("enhanced");

    //Enhancing and returning card to normal size
    if (isOpen) {
        book.classList.remove("enhanced");
        card.style.display = "none";
    } else {
  
        book.classList.remove("generated");
        book.classList.add("enhanced");
        card.style.display = "block";
    }
}



let currentIndex = 0;

function changeSlide() {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide"); 

    currentIndex++;

    //Resting Carousel
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    //Moving carousel
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//Changes slide every 3 seconds
setInterval(changeSlide, 3000);