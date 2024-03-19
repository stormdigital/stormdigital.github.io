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
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=0")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=0.8")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=2.7")
    masterTL.to("#introBg", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=2.7")
    masterTL.from("#brochure", 1, {scale:3.890625, y:176, x: 265, rotation:-4, ease:Power2.easeInOut}, "start+=2.7")
    masterTL.from("#topic1", 0.5, {x:200, ease:Sine.easeOut}, "start+=3.5")
    masterTL.to("#brochure", 9, {rotation:-10, y:-105, ease:Sine.easeInOut}, "start+=3.5")
    masterTL.to("#topic1", 0.5, {x:200, ease:Sine.easeIn}, "start+=6.5")
    masterTL.from("#topic2", 0.5, {x:200, ease:Sine.easeOut}, "start+=6.7")
    masterTL.to("#topic2", 0.5, {x:200, ease:Sine.easeIn}, "start+=9.7")
    masterTL.from("#topic3", 0.5, {x:200, ease:Sine.easeOut}, "start+=9.9")
    masterTL.to(["#topic1", "#topic2", "#topic3", "#brochure"], 0.5, {opacity:0, ease:Sine.easeInOut}, "12.5")
    masterTL.add("endscreen", "-=0.1");
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#ctaLeft", 0.5, {scale:0, ease:Back.easeOut}, "endscreen+=1");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=1.7");
 
    masterTL.play();

    console.log(masterTL.duration());
}