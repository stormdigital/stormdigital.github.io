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
    gsap.set("#scaler", {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:335, x:0, xPercent:0});
        }
        gsap.set("#product1Date", {x:-300});
    }
    else if(bannerW < scalerW){
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:"50%", xPercent:-50, x:-screenW/2 });
        }
        gsap.set("#product1Date", {x:-((scalerW - screenW)/2)/bannerS});
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
    }
    else{
        if(masterTL.progress() < 0.9){
            gsap.set("#logo", {left:35, x:0, xPercent:0});
        }
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.add("start")
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start", "-=0.2");
    masterTL.from("#text1", 0.5, {x:300, opacity:0, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.3")
    masterTL.to(["#introBg", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7")
    masterTL.add("showProduct1");
    masterTL.from("#product1", 0.7, {y:1150, ease:Back.easeOut}, "showProduct1+=0.5")
    masterTL.from("#product1PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=0.8")
    masterTL.to("#product1", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.to("#product1PriceBlock", 0.3, {opacity:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.add("showProduct2", "-=0.2");
    masterTL.from("#product2", 0.7, {y:1150, ease:Back.easeOut}, "showProduct2+=0.5")
    masterTL.from("#product2PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct2+=0.8")
    masterTL.to(["#product2PriceBlock", "#product2", "#product1Date", "#logo", "#productBg1"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showProduct2+=3")
    masterTL.add("endscreen");
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.1")
    masterTL.from("#endText", 0.5, {x:-300, opacity:0, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#endAsset1", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1")
    masterTL.to("#endAsset1", 0.5, {rotation:-8, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1")
    masterTL.from("#endAsset2", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1.1")
    masterTL.to("#endAsset2", 0.5, {rotation:10, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1.1")
    // masterTL.from("#endAsset3", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1.2")
    // masterTL.to("#endAsset3", 0.5, {rotation:-5, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1.2")
    masterTL.from("#stamp", 0.5, {scale:2, rotation:360, ease:Sine.easeOut}, "endscreen+=1.6")
    masterTL.from("#stamp", 0.05, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.6")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=2");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.7");
 
    masterTL.play();
   
}