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
    masterTL.add("start", "-=0.2");
    masterTL.from("#text1", 0.5, {x:300, ease:Sine.easeOut}, "start+=0.3")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.3")
    masterTL.to(["#introBg", "#text1", "#text1HighlightWrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "start+=3.7")
    masterTL.add("showProduct1");
    masterTL.from("#product1", 0.7, {y:300, ease:Back.easeOut}, "showProduct1+=0.5")
    masterTL.from("#product1PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=0.8")
    masterTL.to("#product1", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.to(["#product1PriceBlock", "#product1Date"], 0.3, {opacity:0, ease:Sine.easeOut}, "showProduct1+=3")
    masterTL.add("showProduct2", "-=0.2");
    masterTL.from("#product2Date", 0.3, {opacity:0, ease:Sine.easeOut}, "showProduct2")
    masterTL.from("#product2", 0.7, {y:300, ease:Back.easeOut}, "showProduct2+=0.5")
    masterTL.from("#product2PriceBlock", 0.5, {scale:0, ease:Sine.easeOut}, "showProduct2+=0.8")
    masterTL.to(["#product2PriceBlock", "#product2", "#product2Date", "#logo", "#productBg1"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showProduct2+=3")
    masterTL.add("endscreen");
    masterTL.from("#logo2", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.1")
    masterTL.from("#endText", 0.5, {x:-300, ease:Sine.easeOut}, "endscreen+=0.2")
    masterTL.from("#endAsset1", 1, {x:-50, ease:Sine.easeOut}, "endscreen+=1")
    masterTL.from("#endAsset1", 1.3, {rotation:-60, ease:Back.easeOut}, "endscreen+=1")
    masterTL.to("#endAsset1", 0.8, {rotation:-15, repeat:1, yoyo:true, ease:Sine.easeInOut}, "endscreen+=2.6")
    masterTL.from("#endAsset2", 0.5, {x:100, ease:Sine.easeOut}, "endscreen+=1.1")
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.2");
 
    masterTL.play();

    console.log(masterTL.duration());
}