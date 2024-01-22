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
        Enabler.exit("Default");
    })

    var optionBtns = document.querySelectorAll(".option");
    optionBtns.forEach(optionBtn => {
        optionBtn.addEventListener("click", optionClicked);
    });
}

function getAnimation(){

    createSnow();
    
    var splitT1 = new SplitText("#introText", {type: "words"});
    var splitT2 = new SplitText("#introText02", {type: "words"});

    introTL = new TimelineLite({});
    introTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut})
    introTL.add("start")
    introTL.to("#cta", 0.01, {opacity:0, ease: Back.easeOut}, "start");
    introTL.to("#introText02", 0.01, {opacity:0, ease: Back.easeOut}, "start");
    introTL.to("#disclaimer", 0.01, {opacity:0, ease: Back.easeOut}, "start");
    introTL.from("#intro", 0.5, {scale:0, ease:Back.easeOut})
    introTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05}, "start+=0.5");
    introTL.to(splitT1.words, 0.5, {opacity: 0, ease: Sine.easeOut}, "+=2");
    introTL.to("#intro", 0.5, {width:394, ease:Back.easeOut})
    introTL.to("#introText02", 0.5, {opacity: 1})
    introTL.from(splitT2.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05});
    introTL.from("#disclaimer", 0.5, {opacity: 0, scale:0, ease:Back.easeOut}, "-=1")
    introTL.from("#cta", 0.5, {scale:0, opacity:0, ease: Back.easeOut});
    introTL.to("#snowWrapper", 0.5, {opacity:0, ease:Sine.easeOut}, "start+=14.5");
}


function createSnow(){
    var wrapper = document.querySelector("#snowWrapper");
    for (var i = 0; i < 700; i++) {
        var newDiv = document.createElement("div");
        var size = gsap.utils.random(1, 4);
        newDiv.style.width = size+"px";
        newDiv.style.height = size+"px";
        newDiv.style.opacity = gsap.utils.random(0.3, 0.9);
        newDiv.style.left = gsap.utils.random(0, 700)+"px";
        newDiv.style.top = gsap.utils.random(-600, 600)+"px";
        newDiv.classList.add("snow");
        wrapper.appendChild(newDiv);

        var rand = gsap.utils.random(5, 7.5);
        gsap.to(newDiv, rand, {y:gsap.utils.random(600, 1200), ease:Power0.easeNone, onComplete:animateAgain});
        gsap.to(newDiv, rand, {x:gsap.utils.random(-250, 250), ease:Power0.easeNone})
        gsap.to(newDiv, rand, {scale:gsap.utils.random(0.5, 1.2), ease:Power0.easeNone})
    }
}

function animateAgain(){

    gsap.fromTo(this._targets[0], 7.5, {
        y:-600, 
        x:gsap.utils.random(0, 300), 
        scale:1
    }, 
    {
        y:gsap.utils.random(600, 1200), 
        x:gsap.utils.random(-250, 250), 
        scale:gsap.utils.random(0.5, 1.2), ease:Power0.easeNone
    }
    );
    
}