// Diccionario de palabras con significado y ejemplos
const palabrasInfo = {
    'Ser': {
        significado: 'Existir o tener una cualidad o identidad.',
        ejemplos: ['El ser humano es racional.', 'Quiero ser mejor cada día.']
    },
    'Estar': {
        significado: 'Hallarse en un lugar, situación o estado.',
        ejemplos: ['Estoy en clase.', 'Ella está cansada.']
    },
    'Tener': {
        significado: 'Poseer algo, ya sea un objeto o una cualidad.',
        ejemplos: ['Tengo un coche nuevo.', 'Ella tiene paciencia.']
    },
    'Hacer': {
        significado: 'Realizar una acción o fabricar algo.',
        ejemplos: ['Voy a hacer la tarea.', 'Hicimos un pastel juntos.']
    },
    'Ir': {
        significado: 'Moverse de un lugar a otro.',
        ejemplos: ['Voy a ir al mercado.', 'Ellos irán al cine.']
    },
    'Poder': {
        significado: 'Ser capaz o tener la facultad para hacer algo.',
        ejemplos: ['Puedo ayudarte con eso.', 'No pudo abrir la puerta.']
    },
    'Saber': {
        significado: 'Tener conocimiento sobre algo.',
        ejemplos: ['Sé hablar inglés.', 'Ella sabe la respuesta.']
    },
    'Decir': {
        significado: 'Expresar algo con palabras.',
        ejemplos: ['Dijo la verdad.', 'Tengo algo que decirte.']
    },
    'Ver': {
        significado: 'Percibir algo con la vista.',
        ejemplos: ['Veo la luna en el cielo.', '¿Viste esa película?']
    },
    'Querer': {
        significado: 'Desear algo o a alguien.',
        ejemplos: ['Quiero aprender más.', 'Ella quiere un helado.']
    },
    'Hablar': {
        significado: 'Articular sonidos para comunicarse.',
        ejemplos: ['Hablamos por teléfono.', 'Habla muy rápido.']
    },
    'Dar': {
        significado: 'Entregar algo a otra persona.',
        ejemplos: ['Me dio un regalo.', 'Voy a dar una explicación.']
    },
    'Poner': {
        significado: 'Colocar algo en un lugar.',
        ejemplos: ['Pon el libro en la mesa.', 'Puse agua en el vaso.']
    },
    'Venir': {
        significado: 'Acercarse al lugar donde se encuentra el hablante.',
        ejemplos: ['Ven a mi casa.', 'Ella vino tarde.']
    },
    'Llamar': {
        significado: 'Pronunciar el nombre de una persona para que atienda.',
        ejemplos: ['Me llamó por teléfono.', 'Voy a llamar a mi hermano.']
    },
    'Comer': {
        significado: 'Ingerir alimentos.',
        ejemplos: ['Comí arroz con pollo.', 'Vamos a comer juntos.']
    },
    'Beber': {
        significado: 'Ingerir líquidos.',
        ejemplos: ['Bebo agua todos los días.', 'Ella bebió jugo de naranja.']
    },
    'Dormir': {
        significado: 'Estar en estado de reposo inconsciente.',
        ejemplos: ['Dormí ocho horas.', 'El bebé está durmiendo.']
    },
    'Entender': {
        significado: 'Comprender el significado de algo.',
        ejemplos: ['No entiendo la pregunta.', 'Entendí la explicación.']
    },
    'Llegar': {
        significado: 'Alcanzar un destino.',
        ejemplos: ['Llegamos temprano.', '¿A qué hora llegarás?']
    },
    'Empezar': {
        significado: 'Iniciar una acción o proceso.',
        ejemplos: ['Voy a empezar el proyecto.', 'La clase empieza a las 8.']
    },
    'Terminar': {
        significado: 'Dar fin o concluir algo.',
        ejemplos: ['Terminé la tarea.', 'La película terminó tarde.']
    },
    'Persona': {
        significado: 'Ser humano, individuo.',
        ejemplos: ['Había muchas personas en la plaza.', 'Cada persona es única.']
    },
    'Hombre': {
        significado: 'Ser humano de sexo masculino.',
        ejemplos: ['Ese hombre es doctor.', 'Conocí a un hombre amable.']
    },
    'Mujer': {
        significado: 'Ser humano de sexo femenino.',
        ejemplos: ['Esa mujer es ingeniera.', 'La mujer habló con claridad.']
    },
    'Niño': {
        significado: 'Persona que se encuentra en la infancia.',
        ejemplos: ['El niño juega en el parque.', 'Ese niño tiene cinco años.']
    },
    'Amigo': {
        significado: 'Persona con la que se tiene una relación de amistad.',
        ejemplos: ['Mi amigo vino a visitarme.', 'Hicimos nuevos amigos.']
    },
    'Familia': {
        significado: 'Conjunto de personas unidas por lazos de parentesco.',
        ejemplos: ['Pasamos tiempo en familia.', 'La familia es importante.']
    },
    'Casa': {
        significado: 'Edificio o construcción destinada a la vivienda.',
        ejemplos: ['Mi casa es grande.', 'Vivimos en una casa pequeña.']
    },
    'Ciudad': {
        significado: 'Población grande y con gran cantidad de habitantes.',
        ejemplos: ['Madrid es una ciudad hermosa.', 'La ciudad tiene muchos edificios.']
    },
    'País': {
        significado: 'Territorio geográfico que constituye una nación.',
        ejemplos: ['España es un país europeo.', 'Mi país tiene hermosas playas.']
    },
    'Mundo': {
        significado: 'El planeta Tierra.',
        ejemplos: ['El mundo es diverso.', 'Quiero viajar por el mundo.']
    },
    'Día': {
        significado: 'Período de 24 horas.',
        ejemplos: ['Hoy es un buen día.', 'El día tiene sol.']
    },
    'Noche': {
        significado: 'Período de oscuridad.',
        ejemplos: ['La noche es tranquila.', 'Salimos de noche.']
    },
    'Semana': {
        significado: 'Período de siete días consecutivos.',
        ejemplos: ['La semana tiene siete días.', 'Esta semana fue difícil.']
    },
    'Tiempo': {
        significado: 'La duración de las cosas sujetas a cambio.',
        ejemplos: ['El tiempo pasa rápido.', 'No tengo tiempo suficiente.']
    },
    'Agua': {
        significado: 'Líquido transparente e incoloro, esencial para la vida.',
        ejemplos: ['El agua es vital.', 'Bebo agua fría.']
    },
    'Comida': {
        significado: 'Cualquier sustancia comestible.',
        ejemplos: ['La comida está lista.', 'Me gusta la comida italiana.']
    },
    'Dinero': {
        significado: 'Medio de pago y de intercambio.',
        ejemplos: ['Necesito dinero para el viaje.', 'Gané dinero extra.']
    },
    'Trabajo': {
        significado: 'Actividad que se realiza para obtener un beneficio.',
        ejemplos: ['Tengo mucho trabajo.', 'Ella busca trabajo nuevo.']
    },
    'Coche': {
        significado: 'Vehículo para transportarse.',
        ejemplos: ['Compré un coche rojo.', 'El coche está estacionado.']
    },
    'Libro': {
        significado: 'Conjunto de hojas unidas con un texto escrito.',
        ejemplos: ['Leí un libro interesante.', 'Ese libro es de historia.']
    },
    'Color': {
        significado: 'Cualidad de la luz que el ojo percibe.',
        ejemplos: ['El color azul me gusta.', 'Ese color es muy vivo.']
    },
    'Parte': {
        significado: 'Porción de un todo.',
        ejemplos: ['Leí la primera parte.', 'Cada parte es importante.']
    },
    'Problema': {
        significado: 'Cuestión que requiere una solución.',
        ejemplos: ['Tenemos un problema.', 'Resolvió el problema fácilmente.']
    },
    'Grande': {
        significado: 'Que tiene un tamaño considerable.',
        ejemplos: ['El edificio es grande.', 'Esa caja es muy grande.']
    },
    'Pequeño': {
        significado: 'Que tiene un tamaño reducido.',
        ejemplos: ['El perro es pequeño.', 'La casa es pequeña.']
    },
    'Bueno': {
        significado: 'Que tiene valor positivo o que es de calidad.',
        ejemplos: ['Este libro es bueno.', 'Ella es una buena persona.']
    },
    'Malo': {
        significado: 'Que tiene un valor negativo o que carece de calidad.',
        ejemplos: ['El clima es malo.', 'Ese chico tuvo un mal día.']
    },
    'Nuevo': {
        significado: 'Que se usa por primera vez.',
        ejemplos: ['Tengo un coche nuevo.', 'Ese celular es nuevo.']
    },
    'Viejo': {
        significado: 'Que tiene mucha edad o mucho tiempo.',
        ejemplos: ['Ese edificio es viejo.', 'El libro es muy viejo.']
    },
    'Alto': {
        significado: 'Que tiene una altura o estatura considerable.',
        ejemplos: ['El árbol es alto.', 'Ese chico es más alto que yo.']
    },
    'Bajo': {
        significado: 'Que tiene poca altura o estatura.',
        ejemplos: ['El muro es bajo.', 'Ella es baja de estatura.']
    },
    'Feliz': {
        significado: 'Que se siente alegre.',
        ejemplos: ['Hoy estoy feliz.', 'La noticia la hizo feliz.']
    },
    'Triste': {
        significado: 'Que siente pena o melancolía.',
        ejemplos: ['Ella estaba triste.', 'La película fue triste.']
    },
    'Fácil': {
        significado: 'Que no presenta dificultad para ser realizado.',
        ejemplos: ['El examen fue fácil.', 'Es fácil aprender esto.']
    },
    'Difícil': {
        significado: 'Que requiere esfuerzo o habilidad para ser realizado.',
        ejemplos: ['El problema es difícil.', 'Es difícil de entender.']
    },
    'Rápido': {
        significado: 'Que se mueve a gran velocidad.',
        ejemplos: ['El coche es rápido.', 'Corrió muy rápido.']
    },
    'Lento': {
        significado: 'Que se mueve con poca velocidad.',
        ejemplos: ['El tren es lento.', 'Caminó lentamente.']
    },
    'Caliente': {
        significado: 'Que tiene una temperatura elevada.',
        ejemplos: ['El café está caliente.', 'El clima es muy caliente.']
    },
    'Frío': {
        significado: 'Que tiene una temperatura baja.',
        ejemplos: ['Hace frío hoy.', 'El agua está fría.']
    },
    'Cansado': {
        significado: 'Que siente falta de energía o fatiga.',
        ejemplos: ['Estoy cansado.', 'Se siente cansada después de correr.']
    },
    'Fuerte': {
        significado: 'Que tiene gran fuerza física.',
        ejemplos: ['Él es fuerte.', 'La tormenta fue fuerte.']
    },
    'Débil': {
        significado: 'Que tiene poca fuerza.',
        ejemplos: ['El niño es débil.', 'Me siento débil hoy.']
    },
    'Amable': {
        significado: 'Que se comporta de manera agradable y cortés.',
        ejemplos: ['Ella es muy amable.', 'Gracias por ser amable.']
    },
    'Aquí': {
        significado: 'En este lugar.',
        ejemplos: ['Estoy aquí.', 'Ven aquí ahora.']
    },
    'Ahora': {
        significado: 'En este momento.',
        ejemplos: ['Lo haré ahora.', 'Estamos ocupados ahora.']
    },
    'Hoy': {
        significado: 'En el día presente.',
        ejemplos: ['Hoy es lunes.', 'Hoy vamos a salir.']
    },
    'Ayer': {
        significado: 'En el día anterior a hoy.',
        ejemplos: ['Ayer llovió mucho.', 'Salimos ayer al cine.']
    },
    'Siempre': {
        significado: 'En todo momento.',
        ejemplos: ['Siempre te apoyaré.', 'Él siempre llega temprano.']
    },
    'Nunca': {
        significado: 'En ningún momento.',
        ejemplos: ['Nunca lo olvidaré.', 'Ella nunca miente.']
    },
    'Mucho': {
        significado: 'En gran cantidad.',
        ejemplos: ['Tengo mucho trabajo.', 'Me gusta mucho este lugar.']
    },
    'Poco': {
        significado: 'En pequeña cantidad.',
        ejemplos: ['Tengo poco dinero.', 'Queda poco tiempo.']
    },
    'Bien': {
        significado: 'De manera correcta o satisfactoria.',
        ejemplos: ['Lo hiciste bien.', 'Me siento bien hoy.']
    },
    'Mal': {
        significado: 'De manera incorrecta o insatisfactoria.',
        ejemplos: ['Lo hizo mal.', 'Me siento mal hoy.']
    },
    'Sí': {
        significado: 'Expresión para afirmar algo.',
        ejemplos: ['Sí, estoy de acuerdo.', '¿Quieres café? Sí.']
    },
    'No': {
        significado: 'Expresión para negar algo.',
        ejemplos: ['No quiero salir.', 'Dijo que no vendría.']
    },
    'Con': {
        significado: 'Indica compañía o medio.',
        ejemplos: ['Salí con mis amigos.', 'Cortó el papel con tijeras.']
    },
    'Sin': {
        significado: 'Indica ausencia o falta de algo.',
        ejemplos: ['Estoy sin dinero.', 'Lo hizo sin ayuda.']
    },
    'Para': {
        significado: 'Indica propósito, destino o destinatario.',
        ejemplos: ['Es un regalo para ti.', 'Estudia para aprender.']
    },
    'Pero': {
        significado: 'Conjunción que introduce una objeción o contraste.',
        ejemplos: ['Quiero ir, pero no puedo.', 'Es caro, pero bueno.']
    }
};


// Lista de palabras
let listaPalabras = Object.keys(palabrasInfo);

// Inicialización
function iniciar() {
    cargarLista();
    document.getElementById("txtword").addEventListener("keyup", buscar);
    document.getElementById("btnSignificado").addEventListener("click", mostrarSignificado);

    // Doble clic en lista
    document.getElementById("lstwords").addEventListener("dblclick", function () {
        document.getElementById("txtword").value = this.value;
        mostrarSignificado();
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
        if (p.toLowerCase().includes(str)) {
            lista.add(new Option(p));
        }
    });
}

// Mostrar significado + ejemplos
function mostrarSignificado() {
    let lista = document.getElementById("lstwords");
    let seleccion = lista.value;
    let txtmeaning = document.getElementById("txtmeaning");

    if (seleccion && palabrasInfo[seleccion]) {
        txtmeaning.style.backgroundColor = "#d4edda"; // verde claro
        let info = palabrasInfo[seleccion];
        txtmeaning.value = `📖🔎 Significado:\n${info.significado}\n\n📝 Ejemplos:\n- ${info.ejemplos.join("\n- ")}`;
    } else {
        txtmeaning.style.backgroundColor = "#f8d7da"; // rojo claro
        txtmeaning.value = "Selecciona una palabra válida.";
    }
}

// Ejecutar al cargar
window.addEventListener("load", iniciar);
