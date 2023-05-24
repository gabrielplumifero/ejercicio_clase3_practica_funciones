"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada

let nombre1,nombre2,nombre3 = string; 

nombre1 = "";
nombre2 = "";
nombre3 = "";


function generarInvitados()
{
    /*   numero = cont.toString(); */ 
    let nombreconcatenado = string;
    nombreconcatenado = "";
    nombre1  = prompt(' Eje 4  Ingrese el nombre numero 1 ');
    nombre2  = prompt(' Eje 4  Ingrese el nombre numero 2 ');
    nombre3  = prompt(' Eje 4  Ingrese el nombre numero 3 ');
    nombreconcatenado = nombre1+" "+nombre2+" "+nombre3;
    document.write(`Mis invitados: ${nombreconcatenado}`);
   /*  alert('  los 3 nombres ingresados son '+nombreconcatenado);
    return nombreconcatenado; */ 
}

generarInvitados();
/*  invitados = generarInvitados(); */ 

/* console.log(`Mis invitados: ${invitados}`) */ 