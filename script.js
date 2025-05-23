function mostrarFormulario() {
  const op = document.getElementById("operacion").value;
  const contenedor = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let html = "";

  switch (op) {
    case "velocidad":
      html = `
        <input type="number" id="distancia" placeholder="Distancia (m)">
        <input type="number" id="tiempo" placeholder="Tiempo (s)">
        <button onclick="calcularVelocidad()">Calcular</button>
      `;
      break;
    case "aceleracion":
      html = `
        <input type="number" id="vf" placeholder="Velocidad final (m/s)">
        <input type="number" id="vi" placeholder="Velocidad inicial (m/s)">
        <input type="number" id="tiempoA" placeholder="Tiempo (s)">
        <button onclick="calcularAceleracion()">Calcular</button>
      `;
      break;
    case "fuerza":
      html = `
        <input type="number" id="masaF" placeholder="Masa (kg)">
        <input type="number" id="aceleracionF" placeholder="Aceleración (m/s²)">
        <button onclick="calcularFuerza()">Calcular</button>
      `;
      break;
    case "trabajo":
      html = `
        <input type="number" id="fuerzaT" placeholder="Fuerza (N)">
        <input type="number" id="distanciaT" placeholder="Distancia (m)">
        <button onclick="calcularTrabajo()">Calcular</button>
      `;
      break;
    case "potencia":
      html = `
        <input type="number" id="trabajoP" placeholder="Trabajo (J)">
        <input type="number" id="tiempoP" placeholder="Tiempo (s)">
        <button onclick="calcularPotencia()">Calcular</button>
      `;
      break;
    case "presion":
      html = `
        <input type="number" id="fuerzaPr" placeholder="Fuerza (N)">
        <input type="number" id="areaPr" placeholder="Área (m²)">
        <button onclick="calcularPresion()">Calcular</button>
      `;
      break;
    case "densidad":
      html = `
        <input type="number" id="masaD" placeholder="Masa (kg)">
        <input type="number" id="volumenD" placeholder="Volumen (m³)">
        <button onclick="calcularDensidad()">Calcular</button>
      `;
      break;
    case "energiaCinetica":
      html = `
        <input type="number" id="masaEc" placeholder="Masa (kg)">
        <input type="number" id="velocidadEc" placeholder="Velocidad (m/s)">
        <button onclick="calcularEnergiaCinetica()">Calcular</button>
      `;
      break;
    case "energiaPotencial":
      html = `
        <input type="number" id="masaEp" placeholder="Masa (kg)">
        <input type="number" id="alturaEp" placeholder="Altura (m)">
        <button onclick="calcularEnergiaPotencial()">Calcular</button>
      `;
      break;
    case "ohm":
      html = `
        <input type="number" id="corriente" placeholder="Corriente (A)">
        <input type="number" id="resistencia" placeholder="Resistencia (Ω)">
        <button onclick="calcularVoltaje()">Calcular</button>
      `;
      break;
    default:
      html = "";
  }

  contenedor.innerHTML = html;
}

// Funciones de cálculo
function calcularVelocidad() {
  const d = parseFloat(document.getElementById("distancia").value);
  const t = parseFloat(document.getElementById("tiempo").value);
  mostrarResultado(t === 0 ? "No se puede dividir por cero" : `${(d / t).toFixed(2)} m/s`);
}

function calcularAceleracion() {
  const vf = parseFloat(document.getElementById("vf").value);
  const vi = parseFloat(document.getElementById("vi").value);
  const t = parseFloat(document.getElementById("tiempoA").value);
  mostrarResultado(t === 0 ? "No se puede dividir por cero" : `${((vf - vi) / t).toFixed(2)} m/s²`);
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById("masaF").value);
  const a = parseFloat(document.getElementById("aceleracionF").value);
  mostrarResultado(`${(m * a).toFixed(2)} N`);
}

function calcularTrabajo() {
  const f = parseFloat(document.getElementById("fuerzaT").value);
  const d = parseFloat(document.getElementById("distanciaT").value);
  mostrarResultado(`${(f * d).toFixed(2)} J`);
}

function calcularPotencia() {
  const w = parseFloat(document.getElementById("trabajoP").value);
  const t = parseFloat(document.getElementById("tiempoP").value);
  mostrarResultado(t === 0 ? "No se puede dividir por cero" : `${(w / t).toFixed(2)} W`);
}

function calcularPresion() {
  const f = parseFloat(document.getElementById("fuerzaPr").value);
  const a = parseFloat(document.getElementById("areaPr").value);
  mostrarResultado(a === 0 ? "No se puede dividir por cero" : `${(f / a).toFixed(2)} Pa`);
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById("masaD").value);
  const v = parseFloat(document.getElementById("volumenD").value);
  mostrarResultado(v === 0 ? "No se puede dividir por cero" : `${(m / v).toFixed(2)} kg/m³`);
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById("masaEc").value);
  const v = parseFloat(document.getElementById("velocidadEc").value);
  mostrarResultado(`${(0.5 * m * v * v).toFixed(2)} J`);
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById("masaEp").value);
  const h = parseFloat(document.getElementById("alturaEp").value);
  const g = 9.8;
  mostrarResultado(`${(m * g * h).toFixed(2)} J`);
}

function calcularVoltaje() {
  const i = parseFloat(document.getElementById("corriente").value);
  const r = parseFloat(document.getElementById("resistencia").value);
  mostrarResultado(`${(i * r).toFixed(2)} V`);
}

function mostrarResultado(texto) {
  document.getElementById("resultado").innerText = texto;
}
