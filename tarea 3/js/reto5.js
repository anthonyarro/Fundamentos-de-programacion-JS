"use strict"

//carga de la funcion determinarMontFinal usando la biblioteca de eventos JS
document.querySelector('#btnCalcular').addEventListener('click', determinarMontoFinal);

//carga de la funcion y declaro variables en cero 
function determinarMontoFinal() {
    let tiempo = '';
    let cantidad = 0;
    let montoFinal = 0;
    let costoTiempo = 0;
    

    /*conversiones usando el metodo querySelector*/
    /*queryselector puede invocar id y selectores HTML*/

    tiempo = document.querySelector('#tiempoComida').value;
    cantidad = Number(document.querySelector('#cantidadPersonas').value);

    //ciclo de JS que se usa para elegir opciones del equipo gamer
    switch (tiempo) {
        case 'd1':
            costoTiempo = 3500;
            break;
        case 'd2':
            costoTiempo = 1750;
            break;
        case 'd3':
            costoTiempo = 6000;
            break;
        case 'd4':
            costoTiempo = 3200;
            break;
        case 'd5':
            costoTiempo = 7500;
            break;
        default:
            costoTiempo = 0;
            break;
    }
    montoFinal = cantidad * costoTiempo
    
    //asignacion de valor a la variable del monto final.
    document.querySelector('#txtResultadoMontoFinal').value = montoFinal;
}

function btnlimpiar() {
    document.getElementById('cantidadPersonas').value = "";
    document.getElementById('tiempoComida').value = "";
    document.getElementById('txtResultadoMontoFinal').value = "";
}