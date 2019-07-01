import Piece from './piece';
import getLateralMoves from '../movement/getLateralMoves';
import getDiagonalMoves from '../movement/getDiagonalMoves';

export default class Queen extends Piece {
    constructor(player) {
        super(player, [getLateralMoves, getDiagonalMoves]);
    }
}