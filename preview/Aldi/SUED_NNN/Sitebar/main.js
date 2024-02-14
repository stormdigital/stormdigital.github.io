myFT.on("ready", init);


function init() {

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

    getAnimation();
}

function onResize(){
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        console.log("middle");
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        console.log("left");
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.fromTo("#bgWrapper", 6, {x:-1250}, {x:-2400, ease:Sine.easeOut}, "start");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-200, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:100, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.to("#topText", 0.5, {opacity:0}, "start+=3.5");
    masterTL.to("#topBlock", 0.5, {width:107, height:99, ease:Sine.easeOut}, "start+=3.5");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#introWrapper", 0.8, {scale:0.29, ease:Power3.easeInOut}, "start+=3.5");
    masterTL.to("#introWrapper", 0.8, {y:-603, ease:"back.inOut(3)"}, "start+=3.5");
    masterTL.to("#topBlock", 0.15, {y:-35, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=4.3");
    masterTL.to("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=7");
    masterTL.from("#naturland", 0.8, {x:-120, opacity:0, ease:Power1.easeOut}, "start+=7.5");
    masterTL.to("#naturland", 0.5, {x:120, opacity:0, ease:Power1.easeIn}, "start+=10");
    masterTL.from("#leafs2", 0.5, {x:-120, opacity:0, ease:Sine.easeInOut}, "start+=10.4");
    masterTL.from("#text2", 0.5, {x:-120, opacity:0, ease:Sine.easeInOut}, "start+=10.6");
    masterTL.to(["#leafs2", "#text2"], 0.4, {opacity:0, ease:Power1.easeIn}, "start+=13.4");
    masterTL.from("#purpleBg", 0.4, {opacity:0, ease:Power1.easeOut}, "start+=13.4");
    masterTL.to("#border", 0.4, {borderColor:"#ada0d6", ease:Power1.easeOut}, "start+=13.4");
    masterTL.to("#logo", 0.5, {width:182, y:-574, ease:Sine.easeInOut}, "start+=13.8");
    masterTL.from("#endText", 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=14");
    masterTL.from("#ctaWrapper", 0.5, {scale:0, ease:Back.easeOut}, "start+=14.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.7");

    masterTL.to("#butterFlyWrapper2", 4, {x:-1000, y:-200, rotation:-90, ease:Power0.easeNone}, "start+=2");
    masterTL.to("#butterFlyWrapper", 3.5, {x:-200, y:-500, rotation:-50, ease:Power0.easeNone}, "start+=4");
    masterTL.to("#bumblebeeWrapper", 4, {rotation:130, ease:Power0.easeNone}, "start+=8");
    masterTL.to("#bumblebee", 4, {rotation:-120, scale:0.8, ease:Power0.easeNone}, "start+=8");
    masterTL.to("#bumblebee", 1, {y:-40, ease:Sine.easeInOut}, "start+=8");
    masterTL.to("#bumblebee", 0.6, {y:0, ease:Sine.easeInOut}, "start+=9");
    masterTL.to("#bumblebee", 1.4, {y:-200, ease:Sine.easeInOut}, "start+=9.6");
    masterTL.to("#bumblebee", 1, {y:-300, ease:Sine.easeInOut}, "start+=11");
    
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