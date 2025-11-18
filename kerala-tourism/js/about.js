// Animate list items on scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("li");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "transform 0.5s ease";
        entry.target.style.transform = "translateX(0)";
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => {
    item.style.transform = "translateX(-20px)";
    observer.observe(item);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});