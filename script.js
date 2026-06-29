let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Affichage slide
function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

// Charger les logos
fetch("logos.json")
  .then(res => res.json())
  .then(logos => {
    const container = document.getElementById("logos");

    logos.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.animationDelay = (i * 0.1) + "s";
      container.appendChild(img);
    });
  });

// Rotation des slides
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 7000);

// init
showSlide(0);
