// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// CAROUSEL

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", function () {
  moveToNextSlide();
});

document.getElementById("prev").addEventListener("click", function () {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }

  slides[slidePosition].classList.add("visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

//PRELOADER

const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//DOWNLOAD BUTTON

$(function () {
  var btnn = $(".btn");
  btnn.on("click", function () {
    $(this).addClass("btn-progress");
    setTimeout(function () {
      btnn.addClass("btn-progress--fill");
    }, 500);
    setTimeout(function () {
      btnn.removeClass("btn-progress--fill");
    }, 4100);
    setTimeout(function () {
      btnn.addClass("btn-complete");
    }, 4400);
  });
});
