/*==================================================
            EFFECTS.JS | VERSIÓN 2.1
==================================================*/

/*==========================
        REFERENCIAS
==========================*/

const moon = document.getElementById("moon");
const secretMessage = document.getElementById("secretMessage");
const roseContainer = document.getElementById("roseContainer");

let moonClicks = 0;

/*==========================
        DESTELLOS
==========================*/

function createSpark(x, y) {

    const spark = document.createElement("div");

    spark.className = "spark";

    spark.style.left = x + "px";
    spark.style.top = y + "px";

    spark.style.width = (4 + Math.random() * 6) + "px";
    spark.style.height = spark.style.width;

    document.body.appendChild(spark);

    spark.addEventListener("animationend", () => {
        spark.remove();
    });

}

/*==========================
      FUEGOS ARTIFICIALES
==========================*/

function launchFireworks() {

    const totalExplosions = 6;

    for (let explosion = 0; explosion < totalExplosions; explosion++) {

        setTimeout(() => {

            const centerX =
                Math.random() * window.innerWidth;

            const centerY =
                Math.random() * (window.innerHeight * 0.55);

            for (let i = 0; i < 45; i++) {

                const angle =
                    (Math.PI * 2 / 45) * i;

                const radius =
                    20 + Math.random() * 90;

                setTimeout(() => {

                    createSpark(

                        centerX + Math.cos(angle) * radius,

                        centerY + Math.sin(angle) * radius

                    );

                }, i * 8);

            }

        }, explosion * 500);

    }

    if (typeof playSound === "function") {

        playSound("sounds/fireworks.mp3");

    }

}




/*==========================
      ESTRELLA FUGAZ
==========================*/

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=
        (Math.random()*window.innerWidth)+"px";

    star.style.top=
        (Math.random()*200)+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1800);

}
setInterval(createShootingStar, 12000);

/*==========================
      EXPORTAR
==========================*/

window.createSpark = createSpark;
window.launchFireworks = launchFireworks;
window.createShootingStar=createShootingStar;
