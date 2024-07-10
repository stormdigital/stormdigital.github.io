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
        gsap.set("#date1", {x:-300});
    }
    else if(bannerW < scalerW){
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:"50%", xPercent:-50, x:-screenW/2 });
        }
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date1", {x:-((scalerW - screenW)/2)/bannerS});
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
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start")

    masterTL.from("#text1", 2, {scale:0.8, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 1, {opacity:0, ease:Sine.easeOut}, "start")

    masterTL.to(["#text1", "#brandLogo"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3")

    masterTL.from("#date1", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#productBg", 0.5, {x:400, opacity:0, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.6, {x:"25%", ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.4")
    masterTL.from("#product1Large", 1, {x:"25%", ease:Power2.easeOut}, "start+=4")
    masterTL.from("#product1Large", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=4.1")
    
    masterTL.to("#product1Wrapper", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=7")
    masterTL.to("#product1Large", 0.15, {opacity:0, ease:Sine.easeIn}, "start+=7")

    masterTL.from("#product2Info", 0.6, {x:"25%", ease:Sine.easeOut}, "start+=7.3")
    masterTL.from("#product2Info", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=7.4")
    masterTL.from("#product2Large", 1, {x:"25%", ease:Power2.easeOut}, "start+=8")
    masterTL.from("#product2Large", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=8.1")
    
    masterTL.to("#product2Wrapper", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=11")
    masterTL.to("#product2Large", 0.15, {opacity:0, ease:Sine.easeIn}, "start+=11")
    masterTL.to("#productBg", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=11")
    masterTL.to("#date1", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=11")
    // masterTL.to("#date2", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=11")

    masterTL.set("#brandLogo", {y:-186, scale:0.76666666666}, "start+=11.5");
    masterTL.set("#text2", {y:-400, }, "start+=11.5");
    masterTL.to("#brandLogo", 0.3, {opacity:1}, "start+=11.5");
    masterTL.from("#text2", 1, {opacity:0, ease:Sine.easeOut}, "start+=11.5")
    masterTL.from("#bgRight", 0.5, {y:"100%", ease:Sine.easeOut}, "start+=11.5")
    
 
    masterTL.from(["#product3", "#shadow3"], 0.75, {x:1200, ease:Power2.easeOut}, "start+=12")
    // masterTL.from("#shadow3", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12")
    // masterTL.from("#product3", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12")
    masterTL.from(["#product4", "#shadow4"], 0.75, {x:1200, ease:Power2.easeOut}, "start+=12.1")
    // masterTL.from("#shadow4", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.1")
    // masterTL.from("#product4", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.1")
    masterTL.from(["#product1", "#shadow1"], 0.75, {x:1200, ease:Power2.easeOut}, "start+=12.2")
    // masterTL.from("#shadow1", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.2")
    // masterTL.from("#product1", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.2")
    masterTL.from(["#product5", "#shadow5"], 0.75, {x:1200, ease:Power2.easeOut}, "start+=12.3")
    // masterTL.from("#shadow5", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.3")
    // masterTL.from("#product5", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.3")
    masterTL.from(["#product2", "#shadow2"], 0.75, {x:1200, ease:Power2.easeOut}, "start+=12.4")
    // masterTL.from("#shadow2", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.4")
    // masterTL.from("#product2", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.4")
    
    masterTL.from("#sticker", 0.5, {scale:0, rotation:600, ease:Back.easeOut}, "start+=13")
    
    masterTL.from("#blueBg", 1, {height:0, ease:Sine.easeOut}, "start+=15")
    masterTL.to("#brandLogo", 0.5, {opacity:0, ease:Sine.easIn}, "start+=15");

    masterTL.to("#text2", 1, {scale:1, x:0, y:0, ease:Sine.easeOut}, "start+=15.5")
    // masterTL.to("#logo", 1, {scale:1, y:7, left:"50%", translateX:"-50%", ease:Sine.easeOut}, "start+=15.5")
    masterTL.to("#logo", 0.3, {opacity:0}, "start+=15.5")
    masterTL.from("#logo2", 0.3, {opacity:0}, "start+=15.8")

    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=16.5");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=16.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=17.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=17.2");
   
    masterTL.play();
}