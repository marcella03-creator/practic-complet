//Selecciona los botones y el elemento del contador 
const mostrarContador = document.getElementById('contador')
const increment = document.getElementById('Incrementar')
const decrementar = document.getElementById('Decrementar')
let contador=0;
function mostrar (){
    mostrarContador.style.color= contador>0? '#59E336' : '#EA2801';
    mostrarContador.textContent=contador;
}


//Incrementar el contador 
increment.addEventListener('click', () => {
    contador++;
    mostrarContador.textContent= contador;
    mostrarContador.style.color='#59E336';
});
//Decrementar el contador
decrementar.addEventListener('click', () => {
    contador--;
    mostrarContador.textContent= contador;
    mostrarContador.style.color='#EA2801';
});