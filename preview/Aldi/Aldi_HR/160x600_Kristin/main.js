myFT.on("ready", init);


function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.1, ease:Sine.easeInOut});   
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.from("#text1", 0.3, {opacity:0, ease:Sine.easeInOut})
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeInOut})
    
    masterTL.to(["#text1", "#highlight1Wrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=2.5")
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut})
    
    masterTL.to(["#text2", "#logo"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=2.5")
    masterTL.to("#bg", 0.5, {filter:"blur(10px)", ease:Sine.easeInOut}, "-=0.3")
    masterTL.from(["#tagline", "#logo2"], 0.3, {opacity:0, ease:Sine.easeInOut})
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    
    masterTL.to("#cta", 0.25, {scale:1.05, repeat:1, yoyo:true, ease:Back.easeOut}, 9.5)
    
    gsap.from("#bg", 20, {scale:1.1, ease:Sine.easeInOut});
        
    masterTL.play();

}