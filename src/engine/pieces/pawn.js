import Piece from './piece';
import getPawnMoves from '../movement/getPawnMoves';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, [getPawnMoves(player)] );
    }
}
