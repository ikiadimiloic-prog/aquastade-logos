let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Affichage slide
function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

// Charger les noms et icônes depuis le JSON
fetch("logos.json")
  .then(res => res.json())
  .then(partenaires => {
    const container = document.getElementById("logos");
    container.innerHTML = "";

    partenaires.forEach((item, i) => {
      const badge = document.createElement("div");
      badge.classList.add("partner-badge");
      badge.style.animationDelay = (i * 0.1) + "s";

      // Création de l'icône
      const icon = document.createElement("i");
      icon.className = item.icone;

      // Création du texte
      const text = document.createElement("span");
      text.textContent = item.nom;

      // Assemblage
      badge.appendChild(icon);
      badge.appendChild(text);
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
