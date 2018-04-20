// Scope determines the acceseibility (visibility) of variables

/* JavaScript Function Scope
In javascript there are two types of scope:
	Local Scope
	Global Scope
JavaScript has function scope: Each function creates a new scope
*/

// Local JavaScript Variables

/* Variables declared with in a javascript function, become LOCAL to the function.
Local Variables have local scope: They can only be accessed within the function.
*/

// Example

	// code here can not use carName

function myFunction() {
    var carName = "Volvo";

    // code here can use carName

}

// Global JavaScript Variables

/*
A variable declared outside a function, becomes GLOBAL
A global variable has global scope: All scripts and functions on a web page can access it.
*/

// Example

var carName = " Volvo";

// code here can use carName

function myFunction() {

    // code here can use carName 

}

// Warnings

/*
Do NOT create global variables unless you intend to.

Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions
*/