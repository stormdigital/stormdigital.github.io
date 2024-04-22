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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoBarissimo", 0.5, {scale:0, ease:Sine.easeOut}, "start")
    masterTL.from("#logoBarissimo", 0.25, {opacity:0, ease:Sine.easeOut}, "start")
    masterTL.from("#headline", 2, {scale:0.8, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#headline", 1, {opacity:0, ease:Sine.easeOut}, "start+=0.3")
    
    masterTL.from("#product3", 1, {scale:3, ease:Power2.easeIn}, "start+=1")
    masterTL.from("#product3", 0.25, {opacity:0, ease:Sine.easeOut}, "start+=1")
    masterTL.from("#product4", 1, {scale:3, ease:Power2.easeIn}, "start+=1.6")
    masterTL.from("#product4", 0.25, {opacity:0, ease:Sine.easeOut}, "start+=1.6")
    masterTL.from("#product1", 1, {scale:3, ease:Power2.easeIn}, "start+=2.2")
    masterTL.from("#product1", 0.25, {opacity:0, ease:Sine.easeOut}, "start+=2.2")
    masterTL.from("#product5", 1, {scale:3, ease:Power2.easeIn}, "start+=2.8")
    masterTL.from("#product5", 0.25, {opacity:0, ease:Sine.easeOut}, "start+=2.8")
    masterTL.from("#product2", 1, {scale:3, ease:Power2.easeIn}, "start+=3.4")
    masterTL.from("#product2", 0.25, {opacity:0, ease:Sine.easeOut}, "start+=3.4")
    
    masterTL.from("#color2", 0.5, {y:"-100%", ease:Sine.easeOut}, "start+=5");
    masterTL.from("#productBig", 0.5, {y:"100%", ease:Sine.easeOut}, "start+=5");
    masterTL.to("#productsWrapper", 0.5, {y:"-100%", ease:Sine.easeOut}, "start+=5");
    masterTL.to("#headline", 0.5, {y:"100%", ease:Sine.easeOut}, "start+=5");

    masterTL.from("#headline2", 1, {opacity:0, ease:Sine.easeOut}, "start+=5.5");
    masterTL.from("#headline2", 2, {scale:0.8, ease:Sine.easeOut}, "start+=5.5")
    
    masterTL.from("#sticker", 1, {scale:0, rotation: 360, ease:Back.easeOut}, "start+=5.8")
    
    masterTL.from("#color3", 0.5, {y:"-100%", ease:Sine.easeOut}, "start+=8");
    masterTL.from("#productBig2", 0.5, {y:"100%", ease:Sine.easeOut}, "start+=8");
    masterTL.to("#productBig", 0.5, {y:"-100%", ease:Sine.easeOut}, "start+=8");
    masterTL.to("#headline2", 0.5, {y:"100%", ease:Sine.easeOut}, "start+=8");
    masterTL.to("#sticker", 0.25, {scale:0, rotation: 360, ease:Power2.easeOut}, "start+=8")

    masterTL.from("#headline3", 1, {opacity:0, ease:Sine.easeOut}, "start+=8.5");
    masterTL.from("#headline3", 2, {scale:0.8, ease:Sine.easeOut}, "start+=8.5")

    masterTL.from("#sticker2", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=8.8")

    masterTL.from("#endScreen", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=10.5")
    masterTL.from("#endLogo", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=10.8")
    masterTL.from("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=11")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=11.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=12.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=12.2");
    
    masterTL.to("#endText", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=14")
    masterTL.from("#endMessage", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=14.5")
    
    masterTL.play();
}