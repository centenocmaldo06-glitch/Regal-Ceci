/*==================================================
            APP.JS  |  VERSIÓN 2.1
==================================================*/

/*==========================
        DESEOS
==========================*/

const wishes = [
    "✨ Que nunca te falten motivos para sonreír.",
    "🌸 Que todos tus sueños encuentren el camino para hacerse realidad.",
    "💙 Que siempre estés rodeada de personas que te quieran mucho.",
    "🌙 Que cada noche termine con tranquilidad y cada mañana comience con ilusión.",
    "🎂 Que este nuevo año de vida esté lleno de momentos inolvidables.",
    "☀️ Que nunca pierdas esa esencia tan bonita que te hace ser tú.",
    "🍀 Que la suerte siempre encuentre el camino hacia ti."
];

/*==========================
        REFERENCIAS
==========================*/

const wishContainer = document.getElementById("wishContainer");
const nextWish = document.getElementById("nextWish");
const finalMessage = document.getElementById("finalMessage");

/*==========================
        VARIABLES
==========================*/

let currentWish = 0;
let changingWish = false;

/*==========================
    MOSTRAR DESEO
==========================*/

function showWish() {

    wishContainer.style.opacity = 0;
    wishContainer.style.transform = "translateY(20px)";

    setTimeout(() => {

        wishContainer.textContent = wishes[currentWish];

        wishContainer.style.opacity = 1;
        wishContainer.style.transform = "translateY(0)";

    }, 300);

}

/*==========================
      INICIAR DESEOS
==========================*/

function startWishes() {

    currentWish = 0;

    showWish();

}
/*==========================
      SIGUIENTE DESEO
==========================*/

nextWish.addEventListener("click", () => {

    if (changingWish) return;

    changingWish = true;

    currentWish++;

    if (currentWish < wishes.length) {

        showWish();

        setTimeout(() => {
            changingWish = false;
        }, 350);

    } else {

        wishContainer.style.opacity = 0;

        setTimeout(() => {

            showScreen(roseScreen);



            changingWish = false;

        }, 500);

    }

});

/*==========================
      MENSAJE FINAL
==========================*/

function updateFinalMessage() {

    finalMessage.innerHTML = `

Espero de corazón que este pequeño detalle
haya logrado sacarte una sonrisa.

<br><br>

Lo hice con mucho cariño,
dedicación y mucha ilusión.

<br><br>

Tal vez no sea el regalo más grande,
pero sí uno hecho pensando en ti.

<br><br>

Te deseo un cumpleaños lleno de alegría,
personas bonitas y momentos inolvidables.

<br><br>

💙 Feliz cumpleaños, Ceci.

`;

}

/*==========================
      INICIALIZACIÓN
==========================*/

document.addEventListener("DOMContentLoaded", () => {

    updateFinalMessage();

});

/*==========================
        EXPORTAR
==========================*/

window.startWishes = startWishes;
