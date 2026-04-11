console.log("Hola esto es JavaScript corriendo en Node.js")

const nombre = "Fernando";
const edad = 19;
let semestre = "4";

console.log("Hola, mi nombre es: " + nombre);
console.log("Tengo " + edad + " años");
console.log("estoy en " + semestre + " semestre");

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

function saludar(nombre) {
    console.log('Hola ${NombrePersona}, bienvenido');
}

saludar("Fernando");

const materias = ["Programación", "Matemáticas", "Base de Datos"];
console.log("Mis materias:", materias);
console.log("Primera materia:", materias[0]);

for (let i = 0; i < materias.length; i++) {
    console.log(`Materia ${i + 1}: ${materias[i]}`);
}