// info gather
var name = prompt("what is your name?")
var classmessage = alert("Availiable classes are: Paladin, Mage, Marksman")
var userclass = prompt("Please choose your class.")

// creating players
var player = function(basehp, baseatt, basedef, basespa, basespd){
    this.basehp = health;
    this.baseatt = attack;
    this.basedef = defense;
    this.basespa = specialattack;
    this.basespd = specialdefense;
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
