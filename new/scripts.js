//////////////////////////////////////////////////////////////////////////////////////////////////////
//   (C)opyright Heark Gaming Co.                                                                   //
//   RPG Script v0.6                                                                                //
//   This is the updated version of Heark's RPG Script                                              //
// See Original script here: https://raw.githubusercontent.com/Heark/rpgtextbased/master/scripts.js //
//   Authored on 9/??/2014                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////


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
// moves
var move = function(damage, accuracy){
    this.damage = damage;
    this.accuracy = accuracy;
}
var healmove = function(range, accuracy){
    this.rang = range;
    this.accuracy = accuracy;
}
// creating enemies
var enemy = function(health, attack, defense, specialattack, specialdefense){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.specialattack = specialattack;
    this.specialdefense = specialdefense;   
}
var evilcat = new enemy(40, 3, 4, 3, 4)
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
damage + attack
