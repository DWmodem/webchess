
(function(){

	//Chess objects
	var Chess = function(){
		
		this.Player = function(name) {
			this.name = name;
			this.moveHistory;
			this.capturedPieces = [];
			this.livingPieces = [];

		}

		this.Board = function() {
			this.tiles = [];
			
			//The board moves the pieces
			this.move = function(piece, x, y){

			}
			
			this.verifyCheck = function(piece, x, y){

			}

			this.verifyMate = function(player){

			}
		}
		
		//VerifyCheck will create a board where the move is done.
		//If friendly king is in check, the move is invalid

		//If the player's king is in check, and has no valid moves, return true.
		//Called at the start of a player's turn

		this.Piece = function(board, player) {
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
			
			//Piece methods must be implemented in the subclass
			var updateMoves = function() {
			
			}

			//Returns true if the coords are valid for this piece
			var isValidMove = function(x, y) {

			}
		}
		window.Piece = this.Piece;
	}
	window.Chess = Chess;
})();

