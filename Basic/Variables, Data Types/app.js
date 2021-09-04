// Creating Variables

var sayi = 14;

var sayi1 = 15;

var sayi3 = 23;

console.log(sayi,sayi1,sayi3);

//iki tur veri tipi
//PRIMITIVE - REFERANCE DATA TYPES
//-------------------------------


//Primitive Data Types

//Number

var sayi4 = 21;//number veri tipi
var sayi5 = 3.23;//number veri tipi
console.log(typeof sayi5);//tipini gösteriri

//String

var name = "Selin";
console.log(name);
console.log(typeof name);

//Boolean

var a = true;
console.log(typeof a);

//Null data types

var b = null;//bu a hiçbir değer taşımıyor demek
console.log(typeof b); //null pointer anladığı için object olarak dönüyor ama hatalı

//Undefined data type

var c;
console.log(c);

//--------------------------------------------------------------------------------------

//Referance Data Types

//Array

var numbers = [0,1,2,3,4];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);

//Object

var person={
    names: "Selo",
    age:21
}
console.log(person);
console.log(typeof person);

//Date Object

var date = new Date();
console.log(date);
console.log(typeof date);

//Functions

var hello = function(){
    console.log("Selam");
}
console.log(hello);
console.log(typeof hello);

// Primitive sadece o değişkenin değeri
// Referance bellekte bir yeri gösteriyor 
// gösterdiği yerden değer alıyoruz

var e = 10; //e sadece 10 değerini taşır
var d = e; // sadece değerleri kopyalanıyor bellekteki yeri değil

console.log(e,d);

e = 20;
console.log(e,d);

var f = [0,2,4];
var g = f;

console.log(f,g);

f.push(6);//bellekte aynı yeri gösterdikleri için değişti

console.log(f,g);