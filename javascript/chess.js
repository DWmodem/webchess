
(function(){

	//Chess objects
	var Chess = function(){
		//
		//Attributes
		//
		var selfChess = this;
		this.players = [];
		this.board = new Board(); //Board model
		this.ch_init();

		//
		//Public methods
		//
		this.createPiece = function(){
			var theNewPiece = new Piece(board);
		};

		//
		//Private methods
		//
		this.ch_init = function(){ //Call this on object creation

		};

		this.createPlayer = function(name){
			selfChess.players.push(new Player(name));
		};

		//
		//Object types
		//
		this.Player = function(name) {
			//
			//Attributes
			//
			var selfPlayer = this;
			this.name = name;
			this.moveHistory = [];
			this.capturedPieces = [];
			this.livingPieces = [];

			//
			//Public Methods
			//

			//
			//Private Methods
			//

			//
			//Object types
			//


		};

		this.Board = function() {
			//
			//Attributes
			//
			var selfBoard = this;
			this.tiles = [];

			//
			//Public Methods
			//

			//
			//Private Methods
			//
			this.move = function(piece, x, y){

			};
			
			this.verifyCheck = function(piece, x, y){

			};

			this.verifyMate = function(player){

			};

			//
			//Object types
			//
			
		};
		
		//VerifyCheck will create a board where the move is done.
		//If friendly king is in check, the move is invalid

		//If the player's king is in check, and has no valid moves, return true.
		//Called at the start of a player's turn

		this.Piece = function(board, player) {
			//
			//Attributes
			//
			var selfPiece = this;
			this.owner = player;
			this.board = board;
			this.x  = 0;
			this.y = 0;
			this.moves = [];	//Array move objects. 
			this.eats = [];

			//
			//Public Methods
			//
			this.Move = function(x, y, tx, ty){
				//x, y is the destination
				this.x = 0;
				this.y = 0;

				//default the target to the landing destination
				if(tx === null){
					tx = x;
				}
				if(ty ===	 null){
					ty = y;
				}
				//Target is the eaten piece
				this.targetX = tx;
				this.targetY = ty;
			};

			//
			//Private Methods
			//
			this.updateMoves = function() {
			
			};

			//Returns true if the coords are valid for this piece
			this.isValidMove = function(x, y) {

			};

			//
			//Object types
			//

			
		};
	};
	window.Chess = Chess;
})();

