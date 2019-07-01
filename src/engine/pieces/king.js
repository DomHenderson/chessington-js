import Piece from './piece';
import DiagonalMovement from '../movement/DiagonalMovement';
import LateralMovement from '../movement/LateralMovement';

export default class King extends Piece {
    constructor(player) {
        super(player,[LateralMovement(1),DiagonalMovement(1)]);
    }
}
