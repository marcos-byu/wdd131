const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.textContent = isOpen ? "✕" : "☰";
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
