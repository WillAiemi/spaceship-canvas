function Background(context, image) {
    this.context = context;
    this.image = image;
    this.speed = 0;
    this.amendmentPosition = 0;
}

Background.prototype = {
    update: function() {
        // Update the amendment position
        this.amendmentPosition += this.speed;

        // Amendment passed the position
        if (this.amendmentPosition > this.image.height) {
            this.amendmentPosition = 0;
        }
    },
    draw: function() {
        let img = this.image; // Easier to write xD

        // First copy
        let posY = this.amendmentPosition - img.height;
        this.context.drawImage(img, 0, posY, img.width, img.height);

        // Second copy
        posY = this.amendmentPosition;
        this.context.drawImage(img, 0, posY, img.width, img.height);
    }
}
