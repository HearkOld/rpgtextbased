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
    this.range = range;
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
var dragon = new enemy(50, 5, 4, 3, 4)
var orc = new enemy(10, 1, 1, 1, 1)
var ogre = new enemy(25, 3, 4, 4, 5)
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
// names
var names;

// battle mod
var randnum = Math.floor(Math.random(10)*10);

// battle script
// Part 1
//selected monster
var selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
selectedmonster = evilcat;
names = "Evil Cat";
}
else if (randomnumber > 3 && randomnumber < 6){
selectedmonster = dragon;
names = "dragon";
}
else if (randomnumber > 6){
selectedmonster = orc;
names = "orc";
}
else if (randomnumber > 9){
selectedmonster = ogre;
names = "ogre";
}
// Part 2
var battle = 1;
var monsterdead = 0;
var playerdead = 0;


// player first, player turn =1 
var playerturn = 1;
var monsterturn = 0;


while (battle == 1) {
//my turn
while (playerturn == 1) {
//attack script
selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(player.attack)*10);
console.log(names + "'s Health is now " + selectedmonster.health);
playerturn = 0;
monsterturn = 1;
}


//monster turn


while (monsterturn ==1) {
//attack script
player.health = player.health - Math.ceil(Math.random(selectedmonster.attack)*10);
console.log("Player's Health is now " + player.health);
playerturn = 1;
monsterturn = 0;
}


//when the opponent dies
if (selectedmonster.health < 0) {
monsterdead = 1;
battle = 0;
}


//if I die... lolz


if (player.health < 0) {
playerdead = 1;
battle = 0;
}
}


