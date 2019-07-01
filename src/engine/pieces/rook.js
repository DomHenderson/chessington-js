import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let square = board.findPiece(this);

        let moves = [];

        //Rooks can move to any square with one matching coordinate
        for ( let i = 0; i < 8; ++i ) {
            if ( i !== square.row ) {
                moves.push(new Square ( i, square.col ) );
            }

            if ( i !== square.col ) {
                moves.push ( new Square ( square.row, i ) );
            }
        }

        return moves;
    }
}
