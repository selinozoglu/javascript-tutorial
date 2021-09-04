

// Map - Key(Anahtar) - Value(Değer)

//key - func onje her şey olur
//value - her şey olur


let myMap = new Map();          // Map oluştu

console.log(typeof myMap);      //object

const key1 = "Selin";
const key2 = {a:10,b:20};
const key3 = () => 2; 

// SET

myMap.set(key1,"String değer");
myMap.set(key2,"Object literal değer");
myMap.set(key3,"function değer");

// GET

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));



console.log(myMap);


console.log(myMap.size);




const cities = new Map();

cities.set("Adana",5);
cities.set("İstanbul",15);
cities.set("Edirne",4);

// Foreach

cities.forEach(function(value,key){
    console.log(key,value);
})

// Map dictionarye benziyor

// For Of

for(let value of cities){
    console.log(value);
}

for(let [key,value]of cities){
    console.log(key,value);
}


// Map Keys


for(let key of cities.keys()){
    console.log(key);
}


// Map Values


for(let value of cities.values()){
    console.log(value);
}

const array = [["key1","value1"],["key1","value1"]];


const lastMap = new Map(array);
console.log(lastMap);

//Maplerden Array Oluşturma

const array1 = Array.from(cities);

//["Ankara",5]["İstanbul",15] diye oluşuyor

console.log(array1);