const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section[id]');
const yearElement = document.querySelector('#current-year');

// Keep the footer year current without manual edits.
yearElement.textContent = new Date().getFullYear();

// Compact mobile navigation.
function closeNavigation() {
  navToggle.setAttribute('aria-expanded', 'false');
  siteNav.classList.remove('open');
  document.body.classList.remove('nav-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

navLinks.forEach((link) => link.addEventListener('click', closeNavigation));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});

// Highlight the section currently in view.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-25% 0px -65% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));
