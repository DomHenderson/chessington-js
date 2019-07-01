import King from '../pieces/king';
import GameSettings from '../gameSettings';

const CANT_TAKE = 0;
const CAN_TAKE = 1;
const MUST_TAKE = 2;

export {
    CANT_TAKE,
    CAN_TAKE,
    MUST_TAKE,
}

export default function ( player, directions, limit = 8, taking = CAN_TAKE  ) {
    return (square,board) => {
        let moves = [];
        directions.forEach(direction => moves = moves.concat(moveInDirection(player, board, square, direction, limit, taking)));
        return moves;
    }
};

function moveInDirection ( player, board, square, direction, limit, taking ) {
    let canTake = (taking === CAN_TAKE || taking === MUST_TAKE );
    let mustTake = (taking === MUST_TAKE);
    let moves = [];
    for (let i = 1; i <= limit; ++i) {
        //Note that createWithOffset takes row then column, hence y then x
        let newSquare = square.createWithOffset(i * direction.y, i * direction.x);

        if ( outOfBounds ( newSquare) ) {
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
    return moves;
}

function outOfBounds ( square ) {
    return square.row < 0 || square.row >= GameSettings.BOARD_SIZE || square.col < 0 || square.col >= GameSettings.BOARD_SIZE;
}