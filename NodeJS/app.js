
var http = require('http'); //modul yuklemek için require
var fs = require('fs'); //file system

var server = http.createServer(function(request,response){ // server oluştururken 
    
    if(request.url == '/'){
        fs.readFile('index.html',function(err,data){ //readfile okuma bitince function çağır diyor

            response.write(data); //mesaj data index.html içindeki verileri barındırıyor
            response.end('mesaj bitti'); 
        });
        
    }

    if(request.url == '/login'){
        fs.readFile('login.html',function(err,data){ //readfile okuma bitince function çağır diyor

            response.write(data); //mesaj data login.html içindeki verileri barındırıyor
            

            response.write('deneme');
            
            
            response.end('mesaj bitti'); 
        });
        
    }

    console.log(request.url);    
   
});

server.listen(8000); //kullanıcının hangi porta istekte bulunacağını söylüyoruz


