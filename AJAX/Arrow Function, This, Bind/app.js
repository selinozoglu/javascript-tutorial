

const person = {
    age:"34",

    // tellAge : function(){
    //     console.log(this);     // this = person
    //     console.log(this.age);
    // }.bind(this) 

    tellAge: () => {
        console.log(this);       // this = window
        console.log(this.age);   
    }


     // buradaki this window objesi
}


person.tellAge();