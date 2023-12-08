window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#f8d770", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:120, MaskPositionX:120, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.3, {background:"#ffbe00", ease:Sine.easeInOut});
            gsap.to("#bgWrapper", 0.3, {WebkitMaskPositionX:106, MaskPositionX:106, ease:Sine.easeInOut});
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
    arrowTL.fromTo("#bgWrapper", 0.4, {WebkitMaskPositionX:-300, MaskPositionX:-300}, {WebkitMaskPositionX:300, MaskPositionX:300, ease:Power0.easeNone});
    arrowTL.to("#bgWrapper", 0.00000001, {WebkitMaskPositionX:-300, MaskPositionX:-300});
    arrowTL.to("#bgWrapper", 0.2, {WebkitMaskPositionX:106, MaskPositionX:106, ease:Sine.easeOut});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from(["#bg", "#bg2"], 3,{x:-20, ease:Sine.easeOut}, "start");
    masterTL.to(arrowTL, 3,{progress: 1, ease:Sine.easeOut}, "start");
    masterTL.from(split.lines, 0.6, {opacity:0, ease:Sine.easeOut, stagger: 0.15}, "start+=2.5");
    // masterTL.from("#text1", 0.6, {opacity:0, ease:Sine.easeOut}, "start+=2.5");
    masterTL.from("#logo", 0.5,{opacity:0, ease:Sine.easeOut}, "start+=3");
    masterTL.from("#logoText", 0.5,{opacity:0, y:-20, ease:Sine.easeOut}, "start+=3.2");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=3.5");

}