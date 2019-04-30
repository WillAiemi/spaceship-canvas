function Ovni(context, image) {
    this.context = context;
    this.image = image;
    this.animation = null;
    this.control = null;
    this.x = Math.floor(Math.random() * (this.context.canvas.width - this.image.width));
    this.maxX = this.x + this.image.width;

    this.y = -this.image.height;
    this.speed = 2;
    this.exploding = false;
}

Ovni.prototype = {
    update: function() {
        // if ovni is not exploding, move
        if (!this.exploding) {
            this.y += this.speed;
        }
        if (this.y > this.context.canvas.height) {
            this.destroySelf();
        }
    },
    draw: function() {
        let img = this.image;
        this.context.drawImage(img, this.x, this.y, img.width, img.height);
    },
    explode: function() {
        if (!this.exploding) {
            this.exploding = true;
            let imgExplosion = new Image();
            imgExplosion.src = "img/explosion.png";

            this.explosion = new Explosion(this.context, imgExplosion, this);
            this.animation.newSprite(this.explosion);
            return true;
        } else {
            return false;
        }
    },
    destroySelf: function() {
        this.animation.removeSprite(this);
        this.control.removeOvni(this);
    }
};
