const form = document.getElementById('leadForm');
const message = document.getElementById('formMessage');

const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzdHi6hvYKq7PT-iEDQFTtMOk8D_cYX1q4x_yZwSvh8qAK6zMMFIMe1al9_N3MuzQzVuw/exec';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);

  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';
  message.textContent = '';

  try {
    await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });

    message.textContent = 'Thank you — your consultation request has been received.';
    form.reset();
  } catch (error) {
    console.error('Lead submission error:', error);
    message.textContent = 'Sorry, we could not send your request. Please try again.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Request consultation';
  }
});
