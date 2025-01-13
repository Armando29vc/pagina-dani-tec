const textoVelocidad = document.querySelector("#animar-texto");
const texto = textoVelocidad.textContent;
textoVelocidad.innerHTML = "";

const div4 = document.querySelector(".div-4");

export default function animacionVelocidad() {
  texto.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    textoVelocidad.appendChild(span);

    if (index === texto.length - 1) {
      span.addEventListener("animationend", () => {
        div4.style.display = "block";
        div4.style.animation = "aparecer 0.5s ease-out forwards";
      });
    }
  });
}
