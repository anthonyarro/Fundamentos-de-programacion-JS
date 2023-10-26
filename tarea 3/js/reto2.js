"use strict";
var num = 1;

function incluir(){
    var nombreTxt = document.getElementById("nombre").value;
    var articulo = document.getElementById("articulo").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    let subtotal = cantidad * precio;
    let iva = subtotal * 0.13 ;
    let servicio = subtotal * 0.05;
    let total = subtotal + iva + servicio;
    //al hacer String o texto la asignacion se pone entre comillas el dato
    

    if(nombreTxt=="" || articulo == ""|| precio == "" || cantidad == ""){
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#bf15dc',
            text: 'Campos vacios. Intentar de nuevo por favor.',
            imageUrl:"imagenes/logo.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Logotipo de la empresa',
          })
          //manera sencilla de la alerta
        //alert ("Existen campos vacíos \n LA INFORMACIÓN NO FUE AGREGADA\n Intente de nuevo")
    }else{

        var datosTabla ="<td>"+num+"</td><td>"+nombreTxt+"</td><td>"+articulo+"</td><td>"+cantidad+"</td><td>"+precio+"</td><td>"+subtotal+"</td><td>"+iva+"</td><td>"+servicio+"</td><td>"+total;
        var agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;
        document.getElementById('tabla').appendChild(agregar);
        //incrementa el registro
        num++;
    };

    /*permite limpiar campos cuando se van agregando. sino quedan en los input registros y se mira mal*/
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
};



function limpiar(){
    num=1;
     //recarga la pagina web
    location.reload();
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("tabla").innerHTML = "";
}