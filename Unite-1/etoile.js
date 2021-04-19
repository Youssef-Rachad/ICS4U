class Etoile{
    constructor(x, y, c, couleur, vitesse) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.vitesse = vitesse;
        this.couleur = couleur;
    }
    bouge(){
        this.y = (this.y + this.vitesse)%HEIGHT;
    }
    dessine(){
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.c, this.c);
    }
}

