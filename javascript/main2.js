//main2.sj
var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'gamebox', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('chess_1x1', '../assets/chess_1x1.png');
}

var cursors;
var map;
var layer;
var sprite;

function create() {
	Phaser.Canvas.setSmoothingEnabled(this.game.context, false);
    map = game.add.tilemap();

    map.addTilesetImage('chess_1x1');
    layer = map.create('level1', 40, 30, 32, 32);
   	layer.scale = {x:3, y:3}
    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();

	var currentTile = 0;

    for(var i = 0; i < 8; i++){
    	for(var j = 0; j < 8; j++){

    		map.putTile(((i+j) % 2), i, j, layer);
    	}
    }
}

function update() {

    if (cursors.left.isDown)
    {
    }
    else if (cursors.right.isDown)
    {
    }

    if (cursors.up.isDown)
    {
    }

}