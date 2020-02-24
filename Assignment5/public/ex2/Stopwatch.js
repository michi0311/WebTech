class Stopwatch {
    constructor(element) {
        this.element = element;
        this.millis = 0;
        this.running = false;
    }

    reset() {
        // TODO: reset timer
        this.element.textContent = "00:00:00";
        this.millis = 0;

    }

    start() {
        // TODO: start timer
        if (!this.running) {
            this.running = true;
            setTimeout(() => { this.addSecLoop() }, 1000);
        }
    }

    addSecLoop() {
        this.timeout = setTimeout(() => {
            this.plusTime(1000);
            this.addSecLoop();
        }, 1000);
    }

    msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    }


    plusTime(ms) {
        // TODO: increment timer by ms
        this.millis += ms;
        this.update();
    }

    minusTime(ms) {
        // TODO: decrement timer by ms
        this.millis -= ms;
        this.update();
    }

    stop() {
        // TODO: stop timer here
        this.running = false;
        clearTimeout(this.timeout);
    }

    update() {
        // TODO: update running timer
        let s = this.millis;
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        this.element.textContent = (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (secs > 9 ? secs : "0" + secs);

    }

}

