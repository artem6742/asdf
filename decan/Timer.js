var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        var elapsedTimeMs = Date.now() - startTime;
        var minutes = Math.floor(elapsedTimeMs / 60000);
        var seconds = Math.floor((elapsedTimeMs % 60000) / 1000);
        document.getElementById('timer').textContent = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    }, 1000);

}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
}

startTimer();




