var myAge = prompt("What is your age?");
if(myAge>=14){
  confirm("You may pass...");
}
else{
  alert("You may play, but I am not responsible for your actions during or after the game, get your parents permission first");
}
alert("Welcome to Mug's Galaxy!");
alert("The RPG game!");
confirm("Are you ready?");
alert("Good let's begin!");
alert("First off, What is your name?")
var name = prompt("Please enter your name", "Lame Warrior");


alert("Here comes BatSpider");
var answerOne = prompt("What do you do? Type 1 for Dance, Type 2 for Fight, Type 3 for Run Away");
if(answerOne==="1"){
   alert("You start dancing, he gets in the mood and starts dancing too");
  alert("You beat the game!");
}
else if(answerOne==="2"){
   alert("You stay to fight");
   alert("BatSpider kills you");
   alert("You loose...");
}
else if(answerOne==="3"){
   alert("You Run Away");
   alert("You didn't win or loose, you big baby");
   confirm("You should go back");
}
else{
  confirm("I didn't quite understand you...");
   alert("Try Again Later");
}
