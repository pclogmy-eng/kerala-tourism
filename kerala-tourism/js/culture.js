// Add keyboard accessibility for image captions
document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll("figure");
  figures.forEach(fig => {
    fig.setAttribute("tabindex", "0");
    fig.addEventListener("focus", () => {
      fig.style.outline = "2px solid #00796b";
    });
    fig.addEventListener("blur", () => {
      fig.style.outline = "none";
    });
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