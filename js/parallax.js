/*==================================================
            PARALLAX.JS
==================================================*/

const moon = document.getElementById("moon");

const stars = document.querySelectorAll(".star");

function moveSky(x,y){

    if(moon){

        moon.style.transform=
            `translate(${x*10}px,${y*10}px)`;
    }

    stars.forEach((star,index)=>{

        const depth=(index%5+1);

        star.style.transform=
            `translate(${x*depth}px,${y*depth}px)`;

    });

}

if(window.DeviceOrientationEvent){

    window.addEventListener("deviceorientation",(e)=>{

        const x=(e.gamma||0)/40;

        const y=(e.beta||0)/60;

        moveSky(x,y);

    });

}

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5);

    const y=(e.clientY/window.innerHeight-.5);

    moveSky(x,y);

});
