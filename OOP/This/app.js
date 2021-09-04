


function Employee(name,age,salary){             //constructor func
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }


}
const emp1 = new Employee("Selin",21,6000);
const emp2 = new Employee("Dilek",23,7000);
emp1.showInfos();
emp2.showInfos();

