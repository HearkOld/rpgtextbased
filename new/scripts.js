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
// creating the skills
var punch = new move(10,100)
var kick = new move(15,85)
// class creation
if (userclass == "Paladin"){
    var user = new player(100, 12, 10, 5, 6)
    var skills = [punch, kick]
}
