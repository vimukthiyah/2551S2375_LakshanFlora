document.addEventListener('DOMContentLoaded', function () {
  var yearSpan = document.getElementById('year-contact');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();


  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    status.textContent = 'Sending…';
    status.classList.remove('text-danger');
    status.classList.remove('text-success');


    var fd = new FormData(form);


    fetch(form.action, {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        status.textContent = 'Message sent — thank you!';
        status.classList.add('text-success');
        form.reset();
      } else {
        return response.json().then(function (data) {
          var msg = (data && data.error) ? data.error : 'Submission failed. Please try again.';
          status.textContent = msg;
          status.classList.add('text-danger');
        }).catch(function () {
          status.textContent = 'Submission failed. Please try again.';
          status.classList.add('text-danger');
        });
      }
    }).catch(function () {
      status.textContent = 'Network error — please check your connection.';
      status.classList.add('text-danger');
    });
  });
});
