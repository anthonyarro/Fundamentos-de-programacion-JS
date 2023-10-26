$("#r0").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Guitarra',
        text: 'La guitarra es un instrumento musical de la familia de los cordófonos, es decir los instrumentos que producen su sonido al hacer vibrar las cuerdas. Es un instrumento de cuerda pulsada, compuesto de una caja de resonancia, un mástil sobre el que va adosado el diapasón o trastero —generalmente con un agujero acústico en el centro de la tapa (boca)— y seis cuerdas.',
    });
});



$("#r1").click(function() {
    Swal.fire({
        title: 'Bateria',
        textAlign: 'right',
        icon: 'info',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<p class=""> La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales. </p>'
    });
});

 

$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Piano',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'El piano (abreviación de «pianoforte», palabra que en italiano está compuesta por los términos «piano», que significa «suave», y «forte», «fuerte») es un instrumento musical armónico, clasificado como instrumento de cuerda percutida por el sistema de clasificación tradicional, y según la clasificación de Hornbostel-Sachs es un cordófono simple. El músico que toca el piano se denomina pianista.',

    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Trompeta',
        icon: "info",
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
       text: "La trompeta es un instrumento musical de viento, que pertenece a la familia de los instrumentos de viento metal, fabricado en aleación de metal. El sonido se produce gracias a la vibración de los labios del intérprete en la parte denominada boquilla a partir de la columna del aire (flujo del aire)."
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Saxofón',
        icon: "info",
        text: 'El saxofón, también conocido como saxófono o simplemente saxo, es un instrumento musical cónico, de la familia de los instrumentos de viento-madera, generalmente hecho de latón, que consta de una boquilla con una caña simple al igual que el clarinete. ',

    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});