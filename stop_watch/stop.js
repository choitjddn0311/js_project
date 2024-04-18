let timeId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let hour;
let min;
let sec;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

function start() {
    printTime();
    stop();
    timeId = setTimeout(start , 1000);
}

function stop() {
    if(timeId != null) {
        clearTimeout(timeId);
    }
}

function reset() {
    stop()
    stopwatch.innerText = "00:00:00";
    time = 0;
}
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min  = parseInt(String((time  - (hour * 60 * 60)) / 60));
    sec  = time % 60;

    return String(hour).padStart(2 , '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2 , '0');
}
