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
    
    masterTL.from("#text1A", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#text1B", 0.3, {opacity:0, ease:Sine.easeOut},"+=0.1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")
    
    masterTL.to("#text1A", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1.5")
    masterTL.to(["#text1B", "#highlight1Wrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")

    masterTL.from("#text2A", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#highlight2AWrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")
    masterTL.from("#text2B", 0.3, {opacity:0, ease:Sine.easeOut},"+=0.2")
    masterTL.from("#highlight2BWrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")
    masterTL.from("#text2C", 0.3, {opacity:0, ease:Sine.easeOut},"+=0.3")
    masterTL.from("#text2D", 0.3, {opacity:0, ease:Sine.easeOut},"+=0.7")

    masterTL.to(["#text2A", "#highlight2AWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "+=1.5")
    masterTL.to(["#text2B", "#highlight2BWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    masterTL.to("#text2C", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    masterTL.to("#text2D", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")

    masterTL.to("#stickerOverlayWrapper", 1.5, {y:-318, ease:Power0.easeNone});
    masterTL.from("#stickerOverlayWrapper", 0.5, {scale:1.2, ease:Power4.easeOut}, "-=1.5");
    masterTL.to("#stickerOverlay", 1, {y:110, ease:Power0.easeNone}, "-=1");
    masterTL.from("#stickerWrapper", 1, {height:0, ease:Power0.easeNone}, "-=0.9");
    masterTL.to("#gradient", 2, {x:"400%", ease:Sine.easeInOut}, "+=0.5");
    masterTL.to("#gradient", 1, {opacity:0.5, yoyo:true, repeat:1, ease:Sine.easeInOut}, "-=2");
    
    masterTL.to("#stickerWrapper", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0");
    
    masterTL.to("#logo", 1, {scale:1, left:"50%", translateX:"-50%", y:8, ease:Sine.easeInOut});
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.1");
    masterTL.from("#text3", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.from("#highlight3Wrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")

    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    
    masterTL.play();

    gsap.from("#bg", masterTL.duration(), {scale:1.2, ease:Power0.easeNone});
}