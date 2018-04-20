// String Method

// String Length

// The length property returns the length of a string:

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

// Finding a String in a String

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// Searching for a String in a String

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

// The slice() Method

// The method takes 2 parameters: the starting index (position), and the ending index (position).

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

// If you omit the second parameter, the method will slice out the rest of the string:

var res = str.slice(7);

// or, counting from the end:

var res = str.slice(-12);

// The substring() Method

//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);

// Replacing String Content

//The replace() method replaces a specified value with another value in a string:

//Example

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// By default, the replace() function replaces only the first match:

// Example

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

//By default, the replace() function is case sensitive. Writing MICROSOFT (with upper-case) will not work:

//Example

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

// Example

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

// To replace all matches, use a regular expression with a /g flag (global match):

// Example

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

// Converting to Upper and Lower Case

//A string is converted to upper case with toUpperCase():

//Example

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

// A string is converted to lower case with toLowerCase():

// Example

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// The concat() Method

// concat() joins two or more strings:

// Example

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// The concat() method can be used instead of the plus operator. These two lines do the same:

// Example

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

// Extracting String Characters

// There are 2 safe methods for extracting string characters:

charAt(position)
charCodeAt(position)

//The charAt() Method

// The charAt() method returns the character at a specified index (position) in a string:

// Example

var str = "HELLO WORLD";
str.charAt(0);            // returns H

//The charCodeAt() Method

//The charCodeAt() method returns the unicode of the character at a specified index in a string:

// Example
var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72

// Accessing a String as an Array is Unsafe

// You might have seen code like this, accessing a string as an array:

var str = "HELLO WORLD";

str[0];                   // returns H

// Converting a String to an Array

// A string can be converted to an array with the split() method:

// Example

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

//If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// Example

var txt = "Hello";       // String
txt.split("");           // Split in characters