function cardFlip(num) {
    if (num === 1){
        document.getElementById("about").style.zIndex = "1";
        document.getElementById("projects").style.zIndex = "0";
        document.getElementById("contact").style.zIndex = "0";
    }
    else if (num === 2) {
        document.getElementById("about").style.zIndex = "0";
        document.getElementById("projects").style.zIndex = "1";
        document.getElementById("contact").style.zIndex = "0";
    }
    else {
        document.getElementById("about").style.zIndex = "0";
        document.getElementById("projects").style.zIndex = "0";
        document.getElementById("contact").style.zIndex = "1";
    }

    let element = document.getElementById("flip-c");
    element.classList.toggle("flip");
}

