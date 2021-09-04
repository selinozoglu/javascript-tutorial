
// ALERT

alert("merhaba");

// CONFIRM

const cevap = confirm("emin misin");

console.log(cevap);// ok basılınca true, iptal basılınca false dönüyor

if(cevap){
    console.log("sil");
}else console.log("silme");

//PROMPT

const cevap1 = prompt("2 + 2 = ?");

if(cevap1 == 4){
    console.log("doğru");
} 
else console.log("yanlış");


let value;

value = window;
value = window.location;
value = window.location.host;

console.log(value);

// CONFIRM - RELOAD

if(confirm("Sayfa yenilensin mi?")){
    window.location.reload();
}else console.log("yenileme");


value = window.outerHeight; // tum yukseklik
value = window.outerWidth;
value = window.innerHeight; // sayfanın içindeki yükseklik
value = window.innerWidth;
