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
    masterTL.from("#bar", 0.1, {width:0, margin:0, ease:Sine.easeInOut})
    masterTL.from("#taglineWrapper", 1, {width:0, ease:Power2.easeOut})
    masterTL.add("showOneTool", "-=0.5")
    masterTL.from("#oneTool1", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool")
    masterTL.from("#oneTool2", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.1")
    masterTL.from("#oneTool3", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.2")
    masterTL.from("#oneTool4", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.3")
    masterTL.from("#oneTool5", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.4")
    masterTL.from("#oneTool6", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.5")
    masterTL.from("#oneTool7", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.6")
    masterTL.add("showProduct5", "-=1")
    masterTL.from("#product", 2, {x:600, ease:Back.easeOut}, "showProduct5")
    masterTL.to("#toolsWrapper", 0.1, {y:-185}, "showProduct5")
    masterTL.fromTo("#tool5 .toolImage", 0.5, {y:150, opacity:0}, {y:0, opacity:1, ease:Sine.easeOut}, "showProduct5+=1.5")
    masterTL.from("#tool5 .toolImage", 0.5, {x:-100, ease:"back.out(1)"}, "showProduct5+=2.2")
    masterTL.to("#product", 0.2, {x:2, repeat:1, yoyo:true, ease:Sine.easeInOut}, "showProduct5+=2.3")
    masterTL.to("#tool5 .toolText", 0.3, {opacity:1, ease:Sine.easeInOut}, "showProduct5+=2.4")
    masterTL.to("#tool5 .toolText", 0.3, {opacity:0, ease:Sine.easeInOut}, "showProduct5+=3.5")
    masterTL.to("#tool5 .toolImage", 0.5, {x:-100, ease:"back.out(1)"}, "showProduct5+=3.5")
    masterTL.to("#tool5 .toolImage", 0.5, {y:150, opacity:0, ease:Sine.easeOut}, "showProduct5+=4")
    masterTL.to("#tool5 .toolImage", 0.000001, {y:0, x:0}, "showProduct5+=4.5")
    masterTL.add("showProduct6")
    masterTL.to("#toolsWrapper", 0.1, {y:-275}, "showProduct6")
    masterTL.fromTo("#tool6 .toolImage", 0.5, {y:150, opacity:0}, {y:0, opacity:1, ease:Sine.easeOut}, "showProduct6+=0.1")
    masterTL.from("#tool6 .toolImage", 0.5, {x:-100, ease:"back.out(1)"}, "showProduct6+=0.8")
    masterTL.to("#product", 0.2, {x:2, repeat:1, yoyo:true, ease:Sine.easeInOut}, "showProduct6+=0.9")
    masterTL.to("#tool6 .toolText", 0.3, {opacity:1, ease:Sine.easeInOut}, "showProduct6+=1")
    masterTL.to("#tool6 .toolText", 0.3, {opacity:0, ease:Sine.easeInOut}, "showProduct6+=2.1")
    masterTL.to("#tool6 .toolImage", 0.5, {x:-100, ease:"back.out(1)"}, "showProduct6+=2.1")
    masterTL.to("#tool6 .toolImage", 0.5, {y:150, opacity:0, ease:Sine.easeOut}, "showProduct6+=2.6")
    masterTL.to("#tool6 .toolImage", 0.000001, {y:0, x:0}, "showProduct6+=3.1")
    masterTL.add("showProduct7")
    masterTL.to("#toolsWrapper", 0.1, {y:-371}, "showProduct7")
    masterTL.fromTo("#tool7 .toolImage", 0.5, {y:150, opacity:0}, {y:0, opacity:1, ease:Sine.easeOut}, "showProduct7+=0.1")
    masterTL.from("#tool7 .toolImage", 0.5, {x:-100, ease:"back.out(1)"}, "showProduct7+=0.8")
    masterTL.to("#product", 0.2, {x:2, repeat:1, yoyo:true, ease:Sine.easeInOut}, "showProduct7+=0.9")
    masterTL.to("#tool7 .toolText", 0.3, {opacity:1, ease:Sine.easeInOut}, "showProduct7+=1")
    masterTL.add("showEnd")
    masterTL.from("#product", 1, {y:-185, ease:Sine.easeInOut}, "showEnd")
    masterTL.to("#toolsWrapper", 1, {y:-185, ease:Sine.easeInOut}, "showEnd")
    masterTL.to(document.querySelectorAll(".toolText"), 0.5, {opacity:1, stagger:0.1, ease:Sine.easeOut}, "showEnd+=0.5")
    masterTL.to(document.querySelectorAll(".toolImage"), 0.5, {opacity:1, stagger:0.1, ease:Sine.easeOut}, "showEnd+=0.5")


    console.log(masterTL.duration());
    
    
    // masterTL.to("#toolsWrapper", 2, {y:-186, ease:Sine.easeOut}, "showProduct+=4")

}