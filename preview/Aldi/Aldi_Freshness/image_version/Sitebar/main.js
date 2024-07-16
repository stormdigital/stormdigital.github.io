myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

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
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set(["#scaler", "#extraScaler"], {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#text1A", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#text1B", 0.3, {opacity:0, ease:Sine.easeOut},"+=0.1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")
    
    masterTL.to("#text1A", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1")
    masterTL.to(["#text1B", "#highlight1Wrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")

    masterTL.from("#text2A", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#text2B", 0.3, {opacity:0, ease:Sine.easeOut},"-=0.1")
    masterTL.from("#text2C", 0.3, {opacity:0, ease:Sine.easeOut},"-=0.1")
    masterTL.from("#text2D", 0.3, {opacity:0, ease:Sine.easeOut},"-=0.1")
    masterTL.from("#text2E", 0.3, {opacity:0, ease:Sine.easeOut},"-=0.1")
    masterTL.from("#highlight2AWrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")
    masterTL.from("#highlight2BWrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")

    masterTL.to(["#text2A", "#highlight2AWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "+=1.5")
    masterTL.to(["#text2B", "#highlight2BWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    masterTL.to("#text2C", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    masterTL.to("#text2D", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    masterTL.to("#text2E", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")

    masterTL.to("#stickerOverlayWrapper", 0.75, {y:-700, ease:Power0.easeNone});
    masterTL.from("#stickerOverlayWrapper", 0.4, {scale:1.2, opacity:0, ease:Power4.easeOut}, "-=0.75");
    masterTL.to("#stickerOverlay", 0.5, {y:310, ease:Power0.easeNone}, "-=0.5");
    masterTL.from("#stickerWrapper", 0.5, {height:0, ease:Power0.easeNone}, "-=0.6");
    masterTL.to("#gradient", 1, {x:"400%", ease:Sine.easeInOut}, "+=0.2");
    masterTL.to("#gradient", 0.5, {opacity:0.5, yoyo:true, repeat:1, ease:Sine.easeInOut}, "-=1");
    
    masterTL.to("#stickerWrapper", 0.3, {opacity:0, ease:Sine.easeIn}, "+=0.2");
    
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut});
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "-=0.5");
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.1");
    masterTL.from("#text3a", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.from("#text3b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#highlight3Wrapper", 0.5, {width:0, ease:Sine.easeOut},"+=0.1")

    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.1");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    
    masterTL.from("#banner", 0.3, {x:0}, "+=0.35");
    
    masterTL.play();

    console.log(masterTL.duration());

    gsap.from("#bg", masterTL.duration(), {scale:1.2, ease:Power0.easeNone, repeat:1});
}