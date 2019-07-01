import Piece from './piece';
import Square from '../square';
import Rook from './rook';
import Bishop from './bishop';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let square = board.findPiece(this);
        let moves = Rook.getLateralMoves(square);
        moves = Bishop.getDiagonalMoves(square,moves);
        return moves;
    }
}