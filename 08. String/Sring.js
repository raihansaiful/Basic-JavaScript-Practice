// JavaScript Strings

var x = "Saiful Raihan";

// We can use single or double quotes:

var carname = "BMW 710";		// Double quotes
var carname = 'BMW 710';		// Single quotes

// We can use quotes inside a string, as long as they don't match the quotes surrounding the string:

var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

// String Length

// The length of a string is found in the built in property length:

var txt = "sdadakhfdhfd;sghsfg";
var sln = txt.length;

// Special Characters 

// Because strings must be written within quotes, javascript will misunderstand this string:

var x = "My name is "Saiful" islam Raihan.";

//The solution to avoid this problem, is to use the backslash escape character.

//The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
The sequence \"  inserts a double quote in a string:";

var x = "My name is \"Saiful\" islam raihan.";

var x = 'It\'s alright.';

var x = "The character \\ is called backslash.";

//Six other escape sequences are valid in JavaScript:

Code	Result
\b		Backspace
\f		Form Feed
\n		New Line
\r		Carriage Return
\t		Horizontal Tabulator
\v		Vertical Tabulator

// Strings Can be Objects

//Normally, JavaScript strings are primitive values, created from literals:

var firstName = "Saiful";

//But strings can also be defined as objects with the keyword new:

var firstName = new String("Saiful");

// Example

var x = "Saiful";
var y = new String("Saiful");

// typeof x will return string
// typeof y will return object

// Example:

var x = "Saiful";             
var y = new String("Saiful");

// (x == y) is true because x and y have equal values

// Example

var x = "Saiful";             
var y = new String("Saiful");

// (x === y) is false because x and y have different types (string and object

// Example

var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are different objects

// Example

var x = new String("John");             
var y = new String("John");

// (x === y) is false because x and y are different objects
