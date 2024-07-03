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
        // masterTL.progress(1);
        masterTL.pause();
    })
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:335, x:0, xPercent:0});
        }
    }
    else if(bannerW < scalerW){
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:"50%", xPercent:-50, x:-screenW/2 });
        }
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:35, x:0, xPercent:0});
        }
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#flyerLeft", 3.5, {rotationY:90, ease: "back.out(2)",}, "start+=0.5")
    masterTL.from("#gradientLeft", 0.3, {opacity:0}, "start+=0.7")
    masterTL.to("#gradientLeft", 1.7, {left:"-40%", ease:Power3.easeInOut}, "start+=0.3")
    masterTL.to("#gradientLeft", 0.3, {opacity:0}, "start+=1")
    masterTL.from("#flyerRight", 3.45, {rotationY:-90, ease: "back.out(1)",}, "start+=0.6")
    masterTL.from("#gradientRight", 0.3, {opacity:0}, "start+=0.7")
    masterTL.to("#gradientRight", 1.8, {left:"95%", ease:Power3.easeInOut}, "start+=0.3")
    masterTL.to("#gradientRight", 0.3, {opacity:0}, "start+=1.1")
    
    masterTL.from("#text1", 0.5, {x:1200, ease:Sine.easeOut}, "start+=1");
    masterTL.from("#highlightWrapper1", 0.5, {width:0, ease:Sine.easeInOut}, "start+=2");
    masterTL.to(["#text1", "#highlightWrapper1"], 0.3, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=2.7")
    masterTL.to(["#text1", "#highlightWrapper1"], 0.5, {x:-1200, ease:Sine.easeIn}, "start+=4")
    
    masterTL.from("#text2", 0.5, {x:1200, ease:Sine.easeOut}, "start+=4.3");
    masterTL.from("#highlightWrapper2", 0.5, {width:0, ease:Sine.easeInOut}, "start+=5.3");
    masterTL.to(["#text2", "#highlightWrapper2"], 0.3, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=6")
    masterTL.from("#blueBg", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=8")

    masterTL.from("#icon1", 0.5, {scale:0, ease:Back.easeOut}, "start+=8.5")
    masterTL.from("#icon2", 0.5, {scale:0, ease:Back.easeOut}, "start+=8.7")
    masterTL.from("#icon3", 0.5, {scale:0, ease:Back.easeOut}, "start+=8.9")
    masterTL.from("#icon4", 0.5, {scale:0, ease:Back.easeOut}, "start+=9.1")

    masterTL.from("#text3", 0.5, {x:1200, ease:Sine.easeOut}, "start+=9");
    masterTL.from("#highlightWrapper3", 0.5, {width:0, ease:Sine.easeInOut}, "start+=10");

    masterTL.to("#icon1", 0.5, {scale:0, ease:Back.easeIn}, "start+=12")
    masterTL.to("#icon2", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.2")
    masterTL.to("#icon3", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.4")
    masterTL.to("#icon4", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.6")
    
    masterTL.to(["#text3", "#highlightWrapper3"], 0.5, {y:-150, ease:Sine.easeInOut}, "start+=13")
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=13")
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=13.5")
    
    masterTL.from("#tagline", 0.5, {opacity:0, y:-10, ease:Back.easeOut}, "start+=13.5")

    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=14");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=14.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.7");
 
    masterTL.play();
}