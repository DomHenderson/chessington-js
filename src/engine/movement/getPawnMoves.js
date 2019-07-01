import Player from '../player';

export default function ( player ) {
    if ( player === Player.WHITE ) {
        return pawnMoves(1,1);
    } else if ( player === Player.BLACK ) {
        return pawnMoves(-1,6);
    } else {
        return () => [];
    }
}

function pawnMoves ( direction, homeRow ) {
    return square => {
        let moves = [];
        moves.push(square.createWithOffset(direction,0));
        if ( square.row === homeRow ) moves.push(square.createWithOffset(2*direction,0));
        return moves;
    }
}