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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bgBorder", 0.5, {scale:3, y:200, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:500, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.2")

    masterTL.add("showFrame2", 1.5)
    masterTL.from("#text2", 0.5, {y:200, ease:Sine.easeInOut}, "showFrame2+=1.25")
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=4")
    masterTL.from("#sticker1", 1, {scale:2, rotation:15, ease:Power4.easeOut}, "showFrame2+=4.5")
    masterTL.from("#sticker1", 0.2, {opacity:0, ease:Sine.easeIn}, "showFrame2+=4.5")
    masterTL.from("#sticker2", 1, {scale:2, rotation:-10, ease:Power4.easeOut}, "showFrame2+=4.8")
    masterTL.from("#sticker2", 0.2, {opacity:0, ease:Sine.easeIn}, "showFrame2+=4.8")
    masterTL.to(["#sticker1", "#sticker2", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "showFrame2+=6.7")

    masterTL.add("showFrame3")

    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-1200, ease:Sine.easeIn}, "showFrame3")
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "showFrame3")

    masterTL.add("endScreen", "+=0.3")
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")

    masterTL.from("#text3", 1, {y:1000, ease:Sine.easeOut}, "endScreen+=0.3")
    masterTL.from("#text3HighlightWrapper", 1, {width:0, y:1000, ease:Sine.easeOut}, "endScreen+=0.3")

    masterTL.to("#tagWrapper", 0.0001, {width:421, ease:Sine.easeOut}, "endscreen+=2.1")
    masterTL.to("#tagWrapper", 0.0001, {width:452, ease:Sine.easeOut}, "endscreen+=2.2")
    masterTL.to("#tagWrapper", 0.0001, {width:480, ease:Sine.easeOut}, "endscreen+=2.3")
    masterTL.to("#tagWrapper", 0.0001, {width:492, ease:Sine.easeOut}, "endscreen+=2.4")
    masterTL.to("#tagWrapper", 0.0001, {width:515, ease:Sine.easeOut}, "endscreen+=2.6")
    masterTL.to("#tagWrapper", 0.0001, {width:540, ease:Sine.easeOut}, "endscreen+=2.65")
    masterTL.to("#tagWrapper", 0.0001, {width:574, ease:Sine.easeOut}, "endscreen+=2.7")
    masterTL.to("#tagWrapper", 0.0001, {width:605, ease:Sine.easeOut}, "endscreen+=2.85")
    masterTL.to("#tagWrapper", 0.0001, {width:625, ease:Sine.easeOut}, "endscreen+=2.9")
    masterTL.to("#tagWrapper", 0.0001, {width:665, ease:Sine.easeOut}, "endscreen+=3.0")
    masterTL.to("#tagWrapper", 0.0001, {width:693, ease:Sine.easeOut}, "endscreen+=3.05")
    masterTL.to("#tagWrapper", 0.0001, {width:721, ease:Sine.easeOut}, "endscreen+=3.2")
    masterTL.to("#tagWrapper", 0.0001, {width:750, ease:Sine.easeOut}, "endscreen+=3.3")
    masterTL.to("#tagWrapper", 0.0001, {width:774, ease:Sine.easeOut}, "endscreen+=3.35")
    masterTL.to("#tagWrapper", 0.0001, {width:800, ease:Sine.easeOut}, "endscreen+=3.5")
    masterTL.to("#tagWrapper", 0.0001, {width:830, ease:Sine.easeOut}, "endscreen+=3.6")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=4");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=4.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=4.7");
 
    masterTL.play();

    console.log(masterTL.duration());
   
}