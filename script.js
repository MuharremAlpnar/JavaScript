function Soruolustur(soru, siklar, cevap) {
    this.soru = soru;
    this.siklar = siklar;
    this.cevap = cevap;
    
}
Soruolustur.prototype.cevapkontrol = function (yanit) {
    return this.cevap === yanit;
};

const sorular=[
    new Soruolustur(
        "1866’da dinamiti icat eden ve bilim ve sanattaki büyük başarılar için soyadı ile anılan prestijli ödüllerin verilmesine ön ayak olan İsveçli bilim insanı kimdir?",
        {
            a:"Alfred Nobel",
            b:"Louis Pasteur",
            c:"Heinrich Herz",
            d:"İsaac Newton"
        },
        "Alfred Nobel"
    ),
    new Soruolustur(
        "1856-1939 yılları arasında yaşamış ve ünlü psikanaliz öğretisini geliştirmiş olan tanınmış Avusturyalı nörolog kimdir?",
        {
            a:"Alfred Nobel",
            b:"Louis Pasteur",
            c:"Sigmund Freud",
            d:"Marie Curie"
        },
        "Sigmund Freud"
    ),
    new Soruolustur(
        "Bilimkurgunun babası sayılan Fransız yazar aşağıdakilerden hangisidir?",
        {
            a:"Victor Hugo",
            b:"Balzac",
            c:"Jules Verne",
            d:"Montaigne"
        },
        "Jules Verne"
    ),
    new Soruolustur(
        "Antik çağda yaşamış, Batı Edebiyatı’nın ilk büyük eserleri sayılan İlyada ve Odessa Destanları’nın yaratıcısı veya derleyicisi olduğu kabul edilen kişi kimdir?",
        {
            a:"Sokrates",
            b:"Homeros",
            c:"Truva",
            d:"Eflatun"
        },
        "Homeros"
    ),

]

function Quiz(sorular) {
    this.sorular = sorular;
    this.index=0;
}
Quiz.prototype.sorugetir = function () {
    return this.sorular[this.index]
};


document.getElementById("buton").addEventListener("click",function(){

    let yapi = document.getElementById("soru").value    

    sorular.push(
        new Soruolustur(
            yapi,
            {
                a:"Alfred Nobel",
                b:"Louis Pasteur",
                c:"Heinrich Herz",
                d:"İsaac Newton"
            },
            "Alfred Nobel"
        ),
    )
    

    
    console.log(sorular)

})





