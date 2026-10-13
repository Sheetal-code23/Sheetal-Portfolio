
document.addEventListener("DOMContentLoaded", () => {
  // Initialize icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile navigation menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Animated typing headline
  const typingText = document.getElementById("typingText");

  const words = [
    "Python",
    "Machine Learning",
    "Salesforce",
    "Cloud Computing"
  ];

  let wordIndex = 0;
  let charIndex = words[0].length;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let delay = deleting ? 55 : 95;

    if (!deleting && charIndex === currentWord.length) {
      deleting = true;
      delay = 1300;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    setTimeout(typeEffect, delay);
  }

  setTimeout(typeEffect, 1600);

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});
