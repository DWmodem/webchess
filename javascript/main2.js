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
    layer = map.create('level1', 40, 30, 64, 64);
    //layer.scale = {x:2, y:2}
    layer.resizeWorld();
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	sprite = game.add.sprite(32, 96, 'coin');
	sprite.anchor.set(0.5);

	game.physics.arcade.enable(sprite);
	sprite.body.setSize(16, 16, 0, 0);

    cursors = game.input.keyboard.createCursorKeys();
    game.input.addMoveCallback(moveCoin, this);

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
	if(game.input.mousePointer.isDown){

		sprite.x = (16 + layer.getTileX(game.input.activePointer.worldX) * 32)*layer.scale.x;
		sprite.y = (16 + layer.getTileY(game.input.activePointer.worldY) * 32)*layer.scale.y;
	}
}

function coinFollowMouse(){
	
}

var de = (function(){
	var displayEngine = function(){

	}
	return displayEngine;
})()