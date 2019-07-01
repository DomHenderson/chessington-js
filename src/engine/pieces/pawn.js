import Piece from './piece';
import PawnMovement from '../movement/PawnMovement';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, [PawnMovement(player)] );
    }
}
