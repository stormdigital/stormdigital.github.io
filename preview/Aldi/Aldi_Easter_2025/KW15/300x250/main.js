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
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)

    masterTL.add("start");
    masterTL.from("#bg", 2.5, {scale:2, ease:Power2.easeInOut}, "start")
    masterTL.from("#text1", .5, {x:-50, opacity:0, ease:Sine.easeOut})
    masterTL.from("#highlightWrapper1", 0.5, {width:0, ease:Sine.easeOut})
    masterTL.from("#flower1", 1, {scale:0, rotation:-360, ease:Back.easeOut})
    masterTL.from("#egg0", 1, {scale:0, rotation:180, ease:Back.easeOut}, "-=0.7")
    masterTL.from("#basket1", 1, {scale:0, rotation:10, ease:Back.easeOut}, "-=0.8")
    masterTL.from("#basketProduct1", 0.5, {scale:0, ease:Power3.easeOut}, "-=0.5")
    masterTL.from("#basketProduct2", 0.5, {scale:0, ease:Power3.easeOut}, "-=0.3")
    masterTL.to(["#basket1", "#basketProduct1", "#basketProduct2"], 1, {rotation:5, ease:Sine.easeInOut, repeat:1, yoyo:true})
    
    masterTL.add("showProduct1", "-=0.5");
    masterTL.from("#bgColor1", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1")
    masterTL.from("#product1Wrapper", 1, {x:300, ease:Sine.easeOut}, "showProduct1+=0.4")
    // masterTL.from("#product1B", 1, {x:15, ease:Sine.easeInOut}, "showProduct1+=0.4")
    masterTL.from("#product1Shadow", 1, {scaleX:1.2, ease:Sine.easeInOut}, "showProduct1+=0.4")
    masterTL.from("#date", 0.5, {x:150, ease:Sine.easeOut}, "showProduct1+=1.2")
    masterTL.from("#price1", 0.5, {scale:0, ease:Back.easeOut}, "showProduct1+=1.5")
    masterTL.from("#info1", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct1+=1.9")
    masterTL.from("#flower2", 0.5, {scale:0, rotation:45, ease:Back.easeOut}, "showProduct1+=2.5")
    masterTL.from("#egg1", 0.5, {scale:0, rotation:-180, ease:Back.easeOut}, "showProduct1+=2.8")
    // masterTL.to("#product1B", 1, {x:-15, ease:Sine.easeIn}, "showProduct1+=3.5")
    masterTL.to(["#product1Wrapper", "#egg1", "#flower2"], 1, {x:-300, ease:Sine.easeIn}, "showProduct1+=3.5")
    
    masterTL.add("showProduct2", "-=0.2");
    masterTL.from("#product2Wrapper", 1, {x:300, ease:Sine.easeOut}, "showProduct2")
    // masterTL.from("#product2B", 1, {x:15, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#product2Shadow", 1, {scaleX:1.2, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#price2", 0.5, {scale:0, ease:Back.easeOut}, "showProduct2+=1")
    masterTL.from("#info2", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.set("#flower2", {scale:0, rotation:45, x:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.set("#egg1", {scale:0, rotation:-180, x:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.to("#flower2", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct2+=2")
    masterTL.to("#egg1", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct2+=2.3")
    // masterTL.to("#product2B", 1, {x:-15, ease:Sine.easeIn}, "showProduct2+=3")
    masterTL.to(["#product2Wrapper", "#egg1", "#flower2"], 1, {x:-300, ease:Sine.easeIn}, "showProduct2+=3")
    
    masterTL.add("showProduct3", "-=0.2");
    masterTL.from("#product3Wrapper", 1, {x:300, ease:Sine.easeOut}, "showProduct3")
    masterTL.from("#price3", 0.5, {scale:0, ease:Back.easeOut}, "showProduct3+=1")
    masterTL.from("#info3", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.set("#flower2", {scale:0, rotation:45, x:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.set("#egg1", {scale:0, rotation:-180, x:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.to("#flower2", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct3+=2")
    masterTL.to("#egg1", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct3+=2.3")
    
    masterTL.add("showEndscreen", "+=0.5");
    masterTL.from("#bgColor2", 0.5, {opacity:0, ease:Sine.easeOut}, "showEndscreen")
    masterTL.to("#logo", 0.5, {width:52, left:"50%", translateX:"-50%", ease:Sine.easeInOut}, "showEndscreen+=0.2")
    masterTL.from("#tagline", 0.5, {opacity:0, y:-10, ease:Sine.easeOut}, "showEndscreen+=0.6")
    masterTL.from("#text2", .5, {x:-50, opacity:0, ease:Sine.easeOut}, "showEndscreen+=1")
    masterTL.from("#highlightWrapper2", 0.5, {width:0, ease:Sine.easeOut}, "showEndscreen+=1.4")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "showEndscreen+=1.8")
    masterTL.fromTo("#ctaRight", 0.3, {x:-30, opacity:0}, {x:0, opacity:1, ease:Back.easeOut}, "showEndscreen+=2.2")
    masterTL.from("#flower3", 1, {scale:0, rotation:360, ease:Back.easeOut}, "showEndscreen+=2.5")
    masterTL.from("#sticker", 1, {scale:0, rotation:-360, ease:Back.easeOut}, "showEndscreen+=3")

    masterTL.play();
    console.log(masterTL.duration());
    
}