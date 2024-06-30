var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage = "dice" + randomNumber1 + ".png";

var imagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", imagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagesource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", imagesource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 Win";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 win";
}
else {
    document.querySelector("h1").innerHTML = "tie";
}