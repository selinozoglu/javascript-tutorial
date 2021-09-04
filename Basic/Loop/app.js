
// WHILE LOOP

let i = 0;

while(i<10){
    console.log(i);
    i++;
}

let j = 10;
while( j > 0){
    console.log(j);
    j -= 2;
}

// BREAK - CONTINUE

let k = 0;
while(k<10){
    console.log(k);
    if(k == 5){
        break;
    }
    k++;
}


let l = 0;
while(l < 10){
    if(l == 3 || l == 5){
        l++; // olmazsa sonsuz döngü
        continue; // burayı atlamış oldu 3 ve 5i
    }
    console.log(l);
    l++;
}

// DO - WHILE LOOP

//do while en az 1 kere çalışır

let m = 0;

do{
    console.log(m);
    m++;
}while(m<10);// sonra koşul kontrolü



const langs = ["Python","C","Java"];

let index = 0;

while(index < langs.length){
    console.log(langs[index]);
    index++;
}

// FOR LOOP

for(let index1 = 0; index1 < langs.length; index1++){
    console.log(langs[index1]);
}

//FOREACH

langs.forEach(function(lang,index2){
    console.log(lang,index2);
});

// MAP FUNCTION

const users = [
    {name:"Selin",age:21},
    {name:"Dilek",age:23},
    {name:"Zeynep",age:40},
    {name:"Pelin",age:13}
];

const names = users.map(function(user){ // objeyi isim arrayi yaptı
    return user.name;
});

const ages = users.map(function(user){ // objeyi isim arrayi yaptı
    return user.age;
});

console.log(names);
console.log(ages);

// FOR IN LOOP

const user1 = {
    name:"Seli",
    age:34
};

for(let key in user1){ // her propertiyi döndürüyor
    console.log(key,user1[key]);
}