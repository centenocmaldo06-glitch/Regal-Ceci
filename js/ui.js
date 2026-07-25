/*==========================
 REFERENCIAS
==========================*/
const screens = document.querySelectorAll(".screen");
const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");
const wishesScreen = document.getElementById("wishesScreen");
const roseScreen = document.getElementById("roseScreen");
const ticketScreen = document.getElementById("ticketScreen");
const finalScreen = document.getElementById("finalScreen");
const secretScreen = document.getElementById("secretScreen");

/*==========================
 BOTONES
==========================*/
const startButton = document.getElementById("startButton");
const envelope = document.getElementById("envelope");
const continueButton = document.getElementById("continueButton");
const roseButton = document.getElementById("roseButton");
const acceptButton = document.getElementById("acceptButton");
const laterButton = document.getElementById("laterButton");
const secretButton = document.getElementById("secretButton");
const restartButton = document.getElementById("restartButton");
const counter = document.getElementById("counter");

/*==========================
 FUNCIONES
==========================*/
function hideAllScreens(){
 screens.forEach(screen=>{
  screen.classList.remove("active");
  screen.style.opacity = "0";
  screen.style.transform = "scale(.97)";
  setTimeout(()=>{
   screen.classList.add("hidden");
  },300);
 });
}

function animateButton(button){
 button.style.transform = "scale(.94)";
 setTimeout(()=>{
  button.style.transform = "scale(1)";
 },120);
}

function showScreen(screen){
 screens.forEach(s=>{
  if(s === screen){
   s.classList.remove("hidden");
   requestAnimationFrame(()=>{
    s.classList.add("active");
    s.style.opacity = "1";
    s.style.transform = "scale(1)";
   });
  }else{
   s.classList.remove("active");
   s.style.opacity = "0";
   s.style.transform = "scale(.97)";
   setTimeout(()=>{
    s.classList.add("hidden");
   },300);
  }
 });
}

/*==========================
 CUENTA REGRESIVA
==========================*/
function startCountdown(){
 let value = 3;
 counter.textContent = value;

 const interval = setInterval(()=>{
  value--;

  if(value > 0){
   counter.textContent = value;
  }else{
   clearInterval(interval);
   showScreen(envelopeScreen);
  }
 },1000);
}
/*==========================
 BOTÓN INICIO
==========================*/
startButton.addEventListener("click",()=>{
 animateButton(startButton);

 if(typeof startMusic === "function"){
  startMusic();
 }

 setTimeout(()=>{
  showScreen(countdown);
  startCountdown();
 },150);
});

/*==========================
 ABRIR SOBRE
==========================*/
envelope.addEventListener("click",()=>{
 animateButton(envelope);
 envelope.classList.add("open");

 if(typeof playSound === "function"){
  playSound("sounds/paper.mp3");
 }

 setTimeout(()=>{
  document.getElementById("credits").style.display;
  showScreen(letterScreen);

  if(typeof startLetter === "function"){
   startLetter();
  }

 },900);
});

/*==========================
 NAVEGACIÓN
==========================*/
continueButton.addEventListener("click",()=>{
 animateButton(continueButton);
 showScreen(wishesScreen);

 if(typeof startWishes === "function"){
  startWishes();
 }
});

roseButton.addEventListener("click",()=>{
 animateButton(roseButton);
 showScreen(ticketScreen);
});
acceptButton.addEventListener("click",()=>{
 animateButton(acceptButton);
 showScreen(finalScreen);

 if(typeof launchFireworks === "function"){
  launchFireworks();
 }
});

laterButton.addEventListener("click",()=>{
 animateButton(laterButton);
 showScreen(finalScreen);
});

secretButton.addEventListener("click",()=>{
 animateButton(secretButton);
 showScreen(secretScreen);
});

restartButton.addEventListener("click",()=>{
 animateButton(restartButton);
 document.getElementById("credits").style.display;
 location.reload();
});

/*==========================
 TRANSICIONES
==========================*/
screens.forEach(screen=>{
 screen.style.transition =
 "opacity .35s ease, transform .35s ease";
});
/*==========================
 EXPORTAR
==========================*/
window.showScreen = showScreen;
window.hideAllScreens = hideAllScreens;
