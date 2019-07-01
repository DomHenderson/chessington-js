import Square from '../square';

export default function ( limit ) {
    limit = limit || 8;
    return square => {
        let moves = [];

        //Can move to any square with one matching coordinate
        for (let i = 0; i < 8; ++i) {
            if (i !== square.row && Math.abs(i-square.row) < limit) {
                moves.push(new Square(i, square.col));
            }

            if (i !== square.col && Math.abs(i-square.col) < limit) {
                moves.push(new Square(square.row, i));
            }
        }

        return moves;
    }
}