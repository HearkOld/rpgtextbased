// *******************************************************************************************************************************
// (C)opyright Heark Gaming
// Special thanks to Mascara for the compilation
// OPEN SOURCE PROJECT :)
// Version 0.1
// Completion Percentage 3%
// Thank you For VIEWING!
// Feel free to fork and pull request.
// This is the console version and must be ran in a console!
// *******************************************************************************************************************************
    var catstats = this; {
    var enemyhp = 20
    var enemyatt = 5
    var enemydef = 3
    var enemyagi = 10
    }
// Character Creation
var name = prompt("Please enter your name", "Lame Warrior");
var message = console.log
 message("Hi " + name + "!" )

 var classchoose = alert("Please choose your class")
 var on = true
 var off = false
 var userclass = prompt(name + "Please enter your class", " ");
 classchoose = on
 if(classchoose == on){
 message(" Classes: Paladin, Mage, and Cleric.")
 }
 if(userclass == "Paladin"){
  message("You're a Paladin!");
 }
 
 else if(userclass == "Mage"){
  message("You're a Mage!");
  var race = prompt("Please enter your race", "Human");
var gender = prompt("Please enter your gender", "Male");
 message("So you are " + name + " the " + gender + " " + race + " " + userclass + ".")
 }
 
 else if(userclass == "Cleric"){
  message("You're a Cleric!");
  var race = prompt("Please enter your race", "Human");
var gender = prompt("Please enter your gender", "Male");
 message("So you are " + name + " the " + gender + " " + race + " " + userclass + ".")
 }
 else{
  message("Class doesn't exist! Please try again.")
  var userclass = prompt(name + "Please enter your class", " ");
  
classchoose = off

var race = prompt("Please enter your race", "Human");
var gender = prompt("Please enter your gender", "Male");
 message("So you are " + name + " the " + gender + " " + race + " " + userclass + ".")


// Skills


var skills = this;
if(userclass == "Paladin"){
var basehp = 550
var baseatt = 22
var basedef = 15
var baseagi = 20
var basemag = 0
}




else if(userclass == "Mage"){
var basehp = 500
var baseatt = 10
var basedef = 10
var baseagi = 13
var basemag = 25
}


}

// enemy creations
function Cat (catstats) {
this.enemyhp
this.enemyatt
this.enemydef
this.enemyagi
}
// Battle/Damage
var physdamage = Math.random() * (10 - 100) + 10 + baseatt * 2 - enemydef * 2
var magdamage = Math.random() * (20 - 95) + 20 + basemag * 2 - enemydef * 2
var punchdamage = 5

// Battle example
this.Cat; {
message("A Wild cat appeared!")
message("Fight begins!")

var skillchoose = prompt("What attack would you like to do?")
if(skillchoose == "Punch"){
message(name + " did " + physdamage + punchdamage + " damage!")
if (enemyhp <= 0)
message(name + " defeated the cat!")
else{
message("enemy has " + enemyhp  - physdamage + punchdamage + " hp left!")
return
}
}



}
