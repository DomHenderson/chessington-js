import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let square = board.findPiece(this);
        let moves = [];
        //Rooks can move to any square with one matching coordinate
        for (let i = 0; i < 8; ++i) {
            if (i !== square.row) {
                moves.push(new Square(i, square.col));
            }

            if (i !== square.col) {
                moves.push(new Square(square.row, i));
            }

            let offset = i - square.row;

            //Cannot move to own square
            if (offset === 0) {
                continue;
            }

            //Can move to any square where horizontal and vertical offset have the same magnitude
            if (square.col + offset < 8) {
                moves.push(square.createWithOffset(offset, offset));
            }

            if (square.col - offset >= 0) {
                moves.push(square.createWithOffset(offset, -offset));
            }
        }
        return moves;
    }
}