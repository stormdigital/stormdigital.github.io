window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#f8d770", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:"-24%", MaskPositionX:"-24%", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#ffbe00", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:"-29%", MaskPositionX:"-29%", ease:Sine.easeInOut});
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
    arrowTL.fromTo("#bgWrapper", 0.4, {WebkitMaskPositionX:"-150%", MaskPositionX:"-150%"}, {WebkitMaskPositionX:"130%", MaskPositionX:"130%", ease:Power0.easeNone});
    arrowTL.to("#bgWrapper", 0.00000001, {WebkitMaskPositionX:"-150%", MaskPositionX:"-150%"});
    arrowTL.to("#bgWrapper", 0.2, {WebkitMaskPositionX:"-29%", MaskPositionX:"-29%", ease:Sine.easeOut});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from(["#bg", "#bg2"], 3,{x:-70, ease:Sine.easeOut}, "start");
    masterTL.to(arrowTL, 3,{progress: 1, ease:Sine.easeOut}, "start");
    masterTL.from(split.lines, 0.6, {opacity:0, ease:Sine.easeOut, stagger: 0.15}, "start+=0.8");
    // masterTL.from("#text1", 0.6, {opacity:0, ease:Sine.easeOut}, "start+=0.8");
    masterTL.from("#logo", 0.5,{opacity:0, ease:Sine.easeOut}, "start+=2");
    masterTL.from("#logoTextWrapper", 1,{width:0, ease:Sine.easeOut}, "start+=2.2");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.5");

}