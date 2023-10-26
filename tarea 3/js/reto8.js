document.getElementById("btn-login").addEventListener("click", login);


/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://embed.lottiefiles.com/animation/62623"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/?file=3043b45d-a0bd-43bc-b483-8a063be839cb/Vy6E25lQVf.json"></iframe>"></iframe>',

            }).then(() => {
                window.location.href = "https://ucenfotec.ac.cr/";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}