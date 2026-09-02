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

document.querySelectorAll(".work__carousel").forEach((carousel) => {
  const images = carousel.querySelectorAll(".carousel__image");
  const leftButton = carousel.querySelector(".carousel__button--left");
  const rightButton = carousel.querySelector(".carousel__button--right");

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image) => {
      image.classList.remove("active");
    });

    images[index].classList.add("active");
  }

  leftButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    showImage(currentIndex);
  });

  rightButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    showImage(currentIndex);
  });

  showImage(currentIndex);
});