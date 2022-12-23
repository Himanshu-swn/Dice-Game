randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "player 2 wins";
} else {
  document.querySelector("h2").innerHTML = "Draw !!!";
}

image1 = "images/dice" + randomNumber1 + ".png";
image2 = "images/dice" + randomNumber2 + ".png";
// alert(image1);
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);
