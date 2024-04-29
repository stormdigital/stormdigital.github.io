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
        masterTL.pause();
        // masterTL.progress(1);
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
    masterTL.from("#headline", 2, {scale:0.8, ease:Sine.easeOut}, "start")
    masterTL.from("#headline", 1, {opacity:0, ease:Sine.easeOut}, "start")
    
    masterTL.from("#product1", 1, {scale:4, ease:Power2.easeIn}, "start+=1")
    masterTL.from("#shadow1", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=1")
    masterTL.from("#product1", 0.75, {opacity:0, 'filter': 'blur(5px)', ease:Power4.easeOut}, "start+=1")
    
    masterTL.from("#product4", 1, {scale:4, ease:Power2.easeIn}, "start+=1.6")
    masterTL.from("#shadow4", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=1.6")
    masterTL.from("#product4", 0.75, {opacity:0, 'filter': 'blur(5px)', ease:Power4.easeOut}, "start+=1.6")

    masterTL.from("#product2", 1, {scale:4, ease:Power2.easeIn}, "start+=2.2")
    masterTL.from("#shadow2", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=2.2")
    masterTL.from("#product2", 0.75, {opacity:0, 'filter': 'blur(5px)', ease:Power4.easeOut}, "start+=2.2")
    
    masterTL.from("#product5", 1, {scale:4, ease:Power2.easeIn}, "start+=2.8")
    masterTL.from("#shadow5", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=2.8")
    masterTL.from("#product5", 0.75, {opacity:0, 'filter': 'blur(5px)', ease:Power4.easeOut}, "start+=2.8")
    
    masterTL.from("#product3", 1, {scale:4, ease:Power2.easeIn}, "start+=3.4")
    masterTL.from("#shadow3", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=3.4")
    masterTL.from("#product3", 0.75, {opacity:0, 'filter': 'blur(5px)', ease:Power4.easeOut}, "start+=3.4")
    
    masterTL.from("#color2", 0.5, {x:"-100%", ease:Sine.easeOut}, "start+=5");
    masterTL.from("#productBig", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=5");
    masterTL.to("#productsWrapper", 0.5, {x:"-100%", ease:Sine.easeOut}, "start+=5");
    masterTL.to("#headline", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=5");

    masterTL.from("#headline2", 1, {opacity:0, ease:Sine.easeOut}, "start+=5.5");
    masterTL.from("#headline2", 2, {scale:0.8, ease:Sine.easeOut}, "start+=5.5")
    
    masterTL.from("#sticker", 1, {scale:0, rotation: 360, ease:Back.easeOut}, "start+=5.8")
    
    masterTL.from("#color3", 0.5, {x:"-100%", ease:Sine.easeOut}, "start+=8.5");
    masterTL.from("#productBig2", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=8.5");
    masterTL.to("#productBig", 0.5, {x:"-100%", ease:Sine.easeOut}, "start+=8.5");
    masterTL.to("#headline2", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=8.5");
    masterTL.to("#sticker", 0.25, {scale:0, rotation: 360, ease:Power2.easeOut}, "start+=8.5")

    masterTL.from("#headline3", 1, {opacity:0, ease:Sine.easeOut}, "start+=9");
    masterTL.from("#headline3", 2, {scale:0.8, ease:Sine.easeOut}, "start+=9")

    masterTL.from("#sticker2", 1, {scale:0, rotation: 360, ease:Back.easeOut}, "start+=9.3")

    masterTL.from("#endScreen", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=11")
    masterTL.from("#endLogo", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=11.3")
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=11.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=12");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=12.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=12.7");
    
    masterTL.to("#endText", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=14.5")
    masterTL.from("#endMessage", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=14.7")
    
    masterTL.play();
}