import whatsapp from "./whatsapp.js";
import animacionVelocidad from "./velocidad.js";

animacionVelocidad()

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

//navegacion
document.querySelectorAll(".btn-nav").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto

    // Elimina la clase 'activo' de todos los botones
    document
      .querySelectorAll(".btn-nav")
      .forEach(btn => btn.classList.remove("actual"));

    // Añade la clase 'activo' al botón que fue clickeado
    button.classList.add("actual");

    const targetId = button.getAttribute("data-target"); // Obtiene el ID del destino
    const targetElement = document.querySelector(targetId); // Selecciona el elemento de destino

    if (targetElement) {
      const headerHeight = 65; // Altura de la cabecera fija

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight, // Ajuste para la cabecera
        behavior: "smooth",
      });
    }
  });
});

const enviar = document.querySelector(".form-contacto");

enviar?.addEventListener("submit", function (e) {
  whatsapp(e, enviar);
});

