const Watch = require('./watch');

class Alarm extends Watch {
    constructor({ h, m, s, onTick = () => {}, onAlarm = () => {} }) {
        super({onTick});
        this.h = h;
        this.m = m;
        this.s = s;
        this.onAlarm = onAlarm;
    }

    tick() {
        super.tick();        
        let {h, m, s} = this.formatTime(this.date);
        if(h === this.h && m === this.m && s === this.s) {
            this.onAlarm();
        }
    }
}

module.exports = Alarm;