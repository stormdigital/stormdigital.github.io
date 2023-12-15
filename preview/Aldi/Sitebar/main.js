myFT.on("ready", init);


function init() {

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#endBack", 0.5, {scale:1.025, ease:Sine.easeInOut});
            gsap.to("#endFront", 0.5, {scale:1.05, ease:Sine.easeInOut});
            gsap.to("#arrowWrapper", 0.5, {background:"#3971a6", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#endBack", 0.5, {scale:1, ease:Sine.easeInOut});
            gsap.to("#endFront", 0.5, {scale:1, ease:Sine.easeInOut});
            gsap.to("#arrowWrapper", 0.5, {background:"#00b6ed", ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
    })

    getAnimation();
}

function onResize(){
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        console.log("middle");
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        console.log("left");
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add(introTL());
    masterTL.add(middleTL(), "+=1");
    masterTL.add(endTL(), "+=1");

    masterTL.play();
}

function introTL(){

    var tl = gsap.timeline({});
    tl.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    tl.add("start");
    tl.from("#logo", 0.5, {left:450, top:441, width:300, ease:Sine.easeInOut}, "start+=0.7")
    tl.from("#bg", 1, {opacity:0, ease:Sine.easeOut}, "start+=0.7")
    tl.from("#text1Wrapper", 0.5, {scale:0, opacity:0, ease:Sine.easeOut}, "-=0.3")
    tl.from("#bewusstSticker", 1, {scale:0, x:40, y:30, ease:Back.easeOut})
    tl.from("#preis", 0.7, {x:600, rotation:70, ease:Back.easeOut}, "-=0.8")
    tl.from("#blueBg", 0.5, {width:0, ease:Power2.easeInOut}, "+=0.5")

    return tl;
}

function middleTL(){

    var tl = gsap.timeline({});
    tl.add("start");
    tl.fromTo("#bluePanel", 2, {y:"-100%"}, {y:600, ease:Power4.easeInOut}, "start")
    tl.to("#bewusstSticker", 1, {y:650, ease:Sine.easeIn}, "start+=0.5")
    tl.to("#text1Wrapper", 1, {y:800, ease:Sine.easeIn}, "start+=0.5")
    tl.to("#preis", 1, {y:650, ease:Sine.easeIn}, "start+=0.5")
    tl.from("#product", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=1")
    tl.to("#bg", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=1")
    tl.from("#text2Wrapper", 0.5, {scale:0, opacity:0, ease:Sine.easeOut}, "-=0.3")
    tl.from("#stickerWrapper", 0.8, {scale:0, rotation:720, ease:Back.easeOut})
    tl.from("#blueBg2", 0.5, {width:0, ease:Power2.easeInOut}, "+=0.5")

    return tl;

}

function endTL(){

    var tl = gsap.timeline({});
    tl.add("start");
    tl.to("#bluePanel", 1, {y:0, ease:Power4.easeInOut}, "start")
    tl.to("#text2Wrapper", 1, {opacity:0, ease:Power4.easeInOut}, "start")
    tl.to("#stickerWrapper", 1, {opacity:0, ease:Power4.easeInOut}, "start")
    tl.to("#product", 0.001, {opacity:0, ease:Sine.easeOut}, "start+=1")
    tl.from(["#endBack", "#endFront"], 0.001, {opacity:0, ease:Sine.easeOut}, "start+=1")
    tl.to("#bluePanel", 0.5, {opacity:0, ease:Power4.easeInOut}, "start+=1")
    tl.from("#endBack", 2, {scale:1.15, ease:Sine.easeOut}, "start+=1")
    tl.from("#endFront", 2, {scale:1.3, ease:Sine.easeOut}, "start+=1")
    tl.to("#logo", 0.5, {left:465, top:113, width:270, ease:Sine.easeInOut}, "start+=1")
    tl.from("#endText", 0.5, {scale:0, opacity:0, ease:Sine.easeOut}, "start+=1.5")
    tl.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    tl.from("#arrowWrapper", 0.2, {x:-60, ease:Sine.easeInOut}, "start+=4")
    tl.to("#cta", 0.2, {scale:1.05, ease:Sine.easeInOut, repeat:1, yoyo:true}, "start+=4.5")

    return tl;

}