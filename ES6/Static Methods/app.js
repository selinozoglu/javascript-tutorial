

// Static Metotlar


class Matematik{
    
    sqrt(x){
        console.log(x*x);
    }

    static cube(x){             // static metod
        console.log(x*x*x);
    }
}


const math = new Matematik();
Matematik.cube(3);              // objeye gerek kalmadan class.fonk şeklinde çağırılıyor çünkü STATIC
console.log(math);


math.sqrt(4);                   // bir nesne oluşturunca çağırılabiliyor
Matematik.sqrt(5);              // static olmadığı için direk class üzerinde çağıralmıyor