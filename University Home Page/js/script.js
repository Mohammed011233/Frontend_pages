var navlinks = document.getElementById("navlinks");
var menu = document.getElementById("menu");

function closemenu() {
    navlinks.style.right = "-200px";
    menu.style.transition = ".5s";
    menu.style.visibility = "visible";
}

function showmenu() {
    navlinks.style.right = "0";
    menu.style.transition = ".5s";
    menu.style.visibility = "hidden";
}