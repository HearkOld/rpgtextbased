// Character Creation

var name = prompt("Please enter your name", "Lame Warrior");
 document.write("Hi " + name + "!" )

 var classchoose = alert("Please choose your class")
 var on = true
 var off = false
 var userclass = prompt(name + "Please enter your class", " ");
 classchoose = on
 if(classchoose == on)
 document.write(" Classes: Paladin, Mage, and Cleric.")
 if(userclass == "Paladin")
 document.write("You're a Paladin!")
 if(userclass == "Mage")
 document.write("You're a Mage!")
 if(userclass == "Cleric")
 document.write("You're a Cleric!")
 else
 document.write("Class doesn't exist! Please try again.")
 prompt(name + ", Please enter your class", " ");

classchoose = off
var race = prompt("Please enter your race", "Human");
var gender = prompt("Please enter your gender", "Male");
document.write("So you are " + name + " the " + gender + " " + race + " " + userclass + ".")

// Enemy Creation
