var vaisseau_img = new Image();
vaisseau_img.onload = () =>{
    return;
}
vaisseau_img.src = './vaisseau.png';

class Vaisseau{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.compteur = 0;
        this.flag = true;
        this.width = vaisseau_img.width;
        this.height = vaisseau_img.height;
    }
    trace(){
        ctx.drawImage(vaisseau_img, this.x, this.y);
        this.compteur += 1;
        if (this.compteur >= 30){
            this.compteur = 0;
            this.flag = true;
        }
    }
    //fonctions en fleche pour les callbacks dans l'objet clavier
    descend = () => {
        this.y += 5;
    }
    monte = () => {
        this.y -= 5;
    }
    droite = () => {
        this.x += 5;
    }
    gauche = () => {
        this.x -= 5;
    }
    tirer = () => {
        if (this.flag){
            lasers.unshift(new Laser(vaisseau.x+25, vaisseau.y, couleurs[hasard(0, couleurs.length-1)]));
            this.flag = false;
            this.compteur = 0;
        }
    }
}
class Laser{
    constructor(x, y, couleur) {
        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 10;
        this.couleur = couleur;
    }
    bouge() {
        this.y -= 5;
    }
    dessine() {
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
