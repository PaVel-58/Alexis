"Use strict"

let button = document.querySelector(".button_menu");

$('.portfolio__slider').slick({
  	slidesToShow: 3,
	centerMode: true,
	centerPadding: 0 
});

function openNav() {
  	document.getElementById("mySidenav").style.width = "350px";
    button.classList.remove('active');
}
function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("mySidenav").style.padding = "0"
    button.classList.add('active');
}