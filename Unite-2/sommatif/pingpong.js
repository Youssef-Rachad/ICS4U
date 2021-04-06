var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var HEIGHT = 400;
var WIDTH = 800;
var DASH_HEIGHT = 15;

var fps = 60;
var t_1;
var t_0 = Date.now();
var intervale = 1000/fps;
var delta_t;

// fonction hasard min-->inclusive max-->exclusive
function r(min, max) {
    let rando = Math.random();
    return Math.floor(rando*(max-min)+min)*Number(rando>0.5?-1:1)
}
var joueur = new Joueur(10, HEIGHT/2, r(35, 65));
var ordi = new CPU(WIDTH - 30, HEIGHT/2, r(35, 65));
var balle = new Balle(WIDTH/2, HEIGHT/2, 9, r(3, 4), r(3, 4));

var objects = [];
objects.push(ordi);
objects.push(joueur)
window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
function dessiner(){
    t_1 = Date.now();
    delta_t = t_1 - t_0;
    if(delta_t > intervale){
        ctx.save();
        if(balle.y - balle.r < 0 || balle.y + balle.r > HEIGHT) {
            balle.vy *= -1;
        }
        if(balle.x - balle.r < 0 || balle.x + balle.r > WIDTH) {
            balle = new Balle(WIDTH/2, HEIGHT/2, 9, r(3,5), r(3,5));
            location.reload();
        }
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        for(var iy = 0; iy < Math.floor(HEIGHT/DASH_HEIGHT); iy++){
            ctx.fillStyle = "black";
            ctx.fillRect(WIDTH/2 - 5, iy*(DASH_HEIGHT+5), 10, DASH_HEIGHT);
        }
        ordi.bouge(balle);
        joueur.dessine();
        balle.dessine();
        ctx.restore();
        t_0 = t_1 - (delta_t%intervale);
        balle.bouge();
    }
    balle.collision(objects);
    requestAnimationFrame(dessiner);
}
dessiner();
canvas.onmousemove = (e) => {
    joueur.bouge(e.clientY);
}

