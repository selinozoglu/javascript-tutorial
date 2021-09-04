let value;

const numbers = [34,56,7,43,87];// aynı

//const numbers2 = new Array(1,2,3,4,5,6,7); aynısı

const langs = ["Python","Java","JavaScript"];

const a = ["Merhaba",13,null,undefined,3.12];

value = numbers.length; //uzunluk

// indeksleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// Herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;

//Index Of

value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme - Push

numbers.push(2300);

 // Arrayin başına değer ekleme 

numbers.unshift(4000);

//Sonundan değer atma

numbers.pop();

 // başından eleman atma

 numbers.shift();


numbers.splice(0,3);//0 dan 3 e kadar at

// Reverse - tersine çevirme

numbers.reverse();

numbers.sort(function(x,y){ //küçükten büyüğe
    return x - y;
});

numbers.sort(function(x,y){ //büyükte küçüğe
    return y - x;
});
value = numbers;


console.log(value);