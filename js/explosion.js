function Explosion(context, image, animation, x, y) {
    this.context = context;
    this.image = image;
    this.animation = animation;
    this.x = x;
    this.y = y;
    this.spritesheet = new Spritesheet(context, image, 1, 5);
    this.spritesheet.interval = 120;
}

Explosion.prototype = {
    update: function() {
        let sheet = this.spritesheet;

        switch (sheet.column) {
            // if explosion is in its final sprite, self destroy
            case 4:
                this.animation.removeSprite(this);
                break;

            // if explosion is in the third frame: destroy the ovni
            case 2:
                this.ovni.destroySelf();
            // always call next frame
            default:
                sheet.nextFrame();
        }
    },
    draw: function() {
        this.spritesheet.draw(this.x, this.y);
    }
}
