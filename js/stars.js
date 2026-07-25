/*==========================
      CONTENEDORES
==========================*/

const stars = document.getElementById("stars");
const particles = document.getElementById("particles");

/*==========================
      CREAR ESTRELLAS
==========================*/

function createStars(){

    for(let i = 0; i < 220; i++){

        const star = document.createElement("div");

        const sizes = ["small","medium","big"];

        const randomSize =
        sizes[Math.floor(Math.random()*sizes.length)];

        star.className = `star ${randomSize}`;

        star.style.left =
        Math.random()*100 + "%";

        star.style.top =
        Math.random()*100 + "%";

        star.style.animationDuration =
        (2 + Math.random()*5) + "s";

        star.style.animationDelay =
        Math.random()*5 + "s";

        stars.appendChild(star);

    }

}

/*==========================
    CREAR PARTÍCULAS
==========================*/

function createParticle(){

    const particle =
    document.createElement("div");

    particle.className = "particle";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.bottom = "-20px";

    particle.style.animationDuration =
    (4 + Math.random()*3) + "s";

    particles.appendChild(particle);

    particle.addEventListener("animationend",()=>{

        particle.remove();

    });

}
/*==========================
   ESTRELLA FUGAZ
==========================*/

function createShootingStar(){

    const shootingStar =
    document.createElement("div");

    shootingStar.className =
    "shooting-star";

    shootingStar.style.left =
    (Math.random()*80 + 20) + "%";

    shootingStar.style.top =
    (Math.random()*40) + "%";

    shootingStar.style.animation =
    "shooting 2s linear forwards";

    stars.appendChild(shootingStar);

    shootingStar.addEventListener("animationend",()=>{

        shootingStar.remove();

    });

}

/*==========================
     INICIALIZACIÓN
==========================*/

createStars();

/*==========================
     INTERVALOS
==========================*/

// Partículas flotantes
setInterval(()=>{

    createParticle();

},700);

// Estrellas fugaces
setInterval(()=>{

    createShootingStar();

},12000);

/*==========================
      EXPORTAR
==========================*/

window.createStars = createStars;
window.createParticle = createParticle;
window.createShootingStar = createShootingStar;
