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
    masterTL.add("start");
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start")
    masterTL.to("#brochure", 5, {rotation:-4, ease:Sine.easeInOut}, "start")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=0.8")
    masterTL.to(["#brochure", "#deco1", "#text1", "#text1HighlightWrapper"], 0.5, {opacity:0, ease:Sine.easeInOut}, "5")
    masterTL.add("endscreen", "-=0.1");
    masterTL.from("#deco2", 0.5, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#text2", 0.5, {x:300, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "endscreen+=1")
    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "endscreen+=1.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.3");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.3");
 
    masterTL.play();

    console.log(masterTL.duration());
}