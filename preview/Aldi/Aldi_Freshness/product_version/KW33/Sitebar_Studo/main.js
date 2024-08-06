window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }

    function enablerInitHandler() {
        if (Enabler.isPageLoaded()) {
            showAd();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
        }
	}
	
	function showAd() {
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                
                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
            
        }
        init();
    }
}



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
        masterTL.pause();
        // masterTL.progress(1);
        Enabler.exit('Default');
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
        gsap.set(["#date", "#product1Info", "#product1Disclaimer", "#product2Info", "#product2Disclaimer"], {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set(["#date", "#product1Info", "#product1Disclaimer", "#product2Info", "#product2Disclaimer"], {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    
    masterTL.from("#intro1 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut});    
    masterTL.from("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");    
    masterTL.from("#intro2 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");
    masterTL.from("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");     
    masterTL.from("#intro3 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.from("#intro3 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro3 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");     
    masterTL.from("#intro4 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.from("#intro4 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    

    masterTL.from("#bgWrapper", 0.6, {width:0, ease:Sine.easeInOut}, "+=1");    
    
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeInOut});    
    masterTL.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut});

    var stickerDur = 1;
    masterTL.add("stickerStart")
    masterTL.from("#stickerBackReset", stickerDur/4, {opacity:0, ease:"power1.inOut"}, "stickerStart");    
    masterTL.to("#stickerBackWrapper", stickerDur, {x:-215, y:-215, ease:"power1.inOut"}, "stickerStart");    
    masterTL.fromTo("#stickerBack", stickerDur, {y:0}, {y:-322, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#stickerWrapper", stickerDur, {x:230, y:230, ease:"power1.inOut"}, "stickerStart");    
    masterTL.from("#sticker", stickerDur, {x:-230, y:-230, ease:"power1.inOut"}, "stickerStart");   

    masterTL.from("#productBg", 0.6, {width:0, ease:Sine.easeInOut}, "+=1.5");  
    masterTL.from("#date", 0.3, {opacity:0, ease:Sine.easeOut});  
    masterTL.from("#product1", 0.6, {scale:0, ease: "back.out(1.4)",}, "-=0.15");  
    masterTL.from("#product1Info", 0.5, {opacity:0, ease:Back.easeOut}, "-=0.4");  
    masterTL.from("#product1Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  
    masterTL.to("#product1", 0.5, {scale:0, ease: "back.in(1.4)",}, "+=1");  
    masterTL.to("#product1Info", 0.5, {opacity:0, ease:Back.easeIn}, "-=0.4");  
    masterTL.to("#product1Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  
    
    masterTL.from("#product2", 0.6, {scale:0, ease: "back.out(1.4)",});  
    masterTL.from("#product2Info", 0.5, {opacity:0, ease:Back.easeOut}, "-=0.4");  
    masterTL.from("#product2Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  
    // masterTL.to("#product2", 0.5, {scale:0, ease: "back.in(1.4)",}, "+=1");  
    // masterTL.to("#product2Info", 0.5, {scale:0, ease:Back.easeIn}, "-=0.4");  
    // masterTL.to("#product2Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");  

    // masterTL.from("#product3", 0.6, {scale:0, ease: "back.out(1.4)",});  
    // masterTL.from("#product3Info", 0.5, {scale:0, ease:Back.easeOut}, "-=0.4");  
    // masterTL.from("#product3Disclaimer", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.4");

    masterTL.from("#endBg", 0.6, {width:0, ease:Sine.easeInOut}, "+=1.5");
    masterTL.to("#logo", 0.5, {opacity:0, ease:Sine.easeInOut});    
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "-=0.5");    
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.1");   
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeInOut});    
    masterTL.from("#endHighlight1Wrapper", 0.5, {width:0, ease:Sine.easeInOut}); 
    masterTL.from("#endHighlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "-=0.2"); 
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.1");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    
    masterTL.play();

}