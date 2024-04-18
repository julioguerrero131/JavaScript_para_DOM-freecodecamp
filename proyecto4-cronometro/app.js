const cronometro = document.getElementById('cronometro');
const btnInicioPausa = document.getElementById('btn-inicio-pausa');
const btnReiniciar = document.getElementById('btn-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0]

let intervaloTiempo;
let estadoCronometro = 'pausa';

function asignarFormato(unidadTiempo) {
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
}

function actualizarCronometro(){
    segundos++;

    if (segundos / 60 ==1 ) {
        segundos = 0;
        minutos++;

        if (minutos / 60 == 1) {
            minutos = 0;
            horas++;
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function pausar(){
    window.clearInterval(intervaloTiempo);
    btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    btnInicioPausa.classList.remove('pausar');
    btnInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausa';
}

function iniciar() {
    intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
    btnInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    btnInicioPausa.classList.remove('iniciar');
    btnInicioPausa.classList.add('pausar');
    estadoCronometro = 'activo';
}

btnInicioPausa.addEventListener('click',function() {
    if (estadoCronometro == 'pausa') {
        iniciar();
    } else {
        pausar();
    }
})

btnReiniciar.addEventListener('click', function() {
    window.clearInterval(intervaloTiempo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerText = '00:00:00';

    if (estadoCronometro == 'activo') {
        pausar();
    }
});

