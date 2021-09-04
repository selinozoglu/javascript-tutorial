
const person = {
    name:"Selin",
    age:21,
    salary:3000
};

const langs = ["Python","Java","C++"];

const name = "Dilek";


// FOR IN


for(let prop in person){
    console.log(prop,person[prop]);
}


for(let index in langs){
    console.log(index,langs[index]);
}


for(let char in name){
    console.log(char,name[char]);
}



// FOR OF

// objeler üzerinde gezilemez
// array üzerinde gezilir


//for (let value of person){  //person is not itarable
  //  console.log(value);
//}

for (let val of langs){
    console.log(val);
}

for (let kar of name){
    console.log(kar);
}