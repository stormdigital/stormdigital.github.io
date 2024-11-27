myFT.on("ready", init);

function init() {

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1).pause();
    })

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {x:2, opacity:0.9, ease:Sine.easeOut});
        }
    });
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {x:0, opacity:1, ease:Sine.easeOut});
        }
    });

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:999999})
    }}, 0)    
    masterTL.from("#bg", 2, {scale:1.1, ease:Sine.easeOut}, 0)    
    masterTL.from("#travelLogo", 0.5, {x:-150, ease:Sine.easeOut}, 0.5)    
    masterTL.from("#hand", 1.5, {x:-250, y:230, rotation:-25, ease: "back.out(1.2)"}, 1)    
    
    masterTL.from("#text1A", 0.3, {opacity:0, y:20, x:-10, ease:Sine.easeOut})    
    masterTL.from("#text1B", 0.3, {opacity:0, y:20, x:-10, ease:Sine.easeOut}, "+=0.3")    
    masterTL.from("#text1C", 0.3, {opacity:0, y:20, x:-10, ease:Sine.easeOut}, "+=0.3")    
    masterTL.from("#destWrapper", 1, {width:0, ease:Sine.easeOut}, "+=0.3")    
    
    masterTL.from("#price", 0.5, {scale:0, ease:Back.easeOut}, "+=0")   
    
    masterTL.to("#hand", 1, {x:-250, y:230, rotation:-25, ease: "back.in(1.1)"}, "+=2") 
    masterTL.to(["#text1A", "#text1B", "#text1C", "#destWrapper"], 0.3, {opacity:0, ease:Sine.easeOut}, "-=1")   
    masterTL.to("#price", 0.3, {scale:0, ease:Back.easeIn}, "-=1")  

    masterTL.from("#bluePanel", 0.5, {scale:0, ease:Back.easeOut}, "+=0")
    masterTL.from("#usp1", 0.3, {opacity:0, x:-20, ease:Sine.easeOut}, "+=0.1")
    masterTL.from("#usp2", 0.3, {opacity:0, x:-20, ease:Sine.easeOut}, "+=0.1")
    masterTL.from("#usp3", 0.3, {opacity:0, x:-20, ease:Sine.easeOut}, "+=0.1")
    masterTL.from("#usp4", 0.3, {opacity:0, x:-20, ease:Sine.easeOut}, "+=0.1")

    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3")
    masterTL.from("#ctaRight", 0.00001, {opacity:0}, "+=0")
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "+=0")

    masterTL.to("#banner", 0.5, {}, "14.5")

    masterTL.play();

    console.log(masterTL.duration());
    

}