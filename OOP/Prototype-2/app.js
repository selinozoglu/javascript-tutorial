function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function(){
    console.log("İsim : " +  this.name + "Yas : " + this.age );
}


const emp1 = new Employee("Selin",21);
const emp2= new Employee("Dilek",41);

emp1.showInfos();
console.log(emp1);