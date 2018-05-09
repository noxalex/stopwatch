class Stopwatch {
    constructor({onTick = () => {} }) {   
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        this.interval = null;

        this.onTick = onTick;        
        this.tick = this.tick.bind(this);
    }

    start() {
        this.interval = setInterval(this.tick, 10);
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    stop() {
        this.pause();
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
    }

    tick() {
        this.ms += 1;

        if(this.ms === 100) {
            this.ms = 0;
            this.s += 1;
        } else if(this.s === 60 ) {
            this.s = 0;
            this.m += 1;
        } else if(this.m === 60 ) {
            this.s = 0;
            this.m = 0;
            this.h +=1;
        }

        this.onTick({h: this.h, m: this.m, s: this.s, ms: this.ms });

    }
}

module.exports = Stopwatch;