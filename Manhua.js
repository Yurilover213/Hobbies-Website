function toggleContent(button) {
    var container = button.closest(".Manhua");
    var node = container.querySelector(".dropdown");

    if (node.style.display === "none" || node.style.display === "") {
        node.style.display = "block";
        button.style.transform = "rotate(180deg)";
    } else {
        node.style.display = "none";
        button.style.transform = "rotate(0deg)";
    }
}


function toggleContent1() {
    var node = document.querySelector(".dropdown1");
    var btn = document.querySelector(".reveal-btn1")
    

    if (node.style.display === "none") {
        node.style.display = "block";
        btn.style.transform = "rotate(180deg)"
        

    }

    else {
        node.style.display = "none";
        btn.style.transform = "rotate(360deg)"
        
        
    }

}


