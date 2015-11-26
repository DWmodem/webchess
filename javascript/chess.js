//Chess objects

var Chess = function(){
	
	Chess.prototype.Player = function(name) {
		this.name = name;
		this.moveHistory;
		this.capturedPieces = [];
		this.livingPieces = [];

	}

	Chess.prototype.Board = function() {
		this.tiles = [];
	}

	Board.prototype.move = function(piece, x, y){

	}
	
	//VerifyCheck will create a board where the move is done.
	//If friendly king is in check, the move is invalid
	Board.prototype.verifyCheck = function(piece, x, y){

	}

	//If the player's king is in check, and has no valid moves, return true.
	//Called at the start of a player's turn
	Board.prototype.verifyMate = function(player){

	}

	Chess.prototype.Piece = function(board, player) {
		this.owner = player;
		this.board = board;
		this.x;
		this.y;
		this.moves = [];	//Array move objects. 
		this.eats = [];

		var Move = function(x, y, tx, ty){
			//x, y is the destination
			this.x;
			this.y;

			//default the target to the landing destination
			if(tx == null){
				tx = x;
			}
			if(ty == null){
				ty = y;
			}
			//Target is the eaten piece
			this.targetX = tx;
			this.targetY = ty;
		}
	}

	//Piece methods must be implemented in the subclass
	Piece.prototype.updateMoves = function() {
	}

	//Returns true if the coords are valid for this piece
	Piece.prototype.isValidMove = function(x, y) {
		
	}

	//Piece methods

	//Declaration of the pawn object
	Pawn.prototype = new Piece();
}