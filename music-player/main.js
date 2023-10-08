

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










const player = new MusicPlayer(musicList);
//MusicPlayer calsından parametreleri Music clasından oluşmuş musiclist dizisini al ve player adında bir obje oluştur.
//mucislist dizisindeki elemanlar music classından oluşmuştur. bu diziyi Musicpalyer classına yollayıp musiclist dizisi için kullanacağım metodlar tanımlıyorum
//böylelikle musiclist dizisi içindeki elemanlar arası gezinebiliyorum. gezinebilmek için ayrıca dizi elemanlarına erişmek için index değişkeni oluşturuyorum



let music = player.getMusic(); //kullanılan metod Music classından bir nesne olduğundan Music classındaki bir metot music değişkeni ile erişilebilir
console.log(music.getName());

player.next();
// music = player.getMusic();
// console.log(music.getName());

// player.previous();
// music = player.getMusic();
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(music.getName());

// player.next();
// music = player.getMusic();
// console.log(music.getName());