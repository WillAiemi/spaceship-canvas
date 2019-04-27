function Spaceship(context, keyboard, image) {
    this.context = context;
    this.keyboard = keyboard;
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.speed = 0;
}

Spaceship.prototype = {
    update: function() {
        if (this.keyboard.wasPressed(LEFT_ARROW) && this.x > 0) {
            this.x -= this.speed;
        }

        if (this.keyboard.wasPressed(RIGHT_ARROW) && this.x < this.context.canvas.width - this.image.width) {
            this.x += this.speed;
        }

        if (this.keyboard.wasPressed(UP_ARROW) && this.y > 0){
            this.y -= this.speed;
        }

        if (this.keyboard.wasPressed(DOWN_ARROW) && this.y < this.context.canvas.height - this.image.height) {
            this.y += this.speed;
        }
    },
    draw: function() {
        this.context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
    }
}
