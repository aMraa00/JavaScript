var name = "Нараа";
var job = "багш";

// if(job === "багш"){
//     console.log(name + " бол хүүхдүүдэд хичээл заадаг.");
// }else if(job === "зураач"){
//     console.log(name + " бол гоё зураг зурдаг.");
// }else if(job === "програмист"){
//     console.log(name + " бол вэб программ зохиогч юм");
// }else{
//     console.log(name + " бол ямар нэг ажил хийдэг юм байна. Бүү мэд...");
// }
// switch (job) {
//     case "багш": console.log(name + " бол хүүхдүүдэд хичээл заадаг."); break;
//     case "зураач": console.log(name + " бол бол гоё зураг зурдаг."); break;
//     case "програмист": console.log(name + " бол вэб программ зохиогч юм."); break;
//     default: console.log(name + " бол ямар нэг ажил хийдэг юм байна. Бүү мэд..."); break;
// }

var avgDun = 80;

// if(avgDun >=90){
//     console.log(name + " бол ОНЦ сурлагатан");
// }else if(avgDun < 90 && avgDun>=80){
//     console.log(name + " бол САЙН сурлагатан");
// }else if(avgDun < 80 && avgDun>=70){
//     console.log(name + " бол ДУНД сурлагатан");
// }else{
//     console.log(name + " бол МУУ сурлагатан");
// }

switch(true){
    case avgDun >=90: console.log(name + " бол ОНЦ сурлагатан"); break;
    case avgDun < 90 && avgDun>=80 : console.log(name + " бол САЙН сурлагатан"); break;
    case avgDun < 80 && avgDun>=70: console.log(name + " бол ДУНД сурлагатан"); break;
    default : console.log(name + " бол МУУ сурлагатан"); break;
}