window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    var split = new SplitText("#text1", {type: "words"});

    var arrowTL = gsap.timeline({paused:true});
    arrowTL.fromTo("#bgWrapper", 0.4, {WebkitMaskPositionX:"-240%", MaskPositionX:"-240%"}, {WebkitMaskPositionX:"170%", MaskPositionX:"170%", repeat:2, ease:Power0.easeNone});
    arrowTL.to("#bgWrapper", 0.0001, {WebkitMaskPositionX:"-240%", MaskPositionX:"-240%"});
    arrowTL.to("#bgWrapper", 0.2, {WebkitMaskPositionX:"-70%", MaskPositionX:"-70%", ease:Sine.easeOut});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from(["#bg", "#bg2"], 4,{x:-70, ease:Sine.easeOut}, "start");
    masterTL.to(arrowTL, 4,{progress: 1, ease:Sine.easeOut}, "start");
    masterTL.from("#logo", 0.5,{opacity:0, ease:Sine.easeOut}, "-=1");
    masterTL.from("#logoText", 0.5,{opacity:0, y:-20, ease:Sine.easeOut}, "-=0.3");
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.3}, "+=0.5"); 

}