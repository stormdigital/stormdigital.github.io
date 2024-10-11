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
    masterTL.from("#bgBorder", 0.5, {scale:1.4, y:25, ease:Sine.easeOut}, "start")
    masterTL.from("#text1", 0.5, {y:100, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#text1HighlightWrapper", 0.7, {width:0, ease:Sine.easeInOut}, "start+=1.2")

    masterTL.add("showProduct1", "+=2.5")
    masterTL.to(["#bgBorder", "#bg"], 0.5, {y:-250, ease:Sine.easeIn}, "showProduct1")
    masterTL.to(["#text1", "#text1HighlightWrapper"], 0.5, {y:-300, ease:Sine.easeInOut}, "showProduct1")
    masterTL.from("#product1Bg", 0.5, {y:200, ease:Sine.easeOut}, "showProduct1+=0.4")
    masterTL.from("#product1Price", 0.5, {y:250, ease:Sine.easeOut}, "showProduct1+=0.4")
    masterTL.from("#product1", 0.5, {y:300, ease:Sine.easeOut}, "showProduct1+=0.4")
    
    masterTL.add("showProduct2", "+=2")
    masterTL.to("#product1Bg", 0.5, {y:-300, ease:Sine.easeOut}, "showProduct2")
    masterTL.to("#product1Price", 0.5, {y:-350, ease:Sine.easeOut}, "showProduct2")
    masterTL.to("#product1", 0.5, {y:-400, ease:Sine.easeOut}, "showProduct2")
    masterTL.from("#product2Bg", 0.5, {y:200, ease:Sine.easeOut}, "showProduct2+=0.2")
    masterTL.from("#product2Price", 0.5, {y:250, ease:Sine.easeOut}, "showProduct2+=0.2")
    masterTL.from("#product2", 0.5, {y:300, ease:Sine.easeOut}, "showProduct2+=0.2")

    masterTL.add("showFrame2", "+=2")
    masterTL.to("#product2Bg", 0.5, {y:-300, ease:Sine.easeOut}, "showFrame2")
    masterTL.to("#product2Price", 0.5, {y:-350, ease:Sine.easeOut}, "showFrame2")
    masterTL.to("#product2", 0.5, {y:-400, ease:Sine.easeOut}, "showFrame2")
    masterTL.from("#text2", 0.5, {y:180, ease:Sine.easeOut}, "showFrame2+=0.2")
    masterTL.from("#sticker", 0.5, {y:150, ease:Sine.easeOut}, "showFrame2+=0.4")
    masterTL.from("#sticker2", 0.5, {y:150, ease:Sine.easeOut}, "showFrame2+=0.5")
    masterTL.from("#sticker3", 0.5, {y:150, ease:Sine.easeOut}, "showFrame2+=0.7")
    masterTL.to(["#text2", "#sticker", "#sticker2", "#sticker3"], 0.5, {opacity:0, ease:Sine.easeInOut}, "showFrame2+=3")

    masterTL.add("showFrame3")

    masterTL.to("#logo", 0.5, {scale:1.35714285714, left:122, top: 12, ease:Sine.easeInOut}, "showFrame3")
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeOut}, "showFrame3+=0.5")
    masterTL.from("#text3White", 0.5, {y:200, ease:Sine.easeOut}, "showFrame3+=1")
    masterTL.from(["#text3HighlightWrapper", "#text4HighlightWrapper"], 0.5, {width:0, ease:Sine.easeOut}, "showFrame3+=1.7")

    masterTL.add("endScreen")
    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut}, "endscreen");
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "endscreen+=0.7");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "endscreen+=0.7");

    masterTL.play();

    console.log(masterTL.duration());
}