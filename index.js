/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


/* -----------------------------------------
   Image Carousel
 ---------------------------------------- */

function moveSlide(button, direction) {
  const carousel = button.closest(".work__carousel");
  const images = carousel.querySelectorAll(".carousel__image");

  let currentIndex = Array.from(images).findIndex(
    image => image.classList.contains("active")
  );

  images[currentIndex].classList.remove("active");

  currentIndex += direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  images[currentIndex].classList.add("active");
}