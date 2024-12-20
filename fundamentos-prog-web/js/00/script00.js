const ssection= document.getElementById('section-color');
const btnMain= document.getElementById('cmain');
const btnSection= document.getElementById('csection');
let cc=0;

const smain= document.getElementsByClassName('container');
const vcolor= ['#36D96A','#D97D36','#7F41E0'];

function selectColor(){
    cc= cc>2? 0: cc+1;
}

btnMain.addEventListener('click',() => {
    console.log('hola')});

btnSection.addEventListener('click',() => {
    selectColor();
    ssection.style.backgroundColor= vcolor[cc];
});