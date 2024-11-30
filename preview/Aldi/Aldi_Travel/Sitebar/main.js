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
        masterTL.progress(1).pause();
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
        gsap.set(["#logo"], {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set(["#logo"], {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    gsap.set("#bluePanel", {height: 111});

    masterTL = gsap.timeline({paused:true, repeat:1});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:999999})
    }}, 0)    
    masterTL.from("#travelLogo", 0.5, {x:-250, ease:Sine.easeOut}, 0.5)    
    masterTL.from("#hand", 0.5, {opacity:0, ease:Sine.easeOut}, 1)    
    
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0.3")
    masterTL.from("#destination", 1, {y:200, ease:Power2.easeOut}, "+=0")    
    
    masterTL.from("#price", 0.5, {scale:0, ease:Back.easeOut}, "+=0")   
    
    masterTL.to(["#text1", "#destWrapper", "#hand", "#price"], 0.3, {opacity:0, ease:Sine.easeOut}, "+=2")

    masterTL.from(["#bluePanel", "#usp1"], 0.75, {scale:0, ease:Back.easeOut}, "+=0")
    masterTL.to("#bluePanel", 0.3, {height:190, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp2", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0")
    masterTL.to("#bluePanel", 0.3, {height:274, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp3", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0.1")
    masterTL.to("#bluePanel", 0.3, {height:351, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp4", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0.1")

    masterTL.from("#sticker", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0.1")

    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3")
    masterTL.from("#ctaRight", 0.00001, {opacity:0}, "+=0")
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "+=0")

    masterTL.to("#banner", 0.5, {}, "14.5")

    masterTL.play();

}