// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();

      if (name === "" || email === "") {
        alert("Please fill out all required fields.");
      } else {
        alert("Thank you! Your message has been sent.");
        form.reset();
      }
    });
  }
});
// Navigation toggle for mobile view
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});