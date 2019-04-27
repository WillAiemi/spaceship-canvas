function Spritesheet(context, image, lines, columns) {
    this.context = context;
    this.image = image;
    this.numLines = lines;
    this.numColumns = columns;
    this.interval = 0;
    this.line = 0;
    this.column = 0;
    this.lastChange = 0;
}

Spritesheet.prototype = {
    nextFrame: function() {
        let now = new Date().getTime();

        // is it time to update frame?
        if (now - this.lastChange < this.interval) {
            return;
        }

        if (this.column < this.numColumns - 1) {
            this.column++;
        } else {
            this.column = 0;
        }

        // record time of the last change
        this.lastChange = now;
    },
    draw: function(x, y) {
        let width = this.image.width / this.numColumns;
        let height = this.image.height / this.numLines;

        this.context.drawImage(
            this.image,
            width * this.column,
            height * this.line,
            width,
            height,
            x,
            y,
            width,
            height
        );
    }
}
