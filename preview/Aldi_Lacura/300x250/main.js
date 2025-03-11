myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.to("#bg", 2, {x:-292, ease:Sine.easeOut}, "start")
    masterTL.from("#product2", 2, {x:170, ease:Power4.easeOut}, "-=0.4")
    masterTL.from("#product3", 2, {x:180, ease:Power4.easeOut}, "-=2.05")
    masterTL.from("#product1", 1.5, {x:-200, ease:Power4.easeOut}, "-=1.5")
    masterTL.to("#product1", .4, {rotation:8, repeat:1, yoyo:true, ease:Sine.easeOut}, "-=1.3")
    masterTL.add("screen2", "+=0.3");
    masterTL.to(["#bg", "#product1", "#product2", "#product3"], 1.5, {x:"+=45", ease:Sine.easeInOut}, "screen2")
    masterTL.from("#date", 0.5, {x:-150, ease:Sine.easeOut}, "screen2+=1")
    masterTL.from("#badge", 0.5, {x:-150, ease:Sine.easeOut}, "screen2+=1.4")
    masterTL.from("#text1", 0.5, {x:-250, ease:Sine.easeOut}, "screen2+=2")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "screen2+=2.8")
    masterTL.add("endScreen", "+=2");
    masterTL.from("#endscreen", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen")
    masterTL.to("#logo", 0.5, {width:52, right:"50%", translateX:"50%", ease:Sine.easeInOut}, "endScreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.from("#text2", 0.5, {x:-300, ease:Sine.easeOut}, "+=0.2")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "+=0.3")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "+=0.2")
    masterTL.fromTo("#ctaRight", 0.3, {x:-30, opacity:0}, {x:0, opacity:1, ease:Back.easeOut})
    masterTL.from("#sticker", 0.5, {scale:0, rotation:-360, ease:Back.easeOut}, "+=0.4")

    masterTL.play();
}