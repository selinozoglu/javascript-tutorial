

// SET TIMEOUT

//belirli işlemi belirli zamanda çalıştır

setTimeout(function(){
    console.log("selam");
},2000); //2sn sonra başla


// SET INTERVAL
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı : ",i);
},1000); //1 saniye aralıklarla devam eder


// CLEAR INTERVAL

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});