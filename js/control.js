function Control(context){
    this.context = context;
    this.animation = null;
    this.ovnis = [];
    this.interval = 3000;
    this.lastTime = 0;
    this.shots = [];
    this.imgOvni = new Image();
    this.imgOvni.src = "img/ovni.png";
}

Control.prototype = {
    checkAll: function() {
        let now = new Date().getTime();
        if (now - this.lastTime > this.interval && Math.floor(Math.random() * 3) == 0) {
            this.createOvni();
            this.lastTime = now;
        }

        let shotsHit = [];

        if (this.ovnis.length != 0 && this.shots.length != 0) {
            for (var i in this.ovnis) {
                let ovni = this.ovnis[i];
                let y = ovni.y + ovni.image.height;
                let hit = false;
                for (var j in this.shots) {
                    shot = this.shots[j];
                    if (shot.x >= ovni.x && shot.x <= ovni.maxX && shot.y <= y && shot.y >= ovni.y) {
                        if (!ovni.exploding) {
                            shotsHit.push(shot);
                        }
                        hit = true;
                    }
                }
                if (hit) {
                    ovni.explode();
                }
            }
        }
        for (var i in shotsHit) {
            shotsHit[i].destroySelf();
        }
        // console.log("Ovnis: " + this.ovnis.length);
    },
    createOvni: function() {
        let ovni = new Ovni(this.context, this.imgOvni);
        this.animation.newSprite(ovni);
        this.ovnis.push(ovni);
        ovni.control = this;
    },
    removeOvni: function(ovni) {
        let index = this.ovnis.indexOf(ovni)
        if (index != -1) {
            this.ovnis.splice(index, 1);
        }
    },
    newShot: function(shot) {
        this.shots.push(shot);
        shot.control = this;
    },
    removeShot: function(shot) {
        let index = this.shots.indexOf(shot)
        if (index != -1) {
            this.shots.splice(index, 1);
        }
    }
}
