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

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.fromTo("#bgWrapper", 2, {scale:1.8, y:15, x:150}, {scale:1, x:0, y:0, ease:Power2.easeInOut})
    masterTL.from("#storeWrapper", 2, {width:0, ease:Sine.easeInOut}, "-=2.3")


    masterTL.add("showText1", "-=0")
    masterTL.from("#text1", 0.3, {opacity:0, y:30, ease:Sine.easeOut}, "showText1")
    masterTL.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "showText1+=0.5")
    masterTL.from("#sticker", 0.5, {scale:0, rotation:360, ease:Back.easeOut}, "showText1+=1")
    
    masterTL.from("#productColorBg", 0.5, {width:0, ease:Circ.easeInOut}, "+=1.5")
    masterTL.from("#date", 0.5, {x:150, ease:Sine.easeOut}, "+=0")
    masterTL.from("#price1", 0.75, {x:300, ease:Sine.easeOut}, "-=0.1")
    masterTL.from("#product1", 0.6, {x:300, ease:Sine.easeOut}, "-=0.6")
    masterTL.to("#price1", 0.75, {x:-300, ease:Sine.easeIn}, "+=2")
    masterTL.to("#product1", 0.6, {x:-300, ease:Sine.easeIn}, "-=0.75")

    masterTL.from("#price2", 0.75, {x:300, ease:Sine.easeOut}, "-=0")
    masterTL.from("#product2", 0.6, {x:300, ease:Sine.easeOut}, "-=0.6")
    masterTL.to("#price2", 0.75, {x:-300, ease:Sine.easeIn}, "+=2")
    masterTL.to("#product2", 0.6, {x:-300, ease:Sine.easeIn}, "-=0.75")
    masterTL.to("#date", 0.3, {x:150, ease:Sine.easeIn}, "-=1")
    
    masterTL.to("#logo", 0.5, {top: 20, scale:1.28571428571, left:"50%", translateX:"-50%", ease:Sine.easeInOut}, "-=0.5")
    masterTL.from("#tagline", 0.5, {opacity:0, y:-20, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#text2", 0.3, {opacity:0, y:30, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeOut}, "+=0.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "+=0");
    masterTL.from(["#ctaRight", "#ctaArrow"], 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");
    masterTL.from(["#ctaRight", "#ctaArrow"], 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    masterTL.to("#ctaArrow", 0.2, {x:3, repeat:5, yoyo:true, ease:Sine.easeInOut}, "+=0.2");
        
    masterTL.play();

}