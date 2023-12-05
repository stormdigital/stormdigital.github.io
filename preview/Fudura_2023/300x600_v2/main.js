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

    var split = new SplitText("#text1", {type: "lines"});

    var arrowTL = gsap.timeline({paused:true});
    arrowTL.fromTo("#bgWrapper", 0.4, {WebkitMaskPositionX:"-240%", MaskPositionX:"-240%"}, {WebkitMaskPositionX:"270%", MaskPositionX:"270%", ease:Power0.easeNone});
    arrowTL.to("#bgWrapper", 0.00000001, {WebkitMaskPositionX:"-240%", MaskPositionX:"-240%"});
    arrowTL.to("#bgWrapper", 0.2, {WebkitMaskPositionX:"-70%", MaskPositionX:"-70%", ease:Sine.easeOut});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from(["#bg", "#bg2"], 3,{x:-70, ease:Sine.easeOut}, "start");
    masterTL.to(arrowTL, 3,{progress: 1, ease:Sine.easeOut}, "start");
    masterTL.from("#logo", 0.5,{opacity:0, ease:Sine.easeOut}, "-=1");
    masterTL.from("#logoText", 0.5,{opacity:0, y:-20, ease:Sine.easeOut}, "-=0.3");
    masterTL.from(split.lines, 0.6, {x:-15, ease:Sine.easeOut, stagger: 0.15}, "+=0.5");
    masterTL.from("#text1", 0.6, {opacity:0, ease:Sine.easeOut}, "-=0.6");

}