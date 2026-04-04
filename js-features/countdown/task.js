const timerElement = document.getElementById('timer');
let totalSeconds = parseInt(timerElement.textContent);
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const f = (n) => n < 10 ? '0' + n : n;
    return f(h) + ':' + f(m) + ':' + f(s);
}

timerElement.textContent = formatTime(totalSeconds);

const interval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds >= 0) timerElement.textContent = formatTime(totalSeconds);
    if (totalSeconds <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
