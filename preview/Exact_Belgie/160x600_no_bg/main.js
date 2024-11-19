window.onload = function () {
    init();
}

function init() {

    gsap.registerPlugin(SplitText);
    getAnimation();

    document.querySelector("#mainExit").addEventListener("click", function(){
        // window.open(clickTag, '_blank');
        // mainTL.progress(1);
        mainTL.pause();
    })
    
    document.querySelector("#mainExit").addEventListener("mouseover", function(){
    
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
    
    })

}

function getAnimation(){
    
    var splitT1 = new SplitText("#text1", {type: "words"});
    var splitT2 = new SplitText("#text2", {type: "words"});
    var splitT3 = new SplitText("#text3", {type: "words"});
    

    mainTL = new TimelineLite({repeat:1});
    mainTL.add("start")
    mainTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:9999999})
    }}, "start")
    mainTL.to("#person", 1.5, {scale:1.3, ease:Power3.easeInOut}, "+=0.5")
    // mainTL.to("#bg", 1.5, {scale:1.15, ease:Power3.easeInOut}, "-=1.5")
    mainTL.to("#person", 2, {scale:1, y:30, ease:Sine.easeInOut})
    // mainTL.to("#bg", 2, {scale:1, ease:Sine.easeInOut}, "-=2")
    mainTL.from(splitT1.words, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.1}, "-=1.5");

    mainTL.to(["#bg", "#person", "#text1"], 0.5, {opacity:0, ease:Sine.easeInOut}, "+=1.5")

    mainTL.from("#yellowBlock2", 0.5, {x:-200, ease:Power3.easeOut}, "+=0")
    mainTL.from("#purpleBlock1", 0.5, {x:-220, ease:Power3.easeOut}, "-=0.4")
    // mainTL.from("#yellowBlock1", 0.5, {x:-330, ease:Power3.easeOut}, "-=0.4")
    // mainTL.from("#purpleBlock2", 0.5, {x:-180, ease:Power3.easeOut}, "-=0.4")
    mainTL.from("#text2Wrapper", 0.5, {x:-250, ease:Power3.easeOut}, "-=0.4")
    mainTL.from(splitT2.lines, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.2}, "-=0.3");
    mainTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3");
    
    mainTL.to("#text2Wrapper", 0.5, {x:250, ease:Power3.easeIn}, "+=2")
    // mainTL.to("#purpleBlock2", 0.5, {x:380, ease:Power3.easeIn}, "-=0.4")
    // mainTL.to("#yellowBlock1", 0.5, {x:330, ease:Power3.easeIn}, "-=0.4")
    mainTL.to("#purpleBlock1", 0.5, {x:270, ease:Power3.easeIn}, "-=0.4")
    mainTL.to("#yellowBlock2", 0.5, {x:260, ease:Power3.easeIn}, "-=0.4")
    
    mainTL.from("#text3Wrapper", 0.5, {x:-250, ease:Power3.easeOut}, "-=0")
    mainTL.from(splitT3.lines, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 1}, "-=0.3");
    // mainTL.from("#yellowBlock3", 0.5, {x:-160, ease:Power3.easeOut}, "-=0.1")
    
    mainTL.to("#cta", 0.25, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "+=0.5");
    mainTL.to("#cta", 0.25, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "+=0.5");

    mainTL.from("#banner", 0, {x:0, ease:Power3.easeOut}, "15")

    console.log(mainTL.duration());
    
    
}