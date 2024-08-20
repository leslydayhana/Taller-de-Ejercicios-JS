/* 
Datos de entrada
1. Ingresar Alumnos Hombres
2. Ingresar Alumnos Mujeres

Datos de salida
1. Calcular el porcentaje de alumnos y alumnas
*/

let AlumnosHombres = Number(prompt("Digite Numero de Alumnos Hombres"));
let AlumnasMujeres = Number(prompt("Digite Numero de Alumnas Mujeres"));
let TotalAlumnos = AlumnasMujeres + AlumnosHombres
let PorcentajeMujeres = AlumnasMujeres / TotalAlumnos * 100;
let PorcentajeHombres = AlumnosHombres / TotalAlumnos * 100;

alert("El porcentaje de Alumnas es de " + PorcentajeMujeres + " %");
alert("El porcentaje de Alumnos es de " + PorcentajeHombres + " %");


