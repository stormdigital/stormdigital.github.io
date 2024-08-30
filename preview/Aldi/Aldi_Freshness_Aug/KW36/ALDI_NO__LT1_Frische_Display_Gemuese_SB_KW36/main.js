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
        gsap.set("#date", {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.fromTo("#bgWrapper", 1.3, {scale:1.66, y:389, x:-9}, {scale:1, x:0, y:0, ease:Power2.easeInOut})
    masterTL.from("#storeWrapper", 3, {height:0, ease:Sine.easeInOut}, "-=3")

    masterTL.add("showText1", "-=0")
    masterTL.from("#text1", 0.3, {opacity:0, y:30, ease:Sine.easeOut}, "showText1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "showText1+=0.5")
    masterTL.from("#sticker", 0.5, {scale:0, rotation:360, ease:Back.easeOut}, "showText1+=1")
    
    masterTL.from("#productColorBg", 0.5, {width:0, ease:Circ.easeInOut}, "+=1.5")
    masterTL.from("#date", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0")
    masterTL.from("#price1", 0.75, {x:1200, ease:Sine.easeOut}, "-=0.1")
    masterTL.from("#product1", 0.6, {x:1200, ease:Sine.easeOut}, "-=0.6")
    masterTL.to("#price1", 0.75, {x:-1200, ease:Sine.easeIn}, "+=2")
    masterTL.to("#product1", 0.6, {x:-1200, ease:Sine.easeIn}, "-=0.75")

    masterTL.from("#price2", 0.75, {x:1200, ease:Sine.easeOut}, "-=0")
    masterTL.from("#product2", 0.6, {x:1200, ease:Sine.easeOut}, "-=0.6")
    masterTL.to("#price2", 0.75, {x:-1200, ease:Sine.easeIn}, "+=2")
    masterTL.to("#product2", 0.6, {x:-1200, ease:Sine.easeIn}, "-=0.75")
    masterTL.to("#date", 0.3, {opacity:0, ease:Sine.easeIn}, "-=1")
    
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "-=0.5")
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "-=0.5")
    masterTL.from("#tagline", 0.5, {opacity:0, y:-20, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#text2", 0.3, {opacity:0, y:30, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "+=0.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "+=0");
    masterTL.from(["#ctaRight", "#ctaArrow"], 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");
    masterTL.from(["#ctaRight", "#ctaArrow"], 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    masterTL.to("#ctaArrow", 0.2, {x:6, repeat:5, yoyo:true, ease:Sine.easeInOut}, "+=0.2");
       
    masterTL.play();
}