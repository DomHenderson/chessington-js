import Piece from './piece';
import DiagonalMovement from '../movement/DiagonalMovement';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, [DiagonalMovement(player)]);
    }
}
