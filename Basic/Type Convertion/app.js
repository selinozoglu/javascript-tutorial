let value;

// Convertion data types to String

value = 123;//number

value = String(123);//String

value = String(true);

value = String(function() {console.log()});

value = String([1,2,3,4]);

value = (10).toString();


//Convertion data types to number

value = Number("12345");

value = Number(null);

value = Number(undefined);//number'a çevrilmez NaN not a number

value = Number("Hello World");//error

value = Number(function(){console.log()});//errror

value = Number([2,3,4]);// errror

value = Number("3.12");
value = parseFloat("3.12");

value = parseInt("3");




//const a = "Hello" + 34;
const a = Number("23") + 34;

console.log(a);
console.log(typeof a);





console.log(value);
console.log(typeof value);