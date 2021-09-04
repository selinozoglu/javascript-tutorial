

function Person(){

}

Person.prototype.Test1 = function(){
    console.log("Test 1");
}
Person.prototype.Test2 = function(){
    console.log("Test 2");
}

const person = new Person();

console.log(person);

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
const emp = new Employee("Selo",21);

Employee.prototype.Test3 = function(){
    console.log("Test 3");
}

console.log(emp);