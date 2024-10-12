let currentImageIndex = 0;
const images = [
  'foto/0a0c6ade-fa66-49cd-85c5-584a70f21096.jpg',
  'foto/IMG-20231025-WA0042.jpg',
  'foto/IMG-20240120-WA0033.jpg',
  'foto/IMG-20231207-WA0226.jpg',
  'foto/IMG-20230725-WA0041.jpg'
];

function openModal(index) {
  currentImageIndex = index; // Establece el índice actual
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block"; // Muestra el modal
  modalImage.src = images[currentImageIndex]; // Establece la imagen del modal
  modalImage.alt = `Imagen ${currentImageIndex + 1}`; // Texto alternativo (opcional)
  
  // Elimina el texto del caption
  caption.innerHTML = ""; // Elimina el texto del caption
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Oculta el modal
  currentImageIndex = 0; // Reinicia el índice de la imagen
}

// Cierra el modal si se hace clic en el área fuera de la imagen
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
}

// Cierra el modal al presionar la tecla "Escape"
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
