const roseLayers = document.getElementById("roseLayers");

function createLayer(radius, petals, color){

    for(let i=0;i<petals;i++){

        const angle=(360/petals)*i;

        const petal=document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        petal.setAttribute(
            "d",
            `
            M250 ${100-radius}
            C265 ${95-radius}
              275 ${120-radius}
              250 ${145-radius}

            C225 ${120-radius}
              235 ${95-radius}
              250 ${100-radius}
            `
        );

        petal.setAttribute("fill",color);

        petal.setAttribute(
            "transform",
            `rotate(${angle} 250 100)`
        );

        roseLayers.appendChild(petal);

    }

}

createLayer(0,8,"#74b9ff");
createLayer(10,10,"#5f9dff");
createLayer(20,12,"#4c8fff");
createLayer(30,14,"#3d7eff");
