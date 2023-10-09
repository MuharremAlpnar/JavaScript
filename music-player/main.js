

//MÜZİK BİLGİLERİYLE BİR OBJE OLUŞTURAN CLASS
class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

//MÜZİK BİLGİLERİ İLE BİR OBJE OLUŞTURULDU VE BİR DİZİYE AKTARILDI
//bu dizinin elemanları music classının elemanları iken dizinin kendisi music playerin parametresi olarak kullanılmakta
//dolayısıyla musicplayer classından bir nesne oluşturduğumda listenin kendisine erişicem eğer bir index olsaydi dizinin elemanlarındada erişebileceğimden dolayı
//musicPlayer classında index adında değişken oluşturdum
const musicList = [
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3")    
];








//MUSİC CLASSINDAN OBJELERİN TUTULDUĞU DİZİYİ ALIP İNDEX VE PLAYER İÇİN METOT BARINDIRAN CLASS TANIMLAMASI
class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
        //MusicPlayerden bir obje oluşturduğumuz an indexi 0 olacak bundan dolayı ilk musik çalınacak
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if(this.index + 1 != this.musicList.length) {
            this.index++;
        }
        else {
             this.index = 0;
        }
    }

    previous() {
        if(this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }
    }
}





const resim = document.getElementById("resim");
const sarkiIsmi = document.getElementById("sarki-ismi");
const sarkici = document.getElementById("soyleyen");
const sarki = document.getElementById("sarki");
const oynaDur = document.querySelector("#buttonlar button:nth-child(2)")
const geri = document.querySelector("#buttonlar button:nth-child(1)")
const ileri = document.querySelector("#buttonlar button:nth-child(3)")
let simdi = document.querySelector("#simdi")
let toplamSure = document.querySelector("#toplam-sure")
const rangeDeger = document.querySelector("#customRange1")
const btnses = document.getElementById("btnses")
const rangeDeger2 = document.getElementById("customRange2")



let player = new MusicPlayer(musicList)



window.addEventListener("load",()=>{
    let music = player.getMusic();
    load(music)
    
    
})

function load(music) {
    resim.src = "img/" + music.img;
    sarkiIsmi.textContent = music.getName();
    sarkici.textContent = music.singer;
    sarki.src = "mp3/" + music.file;    
}




let oynuyomu = false;
oynaDur.addEventListener("click",()=>{

    if (oynuyomu==false) {
        oynat();
    } else {
        dur();
    }
    
})
function oynat() {
    oynaDur.innerHTML=`<i class="fa-solid fa-pause fa-2xl"></i>`
    oynuyomu = true;
    sarki.play();
}
function dur() {
    oynaDur.innerHTML=`<i class="fa-solid fa-play fa-2xl"></i>`
    oynuyomu = false;
    sarki.pause();
}



ileri.addEventListener("click",()=>{
    next()   
})

function next() {
    player.next()
    let music = player.getMusic()
    load(music);
    oynat()
}


geri.addEventListener("click",()=>{
    back()
})

function back() {
    player.previous()
    let music = player.getMusic()
    load(music);
    oynat()
}


sarki.addEventListener("loadedmetadata",()=>{
    rangeDeger.max = Math.floor(sarki.duration)
    toplamSure.textContent = zamanhesapla(sarki.duration);
})
function zamanhesapla(saniye) {
    const dk = Math.floor(saniye/60);
    const sn = Math.floor(saniye % 60);
    let kalansn = 0;
    if (sn<10) {
        kalansn = `0${sn}`
    } else {
        kalansn = `${sn}`;
    }
    const sonuc = `${dk}:${kalansn}`;
    return sonuc;
   
}



sarki.addEventListener("timeupdate",()=>{
    rangeDeger.value = Math.floor(sarki.currentTime)
    simdi.textContent = zamanhesapla(sarki.currentTime)
})
  
rangeDeger.addEventListener("input",()=>{
    simdi.innerHTML = zamanhesapla(rangeDeger.value);
    sarki.currentTime = rangeDeger.value
})


btnses.addEventListener("click",()=>{
    sesbtndegis()
})

let sesacikmi = true;
function sesbtndegis(){

    if (sesacikmi==true) {
        seskis();
    } else {
        sesac();
    }
}

function seskis() {
    btnses.innerHTML=`<i class="fa-solid fa-volume-xmark"></i>` 
    sarki.volume = 0;
    sesacikmi=false
}
function sesac() {
    btnses.innerHTML=`<i class="fa-solid fa-volume-high"></i>`  
    sesacikmi=true
    sarki.volume = 1;
}




rangeDeger2.addEventListener('input', function() {
    // Range inputundaki değere göre ses seviyesini ayarlayın
    sarki.volume = rangeDeger2.value;
    if (sarki.volume==0) {
        btnses.innerHTML=`<i class="fa-solid fa-volume-xmark"></i>` 
    } else {
        btnses.innerHTML=`<i class="fa-solid fa-volume-high"></i>`
    }
  });