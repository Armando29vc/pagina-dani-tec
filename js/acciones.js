const barra = document.querySelector(".barra");
const barraModal = document.querySelector(".barra-lateral");
const barraCerrar = document.querySelector(".cerrar");
let ocultar;

const contenedor = document.querySelector("body");

barra.addEventListener("click", () => {
  barraModal.classList.toggle("activo");

  if (!ocultar) {
    ocultar = document.createElement("div"); // Crear el div para el overlay
    ocultar.classList.add("opacar"); // Agregar la clase al overlay
    contenedor.appendChild(ocultar); // Agregar el overlay al body

    ocultar.addEventListener("click", () => {
      barraModal.classList.remove("activo");
      ocultar.remove();
      ocultar = null;
      contenedor.style.removeProperty("overflow");
    });
  }

  contenedor.style.overflow = "hidden";
  contenedor.style.overflowY = "auto";
});

barraCerrar.addEventListener("click", e => {
  barraModal.classList.remove("activo");
  ocultar.remove();
  ocultar = null;
  contenedor.style.removeProperty("overflow");
});

/* document.addEventListener("click", e => {
  if (!barraModal.contains(e.target) && !barra.contains(e.target)) {
    barraModal.classList.remove("activo");
    contenedor.style.removeProperty("overflow");
  }
}); */

barraModal.addEventListener("click", e => {
  e.stopPropagation();
});