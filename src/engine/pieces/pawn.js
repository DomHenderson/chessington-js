import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let square = board.findPiece(this);

        if ( this.player == Player.WHITE ) {
            ++square.row;
        } else if ( this.player == Player.BLACK ) {
            --square.row;
        }
        
        return [square];
    }
}
