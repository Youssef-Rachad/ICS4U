class Palette {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = height;
    }

    dessine () {
        ctx.fillStyle="red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Joueur extends Palette {
    constructor(x, y, height) {
        super(x, y, height);
        this.x_gauche = null;
        this.x_droite = 1;
    }
    bouge(y) {
        this.y = y - 20;
    }
}

class CPU extends Palette {
    constructor(x, y, height) {
        super(x, y, height);
        this.x_gauche = 1;
        this.x_droite = null;
    }

    bouge(ball) {
        this.y = ball.y - 0.5*this.height;
        this.dessine();
    }
}

