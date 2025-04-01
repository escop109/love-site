document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const container = document.getElementById("container");

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Двигаем кнопку при наведении (для ПК)
    noButton.addEventListener("mouseover", moveNoButton);

    // Двигаем кнопку при нажатии (для телефона)
    noButton.addEventListener("click", moveNoButton);

    // Показываем сообщение при нажатии "Да"
    yesButton.addEventListener("click", function () {
        container.innerHTML = "<h1>Я тебя тоже ❤️</h1>";
    });
});
