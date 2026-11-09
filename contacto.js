


//procesar los datos del formulario de contacto
//buscamos los elementos del formulario formContacto y el párrafo respuesta
const formContacto = document.getElementById("formContacto"); 
const respuesta = document.getElementById("respuesta");
//escuchamos el evento submit del formulario
formContacto.addEventListener("submit", function(event) {
    event.preventDefault(); //evita que se recargue la página al enviar el formulario
    //leemos los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    //aqui se debe validar los datos del formulario, por ejemplo que no estén vacíos, que el email tenga un formato válido, etc.
    //si todo está bien, se procesan los datos del formulario.
   
    //limpiamos el formulario
    formContacto.reset();
    //mostramos un mensaje de éxito en el párrafo respuesta
    mostrarMensaje("Gracias por contactarnos, " + nombre + ". Te responderemos a la brevedad.","exito");
});

formContacto.addEventListener("reset", function(event) {
    //limpiamos el párrafo respuesta al limpiar el formulario
    respuesta.textContent = "";
    respuesta.className = ""; //quitamos la clase de éxito o error
});

//funcion que muestra un texto en el párrafo respuesta cuando se carga la página
function mostrarMensaje(texto, tipo){
    respuesta.textContent = texto;
    respuesta.className = tipo; //tipo puede ser "exito" o "error"
}