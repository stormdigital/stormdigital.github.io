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
    

    mainTL = new TimelineLite({repeat:2});
    mainTL.add("start")
    mainTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:9999999})
    }}, "start")
    mainTL.to("#person", 1.5, {scale:1.3, ease:Power3.easeInOut}, "+=0.5")
    // mainTL.to("#bg", 1.5, {scale:1.15, ease:Power3.easeInOut}, "-=1.5")
    mainTL.to("#person", 2, {scale:1, ease:Sine.easeInOut})
    // mainTL.to("#bg", 2, {scale:1, ease:Sine.easeInOut}, "-=2")
    mainTL.from(splitT1.words, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.1}, "-=1.5");
    mainTL.from("#text2Wrapper", 0.5, {x:-200, ease:Power3.easeOut}, "+=0.7")
    mainTL.from([splitT2.words[0], splitT2.words[1], splitT2.words[2], splitT2.words[3], splitT2.words[4]], 0.3, {opacity: 0, x:-20, ease: Sine.easeOut}, "-=0.1");
    mainTL.from([splitT2.words[5], splitT2.words[6], splitT2.words[7], splitT2.words[8], splitT2.words[9]], 0.3, {opacity: 0, x:-20, ease: Sine.easeOut}, "+=1");
    mainTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "+=0.3");
    
    mainTL.to("#cta", 0.25, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "+=0.5");
    mainTL.to("#cta", 0.25, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "+=0.5");

    mainTL.from("#banner", 0, {x:0, ease:Power3.easeOut}, "10")

    console.log(mainTL.duration());
    
    
}