//gallery

const iteams = document.querySelectorAll(".iteam img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup_close");
const popup_img = document.querySelector(".popup_img");
const arrow_left = document.querySelector(".popup_arrow--left");
const arrow_right = document.querySelector(".popup_arrow--right");
const pname = document.querySelector(".pname");


let currentpname;
let currentImgIndex;

const ShowNextImg = () => {
    if (currentImgIndex === iteams.length - 1){
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    popup_img.src = iteams[currentImgIndex].src;
};

const ShowPrevImg = () => {
    if (currentImgIndex === 0 ){
        currentImgIndex = iteams.length - 1;
    } else {
        currentImgIndex--;
    }
    popup_img.src = iteams[currentImgIndex].src;
};

const ClosePopUp = () => {
    popup.classList.add("fade-out");
    setTimeout(() => {
        popup.classList.add("hidden");
        popup.classList.remove("fade-out");
    }, 300);    
};

iteams.forEach((iteam, index) => {
    iteam.addEventListener("click", (e) => {
        popup.classList.remove("hidden");
        popup_img.src = e.target.src;
        currentImgIndex = index;

    });
});

popup_close.addEventListener("click", ClosePopUp);

arrow_right.addEventListener("click", ShowNextImg);

arrow_left.addEventListener("click", ShowPrevImg);

document.addEventListener("keydown", (e) => {
    if(!popup.classList.contains("hidden")){

    if (e.code === "ArrowRight" || e.keyCode === 39){
        ShowNextImg();
    } else if (e.code === "ArrowLeft" || e.keyCode === 37){
        ShowPrevImg();
    } else if(e.code === "Escape" || e.keyCode === 27){
        ClosePopUp();
    }
}
});

popup.addEventListener("click", (e) =>{
    if (e.target === popup) {
        ClosePopUp();
    }
});


//destinations

function myFunction() {
const dropdowns = document.querySelectorAll('.dropdown');


    
  
  

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const destination = dropdown.querySelector('.destination');
    const options = dropdown.querySelectorAll('.destination li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        destination.classList.toggle('destination-open');  
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            destination.classList.remove('destination-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
}

//mapa
require([
    "esri/config",
    "esri/Map",
    "esri/views/SceneView"
], function(esriConfig, Map, SceneView) {

    esriConfig.apiKey = "AAPK1637ff3ebf254471ab9a28b47a8a7ebetBHKpjaGpWHEtmgl6lIa1DeZieisAZPMBvawPi5frYF7ksc97kV5SgJxxyg766h5";

    const map = new Map({
        basemap: "arcgis-topographic", //Basemap layer service
        ground: "world-elevation", //Elevation service
      });

      const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
          position: {
            x: -118.808, //Longitude
            y: 33.961, //Latitude
            z: 2000 //Meters
          },
          tilt: 75
        }
        });

  });

  //menu
  $(".flexnav").flexNav();

