//main2.sj
var game = new Phaser.Game(860, 600, Phaser.CANVAS, 'gamebox', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('chess_1x1', '../assets/chess_1x1.png');
    game.load.spritesheet('coin', '../assets/sprites/coin.png', 32, 32);
}

var cursors;
var map;
var layer;
var sprite;

function create() {

    map = game.add.tilemap();

    map.addTilesetImage('chess_1x1');
    layer = map.create('level1', 40, 30, 33, 33);
   	layer.scale = {x:2, y:2}
    layer.resizeWorld();
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	sprite = game.add.sprite(32, 96, 'coin');
	sprite.anchor.set(0.5);

	game.physics.arcade.enable(sprite);
	sprite.body.setSize(32, 32, 0, 0);

    cursors = game.input.keyboard.createCursorKeys();

	var currentTile = 0;

    for(var i = 0; i < 8; i++){
    	for(var j = 0; j < 8; j++){

    		map.putTile(((i+j) % 2), i, j, layer);
    	}
    }
}

function update() {

    if (cursors.up.isDown)
    {

    }

}

function moveCoin(){

}

var de = (function(){
	var displayEngine = function(){

	}
	return displayEngine;
})()