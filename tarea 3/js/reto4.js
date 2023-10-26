// evento que carga la funcion automaticamente...
window.onload = function () {
    // instruccion que carga el logotipo principal
    document.getElementById("output-img").innerHTML = "<img src = 'imagenes/logo.jpg' class = 'img-fluid rounded' alt = 'logo' />";

    // evento que permite cambiar el objeto onchange
    document.getElementById("volcan").onchange = function (e) {
        //destino del valor selecionado por el usuario
        let n = e.target.value;
        //expresiones quee guardan las imagenes de los estadios y la informacion de cada uno...
        // las fotos se deben de guardar en una subcarpeta dentro de img llamada combo
        let imagen = "<img src = 'imagenes/combo/" + n + ".jpg' class = 'img/fluid img-thumbnail rounded' alt = 'volcan' />"
        let text = ["Volcan Arenal" ,
    "Volcan Rincon de la Vieja",
    "Volcan Irazu" ,
    "Volcan Poas",
    "Volcan Turrialba",
    "Volcan Miravalles",
    "Volcan Barva",
    "Volcan Orosi"
];

//salida de las imagenes y los textos informativos 
document.getElementById("output-img").innerHTML = imagen;
document.getElementById("output-txt").innerHTML = text[n - 1];

    };
};


//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src 'imagenes/logo.jpg' class = 'img-fluid rounded' alt = 'logo' />";
    document.getElementById("output-txt").innerHTML = "";
    
}