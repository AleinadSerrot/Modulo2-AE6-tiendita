$(document).ready(function() {
    // Mensaje dinámico
    const mensaje = $("#mensajeFavorito");

    // Cuando se hace click en un botón de favorito
    $(".btn-favorito").on("click", function() {
        const producto = $(this).closest(".producto-item"); // Obtener el producto correspondiente
        
        // Alternar clase 'favorito'
        producto.toggleClass("favorito");
        
        // Cambiar el mensaje según si se agregó o quitó
        if (producto.hasClass("favorito")) {
            mensaje.text("Producto añadido a favoritos").fadeIn(300).delay(1000).fadeOut(500);
        } else {
            mensaje.text("Producto eliminado de favoritos").fadeIn(300).delay(1000).fadeOut(500);
        }
    });
});
