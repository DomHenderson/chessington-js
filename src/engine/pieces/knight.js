import Piece from './piece';
import getKnightMoves from '../movement/getKnightMoves';

export default class Knight extends Piece {
    constructor(player) {
        super(player, [getKnightMoves]);
    }


}
