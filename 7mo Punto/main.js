/*
Datos de entrada
1. Nota 1
2. Nota 2
3. Nota 3

Datos de salida
1. Calcular Promedio
*/

let Nota1 = Number (prompt("Ingrese su Nota #1 "));
let Nota2 = Number (prompt("Ingrese su Nota #2 "));
let Nota3 = Number (prompt("Ingrese su Nota #3 "));
let TotalNotas = (Nota1 + Nota2 + Nota3);
let resultado = (TotalNotas / 3);

alert ("Su Nota final es de " +resultado+ " ¡Felicitaciones!");