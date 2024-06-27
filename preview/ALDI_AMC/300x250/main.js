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
    masterTL.from("#bg", 4, {scale:1.2, ease:Sine.easeOut}, "start")
    masterTL.from("#phoneWrapper", 4, {scale:1.6, ease:Sine.easeOut}, "start")
    masterTL.from("#head", 4, {scale:3, ease:Sine.easeOut}, "start")

    masterTL.to("#bg", 4, {scale:1.01, ease:Sine.easeIn}, "start+=4")
    masterTL.to("#phoneWrapper", 4, {scale:1.05, ease:Sine.easeIn}, "start+=4")
    masterTL.to("#head", 4, {scale:1.1, ease:Sine.easeIn}, "start+=4")

    masterTL.from("#flyerLeft", 3.5, {rotationY:90, ease: "back.out(2)",}, "start+=1")
    masterTL.from("#gradientLeft", 0.3, {opacity:0}, "start+=1.2")
    masterTL.to("#gradientLeft", 1.7, {left:"-40%", ease:Power3.easeInOut}, "start+=0.8")
    masterTL.to("#gradientLeft", 0.3, {opacity:0}, "start+=1.5")
    masterTL.from("#flyerRight", 3.45, {rotationY:-90, ease: "back.out(1)",}, "start+=1.1")
    masterTL.from("#gradientRight", 0.3, {opacity:0}, "start+=1.2")
    masterTL.to("#gradientRight", 1.8, {left:"95%", ease:Power3.easeInOut}, "start+=0.8")
    masterTL.to("#gradientRight", 0.3, {opacity:0}, "start+=1.6")
    
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=2.5");
    masterTL.from("#highlightWrapper1", 0.5, {width:0, ease:Sine.easeInOut}, "start+=3.5");
    masterTL.to(["#text1", "#highlightWrapper1"], 0.5, {x:-300, ease:Sine.easeIn}, "start+=5")
    
    masterTL.from("#text2", 0.5, {x:300, ease:Sine.easeOut}, "start+=5.4");
    masterTL.from("#highlightWrapper2", 0.5, {width:0, ease:Sine.easeInOut}, "start+=6.4");
    masterTL.to(["#text2", "#highlightWrapper2"], 0.3, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=7")
    masterTL.from("#blueBg", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=8.5")

    masterTL.from("#icon1", 0.5, {scale:0, ease:Back.easeOut}, "start+=9")
    masterTL.from("#icon2", 0.5, {scale:0, ease:Back.easeOut}, "start+=9.2")
    masterTL.from("#icon3", 0.5, {scale:0, ease:Back.easeOut}, "start+=9.4")
    masterTL.from("#icon4", 0.5, {scale:0, ease:Back.easeOut}, "start+=9.6")

    masterTL.from("#text3", 0.5, {x:300, ease:Sine.easeOut}, "start+=10");
    masterTL.from("#highlightWrapper3", 0.5, {width:0, ease:Sine.easeInOut}, "start+=11");

    masterTL.to("#icon1", 0.5, {scale:0, ease:Back.easeIn}, "start+=12")
    masterTL.to("#icon2", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.2")
    masterTL.to("#icon3", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.4")
    masterTL.to("#icon4", 0.5, {scale:0, ease:Back.easeIn}, "start+=12.6")
    
    masterTL.to(["#text3", "#highlightWrapper3"], 0.5, {y:-55, ease:Sine.easeInOut}, "start+=13")
    masterTL.to("#logo", 0.5, {width:65, left:"50%", translateX:"-50%", ease:Sine.easeInOut}, "start+=13")
    
    masterTL.from("#tagline", 0.5, {opacity:0, y:-10, ease:Back.easeOut}, "start+=13.5")

    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=14");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=14.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.7");

 
    masterTL.play();
}