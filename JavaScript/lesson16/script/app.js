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
}
var c2 = {
    name: "HTML, CSS эхнээс нь дуустал!",
    lessonCount: 128,
    totalMin: 1217,
    author: h2,
    price: 14600,
    disCount: 26900,
}

console.log(c2.author.address.location + "-д амьдардаг " + c2.author.name + '-ийн 2019 онд гаргасан "' + c2.name + '" сургалт нь ' +c2.price + '₮ үнэтэй боловч яг одоогоор ' + c2.disCount + ' болж хямдарсан байна!')