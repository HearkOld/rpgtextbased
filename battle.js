//Player Function
var players = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Player Here
var player = new players(50, 1000);

//Monster Function
var monsters = function(attack, health){
	this.health = health;
	this.attack = attack;
};

//Make Monsters Here
var dragon = new monsters(100, 200);
var goblin = new monsters(25, 500);
var wizard = new monsters(200, 50);

//Make String Names Here
var names;

//Make randomnumber Here
var randomnumber = Math.floor(Math.random(10)*10);

//Make selectedmonster Here
var selectedmonster;
if (randomnumber >= 0 && randomnumber < 3){
	selectedmonster = dragon;
	names = "dragon";
}
else if (randomnumber > 3 && randomnumber < 6){
	selectedmonster = goblin;
	names = "goblin";
}
else if (randomnumber > 6){
	selectedmonster = wizard;
	names = "wizard";
}
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
