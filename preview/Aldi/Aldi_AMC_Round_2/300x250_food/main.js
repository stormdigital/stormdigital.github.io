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
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");

    masterTL.from("#flyerWrapper", 1, {scale:0, ease: "back.out(2)",}, "start+=0.5")
    masterTL.from("#flyerLeft", 3.5, {rotationY:90, ease: "back.out(2)",}, "start+=0.5")
    masterTL.from("#gradientLeft", 0.3, {opacity:0}, "start+=0.7")
    masterTL.to("#gradientLeft", 1.7, {left:"-40%", ease:Power3.easeInOut}, "start+=0.3")
    masterTL.to("#gradientLeft", 0.3, {opacity:0}, "start+=1")
    masterTL.from("#flyerRight", 3.45, {rotationY:-90, ease: "back.out(1)",}, "start+=0.6")
    masterTL.from("#gradientRight", 0.3, {opacity:0}, "start+=0.7")
    masterTL.to("#gradientRight", 1.8, {left:"95%", ease:Power3.easeInOut}, "start+=0.3")
    masterTL.to("#gradientRight", 0.3, {opacity:0}, "start+=1.1")
    
    masterTL.from("#blueBg", 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=3")
    
    masterTL.from("#date", 0.5, {x:150, ease:Sine.easeInOut}, "start+=3.5")
    masterTL.from("#product1", 0.5, {x:300, ease:Sine.easeInOut}, "start+=3.8")
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=4.3");
    masterTL.from("#highlightWrapper1", 0.5, {width:0, ease:Sine.easeInOut}, "start+=5");
    masterTL.to(["#text1", "#highlightWrapper1"], 0.3, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=6")
    
    masterTL.to("#product1", 0.5, {x:-300, ease:Sine.easeInOut}, "start+=8")
    masterTL.to("#date", 0.5, {x:150, ease:Sine.easeInOut}, "start+=8")
    masterTL.to(["#text1", "#highlightWrapper1"], 0.5, {x:-300, ease:Sine.easeIn}, "start+=8")
    
    masterTL.from("#product2", 0.5, {x:300, ease:Sine.easeInOut}, "start+=8.3")
    masterTL.from("#date2", 0.5, {x:150, ease:Sine.easeInOut}, "start+=8.3")
    masterTL.from("#text2", 0.5, {x:300, ease:Sine.easeOut}, "start+=8.3");
    masterTL.from("#highlightWrapper2", 0.5, {width:0, ease:Sine.easeInOut}, "start+=9");
    masterTL.to(["#text2", "#highlightWrapper2"], 0.3, {scale:1.1, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=10")

    masterTL.to(["#product2", "#text2", "#highlightWrapper2", "#date", "#date2"], 0.5, {opacity:0, ease:Sine.easeInOut}, "start+=12.5")

    masterTL.to("#logo", 0.5, {width:65, left:"50%", translateX:"-50%", ease:Sine.easeInOut}, "start+=13")
    masterTL.from("#text3", 0.5, {x:300, ease:Sine.easeOut}, "start+=13");
    
    masterTL.from("#highlightWrapper3", 0.5, {width:0, ease:Sine.easeInOut}, "start+=13.5");
    masterTL.from("#tagline", 0.5, {opacity:0, y:-10, ease:Back.easeOut}, "start+=13.5")

    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "start+=14");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=14.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "start+=14.7");

 
    masterTL.play();
}