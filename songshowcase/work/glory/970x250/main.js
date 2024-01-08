window.onload = function() {
    showAd();
}

function showAd() {

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(clickTag)
        masterTL.progress(1);
    })

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() > 0.33){
          gsap.to("#cta2", 0.3, {background:"#000", ease:Sine.easeInOut});
          gsap.to("#cta1", 0.3, {y:20, ease:Sine.easeInOut});
          gsap.to("#cta2", 0.3, {y:-10, ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() > 0.33){
            gsap.to("#cta2", 0.3, {background:"#ff3746", ease:Sine.easeInOut});
            gsap.to("#cta1", 0.3, {y:0, ease:Sine.easeInOut});
            gsap.to("#cta2", 0.3, {y:0, ease:Sine.easeInOut});
            
        }
    })

    masterTL = new TimelineLite({});
    masterTL.add("start", 0.5)
    masterTL.to("#loader", .1, {opacity:0, ease:Power4.easeInOut}, "start")
    masterTL.to("#logoVL", 1.5, {scale:1, x:3125, y:244, ease:Power4.easeInOut}, "start")
    masterTL.from("#bgV", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=1.2")
    masterTL.to("#logoVL", 0.3, {opacity:0, ease:Sine.easeIn}, "start+=1.2")
    masterTL.from("#fighter1", 1, {x:-220, ease:Sine.easeOut}, "start+=1.5")
    masterTL.from("#fighter2", 1, {x:220, ease:Sine.easeOut}, "start+=1.7")
    masterTL.to("#fighter1", 12.5, {opacity:1, ease:Sine.easeOut}, "start+=2.5")
    masterTL.to("#fighter2", 12.5, {opacity:1, ease:Sine.easeOut}, "start+=2.5")
    masterTL.from("#logoVLSmall", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=2.8")
    masterTL.from("#date", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.2")
    masterTL.from("#names", 0.3, {opacity:0, ease:Sine.easeOut}, "start+=3.6")
    masterTL.from("#cta1", 0.3, {scale:0, ease:Back.easeOut}, "start+=4")
    masterTL.from("#cta2", 0.3, {scale:0, ease:Back.easeOut}, "start+=4.2")
    masterTL.to("#cta2", 0.2, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start+=6")
    masterTL.to("#cta2", 0.2, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start+=10")
    masterTL.to("#cta2", 0.2, {scale:1.1, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start+=14")
    
    for(var i = 0; i<50; i++){
        const newImg = document.createElement("img");
        newImg.style.left = gsap.utils.random(20, 174, 1)+"px";
        newImg.style.top = gsap.utils.random(20, 380, 1)+"px";
        newImg.style.transform = "rotate("+gsap.utils.random(0, 380)+"deg)";
        newImg.src = "lensflare.png";
        if(i% 2){
            document.querySelector("#fighter1Wrapper").insertBefore(newImg, document.querySelector("#fighter1Reset"));
        }
        else{
            document.querySelector("#fighter2Wrapper").insertBefore(newImg, document.querySelector("#fighter2Reset"));
        }
        masterTL.from(newImg, gsap.utils.random(0.3, 0.5), {opacity:0, scale:0, repeat:1, yoyo:true, ease:Sine.easeOut}, "start+="+gsap.utils.random(1.5, 14.5))

    }
}