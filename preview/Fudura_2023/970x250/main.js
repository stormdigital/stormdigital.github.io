window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#f8d770", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:360, MaskPositionX:360, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#ffbe00", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:336, MaskPositionX:336, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    var split = new SplitText("#text1", {type: "lines"});

    var arrowTL = gsap.timeline({paused:true});
    // arrowTL.fromTo("#bgWrapper", 0.4, {WebkitMaskPositionX:-280, MaskPositionX:-280}, {WebkitMaskPositionX:300, MaskPositionX:300, ease:Power0.easeNone});
    arrowTL.to("#bgWrapper", 0.00000001, {WebkitMaskPositionX:-500, MaskPositionX:-500});
    arrowTL.to("#bgWrapper", 0.2, {WebkitMaskPositionX:336, MaskPositionX:336, ease:Sine.easeOut});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from(["#bg", "#bg2"], 2,{x:-200, ease:Sine.easeOut}, "start");
    masterTL.to(arrowTL, 2,{progress: 1, ease:Sine.easeOut}, "start");
    masterTL.from(split.lines, 0.6, {opacity:0, ease:Sine.easeOut, stagger: 0.15}, "start+=0.8");
    // masterTL.from("#text1", 0.6, {opacity:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#logo", 0.5,{opacity:0, ease:Sine.easeOut}, "start+=2");
    masterTL.from("#logoTextWrapper", 1,{width:0, ease:Sine.easeOut}, "start+=2.2");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.5");

}