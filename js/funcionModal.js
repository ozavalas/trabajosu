$(document).ready(function (){
    // Manejar el envio de formulario
    $("#miFormulario").submit(function (e) {
        // Prevenir el envio del formulario Normal
        e.preventDefault();

        // Si el envio fue exitoso, active el modal
        $("#myModal").modal("show");
    });
    // Manejar el cierre modal
    $("#myModal").on("hidden.bs.modal", function() {
        // Redirigir a index.html despues de cerrar el modal
        window.location.href = "/index.html";
    });

});
