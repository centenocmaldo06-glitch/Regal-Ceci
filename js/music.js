/*==========================
        REFERENCIAS
==========================*/

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

/*==========================
      INICIAR MÚSICA
==========================*/

function startMusic(){

    music.volume = 0.25;

    music.play()
        .then(()=>{

            musicPlaying = true;

            musicButton.textContent = "🔊";

        })
        .catch(()=>{

            console.log("La reproducción automática fue bloqueada.");

        });

}

/*==========================
      DETENER MÚSICA
==========================*/

function stopMusic(){

    music.pause();

    musicPlaying = false;

    musicButton.textContent = "🔇";

}

/*==========================
      BOTÓN MÚSICA
==========================*/

musicButton.addEventListener("click",()=>{

    if(musicPlaying){

        stopMusic();

    }else{

        startMusic();

    }

});

/*==========================
      EFECTOS DE SONIDO
==========================*/

function playSound(file){

    const sound = new Audio(file);

    sound.volume = 0.7;

    sound.play();

}

/*==========================
      EXPORTAR
==========================*/

window.startMusic = startMusic;
window.stopMusic = stopMusic;
window.playSound = playSound;
