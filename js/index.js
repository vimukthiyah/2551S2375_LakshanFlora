document.addEventListener('DOMContentLoaded', function () {

  var y = document.getElementById('year-home');
  if (y) y.textContent = new Date().getFullYear();


  if (!('loading' in HTMLImageElement.prototype)) {
    var lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    lazyImgs.forEach(function(img) {
      img.src = img.getAttribute('src');
    });
  }
});
