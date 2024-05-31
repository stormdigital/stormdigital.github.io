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
        gsap.set("#extraScaler", {scale:newScale*bannerS});
        if(masterTL.progress() > 0.11 && masterTL.progress() < 0.78){
            gsap.set("#logo", {x:-300});
        }
    }
    else if(bannerW < scalerW){
        if(masterTL.progress() > 0.11 && masterTL.progress() < 0.78){
            gsap.set("#logo", {x:-((scalerW - screenW)/2)/bannerS});
        }
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    
    masterTL.add("start", "+=0.5");
    
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    var screenW = document.body.offsetWidth;
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;
   
    if(bannerW < scalerW/2){
        masterTL.to("#logo", 0.5, {scale:0.43928571428, right:34, top:34, x:-300, translateX:0, transformOrigin:"100% 0%", ease:Sine.easeInOut}, "start")
    }
    else if(bannerW < scalerW){
        masterTL.to("#logo", 0.5, {scale:0.43928571428, right:34, top:34, x:-((scalerW - screenW)/2)/bannerS, translateX:0, transformOrigin:"100% 0%", ease:Sine.easeInOut}, "start")
    }
    else{
        masterTL.to("#logo", 0.5, {scale:0.43928571428, right:34, top:34, translateX:0, transformOrigin:"100% 0%", ease:Sine.easeInOut}, "start")
    }
   
    masterTL.to("#introTagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "start+=0.2")
    masterTL.add("showProduct1", "-=0.5");
    masterTL.from("#product1", 1, {x:"-150%", ease:Sine.easeOut}, "showProduct1")
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showProduct1+=1.25")
    
    masterTL.add("showProduct2", "+=0.5");
    masterTL.to("#product1", 1, {scale:0.6, y:-350, x:15, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#product2", 1, {y:600, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#product2Bg", {bottom:0});
    }}, "showProduct2")
    masterTL.to(["#text1HighlightWrapper", "#text1"], 1, {scale:0.51485148514, transformOrigin:"335px 238px", y:-192, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#text2", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct2+=0.8")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showProduct2+=1.55")
    
    masterTL.add("showProduct3", "+=0.5");
    masterTL.from("#text3", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct3+=0.3")
    masterTL.from("#text3HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showProduct3+=0.6")
    
    masterTL.add("endScreen", "+=1")
    masterTL.to(["#text1HighlightWrapper", "#text1", "#text2HighlightWrapper", "#text2", "#product1", "#product2", "#text3", "#text3HighlightWrapper"], 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen")
    masterTL.to("#product1", 1, {y:-1000, ease:Sine.easeInOut}, "endscreen")
    masterTL.to("#product2", 1, {y:-1000, ease:Sine.easeInOut}, "endscreen")
    masterTL.to("#product2Bg", 1, {height:"100%", ease:Sine.easeIn}, "endscreen")
    masterTL.to("#logo", 0.5, {scale:0.81428571428, right:"50%", top:118, translateX:"50%", transformOrigin:"50% 0%", ease:Sine.easeInOut}, "endscreen")
    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeInOut}, "endscreen+=0.6")
    masterTL.from("#payOff1", 0.5, {x:-850, ease:Sine.easeInOut}, "endscreen+=0.6")
    masterTL.from("#payOff2", 0.5, {x:850, ease:Sine.easeInOut}, "endscreen+=1")
    masterTL.from("#payOff3", 0.5, {x:-850, ease:Sine.easeInOut}, "endscreen+=1.45")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1.8");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.5");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.5");
 
    masterTL.play();

    console.log(masterTL.duration());
   
}