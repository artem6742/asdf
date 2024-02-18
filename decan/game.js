var urlParams = new URLSearchParams(window.location.search);
var nickname = urlParams.get('nickname');
var date = new Date();
var nicknameDisplay = document.getElementById('nicknameDisplay');
var localTime = document.getElementById('localTime')

let hour = date.getHours()
let min = date.getMinutes();

nicknameDisplay.innerHTML = 'Ваш ник: ' + nickname;


if (min < 10) {
    min = "0" + min;
}
localTime.innerHTML = `Текущее время: ${hour} : ${min}`


///// обьект


var object = document.getElementById('Object');

object.style.top = '30px';
object.style.left = '30px';

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
});

function moveUp() {
    object.style.top = (parseInt(object.style.top) - 10) + 'px';
    gameOver()
}

function moveDown() {
    object.style.top = (parseInt(object.style.top) + 10) + 'px';
    gameOver()
}

function moveLeft() {
    object.style.left = (parseInt(object.style.left) - 10) + 'px';
    gameOver()
}

function moveRight() {
    object.style.left = (parseInt(object.style.left) + 10) + 'px';
    gameOver()
}


// Монстры


let monsters = document.getElementById('Monsters')

// for(let i = 0; i < 10; i++) {
//     const monster = document.createElement('img')
//     monster.setAttribute('src', 'https://yt3.googleusercontent.com/ytc/AOPolaTRhKbh41AnwfA1uDe_xjs9zkQldp82lFJIKdEKlQ=s900-c-k-c0x00ffffff-no-rj')
//     monster.id = 'Monsters'
//
//
// }
function createCircle() {
    const map = document.body;
    monsters.className = "circle";
    monsters.style.top = Math.floor(Math.random() * 20) + "px";
    monsters.style.left = Math.floor(Math.random() * 20) + "px";
    const monster = document.createElement('img')
    monster.setAttribute('src', 'https://yt3.googleusercontent.com/ytc/AOPolaTRhKbh41AnwfA1uDe_xjs9zkQldp82lFJIKdEKlQ=s900-c-k-c0x00ffffff-no-rj')
    monster.id = 'Monsters'
    map.appendChild(monsters);
}

setInterval(() => {
    for (let i = 0; i < 10; i++) {
        createCircle();
    }
}, 3000);
setInterval();


function gameOver() {
    var playerRect = object.getBoundingClientRect();
    var monsterRect = monsters.getBoundingClientRect();

    if (playerRect.top === monsterRect.top && playerRect.left === monsterRect.left) {
        stopTimer();
        alert('Вы проиграли');
    }
}

















