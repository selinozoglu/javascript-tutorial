// VAR

var name = "Dİlek Selin";
console.log(name);

name = "Pelin";
console.log(name);

//LET

let name1 = "Selin Dilek";
console.log(name1);
name1 = "Pelo";
console.log(name1);

let a,b;
a = 20;
b = 40;
console.log(a+b);

//CONST

const isim = "Selin";
console.log(isim);
isim = "Pelin";
console.log(isim);//error tekrardan tannımlanamaz 

const e;
e = 20;//error en başta verilmeli
console.log(e);

const w = [1,3,5,7];
console.log(w);
w = [1,3,5,7,9];//error 
w.push(9);//bu hata değil a'nın referans yerini değiştirmek yerine gösterdiği değeri değiştirmek
console.log(w);
