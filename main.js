var xstatus = true;
var nb = false;

const tombol = document.getElementById('tombol');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

tombol.addEventListener('click', function() {
    if (xstatus) {
        navbar.classList.add("bg-lime-200");
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        xstatus = false;
    } else {
        if (nb == false || window.scrollY < 51){
            navbar.classList.remove("bg-lime-200");
        }
        
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        xstatus = true;
    }
 });

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-lime-200");
        nb = true;
    } else {
        if (xstatus != false){
            navbar.classList.remove("shadow-lg", "bg-lime-200");
        nb = false;
        }
        
    }
 });
