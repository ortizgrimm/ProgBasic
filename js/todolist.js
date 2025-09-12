const tareaInput = document.getElementById("tareaInput")
const agregarBtn = document.getElementById("agregarBtn")
const listaTareas = document.getElementById("listaTareas")

// que el cursosr aparezca diretamente en el cuadro de texto
window.onload = function(){
    tareaInput.focus()
}

// Agregar evento al boton

agregarBtn.addEventListener("click", agregarTarea)

// Agregar elemento con enter

tareaInput.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        agregarTarea()
    }
} )

function agregarTarea(){
    const textoTarea  = tareaInput.value.trim()

    if(textoTarea ===""){
        swal.fire("Por favor escribe una tarea")
        return
    }

    const li = document.createElement("li")
    li.textContent = textoTarea

    const btnEliminar = document.createElement("button")
    btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnEliminar.classList.add("btn-eliminar")

    btnEliminar.addEventListener("click", function(){
        listaTareas.removeChild(li)
    })
    li.appendChild(btnEliminar)

    //agregar elemento li dentro de ul
    listaTareas.appendChild(li)

    // limpiar y enfocar input
    tareaInput.value = ""
    tareaInput.focus()
}