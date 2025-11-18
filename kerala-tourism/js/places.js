// Scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "↑ Top";
  btn.id = "scrollTopBtn";
  btn.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    padding: 10px 15px; font-size: 16px;
    background-color: #00796b; color: white;
    border: none; border-radius: 5px;
    display: none; cursor: pointer;
  `;
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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