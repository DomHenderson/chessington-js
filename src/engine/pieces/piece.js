export default class Piece {
    constructor(player, movementTypes) {
        this.player = player;
        this.movementTypes = movementTypes;
    }

    getAvailableMoves(board) {
        let moves = [];
        let square = board.findPiece(this);
        this.movementTypes.forEach(movement => moves = moves.concat(movement(square, board)));
        return moves;
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
