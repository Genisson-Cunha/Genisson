// Seleciona os elementos do carrossel
const track = document.querySelector('.pista-carrossel');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

// Define a largura de cada slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Índice do slide atual
let currentIndex = 0;

// Atualiza a posição do carrossel com base no slide atual
function updateCarousel() {
  track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
}

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop infinito
  updateCarousel();
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop infinito
  updateCarousel();
});


