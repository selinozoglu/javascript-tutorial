let value;

const programmer = {
    name: "Selin Özoğlu",
    age : 21,
    email : "selin-ozoglu@outlook.com",
    langs : ["Python","Java"],

    address : {
        city : "Edirne",
        street : "İbrahimAy"
    },

    work : function(){
        console.log("Progrmcı çalışıyor");
    }

}
value = programmer;

value = programmer.email;//aynı
value = programmer["email"];//aynı

value = programmer.langs;

value = programmer.address.city;

value = programmer.work();

const programmers = [
    {name : "Selin",age:21},
    {name : "Dilek",age:23}
]

value = programmers[0];
value = programmers[0].name;

console.log(value);