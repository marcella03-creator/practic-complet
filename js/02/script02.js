let progresoActual = 0;
let pcolor=0;


//SELECCIONA EL BOTON Y LA BARRA DE PROGRESION
const avanzar= document.getElementById ('avanzar');
const barra = document.getElementById('progreso');

//AVANZA LA BARRA DE PROGRESO

const color=[ '#E52D1F',  '#E58426', '#E6CD23', '#4CE51B', '#2CE553'];

avanzar.addEventListener ('click', () => {
    if (progresoActual <100){
        progresoActual +=10;
        progreso.style.width= progresoActual + '%';
    barra.style.background= color[pcolor];
pcolor=(progresoActual /20) % color.length;
if (progresoActual==100){
    alert('proceso completado.');
}
}
});

