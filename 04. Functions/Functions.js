// A javascript function is a block of code desiging to perform a particular task.

function myFunction(p1, p2){
	return p1 * p2;				// The function returns the product of p1 and p2

	document.getElementById("demo").innerHTML = myFunction(4, 3)
}

// Fuction Declaration

function name(parameter1, parameter2, parameter3) {
    code to be executed
}

// Function Return

var x = myFunction(4, 3);    // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;            // Function returns the product of a and b
}

// Why Function
// We can reuse code: Define the code once, and use it many times
// You can use the same code many times with different arguments, to produce different result.

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

// Function Used as Variable Values

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";

// We can use the function directly, as a variable value:

var text = "The temperature is " + toCelsius(77) + " Celsius";

