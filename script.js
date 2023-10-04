function Soruolustur(soru, siklar, cevap) {
    this.soru = soru;
    this.siklar = siklar;
    this.cevap = cevap;
    
}

const sorular=[]


document.getElementById("kayit").addEventListener("click",function(){
    let sik = document.getElementsByClassName("şik");//ŞIKLAR
    let soru = document.getElementById("soru").value;//textareadan gelen soru
    let cevap = document.querySelector(".cevap").value;//cevap inputundan gelen cevap

    // inputlardan gelen cevap şıklarını obje olarak döndüren fonksyon
    function siklariAl(){
        const siklar = {
            a:"",
            b:"",
            c:"",
            d:""
        };
        const dizi = [];
        for (let i = 0; i < sik.length; i++) {
            let s = sik[i].value
            dizi.push(s)
        };
    
        let i=0;
        for (var key in siklar) {
            siklar[key]=dizi[i]
            i++;
        }

        return siklar;

    }

    //değerleri kaydettikten sonra sıfırlayacak fonksyon
    function sifirla() {
        for (let i = 0; i < sik.length; i++) {
          sik[i].value = "";
        }
        document.getElementById("soru").value = ""; // textarea'yı sıfırla
        document.querySelector(".cevap").value = ""; // input'u sıfırla
      }
   
   

    // soruoluştur constuctorundan bir nesne oluşturup sorular dizisine kaydettim
    sorular.push(
        new Soruolustur(
            soru,
            siklariAl(),
            cevap
        ),
    )

    sifirla();//kaydettikten sonra input ve textarea içlerini sıfırladım
   
    
 
})





