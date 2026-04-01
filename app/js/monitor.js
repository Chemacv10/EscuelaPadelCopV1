document.addEventListener("DOMContentLoaded", async () => {

  // PRUEBA DE CONEXIÓN
  const alumnos = await obtenerTabla("alumnos");
  console.log("Alumnos desde Backendless:", alumnos);
  
  const contenedor = document.querySelector("#lista-alumnos .contenido");

  if (alumnos.length === 0) {
    contenedor.innerHTML = "<p>No hay alumnos registrados.</p>";
  } else {
    contenedor.innerHTML = alumnos
      .map(a => `<p>• ${a.nombre} ${a.apellidos || ""}</p>`)
      .join("");
}

});


function cargarFecha() {
  const fecha = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  document.getElementById("fecha").textContent = fecha;
}

async function cargarPanel() {
  renderAlertas([
    "Juan R. → 3 faltas seguidas",
    "Lucía G. → Pago pendiente",
    "Grupo B → Nivel descompensado"
  ]);

  renderSugerencias([
    "Volea cruzada + desplazamiento",
    "Globo defensivo + transición",
    "Juego de red con presión"
  ]);

  renderClases([
    "18:00 — Grupo C (4 alumnos)",
    "19:30 — Grupo A (3 alumnos)",
    "20:30 — Iniciación (6 alumnos)"
  ]);

  renderKPIs({
    alumnos: 42,
    grupos: 6,
    asistencia: "89%",
    pagos: 12
  });

  renderRanking([
    "1. Sergio M. — 85%",
    "2. Marta C. — 78%",
    "3. Pablo R. — 72%"
  ]);
}

function renderAlertas(lista) {
  document.querySelector("#alertas .contenido").innerHTML =
    lista.map(a => `<p>• ${a}</p>`).join("");
}

function renderSugerencias(lista) {
  document.querySelector("#sugerencias .contenido").innerHTML =
    lista.map(a => `<p>• ${a}</p>`).join("");
}

function renderClases(lista) {
  document.querySelector("#clases .contenido").innerHTML =
    lista.map(a => `<p>${a}</p>`).join("");
}

function renderKPIs(k) {
  document.querySelector("#kpis .kpi-grid").innerHTML = `
    <div class="kpi"><strong>${k.alumnos}</strong><br>Alumnos</div>
    <div class="kpi"><strong>${k.grupos}</strong><br>Grupos</div>
    <div class="kpi"><strong>${k.asistencia}</strong><br>Asistencia</div>
    <div class="kpi"><strong>${k.pagos}</strong><br>Pagos</div>
  `;
}

function renderRanking(lista) {
  document.querySelector("#ranking .contenido").innerHTML =
    lista.map(a => `<p>${a}</p>`).join("");
}
