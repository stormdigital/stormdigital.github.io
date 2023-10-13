
function init() {

    var totalAmount = fillBoxes();
    document.querySelector('.imageContainer').addEventListener("mousemove", function(e){
        mouseMove(e, totalAmount)
    });
    document.querySelector('.imageContainer').addEventListener("mouseout", mouseOut);
}


function fillBoxes(){
    var boxWidth = 35;
    var boxHeight = 35;
    var boxContainer = document.querySelector('.boxContainer');
    var containerWidth = boxContainer.offsetWidth;
    var containerHeight = boxContainer.offsetHeight;

    var horizontalAmount = Math.max(containerWidth / boxWidth);
    var verticalAmount = Math.max(containerHeight / boxHeight);
    var totalAmount = verticalAmount * horizontalAmount;
    
    console.log(totalAmount);
    for (let index = 0; index < totalAmount; index++) {
        generateBoxes(boxWidth, boxHeight)   
    }

    return totalAmount
}

function generateBoxes(boxWidth, boxHeight){

    var boxWrapper = document.createElement('div')
    boxWrapper.className = 'boxWrapper';
    boxWrapper.style.width = boxWidth+'px';
    boxWrapper.style.height = boxHeight+'px';
    
    var box = document.createElement('div')
    box.className = 'box';
    box.style.width = boxWidth+'px';
    box.style.height = boxHeight+'px';

    
    boxWrapper.appendChild(box);
    document.querySelector('.boxContainer').appendChild(boxWrapper);


    
}

init();

function mouseMove(e, totalAmount){

//get mouse position
var mousePosX = e.clientX - document.querySelector('.imageContainer').offsetLeft + document.querySelector('.imageContainer').offsetWidth/2;
var mousePosY = e.clientY - document.querySelector('.imageContainer').offsetTop+ document.querySelector('.imageContainer').offsetHeight/2 - 100;

//calculate percentage based on mouse position and imageContainer width/height
var mousePercentageX = mousePosX / document.querySelector('.imageContainer').offsetWidth
var mousePercentageY = mousePosY / document.querySelector('.imageContainer').offsetHeight;

//store positions in array
var positionArray = [mousePercentageX, mousePercentageY]
var opacityValue = 0;

    gsap.to(".box", {
        stagger: {
          // wrap advanced options in an object
          each: 0.001,
          from: positionArray,
          grid: "auto",
          ease: "power2.inOut",
          onStart: function(){

            gsap.to(this.targets()[0], 0.2, {opacity:opacityValue, width: opacityValue*20+'%'}, "power2.inOut")
            opacityValue = opacityValue + ((5/totalAmount));
          }
        //   repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
        },
    });
}

function mouseOut(){
    console.log('out');
    opacityValue = 0;
    // gsap.killTweensOf(".box");
    setTimeout(() => {
        gsap.to(".box", 0.2, {opacity: 0, width: '100%'});  
    }, 500);
    gsap.to(".box", 0.2, {opacity: 0, width: '100%'});
}