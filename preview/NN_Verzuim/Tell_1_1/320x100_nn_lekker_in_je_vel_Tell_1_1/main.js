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

    // setDynamic();

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#d4512b", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#ea650d", ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        // Enabler.exitOverride("Dynamic exit", dynamicContent.NN_Lekker_in_Je_Vel_Feed_master[0].mainExit.Url);
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    var split = new SplitText("#text1", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.to("#t1_1", 0.3, {opacity:1, ease:Sine.easeOut})
    masterTL.to("#t2_1", 0.3, {opacity:1, ease:Sine.easeOut}, "-=0.15")
    
    for (var i = 1; i <= 4; i++) {
        masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_2", "#t2_2"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_2", "#t2_2"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_3", "#t2_3"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_3", "#t2_3"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
        masterTL.to(["#t1_4", "#t2_4"], 0, {opacity:1, ease:Power0.easeNone})
        masterTL.to(["#t1_4", "#t2_4"], 0, {opacity:0, ease:Power0.easeNone}, "+=.1")
    }
    masterTL.to(["#t1_1", "#t2_1"], 0, {opacity:1, ease:Power0.easeNone})
    masterTL.to("#logoWrapper", 0.4, {width:143, height:88, ease:Sine.easeInOut})
    masterTL.to(["#t1_1", "#t2_1"], 0.3, {opacity:0, ease:Power2.easeInOut}, "-=0.4")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.02});
    masterTL.to("#logoWrapper", 0.4, {width:308, ease:Sine.easeInOut}, "+=1")
    masterTL.to("#logo", 0.4, {x:-10, ease:Sine.easeInOut}, "-=0.4")
    masterTL.from("#endText", 0.3, {opacity:0, ease:Sine.easeOut})
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut})
    masterTL.from("#border", 1, {opacity:0, ease:Power3.easeOut}, "+=1")
}