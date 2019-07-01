import Player from '../player';

export default function ( player ) {
    if ( player === Player.WHITE ) {
        return getPawnMoves(1,1);
    } else if ( player === Player.BLACK ) {
        return getPawnMoves(-1,6);
    } else {
        return () => [];
    }
}

function getPawnMoves ( direction, homeRow ) {
    return (square,board) => {
        let moves = [];
        //Check that the space in front is free
        if ( square.row + direction < 0 || square.row + direction >= 8 || board.getPiece(square.createWithOffset(direction,0) ) ) {
            return moves;
        }

        moves.push(square.createWithOffset(direction,0));

        //Add 2 square move if the pawn is on the home row and there isn't anything in the way
        if ( square.row + 2*direction < 0 || square.row + 2*direction >= 8 || square.row === homeRow && !board.getPiece(square.createWithOffset(2*direction,0))) {
            moves.push(square.createWithOffset(2*direction,0));
        }

        return moves;
    }
}