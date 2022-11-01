var hamburgerMenu = document.querySelector("#hamburgerMenu");
var mobile = document.querySelector(".mobile");
var close = document.querySelector("#close-btn");

hamburgerMenu.addEventListener("click", function () {
	mobile.classList.toggle("mobile--active");
});

close.addEventListener("click", function () {
	mobile.classList.remove("mobile--active");
});

// modal
var modal = document.querySelector("#modalbtn");
var modalMain = document.querySelector(".modal");
var modalClose = document.querySelector("#modalcls");

modal.addEventListener("click", function () {
	modalMain.classList.toggle("modal-active");
});
modalClose.addEventListener("click", function () {
	modalMain.classList.remove("modal-active");
});
