// Character Creation

var name = prompt("Please enter your name", "Lame Warrior");
 document.write("Hi " + name + "!" )

 var classchoose = alert("Please choose your class")
 var on = true
 var off = false
 var choice1 = prompt(name + "Please enter your class", " ");
 classchoose = on
 if(classchoose == on)
 document.write(" Classes: Paladin, Mage, and Cleric.")
 if(choice1 == "Paladin")
 document.write("You're a Paladin!")
 else
 document.write("Class doesn't exist! Please try again.")
 prompt(name + ", Please enter your class", " ");
end

 classchoose = off
