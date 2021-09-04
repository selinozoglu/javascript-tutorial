
class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // Get Request

    get(url){

        this.xhr.open("GET",url); // Bağlantı açık

        this.xhr.onload = function(){
            if(this.xhr.status == 200){
                console.log(this.xhr.responseText);
            }
        }

        this.xhr.send();
    }



}