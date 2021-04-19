// Outils
function hasard(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
const couleurs = ['blue', 'red', 'green', 'yellow'];

// Variables du Canevas
var canvas=document.getElementById('monCanvas');
var ctx=canvas.getContext('2d');
const WIDTH=canvas.width;
const HEIGHT=canvas.height;

// Variables de animationFrame
const FPS = 60;
const INTERVALE = 1000/FPS;
var t_1;
var t_0 = Date.now();
var delta_t;

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

// Joueur
var vaisseau = new Vaisseau(hasard(WIDTH/5, 4*WIDTH/5), hasard(HEIGHT-150, HEIGHT-100));
// Tableau des entités de jeu
var etoiles = [];
var meteores = [];
var lasers = [];

// Générations des entités
for(i = 0; i < 100; i++){
    let temp = new Etoile(hasard(0, WIDTH), hasard(-HEIGHT/4, 3*HEIGHT/4), hasard(1,3), couleurs[hasard(0, couleurs.length - 1)], hasard(50, 70)/100);
    etoiles.push(temp);
}
for(i = 0; i < 10; i++){
    let b6412 = new Meteore(hasard(0, WIDTH), -1 * hasard(100, 1000));
    meteores.push(b6412);
}

// Méthode pour traiter plusieurs touches
//https://medium.com/@dovern42/handling-multiple-key-presses-at-once-in-vanilla-javascript-for-game-controllers-6dcacae931b7
var clavier = {
    38 : {actif: false, action: vaisseau.monte},
    87 : {actif: false, action: vaisseau.monte},
    39 : {actif: false, action: vaisseau.droite},
    65 : {actif: false, action: vaisseau.gauche},
    40 : {actif: false, action: vaisseau.descend},
    83 : {actif: false, action: vaisseau.descend},
    37 : {actif: false, action: vaisseau.gauche},
    68 : {actif: false, action: vaisseau.droite},
    32 : {actif: false, action: vaisseau.tirer}
}
document.addEventListener('keydown', (e)=>{
    if(clavier[e.keyCode]) {
        clavier[e.keyCode].actif = true;
    }});
document.addEventListener('keyup', (e)=>{
    if(clavier[e.keyCode]) {
        clavier[e.keyCode].actif = false;
    }});
function toucheClavier() {
    Object.keys(clavier).forEach((touche) => {
        clavier[touche].actif && clavier[touche].action()
    }
    )
}

// Fonction principale
function dessiner(){
    t_1 = Date.now();
    delta_t = t_1 - t_0;
    if(delta_t > INTERVALE){
        toucheClavier();
        ctx.save();
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        // Déplacer les étoiles
        for(i = 0; i < etoiles.length; i++){
            etoiles[i].bouge();
            etoiles[i].dessine();
        }
        // Déplacer les lasers
        for(i = 0; i < lasers.length; i++){
            lasers[i].bouge();
            lasers[i].dessine();
        }
        // Tous les lasers hors de la page sont éliminés
        while(lasers[0] && lasers[0].y <= 0){
            lasers.pop()
        }
        // Déplacer les météores
        for(i = 0; i < meteores.length; i++){
            meteores[i].bouge();
            meteores[i].dessine();
            // On perd le jeu si on heurte un météore
            // ou un météore atteint la base
            if(meteores[i].collision(vaisseau) || meteores[i].y +23 >= HEIGHT){
                alert("perdu!!");
                location.reload();
            }
            // Si un laser atteint un météore, les deux sont éliminés
            for(j = 0; j < lasers.length; j++){
                if(meteores[i] && meteores[i].collision(lasers[j])){
                    meteores.splice(i, 1);
                    lasers.splice(j, 1);
                }
            }
        }
        // Déplacer le vaisseau
        vaisseau.trace();

        ctx.restore();
        t_0 = t_1 - (delta_t%INTERVALE);
    }
    requestAnimationFrame(dessiner);
}
dessiner();
