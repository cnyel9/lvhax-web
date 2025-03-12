// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.add("opacity-0", "invisible");
    backToTopButton.classList.remove("opacity-100", "visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Article View Toggle
function showArticle() {
  document.querySelector("main").classList.add("hidden");
  document.getElementById("article-detail").classList.remove("hidden");
}

// Add click event to article links
document
  .querySelectorAll('a[href="article-pubg.html"]')
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showArticle();
      window.scrollTo(0, 0);
    });
  });

// FAQ Toggles
document.querySelectorAll(".faq-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("i");

    content.classList.toggle("hidden");
    icon.classList.toggle("transform");
    icon.classList.toggle("rotate-180");
  });
});

// Star Rating
document.querySelectorAll(".far.fa-star").forEach((star, index) => {
  star.addEventListener("click", () => {
    document.querySelectorAll(".far.fa-star").forEach((s, i) => {
      if (i <= index) {
        s.classList.remove("far");
        s.classList.add("fas");
        s.classList.add("text-yellow-500");
      } else {
        s.classList.add("far");
        s.classList.remove("fas");
        s.classList.remove("text-yellow-500");
      }
    });
  });
});