import King from '../pieces/king';

const CANT_TAKE = 0;
const CAN_TAKE = 1;
const MUST_TAKE = 2;

export {
    CANT_TAKE,
    CAN_TAKE,
    MUST_TAKE,
}

export default function ( player, directions, limit, taking = CAN_TAKE  ) {
    limit = limit || 8;
    let canTake = (taking === CAN_TAKE || taking === MUST_TAKE );
    let mustTake = (taking === MUST_TAKE);
    return (square,board) => {
        let moves = [];
        for (let direction of directions) {
            for (let i = 1; i <= limit; ++i) {
                let newSquare = square.createWithOffset(i * direction.y, i * direction.x);
                if ( newSquare.row < 0 || newSquare.row > 7 || newSquare.col < 0 || newSquare.col > 7  ) {
                    break;
                }
                if ( board.getPiece(newSquare) ) {
                    if ( canTake && board.getPiece(newSquare).player !== player && !(board.getPiece(newSquare) instanceof King ) ) {
                        moves.push(newSquare);
                    }
                    break;
                }
                if(mustTake) break;
                moves.push(newSquare);
            }
        }
        return moves;
    };
};