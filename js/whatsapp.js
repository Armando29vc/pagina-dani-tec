export default function whatsapp(e, enviar) {
  e.preventDefault();
  const mensaje = document.querySelector(".mensaje").value;

  if (!mensaje.trim()) {
    let alerta = document.querySelector(".fijo");
    if (!alerta) {
      alerta = document.createElement("DIV");
      alerta.classList.add("fijo");

      const divMensaje = document.createElement("DIV")
      divMensaje.classList.add("sec-alerta")
      divMensaje.textContent = "Por favor, agrega el mensaje";
      alerta.appendChild(divMensaje)

      const closeButton = document.createElement("DIV");
      closeButton.classList.add("sec-alerta");
      closeButton.textContent = "X"; // Símbolo de la "X"
      closeButton.addEventListener("click", function () {
        alerta.remove(); // Eliminar la alerta cuando se haga clic en "X"
      });

      alerta.appendChild(closeButton);

      const progressBar = document.createElement("DIV");
      progressBar.classList.add("barra-progreso");
      alerta.appendChild(progressBar);


      // Añadir la alerta al formulario
      enviar.appendChild(alerta);
      setTimeout(() => {
        alerta.remove();
      }, 3000); // 5000ms = 5 segundos
    }
    return;
  }
  const telefono= "529518848121"
  const api = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
  const newWindow = window.open(api, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
}
