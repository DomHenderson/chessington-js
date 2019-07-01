import King from '../pieces/king';

export default function ( player, directions, limit ) {
    limit = limit || 8;
    return (square,board) => {
        let moves = [];
        for (let direction of directions) {
            for (let i = 1; i <= limit; ++i) {
                let newSquare = square.createWithOffset(i * direction.x, i * direction.y);
                if ( newSquare.row < 0 || newSquare.row > 7 || newSquare.col < 0 || newSquare.col > 7  ) {
                    break;
                }
                if ( board.getPiece(newSquare) ) {
                    if ( board.getPiece(newSquare).player !== player && !(board.getPiece(newSquare) instanceof King ) ) {
                        moves.push(newSquare);
                    }
                    break;
                }
                moves.push(newSquare);
            }
        }
        return moves;
    };
};