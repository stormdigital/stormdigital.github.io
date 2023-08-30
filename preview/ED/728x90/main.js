window.onload = init;

function init() {

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag)
        masterTL.progress(1);
    })
    
    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {y:3, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {y:0, ease:Sine.easeInOut});
        }
    })

    var startTime = Date.now();
    window.delta = 0;

    function tick() {
        var time = Date.now();
        window.delta++;
        if (time - startTime > 1000) {
            window.fps = (window.delta / ((time - startTime) / 1000));
            startTime = time;
            window.delta = 0;
            setConfetti(window.fps);
        }
        else{
            window.requestAnimationFrame(tick);
        }
    }
    tick();

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#text1Wrapper", 0.5, {scale:0, ease:Sine.easeInOut}, "start")
    masterTL.from("#text1", 0.5, {scale:2, ease:Sine.easeInOut}, "start")
    masterTL.to("#text1Wrapper", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1.5")
    masterTL.from("#text2Wrapper", 0.5, {x:"300%", ease:Sine.easeInOut})
    masterTL.to("#boardWrapper", 1, {rotationX:10, rotationY:20, ease:Sine.easeInOut})
    masterTL.to("#shadow", 1, {x:-2, y:2, ease:Sine.easeInOut}, "-=1")
    masterTL.fromTo("#flare", 1, {x:"70%"}, {x:"-70%",ease:Sine.easeInOut}, "-=1")
    masterTL.from("#dartWrapper", 1, {rotation:80, ease:Sine.easeInOut}, "-=0.5");
    masterTL.to("#text2Wrapper", 0.1, {scale:0.95, repeat:1, yoyo:true, transformOrigin:"50% 50%", ease:Bounce.easeInOut})
    masterTL.to("#dart", 0.2, {rotation:-10, ease:Sine.easeInOut}, "-=0.2");
    masterTL.to("#dart", 0.4, {rotation:5, ease:Sine.easeInOut});
    masterTL.to("#dart", 0.2, {rotation:0, ease:Sine.easeInOut});
    masterTL.to("#text2Wrapper", 0.3, {opacity:0, ease:Sine.easeInOut}, "+=0.5");
    masterTL.from("#text3Wrapper", 0.5, {x:"300%", ease:Sine.easeInOut})
    masterTL.from("#text3Wrapper", 0.1, {onStart:animateConfetti});
    masterTL.from("#ctaWrapper", 0.5, {scale:0, y:-50, ease:Sine.easeInOut}, "+=0.5");
}

confettiTL = new TimelineLite({paused:true});

function setConfetti(fps){

    confettiTL.add("start")

    var colors = ["#d11219", "#94c000", "#fbb03f", "#4893b9", "#ee959f"]
    for(var i=0; i<fps*3.3; i++){
        var randomColor = colors[gsap.utils.random(0, colors.length-1, 1)];

        const newWrapper = document.createElement("div");
        newWrapper.style.left = "169px";
        newWrapper.style.top = "26px";
        document.querySelector("#confettiWrapper").appendChild(newWrapper);
        
        const newDiv = document.createElement("div");
        newDiv.style.width = gsap.utils.random(4, 10, 1)+"px";
        newDiv.style.height = gsap.utils.random(4, 10, 1)+"px";
        newDiv.className = "cDiv";
        newDiv.style.background = randomColor;
        newWrapper.appendChild(newDiv);

        var randomDur = gsap.utils.random(0.8, 1);
        var randomDur2 = gsap.utils.random(1, 1.5);

        var yVal = gsap.utils.random(-200, 75);
        if(yVal < 10 && yVal > -10){
            console.log(yVal);
            yVal = yVal*10;
        }

        confettiTL.to(newDiv, randomDur+randomDur2, {x:-gsap.utils.random(-500, 500), rotationX:gsap.utils.random(1000, 4000), rotationY:gsap.utils.random(1000, 4000), ease:Power2.easeOut}, "start");
        confettiTL.to(newDiv, randomDur, {y:yVal, ease:Power4.easeOut}, "start");
        confettiTL.to(newWrapper, (randomDur+randomDur2)/1.3, {y:"+=500", ease:Power2.easeIn}, "start");
    }
}

function animateConfetti(){
    confettiTL.play(0).timeScale(0.7);
}