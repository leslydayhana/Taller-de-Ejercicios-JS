let salario = prompt ("Digite el salario del empleado");
//calculos
let salud = salario * 5/100; 
let pension = salario * 7/100;
let salarioNeto = salario - salud - pension;
//datos de salida 
document.write(
    "<br>"+
"El salario del empleado es: "+salario+"<br>"+
"Descuento en salud es: "+salud+"<br>"+
"Descuento en pension es: "+pension+"<br>"+
"Salario Neto a pagar es: "+salarioNeto
);
