let canvasEl = document.getElementById('canvas');
canvasEl.width = 750;
canvasEl.height = 422

let context = canvasEl.getContext('2d');
let videoEl = document.getElementById('video');
var intervalRewind;
var intervalPlay;
var inverted = false;

function updateCanvas() {

  context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    if(inverted){
        invertColors(imageData.data);
    }
  context.putImageData(imageData, 0, 0);
  window.requestAnimationFrame(updateCanvas);
}

function invertColors(data) {
    for (var i = 0; i < data.length; i+= 4) {
        data[i] = data[i] ^ 255; // Invert Red
        data[i+1] = data[i+1] ^ 255; // Invert Green
        data[i+2] = data[i+2] ^ 255; // Invert Blue
    }
}

function setupDraggable(){
    console.log('aaa');
console.log(Draggable);
    Draggable.create(".scrubber", {
        activeCursor: "grabbing",
        type:"x",
        bounds: ".scrubbarContainer",
        inertia: true,
        onClick: function() {
            console.log("clicked");
        },
        onDrag: function(){
            clearInterval(intervalPlay);
            document.querySelector('.scrubBar').style.width = document.querySelector('.scrubber').getBoundingClientRect().x;
            videoEl.pause();
            updateVidBarProgress();
        },
        onDragEnd: function() {
            
            console.log("drag ended");
        }
    });
}
gsap.registerPlugin(Draggable);
setupDraggable()

function updateVidBarProgress(){
    console.log(document.querySelector('.scrubber').getBoundingClientRect().x / document.querySelector('.scrubBarEmpty').offsetWidth);
    videoEl.currentTime = videoEl.duration * document.querySelector('.scrubber').getBoundingClientRect().x / document.querySelector('.scrubBarEmpty').offsetWidth;
    console.log(videoEl);
}

function setBarToVideoProgress(){

    intervalPlay = setInterval(function(){
        if(videoEl.currentTime / videoEl.duration == 1){
            console.log('clear');
            clearInterval(intervalPlay)
        }
        else{
            console.log(videoEl.currentTime / videoEl.duration);
            gsap.set('.scrubber', {x:  document.querySelector('.scrubBarEmpty').offsetWidth * videoEl.currentTime / videoEl.duration})
            document.querySelector('.scrubBar').style.width = document.querySelector('.scrubber').getBoundingClientRect().x;
        }
       
    }, 30);
    // document.querySelector('.scrubBar').style.width = document.querySelector('.scrubber').getBoundingClientRect().x;
}

function rewind(rewindSpeed) {    
    clearInterval(intervalRewind);
    var startSystemTime = new Date().getTime();
    var startVideoTime = videoEl.currentTime;
    
    intervalRewind = setInterval(function(){
        videoEl.playbackRate = 1.0;
        if(videoEl.currentTime <= 0.1){
            clearInterval(intervalPlay);
            clearInterval(intervalRewind);
            videoEl.pause();
        } else {
            var elapsed = new Date().getTime()-startSystemTime;
            // log.textContent='Rewind Elapsed: '+elapsed.toFixed(3);
            videoEl.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
        }
    }, 30);
 }

 function updateWithScrolling(delta){
    var startSystemTime = new Date().getTime();
    var startVideoTime = videoEl.currentTime;
   
    var progressSpeed = 250;
    console.log(videoEl.duration/progressSpeed);
    console.log(startVideoTime);
    
   

    // videoEl.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
    
    if(delta == -1){
        console.log('backwards');
        videoEl.currentTime = startVideoTime - videoEl.duration/progressSpeed;
    }

    if(delta == 1){
        videoEl.currentTime = startVideoTime + videoEl.duration/progressSpeed;
        console.log('forwards');
    }
   
 }

 document.querySelector('.playbtn').addEventListener('click', function(){
    clearInterval(intervalRewind);
    clearInterval(intervalPlay);
    videoEl.play();
    setBarToVideoProgress();
 })

 document.querySelector('.reversebtn').addEventListener('click', function(){
    rewind(1.0)
    clearInterval(intervalPlay);
    setBarToVideoProgress();
 })
 document.querySelector('.invertbtn').addEventListener('click', function(){
    inverted = !inverted;
 })


 window.addEventListener("wheel", event => {

    clearInterval(intervalPlay);
    setBarToVideoProgress();

    setTimeout(() => {
        clearInterval(intervalPlay);
    }, 1000);

    videoEl.pause();
    const delta = Math.sign(event.deltaY);
    updateWithScrolling(delta)
    
});
requestAnimationFrame(updateCanvas);