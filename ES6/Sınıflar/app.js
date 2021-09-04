

// function Employee(name,age,salary){                                                     // constructor
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){                                              // prototipin içine fonk yazma
//     console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " + this.salary);
// }

// const emp = new Employee("Selin",21,5000);                                              // yeni obje

// console.log(emp);


class Employee{                                                                             // constructor
    constructor(name,age,salary){                                                           
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){                                                                            // prototipin içine fonk yazma
        console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " + this.salary);
    }
}

const emp = new Employee("Selo",23,4569);                                                   // yeni obje

console.log(emp);