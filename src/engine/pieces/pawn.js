import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let direction =
            this.player === Player.WHITE
                ? 1
                : this.player === Player.BLACK ? -1 : 0;

        let homeRow =
            this.player === Player.WHITE ? 1 :
            this.player === Player.BLACK ? 6 : -1;

        let square = board.findPiece(this);

        let moves = [];

        //Normal move of one square
        moves.push(square.createWithOffset(direction, 0));

        //Pawns that haven't moved can move 2, and pawns on their home row cannot have moved
        if( square.row === homeRow ) {
            moves.push ( square.createWithOffset ( 2*direction, 0 ) );
        }


        return moves;
    }
}
