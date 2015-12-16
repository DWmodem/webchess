//main2.sj
var game = new Phaser.Game(860, 600, Phaser.CANVAS, 'gamebox', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('chess_1x1', '../assets/chess_1x1.png');
    game.load.spritesheet('coin', '../assets/sprites/coin.png', 32, 32);
}


function create() {
	ch = new Chess();
	de = new DisplayEngine(ch);
    de.createMap();
	de.enablePhysics();
	de.placeSprite();
    de.enableCursors();
    de.setActions();
    de.createBoard();
}

function update() {


}

function coinFollowMouse(){
	
}


var DisplayEngine = function(model){
	var STEP = 16;
	var cursors;
	var map;
	var layer;
	var sprite;
	var chess = model;

	this.createMap = function(){	
		map = game.add.tilemap();
	    map.addTilesetImage('chess_1x1');
	    layer = map.create('level1', 40, 30, 32, 32);
	    layer.resizeWorld();
	}

	this.enablePhysics = function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
	}

	this.placeSprite = function(){
		sprite = game.add.sprite(32, 96, 'coin');
		sprite.anchor.set(0.5);
		game.physics.arcade.enable(sprite);
		sprite.body.setSize(16, 16, 0, 0);
	}

	this.enableCursors = function(){
		cursors = game.input.keyboard.createCursorKeys();
	}

	this.setActions = function(){
		game.input.addMoveCallback(this.moveCoin, this);
	}

	this.createBoard = function(){
		var currentTile = 0;
	    for(var i = 0; i < 8; i++){
			for(var j = 0; j < 8; j++){

				map.putTile(((i+j) % 2), i, j, layer);
			}
		}
	}
	
	this.moveCoin = function(){
		if(game.input.mousePointer.isDown){

			sprite.x = (STEP + layer.getTileX(game.input.activePointer.worldX) * STEP*2)*layer.scale.x;
			sprite.y = (STEP + layer.getTileY(game.input.activePointer.worldY) * STEP*2)*layer.scale.y;
		}
	}

}