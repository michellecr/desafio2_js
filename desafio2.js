//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert
var number1 = prompt ("Favor ingresar un numero entero");
number1 = parseInt (number1);
if (number1 > 1000){
    alert ("El número ingresado es mayor a 1000");
}

//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola
var text = prompt ("Favor ingresar un texto cualquiera");
if (text == "Hola"){
    console.log ("tu texto escrito es Hola");
}

//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
var number2 = prompt ("Favor ingrese nuevamente un numero");
number2 = parseInt (number2);
if ((number2 > 10) && (number2 < 50)){
    alert ("el número ingresado esta entre los números 10 y 50");
}
