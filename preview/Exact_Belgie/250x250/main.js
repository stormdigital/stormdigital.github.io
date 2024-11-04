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
    

    mainTL = new TimelineLite({repeat:1});
    mainTL.add("start")
    mainTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {y:9999999})
    }}, "start")
    mainTL.to("#person", 1.5, {scale:1.3, x:-15, y:-13, ease:Power3.easeInOut}, "+=0.5")
    mainTL.to("#bg", 1.5, {scale:1.15, x:0, ease:Power3.easeInOut}, "-=1.5")
    mainTL.to("#person", 5, {scale:1, x:65, y:0, ease:Sine.easeInOut})
    mainTL.to("#bg", 5, {scale:1, x:50, ease:Sine.easeInOut}, "-=5")
    mainTL.from(splitT1.words, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.1}, "-=4.5");
    mainTL.from("#text2Wrapper", 0.5, {x:-200, ease:Power3.easeOut}, "-=2")

    mainTL.from("#banner", 0, {x:0, ease:Power3.easeOut}, "7.5")

    console.log(mainTL.duration());
    
    
}