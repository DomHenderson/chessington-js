import Piece from './piece';
import KnightMovement from '../movement/KnightMovement';

export default class Knight extends Piece {
    constructor(player) {
        super(player, [KnightMovement(player,1)]);
    }


}
