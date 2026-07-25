/*==========================
        ELEMENTOS
==========================*/

const screens = document.querySelectorAll(".screen");

const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");

const startBtn = document.getElementById("startBtn");
const counter = document.getElementById("counter");
const envelope = document.getElementById("envelope");

/*==========================
        FUNCIONES
==========================*/

window.hideAllScreens = function () {

    screens.forEach(screen => {

        screen.classList.remove("active");
        screen.classList.add("hidden");

    });

}

window.showScreen = function (screen){

    hideAllScreens();

    screen.classList.remove("hidden");
    screen.classList.add("active");

}

/*==========================
    BOTON COMENZAR
==========================*/

startBtn.addEventListener("click", () => {

    if (typeof startMusic === "function") {
        startMusic();
    }

    showScreen(countdown);

    startCountdown();

});

/*==========================
    CUENTA REGRESIVA
==========================*/

function startCountdown() {

    let value = 3;

    counter.textContent = value;

    const interval = setInterval(() => {

        value--;

        if (value > 0) {

            counter.textContent = value;

        } else {

            clearInterval(interval);

            showScreen(envelopeSection);

        }

    }, 1000);

}

/*==========================
    SOBRE
==========================*/

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.querySelector(".envelope-lid")
        .style.animation = "openEnvelope .8s forwards";

    setTimeout(() => {

        showScreen(letterSection);

        if (typeof startLetter === "function") {
            startLetter();
        }

    }, 900);

});
