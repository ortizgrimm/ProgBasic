// #### 4 Formas de mostrar contenido ###
//  1) Alert
// alert("Hola Bienvenido");
//  2)
console.log("Hola Consola");
//  3) Libreria sweetalert
// Swal.fire("Hola desde SweetAlert!");
//  4) En el DOM (Modelo De Objetos de Documento)
document.write("Hola desde el DOM");

// ####Tipos de Variables ####
var edad = 31; //Alcance Global
let numeros = 31; //Alcance de bloque
const nombre = "Danilo Ortiz"; // No cambia su valor
const pi = 3.14; // No cambia su valor
const pulgada = 2.54; // No cambia su valor

// #### Operasores Básicos ####
// Aritmeticos (+ - * / mod)
var num_uno= 5;
var num_dos= 10;
console.log(num_dos + num_uno);
console.log(num_dos - num_uno);
console.log(num_dos * num_uno);
console.log(num_dos / num_uno);
console.log(num_dos % num_uno);


// Comparación
console.log("Igual >>> " + (num_dos==num_dos));
console.log("Igual Estricto >>> " + (num_dos===num_dos));
console.log("Es Diferente >>> " + (num_dos!=num_dos));
console.log("Mayor >>> " + (num_dos>num_dos));
console.log("Mayor Igual >>> " + (num_dos>=num_dos));
console.log("Menor >>> " + (num_dos<num_dos));
console.log("Maenor Igual >>> " + (num_dos<=num_dos));

// #### Tipos de Datos ####
var clase = "Programación Básica" // string
var numero = 5 // Numero entero
var decimal = 2.5 // Número decimal
var booleano = true // Boolean (Falso/Verdadero)
var objeto = {nombre: "Danilo", edad: 31, Profesión: "Administrador"};
var array = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1, "Uno", 20, "Fiesta", 2.5, "Decimal"];

let estudiantes = [
    {nombre: "Danilo", edad: 31},
    {nombre: "Anyi", edad:34},
    {nombre: "Celeste", edad: 4},
    {nombre: "Alexis", edad: 26}
];
let curso = {
    nombre: "Programación",
    temas: ["html", "css", "js"]
};

console.log(objeto);
console.log(array);
console.log(array_num);
console.log(array_mix);
console.log(estudiantes [0].nombre);
console.log(estudiantes);
console.log(curso);
console.log(curso.temas);
console.log(curso.temas[1]);



