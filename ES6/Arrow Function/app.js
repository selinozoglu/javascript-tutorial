

const merhaba = function(){
    console.log("Merhaba");
}

merhaba();


// ARROW FUNCLI


const selam = () => {
    console.log("merhab");
}

selam();




const hello = (firstName) => {
    console.log("Merhaba",firstName);
}

hello("Selin");


//tek işlem yapıyorsa paranteze de gerek yok

const hi = (lastName) => console.log("Hi",lastName);

hi("Özoğlu");





const cube = function(x){
    return x*x*x;
}

console.log(cube(4));


const cube1 = y => y*y*y;  //tek ve return işleminde bu şekilde kullanılabilir

console.log(cube(7));
