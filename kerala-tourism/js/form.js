document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const name = form.name;
    const email = form.email;
    const phone = form.phone;

    if (!name.checkValidity() || !email.checkValidity() || !phone.checkValidity()) {
      alert("Please fill all required fields correctly.");
      e.preventDefault();
    } else {
      alert("Thank you! Your trip plan has been submitted.");
    }
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