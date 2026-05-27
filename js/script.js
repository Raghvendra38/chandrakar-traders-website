// ========== Nav Scroll Effect ==========
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// ========== Hamburger Menu ==========
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navUl?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navUl?.classList.remove('open');
  });
});

// ========== Active Nav Link ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ========== Scroll to Top ==========
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn?.classList.add('visible');
  } else {
    scrollBtn?.classList.remove('visible');
  }
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Contact Form ==========
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate submission (replace with real backend/formspree)
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#34c76f';
    if (formSuccess) {
      formSuccess.style.display = 'block';
      formSuccess.textContent = '✓ Thank you! We will contact you soon.';
    }
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      btn.style.background = '';
      if (formSuccess) formSuccess.style.display = 'none';
    }, 4000);
  }, 1200);
});

// ========== Scroll Reveal ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .testimonial-card, .value-card, .feature-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

console.log('Chandrakar Traders website loaded ✓');
