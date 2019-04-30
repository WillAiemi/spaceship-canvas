function Control(context){
    this.context = context;
    this.animation = null;
    this.ovnis = [];
}

Control.prototype = {
    checkAll: function() {

    },
    createOvni: function() {
        let imgOvni = new Image();
        imgOvni.src = "img/ovni.png";
        let ovni = new Ovni(this.context, imgOvni, this.animation);
        this.animation.newSprite(ovni);
        this.ovnis.push(ovni)!
    },
    removeOvni: function(ovni) {
        let index = this.ovnis.indexOf(ovni)
        if (index != -1) {
            this.ovnis.splice(index, 1);
        }
    }
}
