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
    masterTL.from(["#bg", "#bg2"], 2, {x:80, ease:Sine.easeOut}, "start")
    masterTL.to("#bg", 1.5, {scale:30, ease:Power4.easeIn}, "start+=2")
    masterTL.from("#productsWrapper", 0.5, {opacity:0, ease:Power4.easeOut}, "start+=3.3")
    masterTL.add("holeAnimation", "-=0.3")
    masterTL.fromTo("#holeWrapper", 1, {y:-40, x:-30}, {x:-8, y:50, ease:Sine.easeInOut}, "holeAnimation")
    masterTL.to("#holeWrapper", 0.8, {x:-100, y:70, ease:Sine.easeInOut}, "holeAnimation+=1")
    masterTL.to("#holeWrapper", 1.4, {x:94, y:45, ease:Sine.easeInOut}, "holeAnimation+=1.8")
    masterTL.to("#holeWrapper", 0.6, {x:0, y:0, ease:Sine.easeIn}, "holeAnimation+=3.6")
    masterTL.to("#holeWrapper", 0.6, {scale:5, ease:Sine.easeIn}, "holeAnimation+=3.9")
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut}, "holeAnimation+=3.9")
    masterTL.add("showEnd", "+=1.8")
    masterTL.from("#endBg", 1, {clipPath: "circle(0% at 50% 50%)", ease:"none"}, "showEnd")
    masterTL.from("#text2", 0.5, {opacity:0, x:-50, ease:Sine.easeOut}, "showEnd+=0.8")
    masterTL.from("#endCircle", 1, {scale:0, ease:Sine.easeIn}, "showEnd+=3")
    masterTL.to("#logo", 0.5, {x:106, width:64, ease:Sine.easeInOut}, "showEnd+=3")
    masterTL.to("#text2", 0.5, {y:16, ease:Sine.easeInOut}, "showEnd+=3")
    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "showEnd+=3.5")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "showEnd+=4");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "showEnd+=4.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "showEnd+=4.7");
 
    masterTL.play();

    console.log(masterTL.duration());
}