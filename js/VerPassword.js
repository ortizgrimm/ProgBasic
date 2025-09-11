const password = document.getElementById("password");

// Logica para ver y ocultar contraseña
toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

function validar(){
    let password = document.getElementById("password").value;
    let lowercase = /[a-z]/.test(password);
    let uppercase = /[A-Z]/.test(password);
    let number = /\d/.test(password);
    let specialchar = /[\W_]/.test(password);
    if(password.lenght < 8){
        swal.fire(
            "Error",
            "La contraseña dene tener al menos 8 caracteres.",
            "error"
        );

        return
    }
    if(specialchar && lowercase && uppercase && number){
        swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones",
            "succes"
        );
    }
    else{
        swal.fire({
            icon: "error",
            tittle: "Contraseña Invalida",
            html:`
            <ul style="text-align:left; margin-left:20px;">
                <li>${number ? "✔" : "❌" } Al menos un número</li>
                <li>${lowercase ? "✔" : "❌" } Al menos una minuscula</li>
                <li>${uppercase ? "✔" : "❌" } Al menos una Mayúscula</li>
                <li>${specialchar ? "✔" : "❌" } Al menos un caracter especial</li>
            </ul>
            `
        });
    }
}
