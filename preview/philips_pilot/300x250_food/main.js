window.onload = init;

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
        window.open(clickTag, '_blank');
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true, repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {top: 999999});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bg1", 10, {scale:1.3, ease:Sine.easeInOut}, "start")
    masterTL.add("intro", "-=10");
    masterTL.from("#product", 0.5, {opacity:0, x:30, ease:Sine.easeOut}, "intro")
    masterTL.from("#icon1", 0.5, {scale:0, ease: "back.out(3)"}, "intro+=0.4")
    masterTL.from("#icon2", 0.5, {scale:0, ease: "back.out(3)"}, "intro+=0.6")
    masterTL.from("#text1A", 0.5, {opacity:0, x:20, ease:Sine.easeInOut}, "intro+=0.8")
    masterTL.from("#text1B", 0.5, {opacity:0, x:20, ease:Sine.easeInOut}, "intro+=1")
    masterTL.from("#cta", 0.5, {scale:0, ease: "back.out(3)"}, "intro+=1.2")
    masterTL.to("#text1B", 0.3, {opacity:0, ease:Sine.easeInOut}, "intro+=3")
    masterTL.from("#text2B", 0.5, {opacity:0, x:20, ease:Sine.easeInOut}, "intro+=3.2")
    masterTL.to("#text2B", 0.3, {opacity:0, ease:Sine.easeInOut}, "intro+=5")
    masterTL.from("#text3B", 0.5, {opacity:0, x:20, ease:Sine.easeInOut}, "intro+=5.2")
    masterTL.to("#text3B", 0.3, {opacity:0, ease:Sine.easeInOut}, "intro+=7")
    masterTL.from("#text4B", 0.5, {opacity:0, x:20, ease:Sine.easeInOut}, "intro+=7.2")
    masterTL.to(["#icon1", "#icon2"], 0.5, {opacity:0, ease:Sine.easeInOut}, "intro+=7.2")
    masterTL.from("#bg2", 0.5, {opacity:0, ease:Sine.easeInOut}, "intro+=7.2")
    masterTL.from("#bg2", 7, {scale:1.3, ease:Sine.easeInOut}, "intro+=7.2")
    
    masterTL.to("#cta", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Power2.easeInOut}, 10)
    masterTL.to("#cta", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Power2.easeInOut}, 14)

    masterTL.to("#banner", 0.5, {}, 14.5)
    
    masterTL.play();
}