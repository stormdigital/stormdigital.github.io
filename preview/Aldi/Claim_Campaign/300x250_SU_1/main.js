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
    masterTL.add("start")
    
    masterTL.add("start", "+=0.5");
    
    masterTL.add("showProduct1", "-=0.5");
    masterTL.from("#product1", 1, {x:"-150%", ease:Sine.easeOut}, "showProduct1")
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct1+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showProduct1+=1.25")
    
    masterTL.add("showProduct2", "+=0.5");
    masterTL.to("#product1", 1, {x:-70, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#product2", 1, {x:150, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#product2Bg", {right:0});
    }}, "showProduct2")
    masterTL.to(["#text1HighlightWrapper", "#text1"], 1, {scale:0.61349693251, ease:Sine.easeInOut}, "showProduct2")
    masterTL.from("#text2", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct2+=0.5")
    masterTL.from("#text2HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "showProduct2+=1.25")
    
    masterTL.add("showProduct3", "+=0.5");
    masterTL.from("#payOff1", 0.5, {x:-150, ease:Sine.easeInOut}, "showProduct3")
    masterTL.from("#payOff2", 0.5, {x:150, ease:Sine.easeInOut}, "showProduct3+=0.3")
    masterTL.from("#payOff3", 0.5, {x:-150, ease:Sine.easeInOut}, "showProduct3+=0.6")
    
    masterTL.add("endScreen", "+=1")
    
    masterTL.to(["#text1HighlightWrapper", "#text1", "#text2HighlightWrapper", "#text2", "#payOffWrapper"], 0.5, {opacity:0, ease:Sine.easeInOut}, "endScreen")
    masterTL.to("#product1", 1, {x:-350, ease:Sine.easeInOut}, "endscreen")
    masterTL.to("#product2", 1, {x:-300, ease:Sine.easeInOut}, "endscreen")
    masterTL.to("#product2Bg", 0.9, {width:"100%", ease:Sine.easeIn}, "endscreen")
    masterTL.to("#logo", 0.5, {scale:1.97674418605, left:"50%", translateX:"-50%", top:36, ease:Sine.easeInOut}, "endscreen+=0.6")
    masterTL.from("#tagline", 0.5, {opacity:0, ease:Sine.easeOut}, "endscreen+=1");
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen+=1.5");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=2.2");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=2.2");

    masterTL.play();

    console.log(masterTL.duration());
}