function sendNickname(event) {
    event.preventDefault(); // Отменяем отправку формы

    var nickname = document.getElementById('form').value;
    window.location.href = 'game.html?nickname=' + encodeURIComponent(nickname);
}
