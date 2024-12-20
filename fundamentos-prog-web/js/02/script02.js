let progresoActual = 0;

// Selecciona el botón y la barra de progreso
const avanzar = document.getElementById('avanzar');
const barra = document.getElementById('progreso');

// Avanza la barra de progreso
avanzar.addEventListener('click', () => {
    if (progresoActual < 100) {
        progresoActual += 10;
        barra.style.width = progresoActual + '%';
    }
});