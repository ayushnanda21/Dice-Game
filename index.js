// For dice 1

var randomNumber1 = Math.floor(Math.random() * 6 )+ 1;

var randomDiceimage = "dice" + randomNumber1 + ".png" ;

var randomImageSource = "images/" + randomDiceimage;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src" , randomImageSource);

// For dice 2

var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;

var randomDiceimage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceimage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 WINS";
}

else  

 {
  document.querySelector("h1").innerHTML ="Player 2 WINS";
}

// else if {
//   document.querySelector("h1").innerHTML= "DRAW";
// }
