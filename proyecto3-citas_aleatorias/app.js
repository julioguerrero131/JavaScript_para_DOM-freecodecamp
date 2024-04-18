let btnElem = document.getElementById('btn-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function enteroAleatorio(min, max) {
    // min y max deben ser enteros
    // max no se incluye
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indAleatorio = enteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indAleatorio].texto}"`;
    autorElem.innerText = citas[indAleatorio].autor;
}

// Seleccionar cita
cambiarCita();

btnElem.addEventListener('click',cambiarCita)