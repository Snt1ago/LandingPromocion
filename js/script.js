// JavaScript optimizado para mejor performance

// Scroll suave a secciones
function scrollToContact() {
  document.getElementById("contacto").scrollIntoView({
    behavior: "smooth",
  });

  // Track evento para analytics
  if (typeof gtag !== "undefined") {
    gtag("event", "click", {
      event_category: "engagement",
      event_label: "scroll_to_contact",
    });
  }
}

function scrollToServices() {
  document.getElementById("servicios").scrollIntoView({
    behavior: "smooth",
  });

  // Track evento para analytics
  if (typeof gtag !== "undefined") {
    gtag("event", "click", {
      event_category: "engagement",
      event_label: "scroll_to_services",
    });
  }
}

// Intersection Observer para animaciones lazy
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
}, observerOptions);

// Observar elementos con clase lazy
document.querySelectorAll(".lazy, .fade-in").forEach((el) => {
  observer.observe(el);
});

// Preload de imágenes críticas
function preloadImages() {
  const imageUrls = ["/images/hero-bg.jpg", "/images/features-bg.jpg"];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  preloadImages();

  // Agregar eventos de tracking a botones principales
  const ctaButtons = document.querySelectorAll(
    'button[onclick*="scrollToContact"]'
  );
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (typeof gtag !== "undefined") {
        gtag("event", "click", {
          event_category: "conversion",
          event_label: "cta_button_click",
        });
      }
    });
  });

  // Asegurar que todos los fade-in estén cargados inicialmente
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.classList.add("loaded");
  });
});

// Service Worker para cache offline (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("SW registered: ", registration);
      })
      .catch(function (registrationError) {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
