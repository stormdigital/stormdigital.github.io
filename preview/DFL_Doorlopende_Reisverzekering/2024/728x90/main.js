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

    var flag=false;
    if(flag){
        Enabler.exitOverride('Question Answered', "https://reisverzekeringen.defriesland.nl/doorlopend");
        Enabler.exitOverride('Default', 'https://reisverzekeringen.defriesland.nl/doorlopend');
        Enabler.exitOverride('USP Exit', 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=ja');
    }

    gsap.registerPlugin(SplitText);
    getAnimation();

    document.querySelector("#mainExit").addEventListener("click", function(){
        Enabler.exitOverride('Default', 'https://reisverzekeringen.defriesland.nl/doorlopend');
    })
    
    document.querySelector("#op1").addEventListener("click", function(){
        getUSPAnimation();
    })
    document.querySelector("#op2").addEventListener("click", function(){
        getQuestionAnimation();
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
    uspTL.to("#stickerWrapper", 0.5, {scale:0, opacity:0, rotation:-300, ease:Sine.easeOut},"start")
    uspTL.to("#uspScreen", 0.01, {opacity:1, display: "block", ease:Sine.easeIn}, "start");
    uspTL.to("#intro", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=0.01")
    uspTL.from("#uspScreen", 0.5, {width: 197, ease:Sine.easeInOut});
    uspTL.to("#stickerWrapper", 0.5, {scale:1, opacity:1, y: 0, x: 324, rotation:0, ease:Sine.easeOut})
    uspTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05});
    uspTL.from("#usp1", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#usp2", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#usp3", 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    uspTL.from("#disclaimer", 0.2, {opacity:0, ease: Sine.easeOut}, "+=0.3");
    uspTL.from("#cta", 0.5, {scale:0, ease: Back.easeOut});

    document.querySelector("#uspScreen").addEventListener("click", function(){
        Enabler.exitOverride('USP Exit', 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=ja');
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
    
    var splitT1 = new SplitText("#questionText", {type: "words"});

    questionTL = new TimelineLite({});
    questionTL.add("start")
    questionTL.to("#stickerWrapper", 0.5, {scale:0, opacity:0, rotation:-300, ease:Sine.easeOut},"start")
    questionTL.to("#questionScreen", 0.01, {opacity:1, display: "block", ease:Sine.easeIn}, "start");
    questionTL.to("#intro", 0.01, {opacity:0, ease:Sine.easeOut}, "start+=0.01")
    questionTL.from("#questionScreen", 0.5, {width: 197, ease:Sine.easeInOut});
    questionTL.to("#stickerWrapper", 0.5, {scale:1, opacity:1, y: 0, x: 324, rotation:0, ease:Sine.easeOut})
    questionTL.from(splitT1.words, 0.5, {opacity: 0, x:-20, ease: Sine.easeOut, stagger: 0.05});
    questionTL.from(document.querySelectorAll(".question")[0], 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    questionTL.from("#op3", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from("#op4", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from(document.querySelectorAll(".question")[1], 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    questionTL.from("#op5", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from("#op6", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from(document.querySelectorAll(".question")[2], 0.5, {x:-20, opacity:0, ease: Sine.easeOut});
    questionTL.from("#op7", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from("#op8", 0.2, {scale:0, ease:Sine.easeOut})
    questionTL.from("#disclaimer2", 0.2, {opacity:0, ease: Sine.easeOut}, "+=0.3");
    questionTL.from("#cta2", 0.5, {scale:0, ease: Back.easeOut});

    document.querySelector("#questionScreen").addEventListener("mouseover", function(){
        if(questionTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1.05});
        }
    })
    document.querySelector("#questionScreen").addEventListener("mouseout", function(){
        if(questionTL.progress() == 1){
            gsap.to("#cta", 0.3, {scale:1});
        }
    })

    window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend';

    document.querySelector("#cta2").addEventListener("click", function(){
        Enabler.exitOverride('Question Answered', window.newExitUrl);
    })
    document.querySelector("#cta2").addEventListener("mouseover", function(){
        if(questionTL.progress() == 1){
            gsap.to("#cta2", 0.3, {scale:1.05});
        }
    })
    document.querySelector("#cta2").addEventListener("mouseout", function(){
        if(questionTL.progress() == 1){
            gsap.to("#cta2", 0.3, {scale:1});
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

    if(e.target.classList.contains("yellow")){
        e.target.classList.remove("yellow");
        document.querySelectorAll(".option")[index-1].classList.add("yellow");
    }
    else{
        e.target.classList.add("yellow");
        document.querySelectorAll(".option")[index-1].classList.remove("yellow");
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

    if(wereld && maand && klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=we&bt=mnd&kl=ja';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>2,40</span> p.p.</span><BR>per maand"
    }
    else if(wereld && !maand && klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=we&bt=jr&kl=ja';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>28,80</span> p.p.</span><BR>per jaar"
    }
    
    if(!wereld && maand && klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=eu&bt=mnd&kl=ja';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>1,60</span> p.p.</span><BR>per maand"
    }
    else if(!wereld && !maand && klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=eu&bt=jr&kl=ja';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>19.90</span> p.p.</span><BR>per jaar"
    }

    if(wereld && maand && !klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=we&bt=mnd&kl=nee';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>2,67</span> p.p.</span><BR>per maand"
    }
    else if(wereld && !maand && !klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=we&bt=jr&kl=nee';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>32,00</span> p.p.</span><BR>per jaar"
    }
    
    if(!wereld && maand && !klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=eu&bt=mnd&kl=nee';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>1,78</span> p.p.</span><BR>per maand"
    }
    else if(!wereld && !maand && !klant){
        window.newExitUrl = 'https://reisverzekeringen.defriesland.nl/doorlopend?rv=nee&dg=eu&bt=yr&kl=nee';
        document.querySelector("#cta2 .ctaText").innerHTML = "<span>€ <span id='price'>21,33</span> p.p.</span><BR>per jaar"
    }
}

function isOdd(num) { return num % 2;}


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