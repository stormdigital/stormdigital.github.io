myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});
            
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
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
        gsap.set("#extraScaler", {scale:newScale*bannerS});
        gsap.set("#logo", {x:-300});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#logo", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut})
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeInOut})
    
    masterTL.to(["#text1", "#highlight1Wrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=2.5")
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut})
    
    masterTL.to(["#text2", "#logo"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=2.5")
    masterTL.to("#bg", 0.5, {filter:"blur(10px)", ease:Sine.easeInOut}, "-=0.3")
    masterTL.from(["#tagline", "#logo2"], 0.3, {opacity:0, ease:Sine.easeInOut})
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    
    masterTL.to("#cta", 0.25, {scale:1.1, repeat:1, yoyo:true, ease:Back.easeOut}, 9.5)
    
    gsap.from("#bg", 20, {scale:1.1, ease:Sine.easeInOut});
       
    masterTL.play();
}