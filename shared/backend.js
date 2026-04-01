// Configuración de Backendless
const APP_ID = "F36A6231-27B4-4309-985D-ABD6304CB7B9";
const API_KEY = "D78E2CAD-F316-464E-B22E-44CEEA2185DE";
const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/data`;

// ------------------------------
// FUNCIONES BÁSICAS
// ------------------------------

// Obtener todos los registros de una tabla
async function obtenerTabla(tabla) {
  const res = await fetch(`${BASE_URL}/${tabla}`);
  return res.json();
}

// Crear un registro en una tabla
async function crearRegistro(tabla, datos) {
  const res = await fetch(`${BASE_URL}/${tabla}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });
  return res.json();
}

// Actualizar un registro
async function actualizarRegistro(tabla, id, datos) {
  const res = await fetch(`${BASE_URL}/${tabla}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });
  return res.json();
}

// Borrar un registro
async function borrarRegistro(tabla, id) {
  const res = await fetch(`${BASE_URL}/${tabla}/${id}`, {
    method: "DELETE"
  });
  return res.json();
}
