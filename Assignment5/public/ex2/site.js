let el = document.querySelector("#timertext");
let sw = new Stopwatch(el);

// click events
document.querySelector("#startBtn").addEventListener("click", () => sw.start());
document.querySelector("#stopBtn").addEventListener("click", () => sw.stop());
document.querySelector("#resetBtn").addEventListener("click", () => sw.reset());

// TODO: create custom events for key presses here
const startEvent = new Event('startEvent');
const stopEvent = new Event('stopEvent');
const resetEvent = new Event('resetEvent');
const plusEvent = new Event('plusEvent');
const minusEvent = new Event('minusEvent');

// TODO: add listeners for custom events to 'el'
el.addEventListener('startEvent', (e) => {
    sw.start();
});
el.addEventListener('stopEvent', (e) => {
    sw.stop();
});
el.addEventListener('resetEvent', (e) => {
    sw.reset();
});
el.addEventListener('plusEvent', (e) => {
    sw.plusTime(5000);
});
el.addEventListener('minusEvent', (e) => {
    sw.minusTime(5000);
})

// listen for keyboard input
window.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (key === 's') {
        // TODO: dispatch startEvent
        el.dispatchEvent(startEvent);
    } else if (key === 't') {
        // TODO: dispatch stopEvent
        el.dispatchEvent(stopEvent);
    } else if (key === 'r') {
        // TODO: dispatch resetEvent
        el.dispatchEvent(resetEvent);
    } else if (key === "+") {
        // TODO: dispatch plusEvent
        el.dispatchEvent(plusEvent);
    } else if (key === "-") {
        // TODO: dispatch minusEvent
        el.dispatchEvent(minusEvent);
    }
});