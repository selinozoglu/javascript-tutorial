

const obje = new Object();
const obje2 = new Object();
obje2.age = 21;
obje.name = "Selin";
console.log(obje2);
console.log(obje);



function Employee(isim,yas){
    this.isim = isim;
    this.yas = yas;
    this.showInfos = function(){
        console.log("Bilgiler");
    }
}

const emp1 = new Employee("Selo",34);
console.log(emp1);