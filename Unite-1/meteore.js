class Meteore{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //this.img = img;
    }
    cercle = (x, y, rx, ry, theta, couleur) => {
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, theta, 0, 2 * Math.PI);
        ctx.fillStyle = couleur;
        ctx.fill();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    }
    dessine(){
        this.cercle(this.x, this.y, 25, 25, 0, '#872201');
        this.cercle(this.x-6, this.y, 15, 16, 0, '#8a4c38');
        this.cercle(this.x-12, this.y, 7, 10, 0, '#654321')
        this.cercle(this.x-12, this.y, 7, 8, 0, 'black')
        this.cercle(this.x-12, this.y, 5, 7, 0, 'gray')
        this.cercle(this.x+18, this.y-4, 6, 10, -Math.PI/6, '#654321')
        this.cercle(this.x+18, this.y-4, 6, 9, -Math.PI/6, 'black')
        this.cercle(this.x+18, this.y-4, 4, 8, -Math.PI/6, 'gray')
        this.cercle(this.x+6, this.y+12, 6, 6, 0, 'black')
        this.cercle(this.x+6, this.y+12, 4, 5, 0, 'gray')
        this.cercle(this.x-2, this.y-16, 6, 6, 0, 'black');
        this.cercle(this.x-2, this.y-16, 5, 5, 0, 'gray');
        this.cercle(this.x-8, this.y+18, 6, 4, Math.PI/6, 'black');
        this.cercle(this.x-9, this.y+18, 6, 3, Math.PI/6, 'gray');
        ctx.stroke();
    }
    bouge() {
        this.y +=1;
    }
    collision(object) {
        if (
            (this.x + 25 >= object.x &&
                this.x - 25 <= object.x + object.width) &&
            (this.y + 25 >= object.y &&
                this.y -25 <= object.y + object.height)
        ){
            return true;
        }
    }
}

