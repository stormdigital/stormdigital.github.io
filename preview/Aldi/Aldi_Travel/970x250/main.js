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

    gsap.set("#bluePanel", {height: 52});

    masterTL = gsap.timeline({paused:true, repeat:1});

    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:999999})
    }}, 0)    
    masterTL.from("#travelLogo", 0.5, {x:-200, ease:Sine.easeOut}, 0.5)    
    masterTL.from("#hand", 0.5, {opacity:0, ease:Sine.easeOut}, 1)    
    
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0.3")
    masterTL.from("#destination", 1, {y:200, ease:Power2.easeOut}, "+=0")    
    
    masterTL.from("#price", 0.5, {scale:0, ease:Back.easeOut}, "+=0")   
    
    masterTL.to(["#text1", "#destWrapper", "#hand", "#price"], 0.3, {opacity:0, ease:Sine.easeOut}, "+=2")

    masterTL.from(["#bluePanel", "#usp1"], 0.75, {scale:0, ease:Back.easeOut}, "+=0")
    masterTL.to("#bluePanel", 0.3, {height:91, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp2", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0")
    masterTL.to("#bluePanel", 0.3, {height:130, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp3", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0.1")
    masterTL.to("#bluePanel", 0.3, {height:167, ease:Sine.easeInOut}, "+=0")
    masterTL.from("#usp4", 0.5, {scale:0, ease:"back.out(1.2)"}, "+=0.1")
    
    masterTL.from("#sticker", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0.1")

    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3")
    masterTL.from("#ctaRight", 0.00001, {opacity:0}, "+=0")
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "+=0")

    masterTL.to("#banner", 0.5, {}, "14.5")

    masterTL.play();

}