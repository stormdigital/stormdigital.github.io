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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#bgBorder", 0.5, {scale:1.4, y:25, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:100, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.2")

    masterTL.add("showFrame2", 3)
    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-250, ease:Sine.easeIn}, "showFrame2+=1")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {y:-98, ease:Sine.easeInOut}, "showFrame2+=1.25")
    masterTL.from("#text2", 0.5, {y:98, ease:Sine.easeInOut}, "showFrame2+=1.25")
    masterTL.to("#bg", 0.1, {opacity:0, ease:Sine.easeOut}, "showFrame2+=1.4")
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=4")
    masterTL.from("#sticker1", 1, {scale:2, rotation:15, ease:Power4.easeOut}, "showFrame2+=4.5")
    masterTL.from("#sticker1", 0.2, {opacity:0, ease:Sine.easeIn}, "showFrame2+=4.5")
    masterTL.from("#sticker2", 1, {scale:2, rotation:-10, ease:Power4.easeOut}, "showFrame2+=4.8")
    masterTL.from("#sticker2", 0.2, {opacity:0, ease:Sine.easeIn}, "showFrame2+=4.8")
    masterTL.to(["#sticker1", "#sticker2", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "showFrame2+=6.7")

    masterTL.add("showFrame3")

    masterTL.from("#text3", 0.5, {y:200, ease:Sine.easeOut}, "showFrame3+=0.5")
    masterTL.from("#text3HighlightWrapper", 0.5, {width:0, y:200, ease:Sine.easeOut}, "showFrame3+=0.5")
    masterTL.to(["#text3", "#text3HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "showFrame3+=2.5")
    masterTL.to("#logo", 0.5, {scale:1.35714285714, left:122, ease:Sine.easeInOut}, "showFrame3+=2.5")

    masterTL.add("endScreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")

    masterTL.to("#tagWrapper", 0.0001, {width:37, ease:Sine.easeOut}, "endscreen+=0.1")
    masterTL.to("#tagWrapper", 0.0001, {width:57, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.to("#tagWrapper", 0.0001, {width:73, ease:Sine.easeOut}, "endscreen+=0.3")
    masterTL.to("#tagWrapper", 0.0001, {width:81, ease:Sine.easeOut}, "endscreen+=0.4")
    masterTL.to("#tagWrapper", 0.0001, {width:97, ease:Sine.easeOut}, "endscreen+=0.6")
    masterTL.to("#tagWrapper", 0.0001, {width:116, ease:Sine.easeOut}, "endscreen+=0.65")
    masterTL.to("#tagWrapper", 0.0001, {width:135, ease:Sine.easeOut}, "endscreen+=0.7")
    masterTL.to("#tagWrapper", 0.0001, {width:153, ease:Sine.easeOut}, "endscreen+=0.85")
    masterTL.to("#tagWrapper", 0.0001, {width:167, ease:Sine.easeOut}, "endscreen+=0.9")
    masterTL.to("#tagWrapper", 0.0001, {width:191, ease:Sine.easeOut}, "endscreen+=1.0")
    masterTL.to("#tagWrapper", 0.0001, {width:208, ease:Sine.easeOut}, "endscreen+=1.05")
    masterTL.to("#tagWrapper", 0.0001, {width:225, ease:Sine.easeOut}, "endscreen+=1.2")
    masterTL.to("#tagWrapper", 0.0001, {width:243, ease:Sine.easeOut}, "endscreen+=1.3")
    masterTL.to("#tagWrapper", 0.0001, {width:258, ease:Sine.easeOut}, "endscreen+=1.35")
    masterTL.to("#tagWrapper", 0.0001, {width:276, ease:Sine.easeOut}, "endscreen+=1.5")
    masterTL.to("#tagWrapper", 0.0001, {width:300, ease:Sine.easeOut}, "endscreen+=1.6")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=1.7");

    masterTL.play();
}