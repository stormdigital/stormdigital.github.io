window.onload = function () {
    init();
}

function init(clickTAGvalue) {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
        
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
         
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
        masterTL.pause();
        // masterTL.progress(1).pause();
        
    })

    getAnimation();
}

function getAnimation(){
    
    gsap.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut})
    
    masterTL = new TimelineLite({paused:true, repeat:1});
    masterTL.add("start");

    masterTL.from("#bg1", 4, {scale:1.1, transformOrigin:"80% 100%", ease:Sine.easeInOut}, "start")
    masterTL.from("#text1A", 0.5, {x:-20, opacity: 0, ease: Sine.easeOut}, "start+=0.5");
    masterTL.from("#text1B", 0.5, {x:-20, opacity: 0, ease: Sine.easeOut}, "start+=0.75");
    masterTL.from("#text1C", 0.5, {x:-20, opacity: 0, ease: Sine.easeOut}, "start+=0.9");
    masterTL.to("#text1", 0.3, {opacity:0, ease:Sine.easeIn})

    masterTL.add("switchBg1", "-=0.3")
    masterTL.to("#bg1", 0.3, {scale:1.1, ease:Sine.easeInOut}, "switchBg1")
    masterTL.from("#bg2", 0.3, {scale:1.1, opacity:0, ease:Sine.easeInOut}, "switchBg1")
    masterTL.to("#bg1", 0.15, {opacity:0, ease:Sine.easeInOut}, "switchBg1+=0.15")

    masterTL.from("#text2A", 0.5, {x:20, opacity: 0, ease: Sine.easeOut}, "switchBg1+=0.5");
    masterTL.from("#text2B", 0.5, {x:20, opacity: 0, ease: Sine.easeOut}, "switchBg1+=0.75");
    // masterTL.from("#text2C", 0.5, {x:20, opacity: 0, ease: Sine.easeOut}, "switchBg1+=0.9");
    masterTL.from("#cta", 0.5, {scale:0, ease: Back.easeOut}, "switchBg1+=1.3");
    
    for (let i = 3; i <= 12; i++) {
        if(i == 3 || i == 5 || i == 7){
            masterTL.set("#bg"+(i-1), {scale:1.2, ease: Sine.easeOut}, "+=0.7");
            masterTL.from("#bg"+i, 0.35, {scale:1.2, opacity:0, ease: Sine.easeOut});
            masterTL.to("#bg"+(i-1), 0.35, {scale:1, opacity:1, ease: Sine.easeOut}, "-=0.35");
            masterTL.to("#bg"+i, 0.35, {scale:1, ease: Sine.easeOut}, "+=0.35");
        } else {
            masterTL.from("#bg"+i, 0.35, {scale:1.2, opacity:0, ease: Sine.easeOut}, "+=0.7");
            masterTL.to("#bg"+i, 0.35, {scale:1, ease: Sine.easeOut}, "+=0.35");
        }
    }
    masterTL.to("#bg12", 1, {opacity:1});
    masterTL.add("animateCTA3", "-=6.5")

    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA3");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA3+=0.25");
    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA3+=0.5");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA3+=0.75");
    masterTL.to("#ctaOver", 0.25, {opacity:1, ease:Sine.easeInOut}, "animateCTA3+=1");
    masterTL.to("#ctaOver", 0.25, {opacity:0, ease:Sine.easeInOut}, "animateCTA3+=1.25");
    
    masterTL.from("#banner", 0.5, {}, 14.5);

    console.log(masterTL.duration())
    

    masterTL.play();
}