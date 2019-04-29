const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

function Projectile(context, x, y, direction, animation) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = 0;
    this.color = "black";
    this.radius = 5;
    this.index = 0;
    this.animation = animation;
}

Projectile.prototype = {
    update: function() {
        let ctx = this.context;

        if (this.x < -this.radius || this.x > ctx.canvas.width || this.y < -this.radius || this.y > ctx.canvas.height) {
            this.animation.removeSprite(this);
            return;
        }
        
        switch (this.direction) {
            case UP:
                this.y -= this.speed;
                break;
            case DOWN:
                this.y += this.speed;
                break;
            case LEFT:
                this.x -= this.speed;
                break;
            case RIGHT:
                this.x += this.speed;
                break;
        }
    },
    draw: function() {
        let ctx = this.context;

        // save actual settings of the context
        ctx.save();

        // styling
        ctx.fillStyle = this.color;

        // draw
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();

        // restore the context configurations
        ctx.restore();
    }
}
