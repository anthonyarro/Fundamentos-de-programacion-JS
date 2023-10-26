function menu () {
    let seleccion = document.getElementById("opciones").value;

    //Usamos el ciclo switch de js para elegir las opciones deseadas
    //window.open() es un metodo al que se pasa una url para abrir
    //una nueva ventana
    // window.location.href = "servicios.html"




    switch (seleccion) {
        case "A":
            Swal.fire ({
                icon: "success",
                title: "Curso JavaScript",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,

            }).then (() => {
                window.location.href = "https://javascript.info/";

            });
            return;
            //window.open("retrato.html","_self");
            case "B":
            Swal.fire ({
                icon: "success",
                title: "Curso Python",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,

            }).then (() => {
                window.location.href = "https://www.udemy.com/course/curso-completo-de-python-desde-cero-hasta-experto/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.ES_cc.LATAM&utm_term=_._ag_121424001339_._ad_515898216146_._kw__._de_c_._dm__._pl__._ti_dsa-1190286617479_._li_9070298_._pd__._&matchtype=&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdqwJCElxz-Pycc6HYC9oY2nguP8v6-USkBtmvClqptJhCTKMgrXgi8aAu3xEALw_wcB";

            });
            return;
            //window.open("boda.html","_self");
            case "C":
            Swal.fire ({
                icon: "success",
                title: "Curso HTML y CSS",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,

            }).then (() => {
                window.location.href = "https://platzi.com/cursos/html-css/";

            });
            return;
            //window.open("paisaje.html","_self");
    }
}