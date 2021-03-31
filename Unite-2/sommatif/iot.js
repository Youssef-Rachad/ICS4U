var canvas, ctx;
var x = 75, y = 50;
var WIDTH = 400, HEIGHT = 300;
var drag = false;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//nonononnon je dois creer de vrai objet
function rectangle(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function init() {
    return setInterval(draw, 10);
}
//changer ici pour dessiner un objet
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#FAF7F8";
    rectangle(0,0,WIDTH,HEIGHT);
    ctx.fillStyle = "#444444";
    rectangle(x - 15, y - 15, 30, 30);
}

function deplacement(e){
    if (e.pageX < x + 15 + canvas.offsetLeft &&
        e.pageX > x - 15 + canvas.offsetLeft &&
        e.pageY < y + 15 + canvas.offsetTop  &&
        e.pageY > y - 15 + canvas.offsetTop)
    {
        canvas.onmousemove = (e) => {
            x = e.pageX - canvas.offsetLeft;
            y = e.pageY - canvas.offsetTop;
        };
    }
}

init();
canvas.onmousedown = deplacement;
canvas.onmouseup = () => canvas.onmousemove = null;




