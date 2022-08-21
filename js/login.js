const email = document.getElementById("email");
const password1 = document.getElementById("contraseña");

button.addEventListener( "click", function () {
    if (email.value !=="" && password1.value !=="") {
        showAlertSuccess()
    }
    else {showAlertError()

    }


})