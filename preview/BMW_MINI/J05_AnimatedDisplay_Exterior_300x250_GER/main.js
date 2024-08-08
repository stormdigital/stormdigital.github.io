window.onload = function () {
    init();
}

function loadLocalDynamic(text1Letters, adSize) {

    for (var i = 0; i < text1Letters.length; i++) {
        document.querySelector('#text1'+text1Letters[i]).innerHTML = localDynamicData["text1"+text1Letters[i]][adSize].text;
        document.querySelector('#text1'+text1Letters[i]).style.fontSize = localDynamicData["text1"+text1Letters[i]][adSize].size+"px";
        document.querySelector('#text1'+text1Letters[i]).style.top = localDynamicData["text1"+text1Letters[i]][adSize].top+"px";
        
        document.querySelector('#text2'+text1Letters[i]).innerHTML = localDynamicData["text2"+text1Letters[i]][adSize].text;
        document.querySelector('#text2'+text1Letters[i]).style.fontSize = localDynamicData["text2"+text1Letters[i]][adSize].size+"px";
        document.querySelector('#text2'+text1Letters[i]).style.top = localDynamicData["text2"+text1Letters[i]][adSize].top+"px";
    }

    document.querySelector('#cta1').innerHTML = localDynamicData.cta1[adSize].text;
    document.querySelector('#cta1').style.fontSize = localDynamicData.cta1[adSize].size+"px";
    document.querySelector('#cta1Wrapper').style.top = localDynamicData.cta1[adSize].top+"px";
    document.querySelector('#cta1Wrapper').style.height = localDynamicData.cta1[adSize].height+"px";
    document.querySelector('#cta1').style.lineHeight = localDynamicData.cta1[adSize].height+"px";
    
    document.querySelector('#cta2').innerHTML = localDynamicData.cta2[adSize].text;
    document.querySelector('#cta2').style.fontSize = localDynamicData.cta2[adSize].size+"px";
    document.querySelector('#cta2Wrapper').style.top = localDynamicData.cta2[adSize].top+"px";
    document.querySelector('#cta2Wrapper').style.height = localDynamicData.cta2[adSize].height+"px";
    document.querySelector('#cta2').style.lineHeight = localDynamicData.cta2[adSize].height+"px";
    
    document.querySelector('#bg1').style.backgroundImage = "url("+localDynamicData.bg1+")";
    document.querySelector('#bg2').style.backgroundImage = "url("+localDynamicData.bg2+")";
    document.querySelector('#logoMini').src = localDynamicData.logoMini;
    document.querySelector('#logoJCW').src = localDynamicData.logoJCW;
}

function init(clickTAGvalue) {

    var adSize = "300x250";
    var text1Letters = ["a", "b", "c", "d"];

    loadLocalDynamic(text1Letters, adSize);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta2Wrapper", 0.3, {background:"#fff", color:"#000", ease:Sine.easeInOut});
        }


        gsap.to(["#bg1", "#bg2"], 0.5, {filter: "sepia(0.5)"});
        gsap.to(["#bg1", "#bg2"], 0.5, {filter: "sepia(0)", delay:0.5});
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta2Wrapper", 0.3, {background:"#CC0000", color:"#fff", ease:Sine.easeInOut});
        }

    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
        // masterTL.progress(1).pause();
        masterTL.pause();
    })

    getAnimation(text1Letters, adSize);
}

function getAnimation(text1Letters, adSize){
    
    gsap.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut})
    
    masterTL = new TimelineLite({paused:true, repeat:2});
    masterTL.add("start");
    masterTL.from("#bg1", 0.3, {scale:2, ease:Sine.easeInOut}, "start")
    masterTL.to("#bg1", 4, {scale:1.15, ease:Sine.easeInOut})
    masterTL.add("text1Start", "-=3.9")
    var delay1 = 0;
    for (var i = 0; i < text1Letters.length; i++) {
        if(localDynamicData["text1"+text1Letters[i]][adSize].text != ""){
            masterTL.from("#text1"+text1Letters[i], 0.01, {opacity:0, ease:Sine.easeOut}, "text1Start+="+delay1)
            delay1+=0.15;
        } 
    }
    masterTL.from("#cta1Wrapper", 0.5, {scale:0, ease:Back.easeOut}, "text1Start+="+(delay1+0.5))
    masterTL.add("text1Remove")
    var delay2 = 0;
    for (var i = text1Letters.length-1; i >= 0; i--) {
        if(localDynamicData["text1"+text1Letters[i]][adSize].text != ""){
            masterTL.to("#text1"+text1Letters[i], 0.01, {opacity:0, ease:Sine.easeOut}, "text1Remove+="+delay2)
            delay2+=0.15;
        }   
    }
    masterTL.to("#cta1Wrapper", 0.3, {scale:0, ease:Sine.easeIn}, "text1Remove+="+delay2)

    masterTL.add("switchBg", "-=0.3")
    masterTL.to("#bg1", 0.3, {scale:2, ease:Sine.easeInOut}, "switchBg")
    masterTL.from("#bg2", 0.3, {scale:2, ease:Sine.easeInOut},"switchBg")
    masterTL.to("#bg1", 0.15, {opacity:0, ease:Sine.easeInOut}, "switchBg+=0.15")
    masterTL.to("#bg2", 4, {scale:1.15, ease:Sine.easeInOut})
    masterTL.add("text2Start", "-=4")
    var delay3 = 0;
    for (var i = 0; i < text1Letters.length; i++) {
        if(localDynamicData["text2"+text1Letters[i]][adSize].text != ""){
            masterTL.from("#text2"+text1Letters[i], 0.01, {opacity:0,  ease:Sine.easeOut}, "text2Start+="+delay3)
            delay3+=0.15;
        } 
    }
    masterTL.from("#cta2Wrapper", 0.01, {opacity:0, ease:Back.easeOut}, "text2Start+="+(delay3+0.5))
    masterTL.add("animateCTA", "-=2")
    masterTL.to("#cta2Wrapper", 0.25, {background:"#fff", color:"#000", ease:Sine.easeInOut}, "animateCTA");
    masterTL.to("#cta2Wrapper", 0.25, {background:"#CC0000", color:"#fff", ease:Sine.easeInOut}, "animateCTA+=0.25");
    masterTL.to("#cta2Wrapper", 0.25, {background:"#fff", color:"#000", ease:Sine.easeInOut}, "animateCTA+=0.5");
    masterTL.to("#cta2Wrapper", 0.25, {background:"#CC0000", color:"#fff", ease:Sine.easeInOut}, "animateCTA+=0.75");
    masterTL.to("#cta2Wrapper", 0.25, {background:"#fff", color:"#000", ease:Sine.easeInOut}, "animateCTA+=1");
    masterTL.to("#cta2Wrapper", 0.25, {background:"#CC0000", color:"#fff", ease:Sine.easeInOut}, "animateCTA+=1.25");
    
    masterTL.to("#banner", 0.01, {}, 9.99);
    
    masterTL.play();

    console.log(masterTL.duration());
}