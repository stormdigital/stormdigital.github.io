myFT.on("ready", init);


function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

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
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set(["#scaler", "#extraScaler"], {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set("#date", {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)

    masterTL.add("start");
    masterTL.from("#bg", 2.5, {scale:2, ease:Power2.easeInOut}, "start")
    masterTL.from("#text1", .5, {x:-50, opacity:0, ease:Sine.easeOut})
    masterTL.from("#highlightWrapper1", 0.5, {width:0, ease:Sine.easeOut})
    masterTL.from("#flower1", 1, {scale:0, rotation:-360, ease:Back.easeOut})
    masterTL.to("#bunny1", 1, {x:-300, ease:Sine.easeInOut}, "-=2")
    masterTL.to("#bunny1", 0.5, {y:-200, rotation:-10, repeat:1, yoyo:true, ease:Power2.easeInOut}, "-=2")
    masterTL.to("#bunny1", 1, {x:-600, ease:Sine.easeInOut}, "-=1")
    masterTL.to("#bunny1", 0.5, {y:-200, rotation:-10, repeat:1, yoyo:true, ease:Power2.easeInOut}, "-=1")
    masterTL.to("#bunny1", 1, {x:-900, ease:Sine.easeInOut}, "-=0")
    masterTL.to("#bunny1", 0.5, {y:-200, rotation:-10, repeat:1, yoyo:true, ease:Power2.easeInOut}, "-=1")
    masterTL.from("#basket1", 1, {scale:0, rotation:180, ease:Back.easeOut})
    
    masterTL.add("showProduct1", "-=0");
    masterTL.from("#bgColor1", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1")
    masterTL.from("#product1Wrapper", 1, {x:1200, ease:Sine.easeOut}, "showProduct1+=0.4")
    masterTL.from("#product1B", 1, {x:100, ease:Sine.easeInOut}, "showProduct1+=0.4")
    masterTL.from("#product1Shadow", 1, {scaleX:1.2, ease:Sine.easeInOut}, "showProduct1+=0.4")
    masterTL.from("#date", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1+=1.2")
    masterTL.from("#price1", 0.5, {scale:0, ease:Back.easeOut}, "showProduct1+=1.5")
    masterTL.from("#info1", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct1+=1.9")
    masterTL.from("#bunny2", 0.6, {y:400, ease:Back.easeOut}, "showProduct1+=2")
    masterTL.from("#flower2", 0.5, {scale:0, rotation:45, ease:Back.easeOut}, "showProduct1+=2.5")
    masterTL.from("#egg1", 0.5, {scale:0, rotation:-180, ease:Back.easeOut}, "showProduct1+=2.8")
    masterTL.to("#product1B", 1, {x:-15, ease:Sine.easeIn}, "showProduct1+=3.5")
    masterTL.to(["#product1Wrapper", "#egg1", "#flower2", "#bunny2"], 1, {x:-1200, ease:Sine.easeIn}, "showProduct1+=3.5")
    
    masterTL.add("showProduct2", "-=0.2");
    masterTL.from("#product2Wrapper", 1, {x:1200, ease:Sine.easeOut}, "showProduct2")
    masterTL.from("#product2B", 1, {x:100, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#product2Shadow", 1, {scaleX:1.2, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#price2", 0.5, {scale:0, ease:Back.easeOut}, "showProduct2+=1")
    masterTL.from("#info2", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.set("#flower2", {scale:0, rotation:45, x:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.set("#egg1", {scale:0, rotation:-180, x:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.set("#bunny2", {y:400, x:0, ease:Back.easeOut}, "showProduct2+=1.4")
    masterTL.to("#bunny2", 0.6, {y:0, ease:Back.easeOut}, "showProduct2+=1.5")
    masterTL.to("#flower2", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct2+=2")
    masterTL.to("#egg1", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct2+=2.3")
    masterTL.to("#product2B", 1, {x:-15, ease:Sine.easeIn}, "showProduct2+=3")
    masterTL.to(["#product2Wrapper", "#egg1", "#flower2", "#bunny2"], 1, {x:-1200, ease:Sine.easeIn}, "showProduct2+=3")
    
    masterTL.add("showProduct3", "-=0.2");
    masterTL.from("#product3Wrapper", 1, {x:1200, ease:Sine.easeOut}, "showProduct3")
    masterTL.from("#price3", 0.5, {scale:0, ease:Back.easeOut}, "showProduct3+=1")
    masterTL.from("#info3", 0.5, {opacity:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.set("#bunny2", {y:400, x:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.set("#flower2", {scale:0, rotation:45, x:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.set("#egg1", {scale:0, rotation:-180, x:0, ease:Back.easeOut}, "showProduct3+=1.4")
    masterTL.to("#bunny2", 0.6, {y:0, ease:Back.easeOut}, "showProduct3+=1.5")
    masterTL.to("#flower2", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct3+=2")
    masterTL.to("#egg1", 0.5, {scale:1, rotation:0, ease:Back.easeOut}, "showProduct3+=2.3")
    
    masterTL.add("showEndscreen", "+=0.5");
    masterTL.from("#bgColor2", 0.5, {opacity:0, ease:Sine.easeOut}, "showEndscreen")
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut}, "showEndscreen+=0.2")
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "showEndscreen+=0.2")
    masterTL.from("#tagline", 0.5, {opacity:0, y:-10, ease:Sine.easeOut}, "showEndscreen+=0.6")
    masterTL.from("#text2", .5, {x:-50, opacity:0, ease:Sine.easeOut}, "showEndscreen+=1")
    masterTL.from("#highlightWrapper2", 0.5, {width:0, ease:Sine.easeOut}, "showEndscreen+=1.4")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 90%", ease:Back.easeOut}, "showEndscreen+=1.8")
    masterTL.fromTo("#ctaRight", 0.3, {x:-30, opacity:0}, {x:0, opacity:1, ease:Back.easeOut}, "showEndscreen+=2.2")
    masterTL.from("#egg2", 1, {scale:0, rotation:-180, ease:Back.easeOut}, "showEndscreen+=2.3")
    masterTL.from("#flower3", 1, {scale:0, rotation:360, ease:Back.easeOut}, "showEndscreen+=2.5")
    masterTL.from("#sticker", 1, {scale:0, rotation:-360, ease:Back.easeOut}, "showEndscreen+=3")
    masterTL.from("#flower4", 1, {scale:0, rotation:200, ease:Back.easeOut}, "showEndscreen+=3.2")

    masterTL.play();
}