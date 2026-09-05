const form = document.getElementById('leadForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', () => {
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  message.textContent = 'Sending your consultation request…';

  // The browser performs a normal POST to the Apps Script Web App.
  // A hidden iframe keeps the visitor on the same page.
  setTimeout(() => {
    message.textContent = 'Thank you — your consultation request has been sent.';
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Request consultation';
  }, 1500);
});
