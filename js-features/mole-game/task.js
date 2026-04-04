let dead = 0;
let lost = 0;

function getHole(index) {
    return document.getElementById('hole' + index);
}

function resetGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

function checkGameStatus () {
    if (dead === 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        return true;
    }
    if (lost === 5) {
        alert('Поражение! Вы промахнулись 5 раз!');
        resetGame();
        return true;
    }
    return false;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }
        checkGameStatus();
    }
}