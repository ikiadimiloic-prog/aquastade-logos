let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Affichage slide
function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

// Charger les noms des partenaires depuis le JSON
fetch("logos.json")
  .then(res => res.json())
  .then(partenaires => {
    const container = document.getElementById("logos");
    container.innerHTML = ""; // Vide le conteneur avant d'ajouter les éléments

    partenaires.forEach((nom, i) => {
      const badge = document.createElement("div");
      badge.classList.add("partner-badge");
      badge.textContent = nom;
      badge.style.animationDelay = (i * 0.1) + "s";
      container.appendChild(badge);
    });
  })
  .catch(err => console.error("Erreur de chargement du JSON :", err));

// Rotation des slides
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 7000);

// init
showSlide(0);
