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
    masterTL.fromTo("#bgWrapper", 7, {x:-836}, {x:-1009, ease:Sine.easeInOut}, "start+=2");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-55, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:60, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.from("#topBlock", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.5");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#introWrapper", 0.8, {scale:0.29, ease:Power3.easeInOut}, "start+=3.5");
    masterTL.to("#introWrapper", 0.8, {y:-99, ease:"back.inOut(3)"}, "start+=3.5");
    masterTL.to("#topBlock", 0.15, {y:-10, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=4");
    masterTL.to("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=6");
    
    masterTL.from("#proof1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=6.5");
    masterTL.to("#proof1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=8.8");
    
    masterTL.from("#proof2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=8.9");
    masterTL.to("#proof2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.2");

    masterTL.from("#proof3", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.3");
    masterTL.to("#proof3", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=13");

    masterTL.from("#sticker", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=13.1");
    masterTL.to("#sticker", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=14.8");

    masterTL.fromTo("#bgWrapper", 0.5,{'-webkit-filter':'blur(0px) brightness(1)','filter':'blur(0px) brightness(1)'}, {'-webkit-filter':'blur(3px) brightness(0.85)','filter':'blur(3px) brightness(0.85)', ease:Sine.easeInOut}, "start+=15");
    masterTL.to("#logo", 0.5, {width:50, y:-112, ease:Sine.easeInOut}, "start+=15.2");
    masterTL.from("#endText", 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=15.5");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=16");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=16.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=16.5");
 
    masterTL.play();
}