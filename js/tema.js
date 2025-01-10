import { actualizarImagen } from "./acciones.js";

export function tema() {
  const botonTema = document.querySelector(".tema");
  const body = document.body;

  function cambiarTema(nuevoTema) {
    // Actualizar localStorage
    localStorage.setItem("tema", nuevoTema);

    // Aplicar el nuevo tema
    body.classList.remove("oscuro", "claro");
    body.classList.add(nuevoTema);
  }

  // Alternar entre temas al hacer clic
  botonTema.addEventListener("click", () => {
    const temaActual = localStorage.getItem("tema") || "oscuro";
    const nuevoTema = temaActual === "oscuro" ? "claro" : "oscuro";
    cambiarTema(nuevoTema);
  });
}

/* 

  (function (d, w, ls) {
    const $btn = d.querySelector(".theme-toggle");
    let prefersDark = w.matchMedia('(prefers-color-scheme: dark)').matches,

    function lightMode() {
      ls.setItem("theme", "light");
      d.body.classList.add("light");
      d.body.classList.remove("dark");
      $btn.innerHTML = lightIcon;
    }

    function darkMode() {
      ls.setItem("theme", "dark");
      d.body.classList.remove("light");
      d.body.classList.add("dark");
      $btn.innerHTML = darkIcon;
    }

    if (ls.getItem("theme") === null) {
      if (prefersDark) {
        ls.setItem("theme", "dark");
      } else {
        ls.setItem("theme", "light");
      }
    }

    if (ls.getItem("theme") === "dark") darkMode();
    if (ls.getItem("theme") === "light") lightMode();

    $btn.addEventListener("click", (e) => (ls.getItem("theme") === "dark") ? lightMode() : darkMode());
  })(document, window, localStorage);

*/
