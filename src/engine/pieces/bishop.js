import Piece from './piece';
import getDiagonalMoves from '../movement/getDiagonalMoves';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, [getDiagonalMoves]);
    }
}
