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
        // masterTL.progress(1);
        masterTL.pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start")

    masterTL.from("#text1", 2, {scale:0.8, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 1, {opacity:0, ease:Sine.easeOut}, "start")

    masterTL.to(["#text1", "#brandLogo"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3")
    
    masterTL.from("#date1", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#productBg", 0.5, {x:100, opacity:0, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.6, {x:300, ease:Sine.easeOut}, "start+=3.3")
    masterTL.from("#product1Info", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.4")
    masterTL.from("#product1Large", 1, {x:300, ease:Power2.easeOut}, "start+=4")
    masterTL.from("#product1Large", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=4.1")
    
    masterTL.to("#product1Wrapper", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=7")
    
    masterTL.from("#product2Info", 0.6, {x:300, ease:Sine.easeOut}, "start+=7.3")
    masterTL.from("#product2Info", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=7.4")
    masterTL.from("#product2Large", 1, {x:300, ease:Power2.easeOut}, "start+=8")
    masterTL.from("#product2Large", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=8.1")
    
    masterTL.to("#product2Wrapper", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=11")
    masterTL.to("#productBg", 0.5, {x:"-100%", ease:Sine.easeIn}, "start+=11")
    masterTL.to("#date1", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=11")
    // masterTL.to("#date2", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=11")

    masterTL.set("#brandLogo", {x: -74, y:12, scale:0.63}, "start+=11.5");
    masterTL.set("#text2", {x: -74, y:2, scale:0.68862275449}, "start+=11.5");
    masterTL.to("#brandLogo", 0.3, {opacity:1}, "start+=11.5");
    masterTL.from("#text2", 1, {opacity:0, ease:Sine.easeOut}, "start+=11.5")
    masterTL.from("#bgRight", 0.5, {x:"100%", ease:Sine.easeOut}, "start+=11.5")
    
 
    masterTL.from(["#product3", "#shadow3"], 0.75, {x:300, ease:Power2.easeOut}, "start+=12")
    // masterTL.from("#shadow3", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12")
    // masterTL.from("#product3", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12")
    masterTL.from(["#product4", "#shadow4"], 0.75, {x:300, ease:Power2.easeOut}, "start+=12.1")
    // masterTL.from("#shadow4", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.1")
    // masterTL.from("#product4", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.1")
    masterTL.from(["#product1", "#shadow1"], 0.75, {x:300, ease:Power2.easeOut}, "start+=12.2")
    // masterTL.from("#shadow1", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.2")
    // masterTL.from("#product1", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.2")
    masterTL.from(["#product5", "#shadow5"], 0.75, {x:300, ease:Power2.easeOut}, "start+=12.3")
    // masterTL.from("#shadow5", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.3")
    // masterTL.from("#product5", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.3")
    masterTL.from(["#product2", "#shadow2"], 0.75, {x:300, ease:Power2.easeOut}, "start+=12.4")
    // masterTL.from("#shadow2", 1, {x:-100, y:100, scale:4, opacity:0, 'filter': 'blur(5px)', ease:Sine.easeIn}, "start+=12.4")
    // masterTL.from("#product2", 0.75, {opacity:0, 'filter': 'blur(2px)', ease:Power4.easeOut}, "start+=12.4")
    
    masterTL.from("#sticker", 0.5, {scale:0, rotation:600, ease:Back.easeOut}, "start+=13")
    
    masterTL.from("#blueBg", 1, {width:0, ease:Sine.easeOut}, "start+=15")
    masterTL.to("#brandLogo", 0.5, {opacity:0, ease:Sine.easIn}, "start+=15");

    masterTL.to("#text2", 1, {scale:1, x:0, y:0, ease:Sine.easeOut}, "start+=15.5")
    masterTL.to("#logo", 1, {scale:1, y:7, left:"50%", translateX:"-50%", ease:Sine.easeOut}, "start+=15.5")

    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=16.5");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=16.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=17.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=17.2");

    
    masterTL.play();
}