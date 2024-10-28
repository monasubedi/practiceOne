const increaseBtn = document.querySelector(".btn-increase");
const btnClicked = document.querySelector(".btn-clicked");
const btnTriggered = document.querySelector(".btn-triggered");

let clickedTimes = 0;
let triggeredTimes = 0;

const myDebounce = (cb, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const myThrottle = (cb, delay) => {
    let last = 0;
    return function (...args) {
        let now = new Date().getTime();
        if (now - last < delay) return;
        last = now;
        return cb(...args);
    }
}


const triggerDebounce = myDebounce(() => {
    triggeredTimes += 1;
    btnTriggered.innerHTML = triggeredTimes;
}, 1000);

const triggerThrottle = myThrottle(() => {
    triggeredTimes += 1;
    btnTriggered.innerHTML = triggeredTimes;

}, 1000);

increaseBtn.addEventListener("click", () => {
    clickedTimes += 1;
    btnClicked.innerHTML = clickedTimes;
    //triggerDebounce();
    triggerThrottle();
});


