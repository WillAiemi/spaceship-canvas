// Code keys
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const SPACE = 32;

function Keyboard(element) {
    this.element = element;

    // Pressed keys array
    this.pressed = [];

    // Fired up keys array
    this.wentOff = [];

    // Recorded click functions
    this.clickFunctions = [];

    var keyboard = this;

    element.addEventListener('keydown', function(e) {
        var key = e.keyCode;  // Making it easier to read ;)
        keyboard.pressed[key] = true;

        // Go off only if it's the first down clicked key
        if (keyboard.clickFunctions[key] && !keyboard.wentOff[key]) {
            keyboard.wentOff[key] = true;
            keyboard.clickFunctions[key] () ;
        }
    });

    element.addEventListener('keyup', function(e) {
        keyboard.pressed[e.keyCode] = false;
        keyboard.wentOff[e.keyCode] = false;
    });
}

Keyboard.prototype = {
    wasPressed: function(key) {
        return this.pressed[key];
    },
    click: function(key, callback) {
        this.clickFunctions[key] = callback;
    }
}
