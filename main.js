 // Toggle mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Fake form submission with reset and alert
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your message, I’ll get back to you soon!');
    form.reset();
  });

    const redirectInput = document.getElementById('redirectInput');
  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

  redirectInput.value = isLocal
    ? "http://127.0.0.1:5500/thank-you.html"
    : "https://shawnsportfoliosite.netlify.app/thank-you.html";