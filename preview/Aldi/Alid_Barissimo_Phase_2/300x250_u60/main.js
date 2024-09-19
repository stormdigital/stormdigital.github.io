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
    masterTL.add("start");
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.from("#bg", 3, {scale:1.1, ease:Sine.easeOut}, "start")
    masterTL.from("#gradient", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1", 0.5, {y:100, ease:Back.easeOut}, "start+=0.8")

    masterTL.to("#logoBarissimo", 0.7, {opacity:0, ease:Sine.easeInOut}, "start+=2.5")
    
    masterTL.from("#contentRight", 1, {x:150, ease:Sine.easeInOut}, "start+=3")
    masterTL.to("#bg", 1, {x:-75, y:13, scale:1.1, ease:Sine.easeInOut}, "start+=3")
    masterTL.to("#text1", 1, {x:-75, ease:Sine.easeInOut}, "start+=3")
    
    masterTL.to("#contentRight", 1, {scale:2, x:-75, y:-2, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#bg", 1, {x:-150, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#text1", 1, {x:-175, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.to("#product", 3, {scale:1.05, x:-2, ease:Sine.easeInOut}, "start+=4.5")
    masterTL.set(["#bg", "#gradient", "#text1"], {opacity:0}, "start+=5.5")
    
    masterTL.to("#contentRight", 1, {scale:1, width:300, x:0, y:0, ease:Sine.easeInOut}, "start+=7.5")
    masterTL.to("#product", 1, {scale:1.2, x:-67, ease:Sine.easeInOut}, "start+=7.5")
    // masterTL.from("#price", 1, {x:-400, scale:1.2, ease:Sine.easeOut}, "start+=7.5")
    masterTL.from("#price", 0.5, {scale:0, ease:Back.easeOut}, "start+=8.5")
    
    masterTL.from("#sticker", 0.5, {scale:0, rotation:360, ease:Back.easeOut}, "start+=9")
    
    masterTL.to(["#sticker", "#product", "#price"], 0.5, {opacity:0, ease:Power1.easeIn}, "start+=11")
    
    masterTL.to("#logo", 0.5, {left:58, top:34, ease:Sine.easeInOut}, "start+=11.5")
    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=12")
    masterTL.from("#logoBarissimo2", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=12.25")
    masterTL.from("#text2", 0.5, {y:150, ease:Back.easeOut}, "start+=12.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=13");
    masterTL.from("#ctaRight", 0.0001, {opacity:0}, "start+=13.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=13.7");
    
    masterTL.play();
}