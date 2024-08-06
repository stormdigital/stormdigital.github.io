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
        // if(masterTL.progress() < 0.9){
        //     gsap.set("#logo", {left:335, x:0, xPercent:0});
        // }
        gsap.set("#date1", {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        // if(masterTL.progress() < 0.9){
        //     gsap.set("#logo", {left:"50%", xPercent:-50, x:-screenW/2 });
        // }
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date1", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        // if(masterTL.progress() < 0.9){
        //     gsap.set("#logo", {left:35, x:0, xPercent:0});
        // }
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start")

    masterTL.from("#text1", 2, {scale:0.8, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 1, {opacity:0, ease:Sine.easeOut}, "start")

    masterTL.to(["#text1", "#brandLogo"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3")

    masterTL.from("#date1", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#productBg", 0.5, {x:200, opacity:0, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.5, {x:"25%", ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.4")
    masterTL.from("#product1Large", 1, {x:"25%", ease:Power2.easeOut}, "start+=3.5")
    masterTL.from("#product1Large", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.6")
    
    masterTL.to("#product1Wrapper", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=8")
    masterTL.to("#productBg", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=8")
    masterTL.to("#product1Large", 0.15, {opacity:0, ease:Sine.easeIn}, "start+=8")
    masterTL.to("#date1", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=8")

    masterTL.from("#text2", 2, {scale:0.8, ease:Sine.easeOut}, "start+=8.3")
    masterTL.from("#text2", 1, {opacity:0, ease:Sine.easeOut}, "start+=8.3")
    masterTL.to("#logo", 0.3, {opacity:0}, "start+=8.5")
    masterTL.from("#logo2", 0.3, {opacity:0}, "start+=8.5")

    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=9");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=9.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=10.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=10.2");
    
    masterTL.to("#ctaRight", 0.1, {opacity:1}, "start+=15");
   
    masterTL.play();
}

