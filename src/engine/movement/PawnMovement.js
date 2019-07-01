import Player from '../player';
import { default as Movement, CANT_TAKE, MUST_TAKE } from "./Movement";
import GameSettings from "../gameSettings";

// export default function ( player ) {
//     if ( player === Player.WHITE ) {
//         return getPawnMoves(1,1);
//     } else if ( player === Player.BLACK ) {
//         return getPawnMoves(-1,6);
//     } else {
//         return () => [];
//     }
// }
//
// function getPawnMoves ( direction, homeRow ) {
//     return (square,board) => {
//         let moves = [];
//         //Check that the space in front is free
//         if ( square.row + direction < 0 || square.row + direction >= 8 || board.getPiece(square.createWithOffset(direction,0) ) ) {
//             return moves;
//         }
//
//         moves.push(square.createWithOffset(direction,0));
//
//         //Add 2 square move if the pawn is on the home row and there isn't anything in the way
//         if ( square.row + 2*direction < 0 || square.row + 2*direction >= 8 || square.row === homeRow && !board.getPiece(square.createWithOffset(2*direction,0))) {
//             moves.push(square.createWithOffset(2*direction,0));
//         }
//
//         return moves;
//     }
// }

export default function (player, limit) {
    limit = limit || 8;
    let direction;
    let startRow;
    if ( player === Player.WHITE ) {
        direction = 1;
        startRow = 1;
    } else if ( player === Player.BLACK ) {
        direction = -1;
        startRow = GameSettings.BOARD_SIZE-2;
    } else {
        direction = 0;
        startRow = undefined;
    }

    return (square,board) => {
        let moves;
        if ( square.row === startRow ) {
            moves = Movement(player, [{x:0,y:direction}], 2, CANT_TAKE)(square,board);
        } else {
            moves = Movement(player, [{x:0,y:direction}], 1, CANT_TAKE)(square,board);
        }
        return moves.concat ( Movement ( player, [{x:1,y:direction},{x:-1,y:direction}], 1, MUST_TAKE )(square,board));
    }
}