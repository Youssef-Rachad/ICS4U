class Balle {
    constructor(x, y, r, vx, vy){
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
    }
    dessine(){
        ctx.fillStyle="red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill()
        ctx.stroke();
    }
    bouge(){
        this.x += this.vx;
        this.y += this.vy;
    }

    collision(objects) {
        for (let object of objects){
            if (
                (
                    ((object.x_droite != null) && (this.x - this.r < object.x + object.width)) ||
                    ((object.x_gauche != null) && (this.x + this.r > object.x))
                ) && (this.y > object.y - this.r && this.y < object.y + object.height + this.r)
            ){
                this.vx *= -1;
            }
        }
    }
}

