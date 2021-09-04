let value;
const firstName = "Selin";
const lastName = "Özoğlu";
const lang = "Java,Python,C#";

value = firstName + lastName;
console.log(value);
value = firstName + " " + lastName;
console.log(value);
value = "Neil Armstrong ";
value += "Selin";
value = firstName.length;

console.log(value);
value = firstName.concat(" ",lastName," ","Dilek"); //ekleme
console.log(value);
value = firstName.toLowerCase(); //kucukharfe ceveir
console.log(value);
value = firstName.toUpperCase();
console.log(value);
value = firstName[0];
value = firstName[firstName.length - 1]; //son eleman
console.log(value);
//IndexOf
value = firstName.indexOf("S"); // karakter yoksa -1 döner
console.log(value);
// charAt
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);
console.log(value);
//split
value = lang.split(",");
console.log(value);
//Replace
value = lang.replace("C#", "CSS");
console.log(value);
//Includes
value = lang.includes("Java");// bulursa true döner 
console.log(value);



