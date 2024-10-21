myFT.on("ready", init);

function init() {

    getAnimation();

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:0.8, ease:Sine.easeInOut});
        
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#ctaRight", 0.3, {opacity:1, ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        // masterTL.progress(1);
        masterTL.pause();
    })
}

function onResize(){
    var screenW = document.body.offsetWidth;
    var bannerH = document.querySelector("#banner").offsetHeight;
    var bannerW = document.querySelector("#banner").offsetWidth;
    var bannerS = bannerH/1200;
    gsap.set(["#scaler", "#extraScaler"], {scale:bannerS});
    var scalerW = document.querySelector("#scaler").offsetWidth*bannerS;

    if(bannerW < scalerW/2){
        var newScale = bannerW/(scalerW/2);
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%", scale:newScale*bannerS});
        gsap.set(["#date", "#badge"], {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set(["#date", "#badge"], {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(){

    masterTL = gsap.timeline({paused:true});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    
    masterTL.from("#intro1 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut});    
    masterTL.from("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro1 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");    
    masterTL.from("#intro2 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");
    masterTL.from("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro2 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");     
    masterTL.from("#intro3 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.from("#intro3 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.to("#intro3 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.2");     
    masterTL.from("#intro4 .introEmpty", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    masterTL.from("#intro4 .introFill", 0.01, {opacity:0, ease:Sine.easeOut}, "-=0.01");    
    
    masterTL.add(function(){
        lightTL.play();
    })    
    masterTL.to(["#introWrapper", "#bgWrapper"], 1, {x:-1199, ease:Sine.easeInOut}, "+=1");    
    masterTL.from(["#cart", "#light1", "#light2"], 1, {x:1200, ease:Sine.easeInOut}, "-=1");    
    masterTL.from("#date", 0.3, {opacity:0, ease:Sine.easeOut});  
    masterTL.from("#text1", 0.5, {opacity:0, ease:Sine.easeOut});  
    masterTL.from("#highlight1Wrapper", 1, {width:0, ease:Sine.easeOut});   
    masterTL.to(["#introWrapper", "#bgWrapper"], 1, {x:-(1199*2), ease:Sine.easeInOut}, "+=1");    
    masterTL.to(["#cart", "#light1", "#light2"], 1, {x:-1200, ease:Sine.easeInOut}, "-=1");   
    masterTL.from("#products", 1, {x:1200, ease:Sine.easeInOut}, "-=1");    
    masterTL.from("#sticker", 0.5, {scale:0, rotation:-360, ease:Back.easeOut}); 
    masterTL.from("#badge", 0.5, {opacity:0, ease:Sine.easeInOut});    
    // masterTL.from("#banner", 0.5, {opacity:1});//delay for loop    
    
    // for (var i = 1; i < 9; i++) {
    //     masterTL.from("#price"+i, 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.3");    
    //     masterTL.to("#price"+i, 0.3, {opacity:0, ease:Sine.easeInOut}, "+=0.75");    
    // }

    masterTL.to("#badge", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut, transformOrigin:"100% 50%"}, "+=1"); 
    
    masterTL.to(["#sticker", "#text1", "#highlight1Wrapper"], 0.3, {opacity:0, ease:Sine.easeIn}, "+=0.4");    
    masterTL.from("#sticker2", 0.5, {opacity:0, ease:Sine.easeInOut});    
    masterTL.to("#badge", 0.3, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut, transformOrigin:"100% 50%"});    
    masterTL.to("#sticker2", 0.3, {opacity:0, ease:Sine.easeInOut}, "+=1.5");    
    

    masterTL.to(["#logo", "#date", "#badge", "#products"], 0.5, {opacity:0, ease:Sine.easeInOut});    
    masterTL.from("#logo2", 0.5, {opacity:0, ease:Sine.easeInOut}, "-=0.5");    
    masterTL.from("#tagline", 0.3, {opacity:0, ease:Sine.easeInOut}, "-=0.2");  
    masterTL.from("#sticker3", 0.5, {scale:0, rotation:360, ease:Back.easeOut});    
    masterTL.from("#ctaLeft", 0.5, {scale:0, transformOrigin:"50% 95%", ease:Back.easeOut});
    masterTL.from("#ctaRight", 0.01, {opacity:0, ease:Sine.easeOut}, "+=0.1");
    masterTL.from("#ctaRight", 0.3, {x:-50, ease:Sine.easeOut}, "-=0.01");
    
    masterTL.play();
    
    console.log(masterTL.duration());
    
    masterTL.play();

    lightTL = gsap.timeline({paused:true});
    lightTL.add("start")
    lightTL.fromTo("#light1", 1, {rotation:-15}, {rotation:30, repeat:7, yoyo:true, ease:Power1.easeInOut}, "start")
    lightTL.fromTo("#light2", 1.6, {rotation:-40}, {rotation:10, repeat:4, yoyo:true, ease:Sine.easeInOut}, "start")

}