medeelel("Нараа", "багш", 90)
medeelel("Болд", "багш", 50)
function medeelel(name, job, avgDun){
switch (job) {
    case "багш": console.log(name + " бол хүүхдүүдэд хичээл заадаг."); break;
    case "зураач": console.log(name + " бол бол гоё зураг зурдаг."); break;
    case "програмист": console.log(name + " бол вэб программ зохиогч юм."); break;
    default: console.log(name + " бол ямар нэг ажил хийдэг юм байна. Бүү мэд..."); break;
}

switch(true){
    case avgDun >=90: console.log(name + " бол ОНЦ сурлагатан"); break;
    case avgDun < 90 && avgDun>=80 : console.log(name + " бол САЙН сурлагатан"); break;
    case avgDun < 80 && avgDun>=70: console.log(name + " бол ДУНД сурлагатан"); break;
    default : console.log(name + " бол МУУ сурлагатан"); break;
}
}