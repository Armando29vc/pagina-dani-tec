import { actualizarImagen } from "./acciones.js";

export function tema() {
  const tema = document.querySelector(".tema");
  const body = document.body;

  function claro() {
    localStorage.setItem("tema", "claro");
    body.classList.add("claro");
    body.classList.remove("oscuro");
    actualizarImagen();
  }
  function oscuro() {
    localStorage.setItem("tema", "oscuro");
    body.classList.add("oscuro");
    body.classList.remove("claro");
    actualizarImagen();
  }
  // Configurar el tema por defecto
  const temaGuardado = localStorage.getItem("tema");
  if (!temaGuardado) {
    oscuro(); // Establecer tema oscuro por defecto
  } else if (temaGuardado === "claro") {
    claro();
  } else {
    oscuro();
  }

  tema.addEventListener("click", e =>
    localStorage.getItem("tema") === "oscuro" ? claro() : oscuro()
  );
}


