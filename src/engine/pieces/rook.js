import Piece from './piece';
import getLateralMoves from '../movement/getLateralMoves';

export default class Rook extends Piece {
    constructor(player) {
        super(player,[getLateralMoves]);
    }
}


