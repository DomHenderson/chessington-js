import Movement from './Movement';

export default function ( player, limit ) {
    return Movement ( player, [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}], limit );
}