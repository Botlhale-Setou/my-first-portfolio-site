const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-nav");
const portfolio = document.querySelector(".folioport");
const about = document.querySelector(".bouta");
const contact = document.querySelector(".tactcon");
const body = document.querySelector("body");
const logo = document.querySelector(".logo-text");

hamburger.addEventListener("click", (e) => {
	body.classList.toggle("bang");
	navMenu.classList.toggle('boom');
	logo.classList.toggle("invisible");
})

portfolio.addEventListener("click", (e) => {
	navMenu.classList.toggle('boom');
	body.classList.toggle("bang");
	logo.classList.toggle("invisible");
	hamburger.classList.toggle("change");
})

about.addEventListener("click", (e) => {
	navMenu.classList.toggle('boom');
	body.classList.toggle("bang");
	logo.classList.toggle("invisible");
	hamburger.classList.toggle("change");
})

contact.addEventListener("click", (e) => {
	navMenu.classList.toggle('boom');
	body.classList.toggle("bang");
	logo.classList.toggle("invisible");
	hamburger.classList.toggle("change");
})

function myFunction(x) {
  x.classList.toggle("change");
}