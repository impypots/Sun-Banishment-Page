function changeCss () {
    var navElement = document.querySelector(".topnav ul");

    if (this.scrollY > 100) {
        navElement.style.backgroundColor = "rgba(255,255,255,1)";
        document.getElementById("navText1").style.color = "black";
        document.getElementById("navText2").style.color = "black";
        document.getElementById("navText3").style.color = "black";
        document.getElementById("navText4").style.color = "black";
        document.getElementById("logowhite").src = "Images/sunBanishmentBlackText.png";
        document.getElementById("searchwhite").src = "Images/searchIcon.png";
    } else {
        navElement.style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("navText1").style.color = "white";
        document.getElementById("navText2").style.color = "white";
        document.getElementById("navText3").style.color = "white";
        document.getElementById("navText4").style.color = "white";
        document.getElementById("logowhite").src = "Images/sunBanishmentWhiteText.png";
        document.getElementById("searchwhite").src = "Images/searchIconWhite.png";
    }
  }
  window.addEventListener("scroll", changeCss , false);


var quotes = [];
var time = 4000;
const impact1 = document.getElementById('impact1');
const impact2 = document.getElementById('impact2');
//const impact3 = document.getElementById('impact3');
let i = 0;
let j = -1;



function impactSlide() {

  impact1.style.color = "rgba(0, 0, 0, 1)";
  impact1.style.animation = "examplecoming 0.5s ease forwards 0.1s";
  setTimeout(()=> {
    impact1.style.animation = "examplegoing 0.5s ease forwards 0.1s";
    impact1.style.color = "rgba(118, 26, 243, 0)";
    impact2.style.animation = "examplecoming 0.5s ease forwards 0.1s";
    impact2.style.color = "rgba(0, 0, 0, 1)";
    setTimeout(()=> {
      impact2.style.color = "rgba(118, 26, 243, 0)";
      impact2.style.animation = "examplegoing 0.5s ease forwards 0.1s";
    }, 2000)
  }, 2000)





 /* if(i === 0){
  impact1.style.color = "rgba(0, 0, 0, 1)";
  impact1.style.animation = "examplecoming 0.5s ease forwards 0.1s";
  impact2.style.animation = "examplegoing 0.5s ease forwards 0.1s";
  impact2.style.color = "rgba(118, 26, 243, 0)";
}
if (i === 1){
  impact1.style.color = "rgba(118, 26, 243, 0)";
  impact1.style.animation = "examplegoing 0.5s ease forwards 0.1s";
  impact2.style.color = "rgba(0, 0, 0, 1)";
  impact2.style.animation = "examplecoming 0.5s ease forwards 0.1s";
}*/


 if(i === 2){
   i = 0;
 } else {
   i += 1;
 }
 
}

setInterval( impactSlide, time);












//function changeQuote() {
  // quotes[i].style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//}
//changeQuote;