
//spread operatörü : ...


const langs = ["Python","Java","Php","C++"];


//console.log(langs[0],langs[1],langs[2],langs[3]);


console.log(...langs);  // yukarıdakiyle aynısı

// const langs1 = ["JavaScript","C#",langs[0],langs[1],langs[2],langs[3]];

//langs + lans1 için


const langs1 = ["JavaScript","C#",...langs];

console.log(langs1);


const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b] = numbers; // a [0] indexe b [1] indexe

const [a,b,...numbers2] = numbers;

console.log(a,b);
console.log(numbers2);



//-------------------------------------------------------

const addNumbers = (w,e,r) => console.log(w+e+r);

const numb = [100,200,300];

addNumbers(...numb);


