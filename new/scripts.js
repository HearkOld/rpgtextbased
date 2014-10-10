//////////////////////////////////////////////////////////////////////////////////////////////////////
//   (C)opyright Heark Gaming Co.                                                                   //
//   RPG Script v0.6                                                                                //
//   This is the updated version of Heark's RPG Script                                              //
// See Original script here: https://raw.githubusercontent.com/Heark/rpgtextbased/master/scripts.js //
//   Authored on 9/??/2014                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////


// info gather
var name = prompt("what is your name?")

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
    this.range = range;
    this.accuracy = accuracy;
}
// creating enemies
var enemy = function(name, health, attack, defense, specialattack, specialdefense){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.specialattack = specialattack;
    this.specialdefense = specialdefense;   
}
var evilcat = new enemy("Evil Cat", 40, 3, 4, 3, 4)
var dragon = new enemy("Dragon", 135, 5, 4, 3, 4)
var orc = new enemy("Orc", 85, 1, 1, 1, 1)
var ogre = new enemy("Ogre", 105, 3, 4, 4, 5)
// creating the skills
var punch = new move(10,100)
var kick = new move(15,85)
var wisp = new move(12,100)
var minorheal = new healmove(5,100)
var scratch = new move(2,100)
// class creation
var classmessage = alert("Availiable classes are: Paladin, Mage, Marksman")
var userclass = prompt("Please Choose your class.")
if (userclass == "Paladin" || "paladin"){
    var user = new player(100, 12, 10, 5, 6)
    var skills = [punch, kick]
}
else if (userclass == "Mage" || "mage"){
    var user = new player(100, 6, 6, 14, 11)
    var skills = [wisp, minorheal]
}
// names
var names;

// battle mod
var randnum = Math.floor(Math.random(10)*10);

// battle script
// Part 1

console.log('Cat appeared!')
var battle = function();
catbattle = true
if (catbattle = true) do {
