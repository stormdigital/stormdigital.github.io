window.onload = init;

window.vLines = 19;
window.hLines = 13;

function init() {

    gsap.to("#scaler", 0.5, {opacity:1, ease:Sine.easeInOut});

    setListeners();
    onResize();
    createGrid();
    setCowPos();
    animate();
    
}

function setListeners(){
    window.addEventListener("resize", onResize);

    document.querySelector("#scaler").addEventListener("click", function(){
        // gsap.globalTimeline.pause()
    })

    var prevLetter = '';
    document.body.onkeyup = function(e) {
        if (e.key == "w") {
            prevLetter = "w";
            console.log("w");
        }
        else if (e.key == "i" && prevLetter == "w") {
            prevLetter = "i";
            console.log("i");
        }
        else if (e.key == "n" && prevLetter == "i") {
            console.log("n");
            checkWinningBlock();
        }
        else{
            prevLetter = '';
            console.log("else");
            
        }
    }  

    var time = 0;
    var poopChance = 0;
    window.finished = false;
    setPoopChance(time, poopChance);
}

function onResize(){

    var scaler = document.querySelector("#scaler");
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var sWidth = scaler.offsetWidth;
    var sHeight = scaler.offsetHeight;

    if(wWidth < sWidth){
        var scaleW = wWidth/sWidth;
        scaler.style.transform = "scale("+ scaleW +") translate(-50%, -50%)";

        if(wHeight < sHeight){
            var scaleH = wHeight/sHeight;
            if(scaleW > scaleH){
                scaler.style.transform = "scale("+ scaleH +") translate(-50%, -50%)";
            }
        }
    }    
}

function createGrid(){
    var scaler = document.querySelector("#scaler");
    var sWidth = scaler.offsetWidth;
    var sHeight = scaler.offsetHeight;
    var number = 0;
    var numberArr = [];

    for (var i=0; i < window.vLines*window.hLines; i++) {
        number++;
        numberArr.push(number);
    }
    shuffle(numberArr);
    
    for (var i=0; i < window.vLines*window.hLines; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("block");
        newDiv.style.width= sWidth/window.vLines+"px";
        newDiv.style.height= sHeight/window.hLines+"px";
        newDiv.style.lineHeight= sHeight/window.hLines+"px";
        newDiv.style.fontSize= sWidth/80+"px";
        newDiv.innerHTML= numberArr[i];
        document.querySelector("#blocksWrapper").appendChild(newDiv);
    }
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

function setCowPos(){

    var sWidth = scaler.offsetWidth;
    var sHeight = scaler.offsetHeight;
    var cowH = document.querySelector("#cowWrapper").offsetHeight;
    var randomX = gsap.utils.random(0, (sWidth-cowH), 1);
    var randomY = gsap.utils.random(0, (sHeight-cowH), 1);

    gsap.set("#cowWrapper", {x:randomX, y:randomY});
}

function animate(){
    gsap.to("#bg", 1, {opacity:0.8, yoyo:true, repeat:-1, repeatDelay:4});
    gsap.from("#blocksWrapper", 1, {opacity:0, yoyo:true, repeat:-1, repeatDelay:4});
    gsap.set("#blocksWrapper", {opacity:0});
    
    var logoTL = gsap.timeline({repeat:-1, repeatDelay:20});
    logoTL.to("#logoWrapper", 1, {opacity:0.7, ease:Sine.easeInOut}, 6);
    logoTL.to("#logoWrapper", 1, {opacity:0, ease:Sine.easeInOut}, 9);

    var cowTL = gsap.timeline({});
    for (let i= 0; i < 10800/2; i++) {
        cowTL.to("#cowHead", 2, {rotation:getRandomDeg(), repeat:1, yoyo:true, ease:Sine.easeInOut});
    }
    
    var cowShadow = gsap.timeline({});
    for (let i= 0; i < 10800; i++) {
        cowShadow.fromTo("#cowShadow", 1, {y:-15, opacity:0.5}, {y:10, repeat:1, yoyo:true, ease:Sine.easeInOut});
    }

    var sWidth = scaler.offsetWidth;
    var sHeight = scaler.offsetHeight;
    var cowH = document.querySelector("#cowWrapper").offsetHeight;
    var cowPath = [];
    for (var i = 0; i < 180; i++) {
        var randomX = gsap.utils.random(0, (sWidth-cowH), 1);
        var randomY = gsap.utils.random(0, (sHeight-cowH), 1);
        var path = {};
        path.x = randomX;
        path.y = randomY;
        cowPath.push(path);
    }    

    gsap.to("#cowWrapper", {
        motionPath:{
            path: cowPath,
            autoRotate: true,
            alignOrigin: [0.5, 0,5],
            curviness: 1
        },
        duration: 10800,
        ease: "rough({template:none,strength: 1,points:300,taper:none,randomize:true,clamp:true})"
      });
}

function getRandomDeg(){
    var num = gsap.utils.random(-70, 70, 1);
    return num;
}

function setPoopChance(time, poopChance){
    console.log("check poop chance");
    
    time++;
    if(time < 20){
        //1-0.9995^20        
        poopChance = 0.05;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        }
        //kans 1%
        //totale kans is 1%
    }
    else if(time >= 20 && time < 40){
        poopChance = 0.2;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        }   
        //kans + 4%
        //totale kans is 5%
    }
    else if(time >= 40 && time < 60){   
        poopChance = 0.25;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        } 
        //kans + 5%
        //totale kans is 10%
    }
    else if(time >= 60 && time < 80){
        poopChance = 0.5;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        } 
        //kans + 10%
        //totale kans is 20%
    }
    else if(time >= 80 && time < 100){
        poopChance = 1;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        } 
        //kans + 20%
        //totale kans is 30%
    }
    else if(time >= 100 && time < 120){
        poopChance = 2;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        } 
        //kans + 30%
        //totale kans is 50%
    }
    else if(time >= 120 && time < 140){
        poopChance = 4;
        var rand = gsap.utils.random(0, 100, poopChance);
        
        if(rand == poopChance){
            checkWinningBlock();
            window.finished = true;
        } 
        //kans + 30%
        //totale kans is 80%
    }
    else{
        checkWinningBlock();
        window.finished = true;     
        //totale kans is 100%
    }
    
    if(!window.finished){
        // document.querySelector("#poopChance").innerHTML = poopChance + "%";
        // document.querySelector("#timeRight").innerHTML = time;
        
        setTimeout(() => {
            setPoopChance(time, poopChance);
        }, 60000);
    }


}

function checkWinningBlock(){
    window.finished = true;
    console.log("check winning block");
    var sLeft = scaler.getBoundingClientRect().x;
    var sTop = scaler.getBoundingClientRect().y;
    var cowHoleT = document.querySelector("#cowHole").getBoundingClientRect().top - sTop;
    var cowHoleL = document.querySelector("#cowHole").getBoundingClientRect().left - sLeft;

    var blockW = document.querySelector(".block").getBoundingClientRect().width;
    var blockH = document.querySelector(".block").getBoundingClientRect().height;

    var blockOrderT = cowHoleT/blockH;
    var blockOrderL = cowHoleL/blockW;

    checkPoopedBlock(Math.ceil(blockOrderL), Math.ceil(blockOrderT));  
    showAlertScreen();
}

function checkPoopedBlock(x, y){
    var poopedBlock = document.querySelectorAll(".block")[(y-1)*window.vLines + (x-1)];
    if(poopedBlock === undefined || poopedBlock === null){
        var randomBlock = gsap.utils.random(0, document.querySelectorAll(".block").length, 1);
        var poopedBlock = document.querySelectorAll(".block")[randomBlock];
    }
    // poopedBlock.style.background = "gold";

    document.querySelector("#signNumber").innerHTML = poopedBlock.innerHTML;
}

function showAlertScreen(){

    gsap.set(["#signWrapper"], {y:-2000, x:-1000, rotation:"-=30"});

    gsap.to("#alertScreen", 1, {opacity:1, ease:Sine.easeInOut});
    gsap.from("#messageWrapper", 1, {scale:0, ease:Back.easeOut, delay:0.5});

    var split = new SplitText("#message1", {type: "words"});
    gsap.from(split.words, 0.5, {scale:0, stagger: 0.5, ease:Back.easeOut, repeat:-1, delay:1, repeatDelay:1});

    var lightTL = gsap.timeline({repeat:-1});
    lightTL.to(".lightbulb", 0.2, {opacity: 0,  stagger: 0.05, ease: Sine.easeInOut});
    lightTL.to(".lightbulb", 0.2, {opacity: 1,  stagger: 0.075, ease: Sine.easeInOut});

    setTimeout(() => {
       showEndScreen(); 
    }, 60000);
}

function showEndScreen(){

    gsap.to("#messageWrapper", 0.5, {scale:0, ease:Back.easeIn, onComplete: function(){
        gsap.set("#message1", {display:"none"});
        gsap.set("#messageWrapper", {left:"77%"});
        gsap.set("#alertScreen", {scale:2.5, x:1120, y:700});
    }});

    
    gsap.to("#endBg", 0.5, {opacity:1, ease:Sine.easeInOut, delay:0.5});
    gsap.to("#alertScreen", 1.5, {x:2940, y:-1100, ease:Sine.easeInOut, delay:2});
    gsap.to("#alertScreen", 1.5, {x:0, y:0, scale:1, ease:Sine.easeInOut, delay:5.5});
    gsap.to("#messageWrapper", 0.5, {scale:1, ease:Back.easeOut, delay:7, onStart:function(){
        var totalTime = 300;
        setNewTime(totalTime);
    }});
    gsap.to("#message2", 0.5, {opacity:1, ease:Sine.easeInOut, delay:7.5});
    gsap.to("#message3", 0.5, {opacity:1, ease:Sine.easeInOut, delay:7.8});
    
    var dotsTL = gsap.timeline({repeat:-1, repeatDelay:0.3});
    dotsTL.to("#message2", 0.01, {innerHTML:"Afstand<BR>berekenen."}, 0.3);    
    dotsTL.to("#message2", 0.01, {innerHTML:"Afstand<BR>berekenen.."}, 0.6);    
    dotsTL.to("#message2", 0.01, {innerHTML:"Afstand<BR>berekenen..."}, 0.9);    
    
    showSteam();
}

function showSteam(){
    var steamTL = gsap.timeline({repeat:-1});
    for (var i = 0; i < 50; i++) {
        var newImg = document.createElement("img");
        delay = gsap.utils.random(0, 20);
        newImg.src = "steam.png";
        newImg.style.position = "absolute";
        newImg.style.left = "100px";
        newImg.style.scaleX = gsap.utils.random(-1, 1);
        newImg.style.opacity = gsap.utils.random(0.1, 0.3);
        document.querySelector("#steamWrapper").appendChild(newImg);
        steamTL.fromTo(newImg, 5, {y:500, ease:Power0.easeNone}, {scale:"+=1", x:gsap.utils.random(-100, 200, 1), y:0}, delay);
        steamTL.to(newImg, 1, {opacity:0}, delay+4);
    }
}

function setNewTime(totalTime){
    totalTime--;
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime - minutes * 60;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    gsap.set("#time", {innerHTML:minutes + ":" + seconds});
    if(totalTime > 0){
        setTimeout(() => {
            setNewTime(totalTime);
        }, 1000);
    }
    else{
        gsap.to("#messageWrapper", 0.5, {scale:0, ease:Back.easeIn});
        gsap.to("#alertScreen", 1, {scale:1.5, x:970, ease:Sine.easeInOut, delay:0.5});
        gsap.to(["#signWrapper"], 1, {y:0, x:0, ease:Sine.easeIn, delay:2});
        gsap.to(["#signWrapper"], 0.7, {rotation:0, ease:Back.easeOut, delay:3});
    }
}