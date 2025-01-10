import { tema } from "./tema.js";

export function actualizarImagen() {
  // const imgCabecera = document.querySelector(".img-cabecera");
  const imgCabecera = document.querySelector(".imagen-cliente img");

  if (window.matchMedia("(min-width: 768px)").matches) {
    // Pantalla mayor o igual a 768px
    // imgCabecera.src = "public/promo_mes_2_4.webp";

    localStorage.getItem("tema") === "claro"
      ? (imgCabecera.src = "public/imagen 2c.png")
      : (imgCabecera.src = "public/imagen 2o.png");
  } else {
    // Pantalla menor a 768px
    // imgCabecera.src = "public/promo_mes_2_4_mobile.webp";
    localStorage.getItem("tema") === "claro"
      ? (imgCabecera.src = "public/imagen 1c.png")
      : (imgCabecera.src = "public/imagen 1o.png");
  }
}

//actualizarImagen();

// Escuchar cambios en el tamaño de la pantalla
//window.addEventListener("resize", actualizarImagen);

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

/* Opacar */

(function aplicarTemaInicial() {
  const temaGuardado = localStorage.getItem("tema") || "oscuro"; // Oscuro por defecto
  document.body.classList.add(temaGuardado);
})();

document.addEventListener("DOMContentLoaded", () => {
  tema(); // Habilitar funcionalidad para cambiar el tema
});