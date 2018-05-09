class Watch {
    constructor({ onTick = () => {} }) {
        this.interval = null;
        this.tick = this.tick.bind(this);
        this.onTick = onTick;
        this.init();
    }

    init() {
        this.interval = setInterval(this.tick, 1000);
    }

    destroy() {
        clearInterval(this.interval);
        this.interval = null;
    }

    tick() {
        this.date = new Date();
        this.onTick(this.formatTime(this.date));          
    }

    formatTime(date) {
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        return {h, m, s};
    }
}

module.exports = Watch;