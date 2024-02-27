window.onload = function () {
    init();
}

function loadLocalDynamic() {
    var adSize = "320x50";
    // if(localDynamicData.tagline[adSize] != ""){
    //     document.querySelector('#tagline').innerHTML = localDynamicData.tagline[adSize];
    // }
    // else{
    //     document.querySelector('#tagline').innerHTML = localDynamicData.tagline["default"];
    // }
    
    if(localDynamicData.tool1Text[adSize] != ""){
        document.querySelector('#tool1 .toolText').innerHTML = localDynamicData.tool1Text[adSize];
        document.querySelector('#tool6 .toolText').innerHTML = localDynamicData.tool1Text[adSize];
    }
    else{
        document.querySelector('#tool1 .toolText').innerHTML = localDynamicData.tool1Text["default"];
        document.querySelector('#tool6 .toolText').innerHTML = localDynamicData.tool1Text["default"];
    }
    
    if(localDynamicData.tool2Text[adSize] != ""){
        document.querySelector('#tool2 .toolText').innerHTML = localDynamicData.tool2Text[adSize];
        document.querySelector('#tool7 .toolText').innerHTML = localDynamicData.tool2Text[adSize];
    }
    else{
        document.querySelector('#tool2 .toolText').innerHTML = localDynamicData.tool2Text["default"];
        document.querySelector('#tool7 .toolText').innerHTML = localDynamicData.tool2Text["default"];
    }
    
    if(localDynamicData.tool3Text[adSize] != ""){
        document.querySelector('#tool3 .toolText').innerHTML = localDynamicData.tool3Text[adSize];
        document.querySelector('#tool8 .toolText').innerHTML = localDynamicData.tool3Text[adSize];
    }
    else{
        document.querySelector('#tool3 .toolText').innerHTML = localDynamicData.tool3Text["default"];
        document.querySelector('#tool8 .toolText').innerHTML = localDynamicData.tool3Text["default"];
    }
    
    if(localDynamicData.tool4Text[adSize] != ""){
        document.querySelector('#tool4 .toolText').innerHTML = localDynamicData.tool4Text[adSize];
        document.querySelector('#tool9 .toolText').innerHTML = localDynamicData.tool4Text[adSize];
    }
    else{
        document.querySelector('#tool4 .toolText').innerHTML = localDynamicData.tool4Text["default"];
        document.querySelector('#tool9 .toolText').innerHTML = localDynamicData.tool4Text["default"];
    }
    
    if(localDynamicData.tool5Text[adSize] != ""){
        document.querySelector('#tool5 .toolText').innerHTML = localDynamicData.tool5Text[adSize];
        document.querySelector('#tool10 .toolText').innerHTML = localDynamicData.tool5Text[adSize];
    }
    else{
        document.querySelector('#tool5 .toolText').innerHTML = localDynamicData.tool5Text["default"];
        document.querySelector('#tool10 .toolText').innerHTML = localDynamicData.tool5Text["default"];
    }

    document.querySelector('#logo').data = localDynamicData.logo;
    document.querySelector('#tool1 .toolImage').src = localDynamicData.tool1Img;
    document.querySelector('#tool2 .toolImage').src = localDynamicData.tool2Img;
    document.querySelector('#tool3 .toolImage').src = localDynamicData.tool3Img;
    document.querySelector('#tool4 .toolImage').src = localDynamicData.tool4Img;
    document.querySelector('#tool5 .toolImage').src = localDynamicData.tool5Img;
    document.querySelector('#tool6 .toolImage').src = localDynamicData.tool1Img;
    document.querySelector('#tool7 .toolImage').src = localDynamicData.tool2Img;
    document.querySelector('#tool8 .toolImage').src = localDynamicData.tool3Img;
    document.querySelector('#tool9 .toolImage').src = localDynamicData.tool4Img;
    document.querySelector('#tool10 .toolImage').src = localDynamicData.tool5Img;
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
        window.open(clickTag, '_blank');
        masterTL.pause();
        // masterTL.progress(1).pause();
    })

    getAnimation();
}

function getAnimation(){

    masterTL = new TimelineLite({repeat:1});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut, onComplete:function(){
        gsap.set("#loaderWrapper", {display:"none"});
    }}, 0)
    masterTL.add("start");
    masterTL.from("#bottomWrapper", 0.5, {ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#logo", 0.5, {width:100, bottom:"50%", y:"50%", left:"50%", x:"-50%", ease:Sine.easeOut}, "start+=0.5")
    masterTL.from("#bar", 0.1, {width:0, margin:0, ease:Sine.easeInOut}, "start+=1")
    masterTL.from("#taglineWrapper", 1, {width:0, ease:Power2.easeOut}, "start+=1.1")
    masterTL.add("showOneTool", "start+=1.5")
    masterTL.from("#oneTool1", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool")
    masterTL.from("#oneTool2", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.1")
    masterTL.from("#oneTool3", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.2")
    masterTL.from("#oneTool4", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.3")
    masterTL.from("#oneTool5", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.4")
    masterTL.from("#oneTool6", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.5")
    masterTL.from("#oneTool7", 0.5, {scale:0, ease:Power2.easeOut}, "showOneTool+=0.6")
    masterTL.add("showProduct5", "+=0.1")
    masterTL.from("#product", 0.5, {x:150, ease:Sine.easeOut}, "showProduct5")
    for(var i=1; i<6; i++){
        // masterTL.from("#tool"+i+" .toolText", 0.5, {opacity:0, ease:Sine.easeOut}, "showProduct5+="+(0.1*i))
        masterTL.from("#tool"+i+" .toolImage", 0.5, {opacity:0, stagger:0.1, ease:Sine.easeOut}, "showProduct5+="+(0.1*(i+1)))
    }
    masterTL.add("caroussel")
    for(var i=1; i<6; i++){
        masterTL.to("#toolsWrapper", 0.5, {y:"+=50", ease:Sine.easeInOut}, "caroussel+="+(i-1)*1)
        masterTL.to("#tool"+i, 0.3, {opacity:0, ease:Power2.easeOut}, "-=0.5")
        masterTL.to("#tool"+(i+5), 0.3, {opacity:1, ease:Power2.easeIn}, "-=0.5")
    }
    masterTL.to("#banner", 0.1, {}, 8.9)

    masterTL.duration(7.5)
}