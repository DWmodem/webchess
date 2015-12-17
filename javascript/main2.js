//main2.js
// snap on drag http://phaser.io/examples/v2/input/snap-on-drag
// colored tiles http://phaser.io/examples/v2/tilemaps/tileset-from-bitmapdata

var TILE_SIZE = 16;
var game = new Phaser.Game(860, 600, Phaser.CANVAS, 'gamebox', { preload: preload, create: create, update: update, render: render});

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

function render() {
	//game.debug.spriteInfo(de.sprite, 20, 32);

}

function coinFollowMouse(){
	
}


var DisplayEngine = function(model){

	self = this;
	this.STEP = 16;
	this.cursors;
	this.map;
	this.layer;
	this.sprite = "test";

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

		self.sprite = game.add.sprite(32, 96, 'coin');
		self.sprite.anchor.set(0.5);
		game.physics.arcade.enable(self.sprite);
		self.sprite.body.setSize(16, 16, 0, 0);
		console.log("self.sprite is: "+self.sprite);
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
			self.sprite.x = (self.STEP + layer.getTileX(game.input.activePointer.worldX) * self.STEP*2);
			self.sprite.y = (self.STEP + layer.getTileY(game.input.activePointer.worldY) * self.STEP*2);
		}
	}
	this.putPiece = function (){

	}

	this.pieceSprite = function(){
		this.initialX = 0;
		this.initialY = 0;
		this.key = 'coin';
		this.anchorX = 0.5;
		this.anchorY = 0.5;


		this.sprite = new Phaser.Sprite();
		this.sprite.setSize(TILE_SIZE, TILE_SIZE, 0, 0);


	}
}