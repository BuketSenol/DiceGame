

var randomNum = Math.floor(Math.random()*6)+1  ;

var randomDiceImg = "dice"+ randomNum +".png";

var randomImgSrc = "image/" + randomDiceImg;

var firstPlayerOfDice = document.querySelector(".image1");
firstPlayerOfDice.setAttribute("src", randomImgSrc)
console.log(firstPlayerOfDice);

var  randomNum2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice"+ randomNum2 + ".png";
var randomDiceSrc2 = "image/"+ randomDiceImg2;
var secondPlayerOfDice = document.querySelector(".image2");
secondPlayerOfDice.setAttribute("src",randomDiceSrc2);

if(randomNum>randomNum2){
    var wins1 = document.querySelector(".flag");
    wins1.style.display="block"
    wins1.style.position="absolute";
    wins1.style.left="120px";
    wins1.style.top="58px";
    var h1 = document.querySelector("h1").innerHTML="Player 1 Wins!";
}
    
else if(randomNum===randomNum2){
    var draw = document.querySelector("h1").innerHTML="Draw!";
    
}else{
    var wins2= document.querySelector(".flag");
    wins2.style.display="block";
    wins2.style.position="absolute";
    wins2.style.right="80px";
    wins2.style.top="58px"
    var h1= document.querySelector("h1").innerHTML="Player 2 Wins!"

}
    
