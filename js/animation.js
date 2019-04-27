function Animation(context) {
    this.context = context;
    this.sprites = [];
    this.isOn = false;
}

Animation.prototype = {
    newSprite: function(sprite) {
        this.sprites.push(sprite);
        sprite.animation = this;
    },
    turnOn: function() {
        this.isOn = true;
        this.nextFrame();
    },
    turnOff: function() {
        this.isOn = false;
    },
    nextFrame: function() {
        // Can I continue?
        if (!this.isOn) return;

        // Each cycle: clear screen and draw everything again
        this.clearScreen();

        // Update sprites state
        for (var i in this.sprites) {
            this.sprites[i].update();
        }

        // Draw the sprites
        for (var i in this.sprites){
            this.sprites[i].draw();
        }

        // Keep it cycling
        var animation = this;
        requestAnimationFrame(function() {
            animation.nextFrame();
        });
    },
    clearScreen: function() {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
