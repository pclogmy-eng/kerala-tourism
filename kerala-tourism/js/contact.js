// Click-to-copy phone number
document.addEventListener("DOMContentLoaded", () => {
  const phoneLinks = document.querySelectorAll("a[href^='tel:']");
  phoneLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const number = link.getAttribute("href").replace("tel:", "");
      navigator.clipboard.writeText(number).then(() => {
        alert(`Phone number ${number} copied to clipboard!`);
      });
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