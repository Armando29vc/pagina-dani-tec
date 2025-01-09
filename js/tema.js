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

  tema.addEventListener("click", e =>
    localStorage.getItem("tema") === "oscuro" ? claro() : oscuro()
  );
}


