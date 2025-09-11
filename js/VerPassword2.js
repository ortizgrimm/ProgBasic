const password = document.getElementById("password");
const vpassword = document.getElementById("vpassword");
const toggle_password = document.getElementById("toggle_password");
const toggle_vpassword = document.getElementById("toggle_vpassword");
const btn_validar = document.getElementById("btn_validar");

// Lógica para ver y ocultar contraseña
toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

toggle_vpassword.addEventListener("click", () => {
    const type = vpassword.type === "password" ? "text" : "password";
    vpassword.type = type;
    toggle_vpassword.classList.toggle("fa-eye");
    toggle_vpassword.classList.toggle("fa-eye-slash");
});

function validar() {
    let passwordValue = password.value;
    let vpasswordValue = vpassword.value;

    // Validar longitud de la contraseña
    if (passwordValue.length < 8) {
        swal.fire(
            "Error",
            "La contraseña debe tener al menos 8 caracteres.",
            "error"
        );
        return;
    }

    // Validación de las expresiones regulares para los requisitos de la contraseña
    let lowercase = /[a-z]/.test(passwordValue);
    let uppercase = /[A-Z]/.test(passwordValue);
    let number = /\d/.test(passwordValue);
    let specialchar = /[\W_]/.test(passwordValue);

    // Verificamos si todos los requisitos se cumplen
    if (lowercase && uppercase && number && specialchar) {
        swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones.",
            "success"
        );
    } else {
        // Mostrar qué condiciones no se cumplieron
        let missingConditions = `
        <ul style="text-align:left; margin-left:20px;">
            <li>${number ? "✔" : "❌" } Al menos un número</li>
            <li>${lowercase ? "✔" : "❌" } Al menos una minúscula</li>
            <li>${uppercase ? "✔" : "❌" } Al menos una mayúscula</li>
            <li>${specialchar ? "✔" : "❌" } Al menos un caracter especial</li>
        </ul>
        `;
        swal.fire({
            icon: "error",
            title: "Contraseña Inválida",
            html: missingConditions
        });
    }
}

// Función para comprobar que las contraseñas coinciden
function verificarCoincidencia() {
    if (password.value !== vpassword.value) {
        btn_validar.disabled = true;
        password.style.borderColor = "red";
        vpassword.style.borderColor = "red";
    } else {
        btn_validar.disabled = false;
        password.style.borderColor = "green";
        vpassword.style.borderColor = "green";
    }
}

// Verificar coincidencia de contraseñas mientras el usuario escribe
password.addEventListener("input", verificarCoincidencia);
vpassword.addEventListener("input", verificarCoincidencia);
