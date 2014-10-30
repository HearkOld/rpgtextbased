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
var player = function(name, health, attack, defense, specialattack, specialdefense){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.specialattack = specialattack;
    this.specialdefense = specialdefense;
}
// moves
var move = function(name, damage, accuracy){
    this.name = name;
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
var punch = new move("Punch",10,100)
var kick = new move("Kick",15,85)
var wisp = new move("wisp",12,100)
var minorheal = new healmove(5,100)
var scratch = new move("Scratch",2,100)
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
// items
var item = function(name, description, damage, heal){
    this.name = name;
    this.description = description;
    this.damage = damage;
    this.heal = heal;
}
var minorpotion = new item("Minor Potion", "Heal by 45pts", 0, 45);
var majorpotion = new item("Major Potion", "Heal by 85pts", 0, 85);
var bomb = new item("Bomb", "Explodes and does 30 damage to one enemy.", 30, 0);

// inventory
var inventory = [];


// battle mod
var randnum = Math.floor(Math.random(10)*10);

// battle script
// Part 1
//Make randomnumber Here
var randomnumber = Math.floor(Math.random(10)*10);

//Make selectedmonster Here
var selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
	selectedmonster = evilcat;
}
else if (randomnumber > 3 && randomnumber < 6){
	selectedmonster = orc;
}
else if (randomnumber > 6){
	selectedmonster = ogre;
}
alert(selectedmonster.name+ " appeared!")
//Battle Script
var monsterdead = 0;
var playerdead = 0;
//player goes first, playerturn = 1
var playerturn = 1;
var monsterturn = 0;
while (monsterdead === 0 || playerdead === 0){
//Player's Turn
while (playerturn == 1){
	//Write Player Attack Script	
}
//Monster's Turn
while (monsterturn == 1){
	//Write Monster Attack Script	
}
//When Monster Dies
if (selectedmonster.health <= 0){
	
}
//When Player Dies
if (player.health <= 0){
	
}
}
