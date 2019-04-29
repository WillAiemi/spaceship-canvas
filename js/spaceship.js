const SPACESHIP_NORMAL = 0;
const SPACESHIP_LEFT = 1;
const SPACESHIP_RIGHT = 2;

function Spaceship(context, keyboard, image, animation) {
    this.context = context;
    this.keyboard = keyboard;
    this.image = image;
    this.animation = animation;
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
        this.spritesheet.draw(this.x, this.y);

        // reset normal spaceship
        this.spritesheet.line = SPACESHIP_NORMAL;
    },
    shoot: function() {
        let leftShotX = this.x + this.image.width / 20;
        let rightShotX = this.x + this.image.width * 9 / 20;
        let y = this.y + this.image.height / 9;

        let leftShot = new Projectile(this.context, leftShotX, y, UP);
        let rightShot = new Projectile(this.context, rightShotX, y, UP);

        leftShot.speed = 15;
        leftShot.radius = 2;
        leftShot.color = "red";

        rightShot.speed = 15;
        rightShot.radius = 2;
        rightShot.color = "red";

        this.animation.newSprite(leftShot);
        this.animation.newSprite(rightShot);
    }
}
