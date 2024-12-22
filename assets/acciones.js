function actualizarImagen() {
  // const imgCabecera = document.querySelector(".img-cabecera");
  const imgCabecera = document.querySelector(".imagen-cliente img");
  
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Pantalla mayor o igual a 768px
    // imgCabecera.src = "public/promo_mes_2_4.webp";
    imgCabecera.src = "public/image 2.png";
  } else {
    // Pantalla menor a 768px
    // imgCabecera.src = "public/promo_mes_2_4_mobile.webp";
    imgCabecera.src = "public/image 1.png";
  }
}

actualizarImagen();

// Escuchar cambios en el tamaño de la pantalla
window.addEventListener("resize", actualizarImagen);


const barra = document.querySelector(".barra");
const barraModal = document.querySelector(".barra-lateral");
const barraCerrar = document.querySelector(".cerrar");

const contenedor = document.querySelector("body");

barra.addEventListener("click", () => {
  barraModal.classList.toggle("activo");
  contenedor.style.overflow = "hidden";
});

barraCerrar.addEventListener("click", e => {
  barraModal.classList.remove("activo");
  contenedor.style.removeProperty("overflow");
});

document.addEventListener("click", e => {
  if (!barraModal.contains(e.target) && !barra.contains(e.target)) {
    barraModal.classList.remove("activo");
    contenedor.style.removeProperty("overflow");
  }
});

barraModal.addEventListener("click", e => {
  e.stopPropagation();
});

/* Opacar */
