alert("Hola, bienvenido y bienvenida a la calculadora");
var numero1 = parseFloat(prompt("Por favor ingresa un número del 0 al infinito"));
alert("Elegiste el número " + numero1);
var numero2 = parseFloat(prompt("Por favor ingresa un segundo número del 0 al infinito"));
alert("Tu segundo número es " + numero2);
alert("Elige la operación que deseas hacer con los números " + numero1 + " y " + numero2);
var operacion = parseInt(prompt("Elige una opción.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es division."));
var resultado;
var nombre="";
if(operacion == 1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
}else if(operacion == 2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado;
}else if(operacion ==3){
    resultado = numero1 * numero2;
    nombre = " la multiplicación es " + resultado;
}else if(operacion ==4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = " la división es " + resultado;
    }else{
        nombre="no se puede dividir por cero";
    }
    } else{
        nombre="operación no valida";
}
   alert(nombre);
document.write("Los números que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);
