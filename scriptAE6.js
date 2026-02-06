$(document).ready(function() {
    // 1) detectar click en favoritos
    $('.btn-favorito').on('click', function() {
        
        // buscar la clase clase 'tarjeta-producto'
        const tarjetaProducto = $(this).closest('.tarjeta-producto');

        // obtener el nombre del eeveelution
        const nombreProducto = tarjetaProducto.find('.nombre-eeveelution').text();  //en un comienzo no me resultó que apareciera el nombre, pero pude hacerlo
        const contenedorMensaje = $('#mensaje-favorito');

    // 2) la lógica de añadir/eliminar favoritos (toggle)
        if (tarjetaProducto.hasClass('producto-favorito')) {
            
            // eliminar de favoritos
            tarjetaProducto.removeClass('producto-favorito'); 
            $(this).removeClass('active').text('Favorito'); 
            
            // mensaje con color morado (definido en CSS)
            contenedorMensaje
                .text(`¡${nombreProducto} eliminado de favoritos!`)
                .css('background-color', '#770972ff')
                .stop().fadeIn().delay(2000).fadeOut();

        } else {
            
            // añadir a favoritos
            tarjetaProducto.addClass('producto-favorito'); 
            $(this).addClass('active').text('❤ En Favoritos'); 
            
            // mensaje con color rosa (definido en CSS)
            contenedorMensaje
                .text(`¡${nombreProducto} añadido a favoritos!`)
                .css('background-color', '#c51972ff')
                .stop().fadeIn().delay(2000).fadeOut();
        }
    });

    // 3) configuración del carrusel
         $('#carruselEevee').carousel({
        interval: 2500,
        pause: 'hover'
    });
        $('.formulario-estilizado').on('submit', function(evento) {
        evento.preventDefault(); // evita que la página suba

    // 4) formulario capturar datos
    const nombre = $('.input-nombre').val().trim();
    const email = $('.input-email').val().trim();
    const mensaje = $('.input-mensaje').val().trim();
    const alerta = $('#mensaje-favorito');

    if (nombre === "" || email === "" || mensaje === "") {
        // error, campos vacíos
        alerta.text("👻Se te olvidó rellenar todos los campos")
              .css({'background-color': '#ff4d4d', 'color': 'white'})
              .stop().fadeIn().delay(3000).fadeOut();
    } else {
        // todo ok
        alerta.text(`¡Gracias! Mensaje enviado con éxito.`)
              .css({'background-color': '#28a745', 'color': 'white'})
              .stop().fadeIn().delay(3000).fadeOut();
        
        
        $('.formulario-estilizado')[0].reset();
    }
});
    
});