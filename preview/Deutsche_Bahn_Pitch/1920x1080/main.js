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

    gsap.registerPlugin(SplitText);
    getAnimation();

    document.querySelector("#mainExit").addEventListener("click", function(){
        Enabler.exitOverride("Exit", "https://www.bahn.de/")
        mainTL.progress(1);
    })
    
    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        
        if(mainTL.progress() == 1){
            // gsap.to("#cta", 0.3, {scale:1.05, ease:Power2.easeInOut});
            gsap.fromTo("#bg", 2, {x:0}, {x:-2970, ease:Power0.easeNone});
            gsap.fromTo("#train", 1, {y:-3}, {y:0, repeat:1, yoyo:true, ease:Sine.easeInOut});
        }
        gsap.to("#cta", 0.3, {background:"#b52522", ease:Power2.easeInOut});
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        
        if(mainTL.progress() == 1){
            // gsap.to("#cta", 0.3, {scale:1.0, ease:Power2.easeInOut});
        }
        // gsap.to("#cta", 0.3, {background:"#EC0016", ease:Power2.easeInOut});
    })

}

function getAnimation(){

    createSnow();
    
    var splitT1 = new SplitText("#text1", {type: "words"});
    var splitT2 = new SplitText("#text2", {type: "words"});

    mainTL = new TimelineLite({});
    mainTL.add("start")
    mainTL.to("#loaderWrapper", 0.0000001, {opacity:0, ease:Sine.easeInOut}, "start")
    mainTL.from("#snowBg", 3, {scale:1.1, ease:Sine.easeOut}, "start")
    mainTL.from("#snowFront", 3, {scale:1.4, ease:Sine.easeOut}, "start")
    mainTL.from("#panel", 0.5, {left:"-100%", ease:Power1.easeOut}, "start+=1")
    mainTL.from("#logo", 0.3, {scale:0, ease:Sine.easeOut}, "start+=1.5")
    mainTL.from(splitT1.words, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.1}, "start+=1.7");
    mainTL.from("#redLine", 0.5, {width:0, ease:Power3.easeOut}, "start+=2.5")
    mainTL.to(["#snowBg", "#snowWrapper", "#snowFront"], 0.5, {opacity:0, ease:Power2.easeOut}, "start+=5")
    mainTL.to("#bg", 2, {x:-2970, repeat:4, ease:Power0.easeNone}, "start+=5")
    mainTL.to("#train", 0.66, {y:-3, repeat:14, yoyo:true, ease:Sine.easeInOut}, "start+=5")
    mainTL.to(splitT1.words, 0.3, {opacity: 0, x:20, ease: Sine.easeIn, stagger: 0.05}, "start+=5");
    mainTL.to("#redLine", 0.3, {width:0, ease:Power3.easeInOut, onStart:function(){
        gsap.set("#redLine", {left:"auto", right:449});
    }}, "start+=5.2")
    mainTL.to("#panel", 0.5, {width:1080, ease:Sine.easeInOut}, "start+=5.3")
    mainTL.to("#logo", 0.5, {y:-1, ease:Sine.easeInOut}, "start+=5.3")
    mainTL.from(splitT2.words, 0.3, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.1}, "start+=5.7");
    mainTL.to("#redLine", 0.3, {width:157, ease:Power3.easeInOut, onStart:function(){
        gsap.set("#redLine", {left:109, right:"auto",});
    }}, "start+=6.5")
    mainTL.from("#usp1", 0.3, {x:-30, opacity:0, ease:Sine.easeOut}, "start+=7")
    mainTL.from("#usp2", 0.3, {x:-30, opacity:0, ease:Sine.easeOut}, "start+=7.1")
    mainTL.from("#usp3", 0.3, {x:-30, opacity:0, ease:Sine.easeOut}, "start+=7.2")
    mainTL.from("#usp4", 0.3, {x:-30, opacity:0, ease:Sine.easeOut}, "start+=7.3")
    // mainTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=7.5")
    // mainTL.to("#cta", 0.3, {scale:1.05, ease:Back.easeInOut, repeat:1, yoyo:true}, "start+=10")
    // mainTL.to("#cta", 0.3, {scale:1.05, ease:Back.easeInOut, repeat:1, yoyo:true}, "start+=14")
}

function createSnow(){
    var wrapper = document.querySelector("#snowWrapper");
    for (var i = 0; i < 700; i++) {
        var newDiv = document.createElement("div");
        var size = gsap.utils.random(4, 10);
        newDiv.style.width = size+"px";
        newDiv.style.height = size+"px";
        newDiv.style.opacity = gsap.utils.random(0.3, 0.9);
        newDiv.style.left = gsap.utils.random(0, 1920)+"px";
        newDiv.style.top = gsap.utils.random(-1080, 1080)+"px";
        newDiv.classList.add("snow");
        wrapper.appendChild(newDiv);

        gsap.to(newDiv, 6, {y:gsap.utils.random(1000, 2000), ease:Power0.easeNone})
        gsap.to(newDiv, 6, {x:gsap.utils.random(-500, 500), ease:Power0.easeNone})
        gsap.to(newDiv, 6, {scale:gsap.utils.random(0.5, 1.2), ease:Power0.easeNone})
    }
}