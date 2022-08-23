var clicked = true;
$(".searchBtn").click(function() {
    if (clicked == true) {
        clicked = false;
        $(".searchinput").css({
            "opacity": "1",
            "transition": "1s"

        });
    } else {
        clicked = true;
        $(".searchinput").css({
            "opacity": "0",
            "transition": "1s"

        });
    }


})

window.onscroll = function() { myFunction() };

var navbar = $("#navbar");
var sticky = navbar.offset().top;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
}