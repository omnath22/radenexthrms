(() => {
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('work-email');
  const companyInput = document.getElementById('company');
  const passwordInput = document.getElementById('new-password');
  const passwordToggle = document.getElementById('password-toggle');
  const googleButton = document.getElementById('google-button');
  const notice = document.getElementById('signup-notice');
  const fields = [
    [nameInput, document.getElementById('name-error')],
    [emailInput, document.getElementById('email-error')],
    [companyInput, document.getElementById('company-error')],
    [passwordInput, document.getElementById('password-error')],
  ];

  document.getElementById('year').textContent = new Date().getFullYear();

  const clearNotice = () => {
    notice.hidden = true;
    notice.textContent = '';
    notice.removeAttribute('data-tone');
  };
  const showNotice = message => {
    notice.textContent = message;
    notice.dataset.tone = 'info';
    notice.hidden = false;
  };
  const setError = (input, error, message) => {
    error.textContent = message;
    if (message) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  };
  const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  passwordToggle.addEventListener('click', () => {
    const reveal = passwordInput.type === 'password';
    passwordInput.type = reveal ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    passwordToggle.setAttribute('aria-pressed', String(reveal));
    passwordInput.focus();
  });

  googleButton.addEventListener('click', () => {
    clearNotice();
    showNotice('Google sign-up isn’t connected in this preview. No account information was sent.');
  });

  fields.forEach(([input, error]) => {
    input.addEventListener('input', () => {
      if (input.value.trim()) setError(input, error, '');
      clearNotice();
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearNotice();
    fields.forEach(([input, error]) => setError(input, error, ''));

    if (!nameInput.value.trim()) setError(nameInput, fields[0][1], 'Enter your name.');
    if (!isEmail(emailInput.value)) setError(emailInput, fields[1][1], emailInput.value.trim() ? 'Enter a valid work email address.' : 'Enter your work email address.');
    if (!companyInput.value.trim()) setError(companyInput, fields[2][1], 'Enter your organization name.');
    if (passwordInput.value.length < 8) setError(passwordInput, fields[3][1], 'Use at least 8 characters for your password.');

    const firstInvalid = fields.find(([input]) => input.getAttribute('aria-invalid') === 'true');
    if (firstInvalid) {
      firstInvalid[0].focus();
      return;
    }

    showNotice('Workspace creation isn’t connected in this preview. Your details stayed on this device and were not sent or stored.');
  });
})();
