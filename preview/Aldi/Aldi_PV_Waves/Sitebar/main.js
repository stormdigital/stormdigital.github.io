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

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, "start")
    masterTL.add(function(){animateBg()})
    masterTL.from("#text1A", 1, {x:-1200, y:100, ease:Power3.easeOut})
    masterTL.from("#text1B", 1, {x:1200, y:-100, ease:Power4.easeOut}, "-=0.6")
    masterTL.from("#text1C", 1, {x:-1200, y:100, ease:Power4.easeOut}, "-=0.6")
    masterTL.from("#text1D", 1, {x:1200, y:-100, ease:Power4.easeOut}, "-=0.6")
    masterTL.from("#arrow", 1.5, {y:-1200, ease:"back.out(1)"}, "-=0.5")
    
    masterTL.to("#arrow", 1, {y:-1200, ease:"back.in(1)"}, "+=0.5")
    masterTL.to("#text1D", 0.6, {x:1200, y:-100, ease:Power4.easeIn}, "-=0.6")
    masterTL.to("#text1C", 0.6, {x:-1200, y:100, ease:Power4.easeIn}, "-=0.4")
    masterTL.to("#text1B", 0.6, {x:1200, y:-100, ease:Power4.easeIn}, "-=0.4")
    masterTL.to("#text1A", 0.6, {x:-1200, y:100, ease:Power3.easeIn}, "-=0.4")
    
    masterTL.from("#priceBg", 0.5, {scale:0,ease:Back.easeOut})
    masterTL.from("#price1", 0.5, {scale:0,ease:Back.easeOut})
    masterTL.from("#product1", 0.5, {scale:0,ease:Back.easeOut}, "-=0.3")

    masterTL.to("#product1", 0.5, {scale:0, ease:Back.easeIn}, "+=1.5")
    masterTL.to("#price1", 0.5, {scale:0, ease:Back.easeIn}, "-=0.4")
    
    masterTL.from("#price2", 0.5, {scale:0,ease:Back.easeOut})
    masterTL.from("#product2", 0.5, {scale:0,ease:Back.easeOut}, "-=0.3")

    masterTL.to("#product2", 0.5, {scale:0, ease:Back.easeIn}, "+=1.5")
    masterTL.to("#price2", 0.5, {scale:0, ease:Back.easeIn}, "-=0.4")
    masterTL.to("#priceBg", 0.3, {scale:0, ease:Back.easeIn}, "-=0.2")
    
    masterTL.add("endScreen")
    masterTL.from("#darken", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut});
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut});
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeInOut});
    masterTL.from("#sticker", 0.5, {scale:0, rotation:360, ease:Back.easeOut});
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut});

    masterTL.play();

    console.log(masterTL.duration());
}

function animateBg(){
    var tl = gsap.timeline({});
    tl.to("#bg", 15, {rotation:90, ease:Power0.easeNone})
}