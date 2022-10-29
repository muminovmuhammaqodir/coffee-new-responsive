var hamburgerMenu = document.querySelector("#hamburgerMenu");
var mobile = document.querySelector(".mobile");
var close = document.querySelector("#close-btn");

hamburgerMenu.addEventListener("click", function () {
	mobile.classList.toggle("mobile--active");
});

close.addEventListener("click", function () {
	mobile.classList.remove("mobile--active");
});
