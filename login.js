(() => {
  const form = document.getElementById('login-form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordGroup = document.getElementById('password-group');
  const passwordError = document.getElementById('password-error');
  const emailError = document.getElementById('email-error');
  const notice = document.getElementById('form-notice');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const eyebrow = document.getElementById('form-eyebrow');
  const submitLabel = document.getElementById('submit-label');
  const forgotToggle = document.getElementById('forgot-toggle');
  const passwordToggle = document.getElementById('password-toggle');
  const googleButton = document.getElementById('google-button');
  const divider = document.getElementById('auth-divider');
  const remember = document.getElementById('remember-row');
  const bottom = document.getElementById('auth-bottom');
  let resetMode = false;

  document.getElementById('year').textContent = new Date().getFullYear();

  const clearNotice = () => {
    notice.hidden = true;
    notice.textContent = '';
    notice.removeAttribute('data-tone');
  };

  const showNotice = (message, tone = 'info') => {
    notice.textContent = message;
    notice.dataset.tone = tone;
    notice.hidden = false;
  };

  const setError = (input, target, message) => {
    target.textContent = message;
    if (message) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  };

  const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const switchMode = () => {
    resetMode = !resetMode;
    clearNotice();
    setError(email, emailError, '');
    setError(password, passwordError, '');
    password.value = '';
    passwordGroup.hidden = resetMode;
    remember.hidden = resetMode;
    divider.hidden = resetMode;
    googleButton.hidden = resetMode;
    bottom.hidden = resetMode;
    title.textContent = resetMode ? 'Reset your password' : 'Welcome back';
    eyebrow.textContent = resetMode ? 'GET BACK TO YOUR WORKSPACE' : 'YOUR WORKSPACE AWAITS';
    subtitle.textContent = resetMode
      ? 'Enter your work email and we’ll help you get back in.'
      : 'Sign in to continue to your RadeNext workspace.';
    submitLabel.textContent = resetMode ? 'Continue' : 'Sign in';
    forgotToggle.textContent = resetMode ? 'Back to sign in' : 'Forgot password?';
    forgotToggle.setAttribute('aria-pressed', String(resetMode));
    if (resetMode) email.focus();
  };

  forgotToggle.addEventListener('click', switchMode);
  passwordToggle.addEventListener('click', () => {
    const reveal = password.type === 'password';
    password.type = reveal ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    passwordToggle.setAttribute('aria-pressed', String(reveal));
    password.focus();
  });

  googleButton.addEventListener('click', () => {
    clearNotice();
    showNotice('Google sign-in isn’t connected in this preview. No account information was sent.', 'info');
  });

  email.addEventListener('input', () => {
    if (email.value.trim() && validEmail(email.value)) setError(email, emailError, '');
    clearNotice();
  });
  password.addEventListener('input', () => {
    if (password.value) setError(password, passwordError, '');
    clearNotice();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearNotice();
    setError(email, emailError, '');
    setError(password, passwordError, '');
    const emailIsValid = validEmail(email.value);
    if (!emailIsValid) setError(email, emailError, email.value.trim() ? 'Enter a valid work email address.' : 'Enter your work email address.');
    if (!resetMode && !password.value) setError(password, passwordError, 'Enter your password.');
    if (!emailIsValid || (!resetMode && !password.value)) {
      (emailIsValid ? password : email).focus();
      return;
    }

    if (resetMode) {
      showNotice('Password reset isn’t connected in this preview, so no email was sent. Contact your RadeNext administrator for access.', 'info');
    } else {
      showNotice('Sign-in isn’t connected in this preview. Your credentials stayed on this device and were not sent.', 'info');
    }
  });
})();
