import anime from "https://unpkg.com/animejs@3.2.1/lib/anime.es.js";
// var anime = require("animejs/lib/anime.es.js");
var textWrapper = document.querySelector(".portfolio");

const homeNav = document.getElementById("home-nav");
homeNav.addEventListener("click", () => {
	document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
const aboutMeNav = document.getElementById("about-me-nav");
aboutMeNav.addEventListener("click", () => {
	document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});
const photographyNav = document.getElementById("photography-nav");
photographyNav.addEventListener("click", () => {
	document.getElementById("photography").scrollIntoView({ behavior: "smooth" });
});
// const graphicDesignNav = document.getElementById("graphic-design-nav");
const logoNav = document.getElementById("logo-nav");
logoNav.addEventListener("click", () => {
	document.getElementById("logo").scrollIntoView({ behavior: "smooth" });
});

const brandNav = document.getElementById("brand-nav");
brandNav.addEventListener("click", () => {
	document.getElementById("brand").scrollIntoView({ behavior: "smooth" });
});
const illNav = document.getElementById("ill-nav");
illNav.addEventListener("click", () => {
	document
		.getElementById("illustrations")
		.scrollIntoView({ behavior: "smooth" });
});
const otherNav = document.getElementById("other-nav");
otherNav.addEventListener("click", () => {
	document.getElementById("other").scrollIntoView({ behavior: "smooth" });
});

textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
	targets: ".portfolio .letter",
	translateX: [40, 0],
	translateZ: 0,
	pointerEvent: "auto",
	opacity: [0, 1],
	easing: "easeOutExpo",
	duration: 2000,
	delay: (el, i) => 500 + 30 * i,
});

const graphicDesignButton = document.getElementById("graphic-design-nav");
let clicked = false;

function hide() {
	anime({
		targets: ".graphic-design .el",
		translateY: 0,
		pointerEvent: "none",
		opacity: 0,
		delay: anime.stagger(100, { start: 500 }),
	});
	clicked = false;
	anime({
		targets: ".nav-bar",
		height: "150px",
		delay: 800,
	});
}

for (
	var i = 0;
	i <= document.getElementsByClassName("no-pointer").length - 1;
	i++
) {}

graphicDesignButton.addEventListener("click", () => {
	if (!clicked) {
		for (
			var i = 0;
			i <= document.getElementsByClassName("no-pointer").length + 2;
			i++
		) {
			document.getElementsByClassName("el")[i].classList.remove("no-pointer");
		}
		setTimeout(() => {
			anime({
				targets: ".nav-bar",
				height: "300px",
			});
			anime({
				targets: ".graphic-design .el",
				translateY: anime.stagger(40, { start: 40 }),
				opacity: 1,
				delay: anime.stagger(100, { start: 100 }),
			});
			clicked = true;
		}, 500);
	} else {
		for (
			var i = 0;
			i <= document.getElementsByClassName("el").length - 1;
			i++
		) {
			console.log(document.getElementsByClassName("el")[i]);
			document.getElementsByClassName("el")[i].classList.add("no-pointer");
		}
		hide();
	}
});

setTimeout(() => {
	const logEl = document.getElementsByTagName("span");
	for (let i = 0; i < logEl.length; i++) {
		if (logEl[i].classList.contains("letter")) {
			if (logEl[i].innerHTML === "_") {
				logEl[i].classList.add("blink");
			}
		}
	}
}, 1000);

let mouseIn = false;

// PHOTOGRAPHY SCROLL SLIDE
const horizontalDiv = document.querySelector(".horizontal-scroll");

const photographyTitleDiv = document.querySelector(".photography-title");

horizontalDiv.onwheel = (event) => {
	var scrollAmount = 0;
	event.preventDefault();
	// horizontalDiv.scrollLeft += event.deltaY;
	var slideTimer = setInterval(function () {
		horizontalDiv.scrollLeft += event.deltaY / 10;
		scrollAmount += 10;
		if (horizontalDiv.scrollLeft === 0) {
			photographyTitleDiv.classList.remove("photography-slide");
		} else {
			if (!photographyTitleDiv.classList.contains("photography-slide")) {
				photographyTitleDiv.classList.add("photography-slide");
			}
		}
		if (scrollAmount >= 100) {
			window.clearInterval(slideTimer);
		}
	}, 25);
	const deltaWidth = horizontalDiv.scrollWidth - horizontalDiv.scrollLeft;
};

// LOGO SCROLL SLIDE
const horizontalDivLogo = document.querySelector(".horizontal-scroll-logo");
const logoTitleDiv = document.querySelector(".logo-title");

horizontalDivLogo.onwheel = (event) => {
	var scrollAmount = 0;
	event.preventDefault();

	// horizontalDiv.scrollLeft += event.deltaY;
	var slideTimer = setInterval(function () {
		horizontalDivLogo.scrollLeft += event.deltaY / 10;
		scrollAmount += 10;
		if (horizontalDivLogo.scrollLeft === 0) {
			logoTitleDiv.classList.remove("logo-slide");
		} else {
			if (!logoTitleDiv.classList.contains("logo-slide")) {
				logoTitleDiv.classList.add("logo-slide");
			}
		}
		if (scrollAmount >= 100) {
			window.clearInterval(slideTimer);
		}
	}, 25);

	const deltaWidth =
		horizontalDivLogo.scrollWidth - horizontalDivLogo.scrollLeft;
};

// BRAND SCROLL SLIDE

const horizontalDivBrand = document.querySelector(".horizontal-scroll-brand");
const brandTitleDiv = document.querySelector(".brand-title");

horizontalDivBrand.onwheel = (event) => {
	var scrollAmount = 0;
	event.preventDefault();
	// horizontalDiv.scrollLeft += event.deltaY;
	var slideTimer = setInterval(function () {
		horizontalDivBrand.scrollLeft += event.deltaY / 10;
		scrollAmount += 10;
		if (horizontalDivBrand.scrollLeft === 0) {
			brandTitleDiv.classList.remove("brand-slide");
		} else {
			if (!brandTitleDiv.classList.contains("brand-slide")) {
				brandTitleDiv.classList.add("brand-slide");
			}
		}
		if (scrollAmount >= 100) {
			window.clearInterval(slideTimer);
		}
	}, 25);
	const deltaWidth =
		horizontalDivBrand.scrollWidth - horizontalDivBrand.scrollLeft;
};

// ILLUSTRATIONS SCROLL SLIDE
const horizontalDivIllu = document.querySelector(".horizontal-scroll-illu");
const illustrationTitleDiv = document.querySelector(".illustrations-title");

horizontalDivIllu.onwheel = (event) => {
	var scrollAmount = 0;
	event.preventDefault();
	// horizontalDiv.scrollLeft += event.deltaY;
	var slideTimer = setInterval(function () {
		horizontalDivIllu.scrollLeft += event.deltaY / 10;
		scrollAmount += 10;
		if (horizontalDivIllu.scrollLeft === 0) {
			illustrationTitleDiv.classList.remove("illustrations-slide");
		} else {
			if (!illustrationTitleDiv.classList.contains("illustrations-slide")) {
				illustrationTitleDiv.classList.add("illustrations-slide");
			}
		}
		if (scrollAmount >= 100) {
			window.clearInterval(slideTimer);
		}
	}, 25);
	const deltaWidth =
		horizontalDivIllu.scrollWidth - horizontalDivIllu.scrollLeft;
};

const horizontalDivOther = document.querySelector(".horizontal-scroll-other");
const otherTitleDiv = document.querySelector(".other-title");

horizontalDivOther.onwheel = (event) => {
	var scrollAmount = 0;
	event.preventDefault();
	// horizontalDiv.scrollLeft += event.deltaY;
	var slideTimer = setInterval(function () {
		horizontalDivOther.scrollLeft += event.deltaY / 10;
		scrollAmount += 10;
		if (horizontalDivOther.scrollLeft === 0) {
			otherTitleDiv.classList.remove("illustrations-slide");
		} else {
			if (!otherTitleDiv.classList.contains("illustrations-slide")) {
				otherTitleDiv.classList.add("illustrations-slide");
			}
		}
		if (scrollAmount >= 100) {
			window.clearInterval(slideTimer);
		}
	}, 25);
	const deltaWidth =
		horizontalDivOther.scrollWidth - horizontalDivOther.scrollLeft;
};

const body = document.getElementsByTagName("BODY")[0];

const aboutMe = document.getElementsByClassName("background-img-about-me-2")[0];
const aboutMeDesc = document.getElementsByClassName("about-me-desc")[0];
const aboutMeName = document.getElementsByClassName("about-me-name")[0];

anime.timeline({ loop: false }).add({
	targets: ".about-me-name .lttr",
	translateX: [40, 0],
	translateZ: 0,
	pointerEvent: "auto",
	opacity: [0, 1],
	easing: "easeOutExpo",
	duration: 2000,
	delay: (el, i) => 500 + 30 * i,
});

body.addEventListener(
	"scroll",
	() => {
		if (
			photographyTitleDiv.getBoundingClientRect().y < -700 ||
			photographyTitleDiv.getBoundingClientRect().y > 700
		) {
			photographyTitleDiv.classList.remove("photography-slide");
			if (
				logoTitleDiv.getBoundingClientRect().y < -450 ||
				logoTitleDiv.getBoundingClientRect().y > 450
			) {
				logoTitleDiv.classList.remove("logo-slide");
				if (
					brandTitleDiv.getBoundingClientRect().y < -450 ||
					brandTitleDiv.getBoundingClientRect().y > 450
				) {
					brandTitleDiv.classList.remove("brand-slide");
					if (
						illustrationTitleDiv.getBoundingClientRect().y < -450 ||
						illustrationTitleDiv.getBoundingClientRect().y > 450
					) {
						illustrationTitleDiv.classList.remove("illustrations-slide");
						if (
							otherTitleDiv.getBoundingClientRect().y < -450 ||
							otherTitleDiv.getBoundingClientRect().y > 450
						) {
							otherTitleDiv.classList.remove("illustrations-slide");
						}
					}
				}
			}
		}

		photographyTitleDiv.onwheel = (event) => {
			if (event.deltaY > 0) {
				if (!photographyTitleDiv.classList.contains("photography-slide")) {
					event.preventDefault();
				}
				photographyTitleDiv.classList.add("photography-slide");
			}
		};

		logoTitleDiv.onwheel = (event) => {
			if (event.deltaY > 0) {
				if (!logoTitleDiv.classList.contains("logo-slide")) {
					event.preventDefault();
				}
				logoTitleDiv.classList.add("logo-slide");
			}
		};

		brandTitleDiv.onwheel = (event) => {
			if (event.deltaY > 0) {
				if (!brandTitleDiv.classList.contains("brand-slide")) {
					event.preventDefault();
				}
				brandTitleDiv.classList.add("brand-slide");
			}
		};

		illustrationTitleDiv.onwheel = (event) => {
			if (event.deltaY > 0) {
				if (!illustrationTitleDiv.classList.contains("illustrations-slide")) {
					event.preventDefault();
				}
				illustrationTitleDiv.classList.add("illustrations-slide");
			}
		};

		otherTitleDiv.onwheel = (event) => {
			if (event.deltaY > 0) {
				if (!otherTitleDiv.classList.contains("illustrations-slide")) {
					event.preventDefault();
				}
				otherTitleDiv.classList.add("illustrations-slide");
			}
		};

		if (mouseIn) {
			body.style.overflowY = "hidden";
		}
	},
	false
);

var modalProjectDM = document.getElementById("project-dm-modal");
var modalProject5in1 = document.getElementById("project-5in1-modal");
var modalProjectFond = document.getElementById("project-fond-modal");
var modalProjectBuro = document.getElementById("project-buro-modal");
var modalVanHulten = document.getElementById("van-hulten-modal");

var projectDMClick = document.getElementById("project-dm-click");

var mouseFollow = document.getElementById("mouse-follow");

var project5in1Click = document.getElementById("project-5in1-click");
var projectFondClick = document.getElementById("project-fond-click");
var projectBuroClick = document.getElementById("project-buro-click");
var vanHultenClick = document.getElementById("van-hulten-click");

projectDMClick.onclick = () => {
	modalProjectDM.style.display = "block";
};

project5in1Click.onclick = () => {
	modalProject5in1.style.display = "block";
};

projectFondClick.onclick = () => {
	modalProjectFond.style.display = "block";
};

projectBuroClick.onclick = () => {
	modalProjectBuro.style.display = "block";
};

vanHultenClick.onclick = () => {
	modalVanHulten.style.display = "block";
};
var closeDMModal = document.getElementsByClassName("close")[0];
var close5in1Modal = document.getElementsByClassName("close")[1];
var closeFondModal = document.getElementsByClassName("close")[2];
var closeBuroCoModal = document.getElementsByClassName("close")[3];
var closeVanHultenModal = document.getElementsByClassName("close")[4];

// var closeBoschModal = document.getElementsByClassName("close")[4];
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
	if (event.target == modalProjectDM) {
		modalProjectDM.style.display = "none";
	} else if (event.target == modalProject5in1) {
		modalProject5in1.style.display = "none";
	} else if (event.target == modalProjectFond) {
		modalProjectFond.style.display = "none";
	} else if (event.target == modalProjectBuro) {
		modalProjectBuro.style.display = "none";
	} else if (event.target == modalVanHulten) {
		modalVanHulten.style.display = "none";
	}
};

closeDMModal.onclick = () => {
	modalProjectDM.style.display = "none";
};
close5in1Modal.onclick = () => {
	modalProject5in1.style.display = "none";
};
closeFondModal.onclick = () => {
	modalProjectFond.style.display = "none";
};
closeBuroCoModal.onclick = () => {
	modalProjectBuro.style.display = "none";
};
closeVanHultenModal.onclick = () => {
	modalVanHulten.style.display = "none";
};
