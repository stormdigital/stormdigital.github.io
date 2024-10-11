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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bgBorder", 0.5, {scale:3, y:200, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:500, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.2")

    masterTL.add("showFrame2", 3)
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {y:-98, opacity:0, ease:Sine.easeInOut}, "showFrame2+=1")
    masterTL.from("#date", 0.5, {opacity:0, ease:Sine.easeOut}, "showFrame2+=1.3")
    masterTL.from("#text2", 0.5, {y:1000, ease:Sine.easeOut}, "showFrame2+=1.5")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showFrame2+=2.2")
    masterTL.to(["#text2", "#text2HighlightWrapper", "#date"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=4.5")

    masterTL.add("showStickerFrame")
    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-1000, ease:Sine.easeIn}, "showFrame3")
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "showStickerFrame")
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "showStickerFrame+=0.5")
    masterTL.from("#sticker", 0.5, {y:1000, ease:Sine.easeOut}, "showStickerFrame+=1")
    masterTL.from("#sticker2", 0.5, {y:1000, ease:Sine.easeOut}, "showStickerFrame+=1.2")
    masterTL.to(["#text1", "#text1HighlightWrapper", "#sticker", "#sticker2"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showStickerFrame+=4.5")

    masterTL.add("showFrame3")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "showFrame3")
    masterTL.from("#text3White", 0.5, {y:1000, ease:Sine.easeOut}, "showFrame3")
    masterTL.from(["#text3HighlightWrapper", "#text4HighlightWrapper"], 0.5, {width:0, ease:Sine.easeOut}, "showFrame3+=0.7")

    masterTL.add("endScreen")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.7");
 
    masterTL.play();

    console.log(masterTL.duration());
   
}