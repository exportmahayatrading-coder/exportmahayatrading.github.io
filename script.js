(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-links]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  const forms = document.querySelectorAll('[data-lead-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Thank you. Our UAE procurement desk will contact you shortly.';
      }
      form.reset();
    });
  });
})();
