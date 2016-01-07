//main2.js
// snap on drag http://phaser.io/examples/v2/input/snap-on-drag
// colored tiles http://phaser.io/examples/v2/tilemaps/tileset-from-bitmapdata

var TILE_SIZE = 16;
var game = new Phaser.Game(	860, 600, Phaser.CANVAS, 'gamebox', 
							{preload: preload, create: create, update: update, render: render});

function preload() {
    game.load.image('chess_1x1', '../assets/chess_1x1.png');
    game.load.spritesheet('coin', '../assets/sprites/coin.png', 32, 32);
    game.load.bitmapFont('carrier_command', '../assets/fonts/carrier_command.png', '../assets/fonts/carrier_command.xml');
}

function create() {
	ch = new Chess();
	de = new DisplayEngine(ch);
}

function update() {

}

function render() {
	//game.debug.spriteInfo(de.sprite, 20, 32);
	game.debug.text('Tile X: ' + layer.getTileX(de.sprite.x), 32, 48, 'rgb(0,0,0)');
	game.debug.text('Tile Y: ' + layer.getTileY(de.sprite.y), 32, 64, 'rgb(0,0,0)');
}

var DisplayEngine = function(model){

	//
	//Attributes
	//
	var engine = this;
	this.STEP = 16;
	this.cursors = null;
	this.map = null;
	this.layer = null;
	this.sprite = "test";
	//Indicator to show whose turn it is
	this.turnIndicator = null;

	//The state of the chess game resides in here
	this.chm = model;
	var chm = this.chm;	//Give it a global ref for convenience
	// All hail the state of the chess game

	//
	//Public Methods
	//
	
	//Chess game primal methods
	this.startGame = function(){
		chm.startGame();
		engine.turnIndicator.setCurrentPlayer(chm.currentPlayer);
	};
	// End chess game primal methods

	//
	//Private Methods
	//
	this.en_init = function(){
		engine.createMap();
		engine.enablePhysics();
		engine.placeSprite();
		engine.enableCursors();
		engine.setActions();
		engine.createBoard();
		this.turnIndicator = new engine.TurnIndicator();
	};
	//
	//Utility Methods
	//
	this.placeSpriteOnTile = function(sprite, x, y){
		sprite.x = engine.centerOfTileX(x);
		sprite.y = engine.centerOfTileY(y);
	};

	this.createMap = function(){
		map = game.add.tilemap();
		map.addTilesetImage('chess_1x1');
		layer = map.create('level1', 40, 30, 32, 32);
		layer.resizeWorld();
	};

	this.enablePhysics = function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
	};

	this.placeSprite = function(){
		engine.sprite = game.add.sprite(32, 96, 'coin');
		engine.sprite.anchor.set(0.5);
		game.physics.arcade.enable(engine.sprite);
		engine.sprite.body.setSize(16, 16, 0, 0);
		console.log("engine.sprite is: "+engine.sprite);
	};

	this.enableCursors = function(){
		cursors = game.input.keyboard.createCursorKeys();
	};

	this.setActions = function(){
		game.input.addMoveCallback(this.moveCoin, this);
	};

	this.createBoard = function(){
		var currentTile = 0;
		for(var i = 0; i < 8; i++){
			for(var j = 0; j < 8; j++){
				map.putTile(((i+j) % 2), i, j, layer);
			}
		}
	};

	this.moveCoin = function(){
		if(game.input.mousePointer.isDown){
			engine.placeSpriteOnTile(	engine.sprite,
										game.input.activePointer.worldX, 
										game.input.activePointer.worldY);
			console.log("moveCoin");
		}
	};

	this.centerOfTileX = function (pixelX){
		return (engine.STEP + layer.getTileX(pixelX) * engine.STEP*2);
	};

	this.centerOfTileY = function (pixelY){
		return (engine.STEP + layer.getTileY(pixelY) * engine.STEP*2);
	};

	this.putPiece = function (){

	};

	this.pieceSprite = function(){
		this.initialX = 0;
		this.initialY = 0;
		this.key = 'coin';
		this.anchorX = 0.5;
		this.anchorY = 0.5;


		this.sprite = new Phaser.Sprite();
		this.sprite.setSize(TILE_SIZE, TILE_SIZE, 0, 0);
	};

	//
	//Object architecture
	//
	this.TurnIndicator = function(){
		this.text = game.add.bitmapText(10, 100, 'carrier_command', 'Do stuff!', 34);
		this.text.tint = 0x223344;
		this.text.inputEnabled = true;
		this.text.input.enableDrag();
	};
	//  ¯\_(ツ)_/¯
	this.en_init();
};