import Movement from './Movement';

export default function ( limit ) {
    limit = limit || 8;
    return Movement ( [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}], limit );
}