let hozir = ("2022");
alert ("Assalomu alaykum bu sayt armiyaga ketish uchun royhattan otish uchun ishlab chiqilgan !");

let ism = prompt ("iltimos ismingizni kiriting !" , "ozod");
let familiya = prompt ("iltimos familiyangizni kiriting !" , "Gulomjonov");
if (confirm ("Hosh ismingiz " +  ism + " familiyangiz " +  familiya + "  lekin bu hali yetarli emas yana dalshe toldirmochimisiz ?")) {
   let yil = prompt ("iltimos tugilgan yilingizni yozing !")
   hozir -= yil;
   if (hozir > 17.99999){
      alert ("sizning yoshingiz  " +  hozir + "  va siz armiyaga ketolasiz")

      if (hozir > 100){
         alert ("tohten tohten sizi yoshiz  " + hozir + "  siz olgan bolishiz kere BALABOL li qimen iltimos !" )
      }
   }

   if (hozir < 17.9999999) {
      alert ("sizi yoshiz  " + hozir + "  va siz armiyaga hali yoshli qilasiz !")
   }

}else ("damini ol unda");
