const input = document.getElementById('ingresar-tareas');
const btn = document.querySelector('button');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea() {
    if (input.value) {
        // Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        
        // Agregar el texto del usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // Crear contenedor iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Agregar iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar, eliminar);

        // Agregar nueva tarea a la lista
        listaTareas.appendChild(tareaNueva);
    } else {
        alert('Ingresa una tarea.');
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

btn.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});