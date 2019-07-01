import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let square = board.findPiece(this);

        let moves = [];
        moves.push(square.createWithOffset(1,2));
        moves.push(square.createWithOffset(2,1));
        moves.push(square.createWithOffset(1,-2));
        moves.push(square.createWithOffset(2,-1));
        moves.push(square.createWithOffset(-1,2));
        moves.push(square.createWithOffset(-2,1));
        moves.push(square.createWithOffset(-1,-2));
        moves.push(square.createWithOffset(-2,-1));

        moves = moves.filter ( square => square.row >= 0 && square.row < 8 && square.col >= 0 && square.col < 8 );

        return moves;
    }
}
