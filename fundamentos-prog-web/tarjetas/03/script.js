const nieveContainer = document.getElementById("nieve-container");
const botonNieve = document.getElementById("mas-nieve");

// Generar copos de nieve
function generarNieve() {
  for (let i = 0; i < 50; i++) {
    const copo = document.createElement("div");
    copo.classList.add("nieve");
    copo.style.left = `${Math.random() * 100}%`;
    copo.style.animationDelay = `${Math.random() * 3}s`;
    copo.style.animationDuration = `${Math.random() * 3 + 2}s`;
    nieveContainer.appendChild(copo);

    // Eliminar copos después de la animación
    setTimeout(() => copo.remove(), 4000);
  }
}

// Evento para generar más nieve
botonNieve.addEventListener("click", generarNieve);

// Generar nieve automáticamente al cargar la página
generarNieve();
