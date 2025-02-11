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
    masterTL.add("intro")
    masterTL.from("#bg", 2, {scale:1.1, ease:Sine.easeOut}, "intro");
    masterTL.from("#cow", 2, {scale:1.3, ease:Sine.easeOut}, "intro");
    masterTL.from("#product", 2, {scale:1.8, ease:Sine.easeOut}, "intro");
    masterTL.to("#bg", 2, {x:-40, ease:Sine.easeInOut}, "intro+=1");
    masterTL.to("#cow", 2, {x:-53, ease:Sine.easeInOut}, "intro+=1");
    masterTL.to("#product", 2, {x:-65, ease:Sine.easeInOut}, "intro+=1");
    
    masterTL.add("start", "-=0.8");
    masterTL.from("#darken", 1, {opacity:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-55, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:60, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.to("#introWrapper", 0.8, {scale:0.28, x:-75, y:-99, ease:"Sine.inOut"}, "start+=3.5");
    masterTL.from("#topBlock", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.7");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#topBlock", 0.15, {y:-10, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    
    masterTL.add("showText1", "-=0.3");
    masterTL.from("#text1A", 0.5, {opacity:0, ease:Sine.easeOut}, "showText1");
    masterTL.from("#text1B", 0.5, {opacity:0, x:-20, ease:Sine.easeOut}, "showText1+=0.4");
    masterTL.to("#text1A", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "showText1+=1");
    masterTL.to(["#text1A", "#text1B"], 0.3, {opacity:0, ease:Sine.easeOut}, "showText1+=2.5");
    
    masterTL.add("showUSP1", "-=0.3");
    masterTL.from("#usp1", 1, {scale:0, rotation:45, ease:Back.easeOut}, "showUSP1");
    masterTL.from("#arrow1", 0.5, {opacity:0, x:-20, y:20, ease:Sine.easeOut}, "showUSP1+=0.5");
    masterTL.to(["#usp1", "#arrow1"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=2");
    masterTL.to("#arrow1", 0.001, {x:-20, y:20}, "showUSP1+=2.3");
    masterTL.from("#usp2", 1, {scale:0, rotation:45, ease:Back.easeOut}, "showUSP1+=2");
    masterTL.to("#arrow1", 0.5, {opacity:1, x:0, y:0, ease:Sine.easeOut}, "showUSP1+=2.31");
    masterTL.to(["#usp2", "#arrow1"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=4");
    masterTL.to("#arrow1", 0.001, {x:-20, y:20}, "showUSP1+=4.3");
    masterTL.from("#usp3", 1, {scale:0, rotation:45, ease:Back.easeOut}, "showUSP1+=4");
    masterTL.to("#arrow1", 0.5, {opacity:1, x:0, y:0, ease:Sine.easeOut}, "showUSP1+=4.31");
    masterTL.to(["#usp3", "#arrow1"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=6");
    masterTL.to("#arrow1", 0.001, {x:-20, y:20}, "showUSP1+=6.3");
    masterTL.from("#sticker", 0.5, {opacity:0, ease:Sine.easeInOut}, "showUSP1+=6");
    masterTL.to("#arrow1", 0.5, {opacity:1, x:0, y:0, ease:Sine.easeOut}, "showUSP1+=6.31");
    masterTL.to(["#sticker", "#arrow1"], 0.3, {opacity:0, ease:Sine.easeOut}, "showUSP1+=8");
    
    masterTL.add("endScreen", "-=0.5");
    masterTL.to(["#bg", "#cow", "#product"], 0.5, {'-webkit-filter':'blur(3px)','filter':'blur(3px)', ease:Sine.easeInOut}, "endScreen");
    masterTL.from("#darkBg", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen");
    masterTL.to("#logo", 0.5, {width:50, y:-112, ease:Sine.easeInOut}, "endScreen+=0.3");
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen+=0.6");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endScreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endScreen+=1.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endScreen+=1.5");
 
    masterTL.play();
}