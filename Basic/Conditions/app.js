// Karşılaştırma Operatörleri

//sonucunda boolean değer dönüyor

// ==

console.log(2 == 2);
console.log("js" == "java");
console.log(2 == "2"); //true

// === tip olarak da eşit mi yukarda string numbera eşit oldu

console.log(2 === "2"); //false

 // >

console.log(4 > 3);
console.log(2 > 4);

// !=

console.log(2 != 4); //eşit değil midir //true

// <

console.log(2 < 4);
 
// >=

console.log(2 >= 3);

//Mantıksal bağlaçlar


// NOT OPERATOR

console.log(!(2 == 2)); 

// AND OPERATOR

console.log((2 == 2) && ("js" == "js"));

// OR OPERATOR

console.log((2 < 4) || (3 == 3));


// IF 

const error = false;

if(error == true){
    console.log("Hata oluştu");
}else{
    console.log("HTA yok");
}

const user = "selo";

if(user === "selo"){
    console.log("Doğru kullanıcı");
}else console.log("Yanlış kullanıcı");


const process = "5";

if(process === "1"){
    console.log("İşlem 1");
}else if (process === "2"){
    console.log("İşlem 2");
}else if (process === "3"){
    console.log("İşlem 3");
}else if (process === "4"){
    console.log("İşlem 4");
}else console.log ("Geçersiz");

const number = 1020;


if(number === 100){
    console.log("Sayı 100");
}else console.log("sayı 100 değil");

//Ternary operator
console.log(number === 100 ? "Sayi 100" : "Sayı 100 değil");
//sayı 100 ?(ise) sayı 100 yaz :(değilse)100 değil


//SWITCH CASE

const process1 = 22;

switch(process1){
    case 1:
        console.log("İşlem 1");
        break; // bu case e girdiysen diğerlerini okuma çık caseden
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("yanlış");            
}

// FUNCTIONS

function merhaba(name = "bilmiyorum",age = "bilmiyorum"){

   // if(typeof name === "undefined") name = "Bilmiyorum";
   // if(typeof age === "undefined") age = "Bilmiyorum";



    console.log(`İsim ${name} Yaş:${age}`);
}

merhaba("Selin",21);
merhaba("Dilek",27);

merhaba();

function square(x){
    //console.log(x*x);
    return x*x;
}
function cube(x){
    //console.log(x*x*x);
    return x*x*x;
}

let a = square(2);
a = cube(a);//square değer döndürmediği için anlamıyor consolelar varken

let b = cube(square(12));
console.log(b);

// FUNCTION EXPRESSION
// değişkene fonk eşitleme

const selam = function(name1){
    console.log("selam " + name1);
}

selam("Selo");


// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//tanımlandığı yerde çalışan fonk

(function(ad){
    console.log("Hello " + ad)
})("Selin"); //sona konulan parantezle orada çağırdım


//objenin içindeki fonksyionlar varsa metod olur

const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(){
        console.log("silindi");
    }
}
console.log(database.host);
database.add();
database.update(12);
