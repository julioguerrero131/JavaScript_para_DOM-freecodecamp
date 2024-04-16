// SELECTORES

// getElementById

console.log("Por id:")
const contenedor = document.getElementById('contenedor');
// si no lo encuentra, retorna un null
// si hay varios con ese id, retorna el primero que encuentre
console.log(contenedor.innerHTML);

const titulo = document.getElementById('titulo');
console.log(titulo)
console.log(typeof titulo)
console.log(titulo.innerText)
console.log(titulo.tagName)

// getElementsByClassName

console.log("Por clase:")
const toppings = document.getElementsByClassName('topping');
console.log(toppings);
// devuelven una HTML Collection
console.log(typeof toppings);
console.log(toppings[0].id);

// getElementsByTagName

console.log("Por etiqueta:")
const misToppings = document.getElementsByTagName('li');
console.log(misToppings)

// Selectores mas especificos: Se escriben como en CSS

// querySelector

console.log("por querys:")
const aceituna = document.querySelector('.topping');
console.log(aceituna)
// si hay varios, retorna el primero que encuentra

const cebolla = document.querySelector('ul li.topping.fondo-naranja');
console.log(cebolla)

const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron)

// querySelectorAll

const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja)
// devuelve una NodeList
console.log(toppingsNaranja.length)


// ASIGNAR ESTILOS

// .style 

const primerTopping = document.querySelector('.topping');
console.log(primerTopping.style)
// retorna un CSSStyleDeclaration

// asignar un valor a la propiedad CSS

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';
// estos estilos tendran la mayor prioridad

// TEXTO

// Acceder al texto

console.log("texto:")
const listaToppings = document.getElementById('lista');
console.log(listaToppings.innerText); // texto contenido en el DOM
console.log(listaToppings.textContent); // lee el texto en el HTML
console.log(listaToppings.innerHTML); // estructura html

// modificar el texto

const titulo1 = document.getElementById('titulo');
titulo1.innerText = 'Mis toppings favoritos'; 

// ATRIBUTOS

const enlaces =document.getElementsByTagName('a');
console.log(enlaces[0].getAttribute('href')); // ver valor del atributo

enlaces[0].removeAttribute('href'); // eliminar atributo
enlaces[0].setAttribute('href', 'https://youtube.com/@freecodecampespanol?si=KKJJl8rCJ0fYzAtj'); // cambiar valor

// CLASES

// aniadir clase

const primero = document.querySelector('.topping.fondo-naranja');
console.log(primero.classList);
// retorna una DOMTokenList

primero.classList.add('mi-clase');

// verificar si clase existe

console.log(primero.classList.contains('fondo-naranja')); // elemento pertenece a clase

// eliminar clase

primero.classList.remove('mi-clase');

// ELEMENTOS

// Aniadir elemento

//const listaToppings = document.getElementById('lista');
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';
listaToppings.append(toppingNuevo);
//listaToppings.appendChild(toppingNuevo);

// eliminar elemento
toppingNuevo.remove();
//llamo al metodo en el elemento o nodo a eliminar  

// RECORRER EL DOM

// nodos padre

console.log('recorrer el DOM:');
console.log(listaToppings.parentElement);
console.log(listaToppings.parentNode);

console.log(listaToppings.parentElement.parentElement);

// nodos hijo

console.log(listaToppings.children);
// HTMLCollection de nodos hijos
console.log(listaToppings.firstChild);
console.log(listaToppings.lastChild);
// toma en cuenta texto y espacios
// otras formas de arreglarlo son:
console.log(listaToppings.children[0]);
console.log(listaToppings.firstElementChild);
console.log(listaToppings.lastElementChild);

// nodos hermanos

console.log(listaToppings.previousElementSibling);
console.log(listaToppings.nextElementSibling);
console.log(listaToppings.previousSibling); // usa nodos

// EVENTOS

// EVENTOS EN HTML

// onclick es el Event Listener (no es una forma practica)
// Event Handler:
function mostrarClic(topping) {
    console.log('Clic en ' + topping);
}

// addEventListener

const albahaca = document.getElementById('albahaca');
albahaca.addEventListener('click', function (e) {
    console.log('Clic en ' + e.target.innerText);
    // event guarda el target
    // se usa una funcion anonima
});
// se puede definir directamente aqui la funcion event handler
// la funcion recibe como parametro en event
// se usa esta forma en funciones pequenias

// Una forma mas eficiente seria:
//const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
for (const topping of toppingsNaranja) {

    topping.addEventListener('click', (e) => {
        console.log('Clic en ' + e.target.innerText);
    });

}
// uso de funciones flecha






