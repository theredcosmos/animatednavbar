const toggle = document.getElementById("toggle");
const nav = document.getElementById("navbar");

function toggleClass(){
    nav.classList.toggle("active")
}

toggle.addEventListener("click",toggleClass);