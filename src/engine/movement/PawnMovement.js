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

function getPawnMoves (direction, homeRow ) {
    return square => {
        let moves = [];
        moves.push(square.createWithOffset(direction,0));
        if ( square.row === homeRow ) moves.push(square.createWithOffset(2*direction,0));
        return moves;
    }
}