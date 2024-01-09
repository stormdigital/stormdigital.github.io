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
    
    document.querySelector("#op1").addEventListener("click", function(){
        getQuestionAnimation();
    })
    document.querySelector("#op2").addEventListener("click", function(){
        getUSPAnimation();
    })

    var optionBtns = document.querySelectorAll(".option");
    optionBtns.forEach(optionBtn => {
        optionBtn.addEventListener("click", optionClicked);
    });
}

function getAnimation(){
    
    var splitT1 = new SplitText("#introText", {type: "words"});

    introTL = new TimelineLite({});
    introTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut})
    introTL.add("start")
    introTL.from("#intro", 0.5, {scale:0, ease:Back.easeOut})
    introTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05}, "start+=0.5");
    introTL.from("#op1", 0.2, {scale:0, ease:Sine.easeOut})
    introTL.from("#op2", 0.2, {scale:0, ease:Sine.easeOut})
    introTL.from("#stickerWrapper", 0.5, {scale:0, rotation:-300, ease:Back.easeOut},"+=1")
}

function getUSPAnimation(){
    
    var splitT1 = new SplitText("#uspText", {type: "words"});

    uspTL = new TimelineLite({});
    uspTL.add("start")
    uspTL.to("#intro", 0.5, {scale:0, ease:Sine.easeOut}, "start")
    uspTL.to("#stickerWrapper", 0.5, {scale:0, opacity:0, rotation:-300, ease:Sine.easeOut},"start")
    uspTL.to("#uspScreen", 0.5, {scale:1, ease:Sine.easeInOut});
    uspTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05});
    uspTL.from("#usp1", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#usp2", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#usp3", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#disclaimer", 0.2, {opacity:0, ease: Sine.easeOut}, "+=0.3");
    uspTL.from("#cta", 0.5, {scale:0, ease: Back.easeOut});

    document.querySelector("#uspScreen").addEventListener("click", function(){
        Enabler.exit("USP Exit");
    })
    document.querySelector("#uspScreen").addEventListener("mouseover", function(){
        if(uspTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.05});
        }
    })
    document.querySelector("#uspScreen").addEventListener("mouseout", function(){
        if(uspTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1});
        }
    })
}

function getQuestionAnimation(){
    
    var splitT1 = new SplitText("#uspText", {type: "words"});

    uspTL = new TimelineLite({});
    uspTL.add("start")
    uspTL.to("#intro", 0.5, {scale:0, ease:Sine.easeOut}, "start")
    uspTL.to("#stickerWrapper", 0.5, {scale:0, opacity:0, rotation:-300, ease:Sine.easeOut},"start")
    uspTL.to("#questionScreen", 0.5, {scale:1, ease:Sine.easeInOut});
    uspTL.to("#stickerWrapper", 0.5, {scale:1, opacity:1, y:-130, rotation:0, ease:Sine.easeOut})
    // uspTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05});
    // uspTL.from("#usp1", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    // uspTL.from("#usp2", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    // uspTL.from("#usp3", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    // uspTL.from("#disclaimer", 0.2, {opacity:0, ease: Sine.easeOut}, "+=0.3");
    // uspTL.from("#cta", 0.5, {scale:0, ease: Back.easeOut});

    document.querySelector("#questionScreen").addEventListener("mouseover", function(){
        if(uspTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.05});
        }
    })
    document.querySelector("#questionScreen").addEventListener("mouseout", function(){
        if(uspTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1});
        }
    })
}

function optionClicked(e){
    var index = e.target.parentElement.id.match(/\d+/)[0];
    if(isOdd(index)){
        index++;
    }
    else{
        index--;
    }

    console.log(index);

    if(e.target.classList.contains("yellow")){
        e.target.classList.remove("yellow");
        document.querySelectorAll(".option")[index-1].classList.add("yellow");
        console.log(document.querySelectorAll(".option")[index]);
    }
    else{
        e.target.classList.add("yellow");
        document.querySelectorAll(".option")[index-1].classList.remove("yellow");
        console.log(document.querySelectorAll(".option")[index]);
    }

    calcPrices();
}

function calcPrices(){

    if(document.querySelector("#op3 .option").classList.contains("yellow")){
        var wereld = true;
    }
    else{
        var wereld = false;
    }

    if(document.querySelector("#op5 .option").classList.contains("yellow")){
        var maand = true;
    }
    else{
        var maand = false;
    }
    
    if(document.querySelector("#op7 .option").classList.contains("yellow")){
        var klant = true;
    }
    else{
        var klant = false;
    }

    console.log(wereld, maand, klant);

    if(wereld && maand && klant){
        console.log("€2,40 maand")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>2,40</span> p.p.</span><BR>per maand"
    }
    else if(wereld && !maand && klant){
        console.log("€28,80 jaar")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>28,80</span> p.p.</span><BR>per jaar"
    }
    
    if(!wereld && maand && klant){
        console.log("€1,60 maand")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>1,60</span> p.p.</span><BR>per maand"
    }
    else if(!wereld && !maand && klant){
        console.log("€19,19 jaar")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>19.90</span> p.p.</span><BR>per jaar"
    }

    if(wereld && maand && !klant){
        console.log("€2,67 maand")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>2,67</span> p.p.</span><BR>per maand"
    }
    else if(wereld && !maand && !klant){
        console.log("€32,00 jaar")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>32,00</span> p.p.</span><BR>per jaar"
    }
    
    if(!wereld && maand && !klant){
        console.log("€1,78 maand")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>1,78</span> p.p.</span><BR>per maand"
    }
    else if(!wereld && !maand && !klant){
        console.log("€21,33")
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>21,33</span> p.p.</span><BR>per jaar"
    }
}

function isOdd(num) { return num % 2;}