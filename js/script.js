tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#1e40af",
      },
    },
  },
};
function scrollToContact() {
  document.getElementById("contacto").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToServices() {
  document.getElementById("servicios").scrollIntoView({
    behavior: "smooth",
  });
}

// Add scroll effect to header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-white", "shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

// Add fade-in animation on scroll
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("opacity-100");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
