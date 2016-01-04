
(function(){

	//Chess objects
	var Chess = function(){
		//
		//Attributes
		//
		var selfChess = this;
		this.players = [];
		this.board = null;

		//
		//Public methods
		//

		//
		//Private methods
		//

		//Called on object creation. Takes care of object attribute initialization, and other init code.
		this.ch_init = function(){ 
			selfChess.board = new selfChess.Board(); //Board model
			selfChess.createPlayer('white');
			selfChess.createPlayer('black');
		};

		this.createPlayer = function(name){
			selfChess.players.push(new selfChess.Player(name));
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

			//
			// Initialization
			//
		};

		this.Board = function() {
			//
			//Attributes
			//
			var selfBoard = this;
			this.tiles = [[]];

			//
			//Public Methods
			//

			//Move the piece to the coordinates, if able.
			this.move = function(piece, x, y){
				//If unable to move
				if(!piece.move(x, y)){
					return false;
				}
				return true;
			};

			//Returns an eaten piece if one is eaten
			this.placePieceAt = function(piece, x, y){
				var targetSpacePiece = selfBoard.removePieceAt(x, y);
				piece.placeAt(x, y);
				selfBoard.updateAllMoves();
				return targetSpacePiece;
			};

			//Returns the piece
			this.removePieceAt = function(x, y){
				var piece = selfBoard.tiles[x][y].remove();
				selfBoard.tiles[x][y] = null;
				selfBoard.updateAllMoves();
				return piece;
			};
			//
			//Private Methods
			//

			this.verifyCheck = function(piece, x, y){

			};

			this.verifyMate = function(player){

			};

			//Every time a piece is moved or removed, 
			//Must update the remaining pieces with new movesets
			this.updateAllMoves = function(){

			};
			//
			//Object types
			//

			//
			// Initialization
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
			this.states = {idle: 'idle', selected: 'selected', hover: 'hover'};
			this.currentState = states.idle;
			//
			//Public Methods
			//
			this.move = function(x, y){
				var mvmt = selfPiece.getMovement(x, y);
				if(!mvmt){
					return false;
				}
				var eatenPiece = selfPiece.implMovement(mvmt);
			};

			//Place as a brand new fresh piece. Override existing attributes
			this.placeAt = function(x, y, board, player){
				//If there is a valid board argument
				var boardIsNull = (board === null);
				if(!boardIsNull){
					selfPiece.board = board;
				}
				
				//If there is a valid player argument
				var playerIsNull = (player === null);
				if(!playerIsNull){
					selfPiece.owner = player;
				}

				selfPiece.x = x;
				selfPiece.y = y;
				this.moves = [];
				this.eats = [];
			};

			//Remove this piece from board, return a reference to it.
			this.remove = function(){
				selfPiece.board = null;
				selfPiece.x = -1;
				selfPiece.y = -1;
				selfPiece.moves = [];
				selfPiece.eats = [];
				return selfPiece;
			};

			//
			//Private Methods
			//
			this.updateMoves = function() {
			
			};

			//Returns the movement if able, otherwise false
			this.getMovement = function(x, y){
				return selfPiece.isValidMove(x, y);
			};

			//Implements a movement
			//2. Remove eaten pieces from board <-- Ask board to do this?
			//3. Remove old selfPiece reference from board
			//1. Update piece coords
			//4. Update board with new selfPiece placement
			//5. return the eaten piece to caller
			this.implMovement = function(movement){
				var targetPiece = selfPiece.board.removePieceAt(movement.tx, movement.ty);
				selfPiece.board.removePieceAt(selfPiece.x, selfPiece.y);
				selfPiece.x = movement.x;
				selfPiece.y = movement.y;
				selfPiece.board.placePieceAt(selfPiece, movement.x, movement.y);
				return targetPiece;
			};

			//Returns true if the coords are valid for this piece
			//Scans the movement arrays for these coords
			this.isValidMove = function(x, y) {
				var currMovement = null;
				for(var i = 0; i < selfPiece.moves.length; i++){
					currMovement = selfPiece.moves[i];
					if((currMovement.x == x) && (currMovement.y == y)){	//If both coords match
						return selfPiece.moves[i];						//then we have the move in our array. Return true.
					}
				}

				currMovement = null;
				for(var j = 0; j < selfPiece.eats.length; j++){
					currMovement = selfPiece.eats[j];
					if((currMovement.x == x) && (currMovement.y == y)){	//If both coords match
						return selfPiece.eats[j];						//then we have the eat in our array. Return true.
					}
				}

				return false;											//If it was in neither the moves or the eats, it is not a valid move.
			};

			//
			//Object types
			//
			this.Movement = function(x, y, tx, ty){
				//x, y is the destination
				this.x = 0;
				this.y = 0;

				//default the target to the landing destination
				if(tx === null){
					tx = x;
				}
				if(ty === null){
					ty = y;
				}
				//Target is the eaten piece
				this.targetX = tx;
				this.targetY = ty;
			};
			//
			// Initialization
			//			
		};

		//
		// Initialization (Chess)
		//
		this.ch_init();

	};
	window.Chess = Chess;
})();

