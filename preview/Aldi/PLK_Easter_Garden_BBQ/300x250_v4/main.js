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
    masterTL.add("start", "-=0.2");
    // masterTL.to("#introBg", 4, {scale:1.1, ease:Power0.easeNone}, "start")
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.3")
    masterTL.to(["#introBg", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7")
    masterTL.add("showProduct1");
    // masterTL.from("#productBg1", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1")
    masterTL.from("#product1", 0.7, {scale:0, ease:Back.easeOut}, "showProduct1+=0.5")
    masterTL.from("#product1PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=0.8")
    masterTL.from("#product1Date", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1+=1")
    masterTL.to("#product1Date", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1+=3")
    // masterTL.to("#productBg1", 1, {scale:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.to("#product1", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.to("#product1PriceBlock", 0.3, {opacity:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.add("showProduct2", "-=0.2");
    masterTL.from("#productBg2", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct2")
    masterTL.from("#product2", 0.7, {scale:0, ease:Back.easeOut}, "showProduct2+=0.5")
    masterTL.from("#product2PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct2+=0.8")
    masterTL.from("#product2Date", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct2+=1")
    masterTL.to(["#product2PriceBlock", "#product2", "#product2Date", "#productBg2", "#logo", "#productBg1"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showProduct2+=3")
    masterTL.add("endscreen");
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.1")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#endAsset1", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1")
    masterTL.to("#endAsset1", 0.5, {rotation:-8, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1")
    masterTL.from("#endAsset2", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1.2")
    masterTL.to("#endAsset2", 0.5, {rotation:10, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1.2")
    masterTL.from("#endAsset3", 0.5, {opacity:0, ease:Back.easeOut}, "endscreen+=1.4")
    masterTL.to("#endAsset3", 0.5, {rotation:-5, yoyo:true, repeat:5, ease:Sine.easeInOut}, "endscreen+=1.4")
    masterTL.from("#stamp", 0.5, {scale:2, rotation:360, ease:Sine.easeOut}, "endscreen+=1.6")
    masterTL.from("#stamp", 0.05, {opacity:0, ease:Sine.easeOut}, "endscreen+=1.6")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=2");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.7");
 
    masterTL.play();

    console.log(masterTL.duration());
}