

function Person(name,age){                                    // constructor
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){                     // Person içindeki prototipe showInfos diye fonksiyon açılır
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}

function Employee(name,age,salary){                           // constructor

    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}


Employee.prototype = Object.create(Person.prototype);         // Employee'nin prototipine Person'un prototipini koydu

Employee.prototype.toString = function(){                     // Object ' in içindeki değil de Employee ' nin içindeki toString farkı gör diye
    console.log("Employee");
}

// Overriding - İptal Etme

Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yas: " + this.age + "Maas: " + this.salary);
}

const emp = new Employee("Selin",21,4000);

console.log(emp);

emp.showInfos();
emp.toString();



