function Explosion(context, image, ovni) {
    this.context = context;
    this.image = image;
    this.ovni = ovni;
    this.x = ovni.x + (ovni.image.width / 2) - (this.image.width / 10);
    this.y = ovni.y + (ovni.image.height / 2) - (this.image.height / 2);
    this.animation = null;
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
            case 1:
                this.animation.turnOff();
                /*
                console.log("x: " + this.x + "\n"
                    + "y: " + this.y + "\n"
                    + "ovni x: " + this.ovni.x + "\n"
                    + "ovni y: " + this.ovni.y + "\n"
                    + "supposed to be x: " + (this.ovni.x + this.ovni.image.width / 2 - this.image.width / 10) + "\n"
                    + "supposed to b y: " + (this.ovni.y + this.ovni.image.height / 2 - this.image.height / 2) + "\n");
                */
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
