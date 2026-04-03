const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');  // ← исправлено
const clickerSpeed = document.getElementById('clicker__speed');

let lastClickTime = null;

let isSmall = false;

cookie.onclick = function() {
    let count = parseInt(clickerCounter.textContent);
    count++;
    clickerCounter.textContent = count;

    const now = new Date();
    if (lastClickTime !== null) {
        const secondsDiff = (now - lastClickTime) / 1000;
        const speed = (1 / secondsDiff).toFixed(2);
        clickerSpeed.textContent = speed;
    }
    lastClickTime = now

    if (isSmall) {
        cookie.width = 200;
        isSmall = false;
    } else {
        cookie.width = 150;
        isSmall = true;
    }
}
