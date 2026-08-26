const form = document.getElementById('leadForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const leads = JSON.parse(localStorage.getItem('cph_leads') || '[]');
  leads.push({...data, submittedAt: new Date().toISOString()});
  localStorage.setItem('cph_leads', JSON.stringify(leads));
  message.textContent = 'Thank you — your consultation request has been recorded for this practice project.';
  form.reset();
});
