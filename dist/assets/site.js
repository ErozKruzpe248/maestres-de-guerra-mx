const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-nav]');
const menuLabel = menuButton?.querySelector('.sr-only');

const setMenuOpen = (isOpen) => {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  navigation?.classList.toggle('is-open', isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú';
};

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || menuButton?.getAttribute('aria-expanded') !== 'true') return;
  setMenuOpen(false);
  menuButton.focus();
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
