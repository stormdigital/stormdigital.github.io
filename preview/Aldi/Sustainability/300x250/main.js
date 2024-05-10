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
    masterTL.from("#bg", 5, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#bgBorder", 0.5, {scale:1.4, y:25, ease:Sine.easeOut}, "start+=1")
    masterTL.from("#text1", 0.5, {y:100, ease:Sine.easeOut}, "start+=1.3")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.7")
    
    masterTL.to("#bgBorder", 0.5, {scale:0, ease:Sine.easeIn}, "start+=3")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {y:-98, ease:Sine.easeInOut}, "start+=3.25")
    masterTL.from("#text2", 0.5, {y:98, ease:Sine.easeInOut}, "start+=3.25")
    masterTL.to("#bg", 0.1, {opacity:0, ease:Sine.easeOut}, "start+=3.4")
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=6")
    masterTL.from("#sticker1", 1, {scale:2, rotation:15, ease:Power4.easeOut}, "start+=6.5")
    masterTL.from("#sticker1", 0.2, {opacity:0, ease:Sine.easeIn}, "start+=6.5")
    masterTL.from("#sticker2", 1, {scale:2, rotation:-10, ease:Power4.easeOut}, "start+=6.8")
    masterTL.from("#sticker2", 0.2, {opacity:0, ease:Sine.easeIn}, "start+=6.8")
    masterTL.to(["#sticker1", "#sticker2", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=9")

    masterTL.from("#text3", 0.5, {y:200, ease:Sine.easeOut}, "start+=9.5")
    masterTL.from("#text3HighlightWrapper", 0.5, {width:0, y:200, ease:Sine.easeOut}, "start+=9.5")
    masterTL.to(["#text3", "#text3HighlightWrapper", "#logo"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=11.5")

    masterTL.add("endScreen")
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#tag", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.3")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=1.7");

    masterTL.play();
}