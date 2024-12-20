const confetiContainer = document.getElementById("confeti-container");
const botonConfeti = document.getElementById("boton-confeti");

// Generar confeti
function crearConfeti() {
  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");
    confeti.style.left = `${Math.random() * 100}%`;
    confeti.style.animationDelay = `${Math.random() * 2}s`;
    confeti.style.backgroundColor = generarColorAleatorio();
    confetiContainer.appendChild(confeti);

    // Eliminar confeti después de la animación
    setTimeout(() => confeti.remove(), 3000);
  }
}

// Generar color aleatorio
function generarColorAleatorio() {
  const colores = ["#ff6f61", "#ffc107", "#4caf50", "#2196f3", "#9c27b0"];
  return colores[Math.floor(Math.random() * colores.length)];
}

// Evento del botón
botonConfeti.addEventListener("click", crearConfeti);

// Activar confeti automáticamente al cargar
crearConfeti();
