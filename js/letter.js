/*==================================================
            LETTER.JS | VERSIÓN 2.1
==================================================*/

/*==========================
        REFERENCIAS
==========================*/

const letterText = document.getElementById("letterText");
const letterDate = document.getElementById("letterDate");

/*==========================
        MENSAJE
==========================*/

const message = `Hola, Ceci. 💙

Antes que nada...

¡Feliz cumpleaños!

Quería hacerte un regalo diferente.
No algo que simplemente pudiera comprarse,
sino algo que pudiera quedarse como un bonito recuerdo.

Tal vez no sea el regalo más grande y perfecto del mundo,
pero cada línea de esta página fue escrita
pensando en sacarte una sonrisa.`;

/*==========================
        VARIABLES
==========================*/

let index = 0;
let writing = false;

/*==========================
        FECHA
==========================*/

letterDate.textContent="28 de Julio de 2026";
/*==========================
      INICIAR CARTA
==========================*/

function startLetter(){

    if(writing) return;

    writing = true;

    index = 0;

    letterText.innerHTML = "";

    continueButton.classList.add("hidden");

    writeCharacter();

}
/*==========================
    ESCRIBIR LETRA POR LETRA
==========================*/

function writeCharacter() {

    if (index >= message.length) {

        writing = false;

        continueButton.classList.remove("hidden");

        continueButton.style.opacity = "0";
        continueButton.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {

            continueButton.style.transition =
                "all .6s ease";

            continueButton.style.opacity = "1";
            continueButton.style.transform =
                "translateY(0)";

        });

        return;
    }

    const character = message.charAt(index);

    letterText.innerHTML += character;

    index++;

    let speed = 28;

    switch (character) {

        case ".":
        case "!":
        case "?":
            speed = 350;
            break;

        case ",":
            speed = 170;
            break;

        case "\n":
            speed = 120;
            break;

        default:
            speed = 28 + Math.random() * 18;

    }

    letterText.scrollTop = letterText.scrollHeight;

    setTimeout(writeCharacter, speed);

}

/*==========================
        EXPORTAR
==========================*/

window.startLetter = startLetter;
