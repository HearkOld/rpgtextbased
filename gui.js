//Player Function
var players = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Player Here


//Monster Function
var monsters = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Monsters Here
var dragon = new monsters(100, 200);
var demon = new monsters(110, 250);
var bat = new monsters(30, 60);
var slime = new monsters(10,30);
