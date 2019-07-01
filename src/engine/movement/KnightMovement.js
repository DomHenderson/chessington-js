import Movement from "./Movement";

export default function (player, limit) {
    return Movement(player, [{x:2,y:1},{x:2,y:-1},{x:1,y:-2},{x:-1,y:-2},{x:-2,y:-1},{x:-2,y:1},{x:-1,y:2},{x:1,y:2}],limit);
}