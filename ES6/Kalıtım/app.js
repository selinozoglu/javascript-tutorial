


class Person{                                                   // SuperClass, BaseClass
    constructor(name,age){
        this.age = age;
        this.name = name;
    }

    showInfos(){
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}

class Employee extends Person{                                  // DerivedClass, SubClass, ChildClass extends ile kalıtım aldık
    constructor(name,age,salary){
       // this.name = name;
       // this.age = age;

       // bunları tekrar yazmak yerine
       super(name,age);  //bunu yazınca yukarıdaki constructor' ı  miras almış oluyor
       // super.showInfos() deseydi o fonksiyonu miras al demiş olurdu
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim: " + this.name +" "+ "Yaş: " + this.age+" "+"Maaş: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary += amount;
    }
}


const emp = new Employee("Selin",21,5000);
console.log(emp);
emp.raiseSalary(6000);
emp.showInfos();                                        // kendi metodunu kullandı
emp.toString();                                         // kendi metodunu kullandı
