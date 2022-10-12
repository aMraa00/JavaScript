// object zarlana

var h1 = {
    name: "Ц.Амарбат",
    job: "програмист",
    hobbi: "ном унших",
    location: "монгол",
}
var h2 = {
    name: "У.Ганзориг",
    job: "дизайнер",
    hobbi: "спорт",
    address: {
        location: "Алтай хотхон, 32-115 тоот",
        city: "Улаанбаатар",
        country: "монгол"
    }
}
var c1 = {
    name: "Javascript хэлийг эхнээс нь дуустал!",
    lessonCount: 116,
    totalMin: 127,
    author: h2,
    price: 199000,
    disCount: 26900,
    information: function(){
        console.log(this.author.address.location + "-д амьдардаг " + this.author.name + '-ийн 2019 онд гаргасан "' + this.name + '" сургалт нь ' +this.price + '₮ үнэтэй боловч яг одоогоор ' + this.disCount + ' болж хямдарсан байна!')
    },
    computerHour: function(){
        return Math.round(this.totalMin / 60);
    },
    computerMin: function(){
        return this.totalMin % 60;
    }
}
var c2 = {
    name: "HTML, CSS эхнээс нь дуустал!",
    lessonCount: 128,
    totalMin: 1217,
    author: h2,
    price: 14600,
    disCount: 26900,
    information: function(){
        console.log('\n\n' + this.author.address.location + "-д амьдардаг " + this.author.name + '-ийн 2019 онд гаргасан "' + this.name + '" сургалт нь ' +this.price + '₮ үнэтэй боловч яг одоогоор ' + this.disCount + ' болж хямдарсан байна!')
    },
    computerHour: function(){
        return Math.round(this.totalMin / 60);
    },
    computerMin: function(){
        return this.totalMin % 60;
    }
};

console.log(c2.name + " сургалт нь " + c2.computerHour() + " цаг " + c2.computerMin() + "мин видеотой.");
console.log(c1.name + " сургалт нь " + c1.computerHour() + " цаг " + c1.computerMin() + "мин видеотой.");
console.log((c1.computerHour() + c2.computerHour()) + " цаг " + (c1.computerMin() + c2.computerMin() + " мин хичээл үзэхнээ."));