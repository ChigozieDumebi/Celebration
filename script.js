document.addEventListener("DOMContentLoaded", function() { 
    let textContainer = document.querySelector(".birthday-text"); 
    let button = document.getElementById("toggle-text"); 
    let fullText = false; 
    button.addEventListener("click", function() { 
        if (fullText) { 
            textContainer.classList.remove("expand"); 
            button.innerText = "Show More"; 
        } else { 
            textContainer.classList.add("expand"); 
            button.innerText = "Show Less"; } 
            fullText = !fullText; 
    }); 
});
