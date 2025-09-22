// Diccionario de palabras y significados
const palabrasInfo = {
    'Ser': 'Existir o tener una cualidad o identidad.',
    'Estar': 'Hallarse en un lugar, situación o estado.',
    'Tener': 'Poseer algo, ya sea un objeto o una cualidad.',
    'Hacer': 'Realizar una acción o fabricar algo.',
    'Ir': 'Moverse de un lugar a otro.',
    'Poder': 'Ser capaz o tener la facultad para hacer algo.',
    'Saber': 'Tener conocimiento sobre algo.',
    'Decir': 'Expresar algo con palabras.',
    'Ver': 'Percibir algo con la vista.',
    'Querer': 'Desear algo o a alguien.',
    'Hablar': 'Articular sonidos para comunicarse.',
    'Dar': 'Entregar algo a otra persona.',
    'Poner': 'Colocar algo en un lugar.',
    'Venir': 'Acercarse al lugar donde se encuentra el hablante.',
    'Llamar': 'Pronunciar el nombre de una persona para que atienda.',
    'Comer': 'Ingerir alimentos.',
    'Beber': 'Ingerir líquidos.',
    'Dormir': 'Estar en estado de reposo inconsciente.',
    'Entender': 'Comprender el significado de algo.',
    'Llegar': 'Alcanzar un destino.',
    'Empezar': 'Iniciar una acción o proceso.',
    'Terminar': 'Dar fin o concluir algo.',
    'Persona': 'Ser humano, individuo.',
    'Amigo': 'Persona con la que se tiene una relación de amistad.',
    'Familia': 'Conjunto de personas unidas por lazos de parentesco.',
    'Casa': 'Edificio o construcción destinada a la vivienda.',
    'Ciudad': 'Población grande y con gran cantidad de habitantes.',
    'País': 'Territorio geográfico que constituye una nación.',
    'Mundo': 'El planeta Tierra.',
    'Tiempo': 'La duración de las cosas sujetas a cambio.',
    'Agua': 'Líquido transparente e incoloro, esencial para la vida.',
    'Dinero': 'Medio de pago y de intercambio.',
    'Trabajo': 'Actividad que se realiza para obtener un beneficio.',
    'Libro': 'Conjunto de hojas unidas con un texto escrito.',
    'Problema': 'Cuestión que requiere una solución.',
    'Feliz': 'Que se siente alegre.',
    'Triste': 'Que siente pena o melancolía.',
    'Amable': 'Que se comporta de manera agradable y cortés.',
    'Siempre': 'En todo momento.',
    'Nunca': 'En ningún momento.',
    'Sí': 'Expresión para afirmar algo.',
    'No': 'Expresión para negar algo.'
};

// Convertir las claves del objeto en un array
let listaPalabras = Object.keys(palabrasInfo);

// Inicialización de eventos
function iniciar() {
    cargarLista();

    // Evento de búsqueda en vivo
    document.getElementById("txtword").addEventListener("keyup", buscar);

    // Evento de mostrar significado
    document.getElementById("btnSignificado").addEventListener("click", mostrarSignificado);

    // Evento doble clic en lista → copiar palabra al input
    document.getElementById("lstwords").addEventListener("dblclick", function () {
        let palabra = this.options[this.selectedIndex].text;
        document.getElementById("txtword").value = palabra;
    });
}

// Cargar lista completa
function cargarLista() {
    let lista = document.getElementById("lstwords");
    lista.innerHTML = "";
    listaPalabras.forEach(p => {
        lista.add(new Option(p));
    });
}

// Buscar coincidencias
function buscar() {
    let str = document.getElementById("txtword").value.toLowerCase();
    let lista = document.getElementById("lstwords");
    lista.innerHTML = "";

    listaPalabras.forEach(p => {
        if (p.toLowerCase().startsWith(str)) {
            lista.add(new Option(p));
        }
    });
}

// Mostrar significado
function mostrarSignificado() {
    let lista = document.getElementById("lstwords");
    let seleccion = lista.value;

    if (seleccion && palabrasInfo[seleccion]) {
        document.getElementById("txtmeaning").value = palabrasInfo[seleccion];
    } else {
        document.getElementById("txtmeaning").value = "Selecciona una palabra válida.";
    }
}

// Ejecutar al cargar
window.addEventListener("load", iniciar);
