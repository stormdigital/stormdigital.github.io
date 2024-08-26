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
        gsap.to("#phoneWrapper", 3.25, {rotation:0, repeat:3, yoyo:true, delay:5, ease:Sine.easeInOut})
    }});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start")
    masterTL.from("#text1A", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.from("#text1B", 0.3, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.to("#text1A", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1.5")
    masterTL.to("#text1B", 0.2, {opacity:0, ease:Sine.easeIn}, "-=0.1")
    
    masterTL.from("#text2", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.from("#phoneWrapper", 1.5, {rotation:-90, x:-300, y:400, scale:0.8, ease:"back.out(1)"}, "+=0.2")
    masterTL.from("#appLogoWrapper", 1, {height:0, ease:Power1.easeOut}, "-=0.5")
    masterTL.set("#appLogoLight", {opacity:0})
    masterTL.from("#check1", 0.5, {scale:0, ease:"back.out(1.5)"})
    masterTL.to("#text2", 0.3, {opacity:0, ease:Sine.easeIn}, "+=1")
    masterTL.to("#check1", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.2")
    
    masterTL.from("#text3", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.to("#appLogoWrapper", 0.5, {scale:0.30851063829, x:-16, y:-61, ease:Sine.easeIn}, "-=0.2")
    masterTL.set(["#card", "#cardConnected"], {opacity:1})
    masterTL.from(["#card", "#cardConnected"], 1, {x:100, y:-200, ease:Sine.easeOut}, "-=0")
    masterTL.from("#phoneScreen2", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0.1")
    masterTL.to("#progressMask1", 0.75, {rotation:120, ease:Sine.easeInOut}, "-=0.2")
    masterTL.set("#progressMask1", {opacity:0})
    masterTL.to("#progressMask2", 0.75, {rotation:228, ease:Sine.easeInOut}, "-=0.1")
    masterTL.set("#progressMask2", {opacity:0})
    masterTL.from("#check2", 0.5, {scale:0, ease:"back.out(1.5)"})
    masterTL.to("#phoneScreen", 0.25, {background:"rgba(10, 140, 0, 0.7)", ease:Power1.easeOut}, "-=0.5");
    masterTL.to("#cardConnected", 0.25, {scale:1.5, repeat:1, yoyo:true, ease:Power1.easeInOut}, "-=0.5");
    masterTL.to("#phoneScreen", 0.25, {background:"transparent", ease:Power1.easeIn}, "-=0.25");
    
    masterTL.to(["#card", "#cardConnected"], 1, {x:100, y:-200, ease:Sine.easeIn}, "+=1.5")
    masterTL.set(["#card", "#cardConnected"], {opacity:0})
    masterTL.to("#text3", 0.3, {opacity:0, ease:Sine.easeIn}, "-=1.5")
    masterTL.to(["#phoneScreen2", "#check2"], 0.5, {opacity:0, ease:Sine.easeIn}, "-=0.5")
    masterTL.from("#text4", 0.3, {opacity:0, ease:Sine.easeOut}, "+=0.2")
    masterTL.from(["#phoneScreen3", "#wheels", "#cart"], 0.5, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.to("#wheels", 0.5, {scaleY:0.8, repeat:5, yoyo:true, ease:Sine.easeInOut}, "-=0.5")
    masterTL.from("#cart", 0.5, {y:-2, repeat:5, yoyo:true, ease:Sine.easeInOut}, "-=3")
    masterTL.to("#pill1", 1, {y:172, rotation:100, ease:Sine.easeIn}, "-=2.5")
    masterTL.to("#pill1", 0.5, {y:160, rotation:180, ease:Sine.easeOut}, "-=1.5")
    masterTL.to("#pill1", 0.5, {y:175, rotation:250, ease:Sine.easeIn}, "-=1")
    
    masterTL.to("#pill2", 1, {y:172, x:10, rotation:-100, ease:Sine.easeIn}, "-=2")
    masterTL.to("#pill2", 0.5, {y:160, x:-5, ease:Sine.easeOut}, "-=1")
    masterTL.to("#pill2", 0.5, {y:175, x:-25, ease:Sine.easeIn}, "-=0.5")
    masterTL.to("#pill2", 1, {rotation:-250, ease:Sine.easeIn}, "-=1")
    
    masterTL.to("#pill3", 1, {y:172, x:-20, rotation:30, ease:Sine.easeIn}, "-=1.75")
    masterTL.to("#pill3", 0.5, {y:170, ease:Sine.easeOut}, "-=0.75")
    masterTL.to("#pill3", 0.5, {y:175,ease:Sine.easeIn}, "-=0.25")
    masterTL.to("#pill3", 1, {rotation:-30, ease:Sine.easeIn}, "-=0.75")

    masterTL.to("#phoneWrapper", 0.75, {rotation:-45, x:-300, y:100, scale:0.8, ease:"back.in(1)"})
    masterTL.to("#text4", 0.3, {opacity:0, ease:Sine.easeIn}, "-=0.75")
    
    masterTL.to("#logo", 0.75, {scale:1, left:39, top: 94, ease:Sine.easeIn}, "-=0")
    masterTL.from("#logoExtra", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "-=0")

    
    masterTL.play();

    console.log(masterTL.duration());
}