import Piece from './piece';
import LateralMovement from '../movement/LateralMovement';

export default class Rook extends Piece {
    constructor(player) {
        super(player,[LateralMovement(player)]);
    }
}


