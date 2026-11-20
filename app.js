
let points = 0;
let autoPower = 1;
let clickPower = 1;

let clickPowerText = document.querySelector('.clickPower');
let countPointsText = document.querySelector('.countPoints');
let autoPowerText = document.querySelector('.autopower');

let button = document.querySelector('.button');

let upgradeButton1 = document.querySelector('.upgrade-button-1');
let upgradeButton2 = document.querySelector('.upgrade-button-2');
let upgradeAutoButton = document.querySelector('.upgrade-auto-button-1');

function handleClick() {
    points += clickPower;
    countPointsText.innerHTML = points;
}

button.onclick = handleClick;
upgradeButton1.onclick = handleUpgrade1;
upgradeButton2.onclick = handleUpgrade2;
upgradeAutoButton.onclick = handleAutoUpgrade1;


function handleUpgrade1() {
    if (points < 20) {
        alert('Требуется 20 очков');
        return;
    }
    points -= 20;
    clickPower += 1;
    clickPowerText.innerHTML = clickPower;
    countPointsText.innerHTML = points;
}


function handleUpgrade2() {
    if (points < 5000) {
        alert('Требуется 5000 очков');
        return;
    }
    points -= 5000;
    clickPower += 100;
    clickPowerText.innerHTML = clickPower;
    countPointsText.innerHTML = points;
}

function handleAutoUpgrade1() {
    if (points < 50) {
        alert('Требуется 50 очков');
        return;
    }
    points -= 50;
    autoPower += 1;
    clickPowerText.innerHTML = clickPower;
    countPointsText.innerHTML = points;

    autoPowerText.innerHTML = autoPower;
}

setInterval(() => {
    points += autoPower;
    countPointsText.textContent = points;
}, 1000);

