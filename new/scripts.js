// info gather
var name = prompt("what is your name?")
var classmessage = alert("Availiable classes are: Paladin, Mage, Marksman")
var userclass = prompt("Please choose your class.")

// creating players
var player = function(health, attack, defense, specialattack, specialdefense){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.specialattack = specialattack;
    this.specialdefense = specialdefense;
}
var move = function(damage, accuracy){
    this.damage = damage;
    this.accuracy = accuracy;
}
var healmove = function(range, accuracy){
    this.rang = range;
    this.accuracy = accuracy;
}
// creating the skills
var punch = new move(10,100)
var kick = new move(15,85)
var wisp = new move(12,100)
var minorheal = new healmove(5,100)
// class creation
if (userclass == "Paladin"){
    var user = new player(100, 12, 10, 5, 6)
    var skills = [punch, kick]
}
else if (userclass == "Mage"){
    var user = new player(100, 6, 6, 14, 11)
    var skills = [wisp, minorheal]
}

// attack script
var attack = prompt("???")
if (attack == "Punch"){
  punch(damage) + attack
}
