const Watch = require('./watch');
const Alarm = require('./alarm');
const Timer = require('./timer');
const Stopwatch = require('./stopwatch');

// const watch = new Watch({
//     onTick: time => console.log(time)
// });

// const alarm = new Alarm({
//     h: 15,
//     m: 26,
//     s: 0,
//     onTick: time => console.log(time),
//     onAlarm: () => console.log("ALARM")
// });

// const timer = new Timer({
//     h: 0,
//     m: 1,
//     s: 0,
//     onEnd: () => console.log('Minute passed!'),
//     onTick: time => console.log(time)
// });

// timer.start();

const stopwatch = new Stopwatch({
    onTick: time => console.log(time)
});


stopwatch.start();

setInterval(function(){
    if(stopwatch.s === 10) {
        stopwatch.stop();
    }
}, 1000);

