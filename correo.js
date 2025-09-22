
const regexCorreo = /^(?:[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+<[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>|[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const campos = {
  de: document.getElementById("de"),
  para: document.getElementById("para"),
  cc: document.getElementById("cc"),
  cco: document.getElementById("cco"),
  asunto: document.getElementById("asunto"),
  mensaje: document.getElementById("mensaje"),
  archivo: document.getElementById("archivo")
};

// sugerencias de dominio
const dominios = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "icloud.com"];

// Funciones de validación
function validarCampo(campo, regex, errorId) {
  if (!regex.test(campo.value.trim())) {
    document.getElementById(errorId).style.display = "block";
    return false;
  } else {
    document.getElementById(errorId).style.display = "none";
    return true;
  }
}

function validarRequerido(campo, errorId) {
  if (campo.value.trim() === "") {
    document.getElementById(errorId).style.display = "block";
    return false;
  } else {
    document.getElementById(errorId).style.display = "none";
    return true;
  }
}

function validarArchivo(campo, errorId) {
  const permitido = /\.(jpg|png|docx|pdf)$/i;
  if (!permitido.test(campo.value)) {
    document.getElementById(errorId).style.display = "block";
    return false;
  } else {
    document.getElementById(errorId).style.display = "none";
    return true;
  }
}

//dominios en campos de correo
function sugerirDominio(campo) {
  campo.addEventListener("input", function () {
    let valor = campo.value;
    if (valor.includes("@")) {
      let [parteLocal, dominioEscrito] = valor.split("@");
      if (dominioEscrito.length > 0) {
        let sugerencia = dominios.find(d => d.startsWith(dominioEscrito));
        if (sugerencia) {
          campo.setAttribute("list", campo.id + "-sugerencias");

          let datalist = document.getElementById(campo.id + "-sugerencias");
          if (!datalist) {
            datalist = document.createElement("datalist");
            datalist.id = campo.id + "-sugerencias";
            document.body.appendChild(datalist);
          }

          datalist.innerHTML = `<option value="${parteLocal}@${sugerencia}">`;
        }
      }
    }
  });
}

// sugerencias a todos los campos de correo
sugerirDominio(campos.de);
sugerirDominio(campos.para);
sugerirDominio(campos.cc);
sugerirDominio(campos.cco);

// Eventos blur para validar en tiempo real
for (let key in campos) {
  campos[key].onblur = () => {
    switch (key) {
      case "de": validarCampo(campos.de, regexCorreo, "errorDe"); break;
      case "para": validarCampo(campos.para, regexCorreo, "errorPara"); break;
      case "cc": validarCampo(campos.cc, regexCorreo, "errorCc"); break;
      case "cco": validarCampo(campos.cco, regexCorreo, "errorCco"); break;
      case "asunto": validarRequerido(campos.asunto, "errorAsunto"); break;
      case "mensaje": validarRequerido(campos.mensaje, "errorMensaje"); break;
      case "archivo": validarArchivo(campos.archivo, "errorArchivo"); break;
    }
  };
}

// Enviar formulario
document.getElementById("formCorreo").onsubmit = function(e) {
  e.preventDefault();

  let valido = true;
  valido &= validarCampo(campos.de, regexCorreo, "errorDe");
  valido &= validarCampo(campos.para, regexCorreo, "errorPara");
  valido &= validarCampo(campos.cc, regexCorreo, "errorCc");
  valido &= validarCampo(campos.cco, regexCorreo, "errorCco");
  valido &= validarRequerido(campos.asunto, "errorAsunto");
  valido &= validarRequerido(campos.mensaje, "errorMensaje");
  valido &= validarArchivo(campos.archivo, "errorArchivo");

  if (valido) {
    const resultado = `
      <h3>Datos del correo</h3>
      <p><strong>De:</strong> ${campos.de.value}</p>
      <p><strong>Para:</strong> ${campos.para.value}</p>
      <p><strong>CC:</strong> ${campos.cc.value}</p>
      <p><strong>CCO:</strong> ${campos.cco.value}</p>
      <p><strong>Asunto:</strong> ${campos.asunto.value}</p>
      <p><strong>Mensaje:</strong> ${campos.mensaje.value}</p>
      <p><strong>Archivo:</strong> ${campos.archivo.value.split("\\").pop()}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("resultado").style.display = "block";
  }
};
