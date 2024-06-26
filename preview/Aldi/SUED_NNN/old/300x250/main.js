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
    masterTL.fromTo("#bgWrapper", 12, {x:-350}, {x:-870, ease:Sine.easeOut}, "start");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-55, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:60, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.to("#topText", 0.5, {opacity:0}, "start+=3.5");
    masterTL.to("#topBlock", 0.5, {width:47, height:43, ease:Sine.easeOut}, "start+=3.5");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#introWrapper", 0.8, {scale:0.29, ease:Power3.easeInOut}, "start+=3.5");
    masterTL.to("#introWrapper", 0.8, {y:-99, ease:"back.inOut(3)"}, "start+=3.5");
    masterTL.to("#topBlock", 0.15, {y:-10, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=4.3");
    masterTL.to("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=7");
    masterTL.from("#naturland", 0.8, {x:-120, ease:Power1.easeOut}, "start+=7.5");
    masterTL.to("#naturland", 0.5, {opacity:0, ease:Power1.easeIn}, "start+=10");
    masterTL.from("#leafs2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=10.4");
    masterTL.from("#text2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=10.6");
    masterTL.to(["#leafs2", "#text2"], 0.4, {opacity:0, ease:Power1.easeIn}, "start+=13.4");
    masterTL.from("#purpleBg", 0.4, {opacity:0, ease:Power1.easeOut}, "start+=13.4");
    masterTL.to("#border", 0.4, {borderColor:"#ada0d6", ease:Power1.easeOut}, "start+=13.4");
    masterTL.to("#logo", 0.5, {width:50, y:-112, ease:Sine.easeInOut}, "start+=13.8");
    masterTL.from("#endText", 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=14");
    masterTL.from("#ctaWrapper", 0.5, {scale:0, ease:Back.easeOut}, "start+=14.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.7");

    masterTL.to("#butterFlyWrapper", 3.5, {x:-70, y:-120, rotation:-50, ease:Power0.easeNone}, "start+=3");
    masterTL.to("#butterFlyWrapper2", 4, {x:-195, y:-60, rotation:-90, ease:Power0.easeNone}, "start+=3.2");
    masterTL.to("#bumblebeeWrapper", 2, {rotation:45, ease:Power0.easeNone}, "start+=12");
    masterTL.to("#bumblebee", 2, {rotation:-40, scale:0.8, ease:Power0.easeNone}, "start+=12");
    masterTL.to("#bumblebee", 0.5, {y:-20, ease:Sine.easeInOut}, "start+=12");
    masterTL.to("#bumblebee", 0.3, {y:0, ease:Sine.easeInOut}, "start+=12.5");
    masterTL.to("#bumblebee", 0.7, {y:-100, ease:Sine.easeInOut}, "start+=12.8");
    masterTL.to("#bumblebee", 0.5, {y:-120, ease:Sine.easeInOut}, "start+=13.5");
    
    masterTL.play();
    
    butterFlyTL = gsap.timeline({repeat:50, yoyo:true});
    butterFlyTL.add("start")
    butterFlyTL.to("#wingL", 0.3, {rotationY:70}, "start");
    butterFlyTL.to("#wingR", 0.3, {rotationY:70}, "start");
    butterFlyTL.to(["#base", "#wingL", "#wingR"], 0.3, {y:-3}, "start");
    butterFlyTL.play();
    
    butterFlyTL2 = gsap.timeline({repeat:60, yoyo:true});
    butterFlyTL2.add("start")
    butterFlyTL2.from("#wingL2", 0.25, {rotationY:70}, "start");
    butterFlyTL2.from("#wingR2", 0.25, {rotationY:70}, "start");
    butterFlyTL2.from(["#base2", "#wingL2", "#wingR2"], 0.25, {y:-3}, "start");
    butterFlyTL2.play();
}