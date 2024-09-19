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
        gsap.set("#logoBarissimo", {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#logoBarissimo", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#extraScaler", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#bg", 3, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#gradient", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1", 0.5, {y:300, ease:Back.easeOut}, "start+=0.8")

    masterTL.to("#logoBarissimo", 0.7, {opacity:0, ease:Back.easeInOut}, "start+=2.5")
    
    masterTL.from("#contentRight", 1, {y:600, ease:Sine.easeInOut}, "start+=3")
    masterTL.to("#bg", 1, {y:-127, ease:Sine.easeInOut}, "start+=3")
    masterTL.to("#text1", 1, {y:-490, ease:Sine.easeInOut}, "start+=3")
    
    masterTL.to("#contentRight", 1, {scale:2.25, y:-300, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#bg", 1, {y:-600, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#text1", 1, {y:-1200, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#product", 3, {scale:2.2, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.set(["#bg", "#gradient", "#text1"], {opacity:0}, "start+=5.5")
    
    masterTL.to("#contentRight", 1, {scale:1, height:1200, x:0, y:0, ease:Sine.easeInOut}, "start+=7.5")
    masterTL.to("#product", 1, {x:-600, scale:1, ease:Sine.easeInOut}, "start+=7.5")
    masterTL.from("#price", 0.5, {scale:0, ease:Back.easeOut}, "start+=8.5")
    
    masterTL.from("#sticker", 0.5, {scale:0, rotation:360, ease:Back.easeOut}, "start+=9")
    
    masterTL.to(["#sticker", "#product", "#price"], 0.5, {opacity:0, ease:Power1.easeIn}, "start+=11")
    
    masterTL.to("#logo", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.5")
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.7")
    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=12")
    masterTL.from("#logoBarissimo2", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=12.25")
    masterTL.from("#text2", 0.5, {y:700, ease:Back.easeOut}, "start+=12.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=13");
    masterTL.from("#ctaRight", 0.0001, {opacity:0}, "start+=13.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=13.7");
    
    masterTL.play();
}