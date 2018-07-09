function leftFlip() {
    let element = document.getElementById("flip-projects");
    element.classList.toggle("flip");
    if(document.getElementById("flip-contact").classList.contains("horizontal-flip-x")) {
        document.getElementById("flip-contact").classList.toggle("horizontal-flip-x");
    }
    if(document.getElementById("flip-about").classList.contains("horizontal-flip")) {
        document.getElementById("flip-about").classList.toggle("horizontal-flip");
    }
}

function topFlip() {
    let element = document.getElementById("flip-contact");
    element.classList.toggle("horizontal-flip-x");
    if(document.getElementById("flip-about").classList.contains("horizontal-flip")) {
        document.getElementById("flip-about").classList.toggle("horizontal-flip");
    }
    if(document.getElementById("flip-projects").classList.contains("flip")) {
        document.getElementById("flip-projects").classList.toggle("flip");
    }
}

function bottomFlip() {
    let element = document.getElementById("flip-about");
    element.classList.toggle("horizontal-flip");
    if(document.getElementById("flip-contact").classList.contains("horizontal-flip-x")) {
        document.getElementById("flip-contact").classList.toggle("horizontal-flip-x");
    }
    if(document.getElementById("flip-projects").classList.contains("flip")) {
        document.getElementById("flip-projects").classList.toggle("flip");
    }
}
    
function exitCard(cardName) {
    var cards = {
        "about" : bottomFlip,
        "projects" : leftFlip,
        "contact" : topFlip
    };
    return cards[cardName]();
}
    


