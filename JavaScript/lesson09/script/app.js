var birthDate = prompt("Таны төрсөн он хэд вэ?");
if (birthDate !== null) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthDate;
  var message = "Сайн байна уу\nТаны нас : " + age;
  if (age > 18) {
    console.log("Та насанд хүрсэн байна!");
  } else {
    console.log("Уучлаарай та насанд хүрээгүй байна!");
  }
  alert(message);
} else {
  alert(
    "Уучлаарай та төрсөн огноогоо оруулахыг сайн ойлгохгүй байх шиг байна!!"
  );
}
