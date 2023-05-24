"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

let n1 = Float32Array;
let n2 = Float32Array;
n1=parseFloat(prompt('Eje1 Ingrese el primer numero : '));
n2=parseFloat(prompt('Eje1 ingrese el segundo numero : '));

imprimirMayor(n1, n2);

function imprimirMayor(numero1, numero2) 
{
    console.log("Funcion imprimir mayor");
    if (numero1 > numero2)       
     {confirm(' El numero 1 es : '+numero1+' y es el mayor');}
    else if (numero1 < numero2)
          {confirm('el numero 2 es : '+numero2+' y es el mayor ');}
        else 
           {alert(' Los numeros son iguales ');}
    
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
}

