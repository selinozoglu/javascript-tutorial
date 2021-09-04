// HTTP STATUS
// 200 : OK
// 403 : FORBIDDEN
// 404 : NOT FOUND
// 505 : INTERNAL SERVER ERROR

// READY STATE
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready




document.getElementById("btn").addEventListener("click",function(){

// XMLHttpRequest

const xhr = new XMLHttpRequest();

xhr.onprogress = function(){ //readyState = 3
    //console.log(this.readyState);
}



xhr.onload = function(){ //readyState = 4
    console.log(this.readyState);
    if(this.status == 200){
       // console.log(this.responseText);
       document.getElementById("ajax").textContent = this.responseText; // ekrana gösterdi
    }
}


//BU BİRAZ ESKİ ÜSTTEKİ YENİ

// xhr.onreadystatechange = function(){
//     //console.log(this.readyState);
//     //console.log(this.status);

//     if(this.status == 200 && this.readyState == 4){ // response hazırsa
//         console.log(this.responseText);
//     }
    
// }
xhr.open("GET","example.txt",true); // true asenkron olsun diye

xhr.send();

});