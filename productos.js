const botones = document.querySelectorAll(".btnDetalle");
/*querySelectorAll(".btnDetalle") busca todos los elementos que tienen class="btnDetalle".*/
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        /*addEventListener le dice al botón que esté atento a un evento.*/
        const detalle = boton.nextElementSibling; 
        /*nextElementSibling es el elemento que está justo después del botón en el HTML. 
        En tu tarjeta es el <p class="detalle" hidden>.*/

        if (detalle.hidden) {
            detalle.hidden = false; 
            /*si esta oculto, lo mostramos*/
            boton.textContent = "Ocultar detalles";
        } else {
            detalle.hidden = true; 
            /*si esta visible, lo ocultamos*/
            boton.textContent = "Ver detalles";
        }
    });
});