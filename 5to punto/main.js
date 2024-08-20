/* 
Datos de entrada
    1. Ingreso del precio de un producto

IVA * 0.19

Datos de Salida
    1. Mostrar cuanto es el IVA que se agrega
    2. Mostrar el precio del producto sin IVA
    3. El total a pagar
*/


let PrecioDelProducto = Number(prompt("Digite el Precio del Producto"));
let IVA = PrecioDelProducto * 0.19; 
let PrecioSinIVA = PrecioDelProducto; 
let TotalAPagar = PrecioDelProducto + IVA;

document.write(
    "<br>" +
    "El valor del IVA en el Producto es de: " + IVA + "<br>" +
    "El valor del Producto sin IVA es de: " + PrecioSinIVA + "<br>" +
    "El Total a Pagar es de: " + TotalAPagar + "<br>"
);