let currentSlide = 0;
const sliders = document.querySelectorAll('.slider');

function showSlide(n) {
  sliders[currentSlide].classList.remove('active');
  currentSlide = (n + sliders.length) % sliders.length;
  sliders[currentSlide].classList.add('active');
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);
