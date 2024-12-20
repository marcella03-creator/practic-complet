var contador = 0;

// Selecciona los botones y el elemento del contador
const mostrarContador = document.getElementById('contador');
const increment = document.getElementById('incrementar');
const decrementar = document.getElementById('decrementar');

function mostrar(){
  mostrarContador.style.color= contador>0?"#59E336" : "#9536E3";
  mostrarContador.textContent = contador;
}

// Incrementa el contador
increment.addEventListener('click', () => {
  contador++;
  mostrar();
});

// Decrementa el contador
decrementar.addEventListener('click', () => {
  contador--;
  mostrar();
});