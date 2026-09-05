const titulo = document.getElementById("titulo");
const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", function() {
    titulo.textContent = "Texto cambiado con exito";
    parrafo.style.color = "blue";

    alert("Has hecho clic en el botón correctamente");
});