/* 
Datos de entrada
  1.Número de horas trabajadas en el mes
  2.Valor tanto como de las horas normales de trabajo y las horas extras (valor x hora normal y valor x hora extra)
*/

/*
Datos de salida
  1. Calcular el sueldo mensual de un trabajador
*/

let NumeroDehorasNormalesTrabajadas = Number(prompt("Digite cuantas Horas trabajó en el mes"));
let NumeroDehorasExtrasTrabajadas = Number(prompt("Digite cuantas horas Extras trabajó en el mes"));
let ValorDeHorasNormales = Number(prompt("Digite el valor de las Horas normales de trabajo"));
let ValorDeHorasExtras = Number(prompt("Digite el valor de las Horas extras"));
let SueldoHorasNormales = (NumeroDehorasNormalesTrabajadas * ValorDeHorasNormales);
let SueldoHorasExtras = (NumeroDehorasExtrasTrabajadas * ValorDeHorasExtras);
let SueldoMensualTotal = (SueldoHorasNormales + SueldoHorasExtras);

alert ("Su sueldo mensual es de " + SueldoMensualTotal);
