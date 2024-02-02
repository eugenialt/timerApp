let times = [];
const timer = document.querySelector('.timer__display');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
let millisecond = 0;
let secund = 0;
let minute = 0;



// запускаем таймер
function startTimer() {
    let timerMillisecund = setInterval(() => {
        millisecond++;
        if (millisecond === 60) {
            secund++;
            millisecond = 0;
        }
        timerTextContent();
    }, 100);
    let timerSecund = setInterval(() => {
        secund++;
        if (secund === 60) {
            minute++;
            secund = 0;
        }
        timerTextContent();
    }, 1000);
    let timerMinute = setInterval(() => {
        if (minute === 60) {
            minute = 0;
        }
        hour++;
        timerTextContent();
    }, 1000*60)
    
    times.push(timerMillisecund, timerSecund, timerMinute);
}

// кнопка останавливающая таймер
function stopTimer() {
    times.forEach(id => {
        clearInterval(id);
    });
    times = [];
    timerTextContent();
}

// сбрасывает таймер
function resetTimer() {
    times.forEach(id => {
        clearInterval(id);
    });
    times = [];
    millisecond = 0;
    secund = 0;
    minute = 0;
    timerTextContent();
}

// приводим время к виду 00:00:00, .padStart(2, '0') - добавляет нули вначале
function timerTextContent() {
      timer.textContent = `${minute.toString().padStart(2, '0')}:${secund.toString().padStart(2, '0')}:${millisecond.toString().padStart(2, '0')}`;
}

start.addEventListener('click', startTimer);
pause.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);