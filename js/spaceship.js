const SPACESHIP_NORMAL = 0;
const SPACESHIP_LEFT = 1;
const SPACESHIP_RIGHT = 2;

function Spaceship(context, keyboard, image) {
    this.context = context;
    this.keyboard = keyboard;
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.spritesheet = new Spritesheet(context, image, 3, 2);
    this.spritesheet.interval = 60;
}

Spaceship.prototype = {
    update: function() {
        if (this.keyboard.wasPressed(LEFT_ARROW) && this.x > 0) {
            this.x -= this.speed;
            this.spritesheet.line = SPACESHIP_LEFT;
        }

        if (this.keyboard.wasPressed(RIGHT_ARROW) && this.x < this.context.canvas.width - this.image.width / 2) {
            this.x += this.speed;
            this.spritesheet.line = SPACESHIP_RIGHT;
        }

        if (this.keyboard.wasPressed(UP_ARROW) && this.y > 0){
            this.y -= this.speed;
        }

        if (this.keyboard.wasPressed(DOWN_ARROW) && this.y < this.context.canvas.height - this.image.height / 3) {
            this.y += this.speed;
        }

        this.spritesheet.nextFrame();
    },
    draw: function() {
        // this.context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
        this.spritesheet.draw(this.x, this.y);

        // reset normal spaceship
        this.spritesheet.line = SPACESHIP_NORMAL;
    }
}
