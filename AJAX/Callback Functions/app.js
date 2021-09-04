

// function process1(){
//     console.log("Process 1");
// }
// function process2(){
//     console.log("Process 2");
// }

// process1();
// process2();



// Bunları böyle çalıştırdığımızda senkron gibi çalışacak.
// ----------------------------------------------------------------------------------------------


// function process1(){
//     setTimeout(function(){
//         console.log("Process 1");
//     },3000);
// }
// function process2(){
//     console.log("Process 2");
// }

// process1();
// process2();


// Process1 3 saniye sonra çalışsın dedik
// O çalışana kadar process 2 çalışır çünkü asenkron
// Bir fonk çalışması başka işlemi beklemez


//-------------------------------------------------------------------------------------------

// function process1(){
//     setTimeout(function(){
//         console.log("Process 1");
//     },3000);
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
// }

// process1();
// process2();
// console.log("Process 3");


// Process 3 diğerlerini beklemeden ilk çalışır
// Daha sonra Process 2 sonra 1
// Bu şekilde asenkron beklemiyor


//--------------------------------------------------------------------------------------------

// Eğer yine de Process2 Process1'den önce başlasın isteniyorsa
// Process 2'i Process 1 ' e callback olarak yollanır


// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();                 //senkron yaptı
//     },3000);
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000);
// }

// process1(process2);                   //callback




// Bir fonksiyon veri geldiği zaman çalışması isteniyorsa
// bu fonk callback olarak yollanır


const langs = ["Python","Java","JavaScript"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);

}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);

}

addLang("C#",getAllLangs);






