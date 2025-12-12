document.addEventListener('DOMContentLoaded', function(){
  var y=document.getElementById('year-gallery'); if(y) y.textContent=new Date().getFullYear();

  //bootstrap modal script
  var lb = new bootstrap.Modal(document.getElementById('lightboxModal'));
  document.querySelectorAll('.gallery-item').forEach(function(img){
    img.addEventListener('click', function(){
      var full = img.dataset.full || img.src;
      var lbImg = document.getElementById('lightboxImage');
      lbImg.src = full;
      lb.show();
    });
  });
});
