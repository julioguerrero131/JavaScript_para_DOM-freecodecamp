// Seleccionar elementos del DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexRandom() {
    let digitos = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        let indRandom = Math.floor(Math.random() * 16);
        color += digitos[indRandom];
    }
    return color
}

boton.addEventListener('click', function () {
    let colorRandom = generarColorHexRandom();
    // Actualizar texto
    color.textContent = colorRandom;
    // Actualizar color fondo
    document.body.style.backgroundColor = colorRandom;
})