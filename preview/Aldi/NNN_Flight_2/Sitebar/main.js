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
        gsap.set("#border", {width:"47.5%", left:"50%", x:"-50%"});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#border", {width:bannerW*((1/bannerS)*0.95), left:"50%", x:"-50%"});
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
    masterTL.fromTo("#bgWrapper", 6, {x:0}, {x:-188, ease:Sine.easeOut}, "start");
    masterTL.from("#nurNurWrapper", 1, {width:0, ease:Sine.easeInOut}, "start+=0.5");
    masterTL.from("#tagline", 0.5, {scale:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#tagline", 0.7, {y:-70, ease:Back.easeOut}, "start+=0.8");
    masterTL.from("#naturText", 0.7, {y:-200, rotation:-30, ease: "back.out(2)"}, "start+=0.8");
    masterTL.from("#leafsContainer", 1, {y:100, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#leafs", 1.5, {rotation:60, ease: "back.inOut(5)"}, "start+=0.8");
    masterTL.from("#topBlock", 0.5, {scale:0, ease:Sine.easeOut}, "start+=3.5");
    masterTL.to("#tagline", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7");
    masterTL.to("#introWrapper", 0.8, {scale:0.29, ease:Power3.easeInOut}, "start+=3.5");
    masterTL.to("#introWrapper", 0.8, {y:-603, ease:"back.inOut(3)"}, "start+=3.5");
    masterTL.to("#topBlock", 0.15, {y:-35, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4");
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=4");
    masterTL.to("#text1", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=6");
    
    masterTL.from("#proof1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=6.5");
    masterTL.to("#proof1", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=8.8");
    
    masterTL.from("#proof2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=8.9");
    masterTL.to("#proof2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.2");

    masterTL.from("#proof3", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=11.3");
    masterTL.to("#proof3", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=13");

    masterTL.to("#bgWrapper", 0.5, {'-webkit-filter':'blur(10px)','filter':'blur(10px)', ease:Sine.easeInOut}, "start+=13");
    masterTL.to("#logo", 0.5, {width:146, y:-582, ease:Sine.easeInOut}, "start+=13.2");
    masterTL.from("#endText", 0.5, {opacity:0, y:20, ease:Sine.easeInOut}, "start+=13.5");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=14");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=14.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.5");
 
    masterTL.play();
    
    masterTL.play();
}