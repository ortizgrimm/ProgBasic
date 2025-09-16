const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const toggle_password = document.getElementById("toggle_password");
const toggle_cpassword = document.getElementById("toggle_cpassword");

// Lógica para ver y ocultar contraseña
toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

toggle_cpassword.addEventListener("click", () => {
    const type = cpassword.type === "password" ? "text" : "password";
    cpassword.type = type;
    toggle_cpassword.classList.toggle("fa-eye");
    toggle_cpassword.classList.toggle("fa-eye-slash");
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnvalidar");

    btn.addEventListener("click", function () {
        // Obtener valores de los campos
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const genero = document.getElementById("genero").value;
        const tipo_id = document.getElementById("tipo_id").value;
        const identificacion = document.getElementById("identificacion").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;
        const celular = document.getElementById("celular").value;

        // Crear HTML para mostrar
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `
            <h3>Datos Registrados:</h3>
            <p><strong>Nombres:</strong> ${nombres}</p>
            <p><strong>Apellidos:</strong> ${apellidos}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Tipo de Identificación:</strong> ${tipo_id}</p>
            <p><strong>Número de Identificación:</strong> ${identificacion}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Celular:</strong> ${celular}</p>
        `;
    });
});

function validarYFormatearTexto(input) {
    // Reemplaza todo lo que no sea letras o espacios
    input.value = input.value
        .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "") // permite letras y espacios
        .replace(/\s+/g, " ")                   // convierte múltiples espacios en uno
        .trim();                                // elimina espacios al inicio/final

    // Capitaliza cada palabra
    input.value = input.value
        .toLowerCase()
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

function soloNumeros(e) {
    const key = e.key;
    // Permite números, teclas especiales y navegación (backspace, flechas, etc.)
    if (!/[0-9]/.test(key) && key !== "Backspace" && key !== "ArrowLeft" && key !== "ArrowRight" && key !== "Tab") {
        e.preventDefault();
    }
}

function validarCorreos() {
    const correo = document.getElementById("correo").value.trim();
    const confirmarCorreo = document.getElementById("confirmar_correo").value.trim();

    if (correo !== confirmarCorreo) {
        // Puedes usar alert, o mejor usar SweetAlert si ya lo tienes
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los correos electrónicos no coinciden.',
        });
        return false;
    }
    return true;
}

document.getElementById("btnvalidar").addEventListener("click", function() {
    if (validarCorreos()) {
        // Aquí llamas la función que procesa y muestra los datos, por ejemplo:
        mostrarDatosFormulario();
    }
});

function validarContrasenaFuerte(password) {
    // Regex para validar:
    // mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return regex.test(password);
}

function validarContrasenas() {
    const pass = document.getElementById("password");
    const cpass = document.getElementById("cpassword");

    const passVal = pass.value.trim();
    const cpassVal = cpass.value.trim();

    // Remover clases error primero
    pass.classList.remove("input-error");
    cpass.classList.remove("input-error");

    // Validar fuerza de la contraseña
    if (!validarContrasenaFuerte(passVal)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña débil',
            html: 'La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial.',
        });
        pass.classList.add("input-error");
        return false;
    }

    // Validar que las contraseñas coincidan
    if (passVal !== cpassVal) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden.',
        });
        pass.classList.add("input-error");
        cpass.classList.add("input-error");
        return false;
    }

    return true;
}

document.getElementById("btnvalidar").addEventListener("click", function() {
    // Validar correos, contraseñas, y demás aquí

    // Validar contraseñas
    if (!validarContrasenas()) {
        return; // No seguir si falló validación
    }

    // Aquí sigue la lógica para mostrar o enviar formulario si todo está bien
    mostrarDatosFormulario(); // o lo que uses para mostrar/guardar
});



