window.onload = function () {
    init();
}

function init() {

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {scale:1.05});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {scale:1});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.pause();
        // masterTL.progress(1);
        // clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
    })

    getAnimation();
}

function getAnimation(){
    
    
    masterTL = gsap.timeline({paused:true, onStart:function(){
        gsap.to("#buuble1", 20.3, {y:-150, rotation:360, ease:Power0.easeNone})
        gsap.to("#buuble2", 20.3, {x:200, y:-350, rotation:180, ease:Power0.easeNone})
        gsap.to("#buuble3", 20.3, {x:-30, y:500, rotation:-360, ease:Power0.easeNone})
        gsap.to("#buuble4", 15.3, {x:350, y:70, rotation:-200, delay:5, ease:Power0.easeNone})
        gsap.to("#phoneWrapper", 3.25, {rotation:6, repeat:3, yoyo:true, delay:5, ease:Sine.easeInOut})
    }});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start")
    
    masterTL.to("#phoneSmall", 1.5, {rotation:5, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start")
    masterTL.to("#introHead", 1, {rotation:-5, repeat:2, yoyo:true, ease:Sine.easeInOut}, "start")
    masterTL.from("#musicNote2", 1, {scale:0.5, x:40, y:-20, repeat:2, ease:Sine.easeIn}, "start")
    masterTL.from("#musicNote2", 0.5, {opacity:0, repeat:2, repeatDelay:0.5, ease:Sine.easeIn}, "start")
    masterTL.from("#musicNote1", 1, {scale:0.5, x:-15, y:30, repeat:2, ease:Sine.easeIn}, "start+=0.15")
    masterTL.from("#musicNote1", 0.5, {opacity:0, repeat:2, repeatDelay:0.5, ease:Sine.easeIn}, "start+=0.15")
    masterTL.from("#musicNote3", 1, {scale:0.5, x:25, y:-30, repeat:2, ease:Sine.easeIn}, "start+=0.3")
    masterTL.from("#musicNote3", 0.5, {opacity:0, repeat:2, repeatDelay:0.5, ease:Sine.easeIn}, "start+=0.3")
    masterTL.from("#musicNote4", 1, {scale:0.5, x:30, y:20, repeat:2, ease:Sine.easeIn}, "start+=0.45")
    masterTL.from("#musicNote4", 0.5, {opacity:0, repeat:2, repeatDelay:0.5, ease:Sine.easeIn}, "start+=0.45")
    
    masterTL.to("#introWrapper", 0.5, {opacity:0, ease:Sine.easeIn}, 3)
    
    masterTL.from("#text1a", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")
    masterTL.from("#text1b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.from("#phoneWrapper", 1.5, {rotation:-90, x:-300, y:400, scale:0.8, ease:"back.out(1)"}, "-=0.2")
    masterTL.from("#appLogoWrapper", 1, {height:0, ease:Power1.easeOut}, "-=0.5")
    masterTL.set("#appLogoLight", {opacity:0})
    masterTL.from("#check1", 0.5, {scale:0, ease:"back.out(1.5)"})
    masterTL.to("#check1", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1")
    masterTL.to("#text1a", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")
    masterTL.to("#text1b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")

    masterTL.from("#text2a", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.from("#text2b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.to("#appLogoWrapper", 0.5, {scale:0.30851063829, x:-16, y:-61, ease:Sine.easeIn}, "-=0.2")
    masterTL.set(["#card", "#cardConnected"], {opacity:1})
    masterTL.from("#phoneScreen2", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.from(["#card", "#cardConnected"], 1, {x:100, y:-200, ease:Sine.easeOut}, "-=0.5")
    masterTL.to("#progressMask1", 0.75, {rotation:120, ease:Sine.easeInOut}, "-=0.2")
    masterTL.set("#progressMask1", {opacity:0})
    masterTL.to("#progressMask2", 0.75, {rotation:228, ease:Sine.easeInOut}, "-=0.1")
    masterTL.set("#progressMask2", {opacity:0})
    masterTL.from("#check2", 0.5, {scale:0, ease:"back.out(1.5)"})
    masterTL.to("#phoneScreen", 0.25, {background:"rgba(10, 140, 0, 0.7)", ease:Power1.easeOut}, "-=0.5");
    masterTL.to("#cardConnected", 0.25, {scale:1.5, repeat:1, yoyo:true, ease:Power1.easeInOut}, "-=0.5");
    masterTL.to("#phoneScreen", 0.25, {background:"#fe5e3a", ease:Power1.easeIn}, "-=0.25");
    
    masterTL.to(["#card", "#cardConnected"], 1, {x:100, y:-200, ease:Sine.easeIn}, "+=1.5")
    masterTL.set(["#card", "#cardConnected"], {opacity:0})
    masterTL.to("#text2a", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")
    masterTL.to("#text2b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.2")
    masterTL.to("#phoneWrapper", 0.75, {rotation:-45, x:-300, y:100, scale:0.8, ease:"back.in(1)"})
    
    masterTL.from("#text3a", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.from("#text3b", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.from(["#handLeft", "#handLeftB", "#handRight", "#handRightB"], 0.5, {y:300, ease:Back.easeOut}, "-=0.3")
    masterTL.from("#box", 1, {y:-600, ease:Back.easeOut}, "-=0")
    masterTL.from("#boxSpeed", 1, {y:-300, ease:Back.easeOut}, "-=1")
    masterTL.to(["#handLeft", "#handLeftB", "#handRight", "#handRightB"], 0.7, {y:60, ease:Power3.easeOut}, "-=0.8")
    masterTL.to(["#handLeft", "#handLeftB", "#handRight", "#handRightB"], 0.4, {y:0, ease:Sine.easeInOut}, "-=0.4")
    masterTL.to("#handAndBox", 1.5, {y:5, ease:Sine.easeIn})
    
    // masterTL.from("#whiteBg", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0")
    masterTL.to(["#logo", "#text3a", "#text3b", "#handAndBox"], 0.5, {opacity:0, ease:Sine.easeIn}, "-=0.5")
    masterTL.from("#logoExtra", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "-=0")

    masterTL.play();

    console.log(masterTL.duration());
}