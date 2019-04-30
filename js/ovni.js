function Ovni(context, image, animation) {
    this.context = context;
    this.image = image;
    this.animation = animation;
    this.x = Math.floor(Math.random() * (this.context.canvas.width - this.image.width) + 1);
    this.y = -this.image.height;
    this.speed = 5;
    this.exploding = false;
}
Ovni.prototype = {
    update: function() {
        // if ovni is not exploding, move
        if (!exploding) {
            this.y += this.speed;
        }
    },
    draw: function() {
        let img = this.image;
        this.context.drawImage(img, this.x, this.y, img.width, img.height);
    },
    explode: function() {
        this.exploding = true;
        let imgExplosion = new Image();
        imgExplosion.src = "img/explosion.png";

        let explosionX = this.x + this.image.width / 2 - imgExplosion / 10;
        let explosionY = this.y + this.image.height / 2 - imgExplosion / 2;

        let explosion = new Explosion(this.context, imgExplosion, this.animation, explosionX, explosionY);
        this.animation.newSprite(explosion);
    },
    destroySelf: function() {
        this.animation.removeSprite(this);
    }
};
