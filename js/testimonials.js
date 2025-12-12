document.getElementById('yearTesti').textContent = new Date().getFullYear();

var carouselEl = document.getElementById('testiCarousel');
if (carouselEl) {
  carouselEl.addEventListener('mouseenter', function () {
    bootstrap.Carousel.getInstance(carouselEl).pause();
  });
  carouselEl.addEventListener('mouseleave', function () {
    bootstrap.Carousel.getInstance(carouselEl).cycle();
  });
}
