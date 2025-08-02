// Sticky Header on Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Smooth Scrolling (optional: for browsers that need polyfill)
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// CTA Button Click Alert
document.getElementById("cta-button").addEventListener("click", () => {
  alert("Thanks for your interest! We’ll contact you shortly.");
});
