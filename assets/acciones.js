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

actualizarImagen();

// Escuchar cambios en el tamaño de la pantalla
window.addEventListener("resize", actualizarImagen);

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

document.addEventListener("DOMContentLoaded", e => {
  // Si no hay tema guardado, establecer el tema claro por defecto
  if (localStorage.getItem("tema") === null) {
    localStorage.setItem("tema", "claro");
  }

  // Aplicar el tema guardado en localStorage
  if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    document.body.classList.remove("oscuro");
  } else {
    document.body.classList.add("oscuro");
    document.body.classList.remove("claro");
  }

  // Llamar a la función para permitir cambiar el tema
  tema();
});
