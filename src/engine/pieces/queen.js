import Piece from './piece';
import LateralMovement from '../movement/LateralMovement';
import DiagonalMovement from '../movement/DiagonalMovement';

export default class Queen extends Piece {
    constructor(player) {
        super(player, [LateralMovement(), DiagonalMovement()]);
    }
}