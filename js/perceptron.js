/**
Perceptron Example

Imagine a perceptron (in your brain).

The perceptron tries to decide if you should go to a concert.

Is the artist good? Is the weather good?

What weights should these facts have?
  Criteria	            Input	           Weight
  Artists is Good	       x1 = 0 or 1	    w1 = 0.7
  Weather is Good	       x2 = 0 or 1	    w2 = 0.6
  Friend will Come	     x3 = 0 or 1	    w3 = 0.5
  Food is Served	       x4 = 0 or 1	    w4 = 0.3
  Alcohol is Served	     x5 = 0 or 1	    w5 = 0.4
*/

//Explicación del algoritmo

//Setear el valor del umbral
const threshold = 1.5;

//Definir entradas y pesos
const inputs = [1, 0, 1, 0, 1];
const weights = [0.7, 0.6, 0.5, 0.3, 0.4];

//Multiplicar las entradas con sus respectivos pesos y luego sumarlos
let sum = 0;
for (let i = 0; i < inputs.length; i++) {
sum += inputs[i] * weights[i];
}
//Activar la salida de la conclusión en base al umbral
document.getElementById("demo").innerHTML = (sum > threshold);  