window.onload = function () {
    init();
}

function loadLocalDynamic() {
    var adSize = "300x600";
    if(localDynamicData.tagline[adSize] != ""){
        document.querySelector('#tagline').innerHTML = localDynamicData.tagline[adSize];
    }
    else{
        document.querySelector('#tagline').innerHTML = localDynamicData.tagline["default"];
    }

    document.querySelector('#logo').data = localDynamicData.logo;
}

function init(clickTAGvalue) {
    loadLocalDynamic();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bottomWrapper", 0.5, {bottom:"50%", y:"50%", ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#logo", 0.5, {width:200, ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#bar", 0.1, {width:0, margin:0, ease:Sine.easeInOut}, "start+=1")
    masterTL.from("#taglineWrapper", 1, {width:0, ease:Power2.easeOut}, "start+=1.1")
    masterTL.add("showOneTool", "start+=1")
    masterTL.from("#oneTool1", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool")
    masterTL.from("#oneTool2", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.1")
    masterTL.from("#oneTool3", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.2")
    masterTL.from("#oneTool4", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.3")
    masterTL.from("#oneTool5", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.4")
    masterTL.from("#oneTool6", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.5")
    masterTL.from("#oneTool7", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.6")
    masterTL.add("showProduct5", "-=1")
    masterTL.from("#product", 0.5, {x:100, ease:Back.easeOut}, "showProduct5")
    for(var i=1; i<6; i++){
        console.log(i);
        masterTL.from("#tool"+i+" .toolText", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct5+="+(0.1*i))
        masterTL.from("#tool"+i+" .toolImage", 0.5, {opacity:0, stagger:0.1, ease:Sine.easeOut}, "showProduct5+="+(0.1*i))
    }
    for(var i=1; i<6; i++){
        masterTL.to("#toolsWrapper", 0.5, {y:"+=90", ease:Sine.easeInOut}, "+=1")
        masterTL.to("#tool"+i, 0.5, {opacity:0, ease:Power2.easeOut}, "-=0.5")
        masterTL.to("#tool"+(i+5), 0.5, {opacity:1, ease:Power2.easeIn}, "-=0.5")
    }

    console.log(masterTL.duration());
    
    
    // masterTL.to("#toolsWrapper", 2, {y:-186, ease:Sine.easeOut}, "showProduct+=4")

}