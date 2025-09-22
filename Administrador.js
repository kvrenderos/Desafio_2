let uso_cpu_simulado = 0;
let velocidad_cpu_simulada = 0;
let procesos_simulados = 0;
let subprocesos_simulados = 0;
let identificadores_simulados = 0;
let tiempo_activo_simulado = "8:22:57:48";
let velocidad_base = "1.40 GHz";
let nucleos = 12;
let sockets = 1;
let logicos = 20;
let memoria_total = 32;
let memoria_usada = 18;
let porcentaje_memoria = 56;
let uso_disco_simulado = 0;
let velocidad_ethernet = 0;

const iconSidebarItems = document.querySelectorAll(".icon-item");
const labelSidebarItems = document.querySelectorAll(".label-item");
const contenedor = document.getElementById("contenedor-metricas");
const datosAdicionales = document.getElementById("datos-adicionales");
const temaBtn = document.getElementById("tema-btn");
const body = document.body;

// Simulador
function simularMetrica() {
  uso_cpu_simulado = Math.round(2 + Math.random() * 28);
  velocidad_cpu_simulada = (1.4 + Math.random() * 1.9).toFixed(2);
  procesos_simulados = Math.round(100 + Math.random() * 190);
  subprocesos_simulados = Math.round(1500 + Math.random() * 2500);
  identificadores_simulados = Math.round(70000 + Math.random() * 90000);
  memoria_usada = (5.0 + Math.random() * 25).toFixed(1);
  porcentaje_memoria = Math.round((memoria_usada / memoria_total) * 100);
  uso_disco_simulado = Math.round(Math.random() * 10);
  velocidad_ethernet = (Math.random() * 100).toFixed(1);
}

function getMetricaHTML(section) {
  switch (section) {
    case "cpu":
      return `
            <div class="metric-title">CPU</div>
            <div class="metric-block">
                <div class="metric-box"><div class="metric-label">Uso</div><div class="metric-value">${uso_cpu_simulado}%</div></div>
                <div class="metric-box"><div class="metric-label">Velocidad</div><div class="metric-value">${velocidad_cpu_simulada} GHz</div></div>
                <div class="metric-box"><div class="metric-label">Procesos</div><div class="metric-value">${procesos_simulados}</div></div>
                <div class="metric-box"><div class="metric-label">Subprocesos</div><div class="metric-value">${subprocesos_simulados}</div></div>
                <div class="metric-box"><div class="metric-label">Identificadores</div><div class="metric-value">${identificadores_simulados}</div></div>
                <div class="metric-box"><div class="metric-label">Tiempo activo</div><div class="metric-value">${tiempo_activo_simulado}</div></div>
            </div>
        `;
    case "memoria":
      return `
            <div class="metric-title">Memoria</div>
            <div class="metric-block">
                <div class="metric-box"><div class="metric-label">En uso</div><div class="metric-value">${memoria_usada} GB</div></div>
                <div class="metric-box"><div class="metric-label">Disponible</div><div class="metric-value">${(memoria_total - memoria_usada).toFixed(1)} GB</div></div>
                <div class="metric-box"><div class="metric-label">Confirmada</div><div class="metric-value">6.1 GB</div></div>
                <div class="metric-box"><div class="metric-label">En caché</div><div class="metric-value">4.2 GB</div></div>
                <div class="metric-box"><div class="metric-label">Bloque paginado</div><div class="metric-value">1.2 GB</div></div>
                <div class="metric-box"><div class="metric-label">Bloque no paginado</div><div class="metric-value">550 MB</div></div>
            </div>
        `;
    case "discoC":
      return `
        <div class="metric-title">Disco 0 (C:)</div>
        <div class="metric-block">
            <div class="metric-box"><div class="metric-label">Tiempo de actividad</div><div class="metric-value">2d 6h 36m</div></div>
            <div class="metric-box"><div class="metric-label">Tiempo promedio de respuesta</div><div class="metric-value">4 ms</div></div>
            <div class="metric-box"><div class="metric-label">Velocidad de lectura</div><div class="metric-value">135 MB/s</div></div>
            <div class="metric-box"><div class="metric-label">Velocidad de escritura</div><div class="metric-value">120 MB/s</div></div>
        </div>
        `;
    case "ethernet1":
    case "ethernet2":
      return `
        <div class="metric-title">Ethernet</div>
        <div class="metric-block">
            <div class="metric-box"><div class="metric-label">Envíos</div><div class="metric-value">25.3 MB</div></div>
            <div class="metric-box"><div class="metric-label">Recepción</div><div class="metric-value">48.7 MB</div></div>
        </div>
        `;
    default:
      return `<div class="metric-title">Métrica no disponible</div>`;
  }
}

function actualizarDatosAdicionales(seccion) {
  let html = "";
  if (seccion === "cpu") {
    html = `
      <div class="dato-item"><div class="dato-etiqueta">Velocidad de base</div><div class="dato-valor">${velocidad_base}</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Sockets</div><div class="dato-valor">${sockets}</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Núcleos</div><div class="dato-valor">${nucleos}</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Procesadores lógicos</div><div class="dato-valor">${logicos}</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Virtualización</div><div class="dato-valor">Habilitado</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Cache L1</div><div class="dato-valor">1.0 MB</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Cache L2</div><div class="dato-valor">12.0 MB</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Cache L3</div><div class="dato-valor">25.0 MB</div></div>
    `;
  } else if (seccion === "memoria") {
    html = `
      <div class="dato-item"><div class="dato-etiqueta">Velocidad</div><div class="dato-valor">3200 MHz</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Ranuras usadas</div><div class="dato-valor">2 de 4</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Factor de forma</div><div class="dato-valor">DIMM</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Reservada para hardware</div><div class="dato-valor">512 MB</div></div>
    `;
  } else if (seccion === "discoC") {
    html = `
      <div class="dato-item"><div class="dato-etiqueta">Capacidad</div><div class="dato-valor">729 GB</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Con formato</div><div class="dato-valor">NTFS</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Disco del sistema</div><div class="dato-valor">Sí</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Archivo de paginación</div><div class="dato-valor">Sí</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Tipo</div><div class="dato-valor">SSD</div></div>
    `;
  } else if (seccion === "ethernet1") {
    html = `
      <div class="dato-item"><div class="dato-etiqueta">Nombre del adaptador</div><div class="dato-valor">Hyper-V Virtual Ethernet Adapter #2</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Tipo de conexión</div><div class="dato-valor">Virtual</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Dirección IPV4</div><div class="dato-valor">192.168.1.85</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Dirección IPV6</div><div class="dato-valor">fe80::abcd:ef12:3456:789a</div></div>
    `;
  } else if (seccion === "ethernet2") {
    html = `
      <div class="dato-item"><div class="dato-etiqueta">Nombre del adaptador</div><div class="dato-valor">Ethernet 2</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Tipo de conexión</div><div class="dato-valor">Cableada</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Dirección IPV4</div><div class="dato-valor">192.168.1.86</div></div>
      <div class="dato-item"><div class="dato-etiqueta">Dirección IPV6</div><div class="dato-valor">fe80::1234:5678:9abc:def0</div></div>
    `;
  } else {
    html = `<div>No hay datos adicionales disponibles.</div>`;
  }

  datosAdicionales.innerHTML = html;
}

function actualizarTextosCategorias(seccion) {
  document.getElementById("info-cpu").classList.add("oculto");
  document.getElementById("info-memoria").classList.add("oculto");
  document.getElementById("info-disco").classList.add("oculto");
  document.getElementById("info-ethernet").classList.add("oculto");

  if (seccion === "cpu") {
    document.getElementById("info-cpu").classList.remove("oculto");
  } else if (seccion === "memoria") {
    document.getElementById("info-memoria").classList.remove("oculto");
  } else if (seccion === "discoC") {
    document.getElementById("info-disco").classList.remove("oculto");
  } else if (seccion === "ethernet1" || seccion === "ethernet2") {
    document.getElementById("info-ethernet").classList.remove("oculto");
  }
}

function seleccionarSeccion(section) {
  iconSidebarItems.forEach((i) =>
    i.classList.toggle("active", i.getAttribute("data-section") === section)
  );
  labelSidebarItems.forEach((l) =>
    l.classList.toggle("active", l.getAttribute("data-section") === section)
  );
  simularMetrica();
  contenedor.innerHTML = getMetricaHTML(section);
  actualizarDatosAdicionales(section);
  actualizarTextosCategorias(section);
}

// Eventos
iconSidebarItems.forEach((item) =>
  item.addEventListener("click", () => {
    seleccionarSeccion(item.getAttribute("data-section"));
  })
);

labelSidebarItems.forEach((item) =>
  item.addEventListener("click", () => {
    seleccionarSeccion(item.getAttribute("data-section"));
  })
);

// Botón cambiar tema
temaBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Inicialización
window.onload = () => {
  seleccionarSeccion("cpu");
  setInterval(() => {
    const activeSection = [...iconSidebarItems].find((i) =>
      i.classList.contains("active")
    ).getAttribute("data-section");
    seleccionarSeccion(activeSection);
  }, 2000);
};
