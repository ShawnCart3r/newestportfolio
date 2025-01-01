// JavaScript to make the navbar respond to scroll
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

// JavaScript to display greeting based on the user's time
window.addEventListener("DOMContentLoaded", () => {
  const greetingContainer = document.createElement("div");
  greetingContainer.className = "greeting";
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  greetingContainer.textContent = greeting;
  const heroSection = document.querySelector(".hero");
  heroSection.prepend(greetingContainer);
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Add click event listener to the hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggles hamburger animation
    navLinks.classList.toggle('active'); // Toggles the visibility of nav-links
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
