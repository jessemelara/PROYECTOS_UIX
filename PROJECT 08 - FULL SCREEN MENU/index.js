const menu = document.querySelector("button");
const nav = document.querySelector("nav");
const sections = document.querySelectorAll("main section");

menu.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
	sections.forEach((i) => {
		i.style.display = "block";
		i.classList.toggle("rotate-active");
		i.classList.toggle("closed");
	});
});

const strokeTop = document.querySelector(".top");
const strokeMid = document.querySelector(".middle");
const strokeBottom = document.querySelector(".bottom");

menu.addEventListener("click", function () {
	strokeTop.classList.toggle("top-active");
	strokeMid.classList.toggle("middle-active");
	strokeBottom.classList.toggle("bottom-active");
});
