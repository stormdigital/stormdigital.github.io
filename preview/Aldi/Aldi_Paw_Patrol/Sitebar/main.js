myFT.on("ready", init);


function init() {

    var pawArr = [];
    var parent = document.querySelector("#pawWrapper")
    for (let i = 1; i < 11; i++) {
        var newDiv = document.createElement('div');
        newDiv.style.backgroundImage = "url('paw"+i+".png')";
        parent.appendChild(newDiv);
        pawArr.push(newDiv)
    }

    shuffle(pawArr);

    getAnimation(pawArr);

    window.addEventListener("resize", onResize);
    onResize();

    document.querySelector("#mainExit").addEventListener("click", function(){
        masterTL.progress(1);
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
        gsap.set("#date1", {x:-300});
        gsap.set("#extraScaler", {scale:newScale*bannerS});
    }
    else if(bannerW < scalerW){
        gsap.set("#scaler", {left:"50%", xPercent:-50, transformOrigin:"50% 0%"});
        gsap.set("#date1", {x:-((scalerW - screenW)/2)/bannerS});
    }
    else{
        gsap.set("#scaler", {left:"0%", xPercent:0, transformOrigin:"0% 0%"});
    }
}

function getAnimation(pawArr){

    masterTL = gsap.timeline({paused:true});
    
    masterTL.add(introTL());
    masterTL.add(frame3TL());
    masterTL.add(frame4TL());
    masterTL.add(endTL());
    
    masterTL.play();    
    
    var pawDelay = 0;
    pawTL = gsap.timeline({paused:true});
    pawTL.add("animatePaws")
    for (let i = 0; i < pawArr.length; i++) {
        pawTL.from(pawArr[i], 0.1, {opacity:0, ease:Sine.easeOut}, "animatePaws+="+pawDelay)
        pawDelay+=1.5;
    }
}

function introTL(){
    tl = gsap.timeline({});
    
    tl.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    tl.from("#dogs", 2.5, {scale:0.8, ease:Sine.easeOut}, 0)
    tl.from("#bg", 2.5, {scale:1.1, ease:Sine.easeOut}, 0)
    tl.from(["#bgFront", "#tower"], 2.5, {scale:1.5, ease:Sine.easeOut}, 0)
    tl.from("#logoPP", 1, {y:-500, ease:Sine.easeOut}, 0.5)
    tl.from(["#footerWrapper", "#text1"], 0.75, {y:400, ease: "back.out(1.4)", onStart:function(){
        pawTL.play()
    }}, "-=1")
    tl.from("#highlight1Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "-=0")
    tl.to(["#highlight1Wrapper", "#text1", "#dogs", "#tower", "#logoPP"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=1")

    return tl;
}

function frame3TL(){
    tl = gsap.timeline({});
    tl.from("#text2", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0")
    tl.from("#date1", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0.5")
    tl.to(["#footerWrapper", "#text2"], 2, {y:-100, ease:Sine.easeInOut}, "-=0.5")
    tl.from("#card1Wrapper", 0.5, {x:-650, y:-250, rotation:-200, ease:Sine.easeOut}, "-=1.5")
    tl.from("#card2Wrapper", 0.5, {x:-80, y:-650, rotation:-200, ease:Sine.easeOut}, "-=1")
    tl.from("#card3Wrapper", 0.5, {x:660, y:250, rotation:200, ease:Sine.easeOut}, "-=0.85")
    tl.from("#highlight2Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "-=0.1")
    tl.to("#card1Wrapper .gradient", 1, {y:900, ease:Sine.easeInOut}, "-=1")
    tl.to("#card2Wrapper .gradient", 1, {y:900, ease:Sine.easeInOut}, "-=0.7")
    tl.to("#card3Wrapper .gradient", 1, {y:900, ease:Sine.easeInOut}, "-=0")

    return tl;
}

function frame4TL(){
    tl = gsap.timeline({});
    tl.to("#card1Wrapper", 0.5, {rotationY:180, ease:Sine.easeInOut}, "+=0")
    tl.set("#card1Wrapper .cardDog", {opacity:1, ease:Sine.easeInOut}, "-=0.25")
    tl.to("#card2Wrapper", 0.5, {rotationY:180, ease:Sine.easeInOut}, "-=0.4")
    tl.set("#card2Wrapper .cardDog", {opacity:1, ease:Sine.easeInOut}, "-=0.25")
    tl.to("#card3Wrapper", 0.5, {rotationY:180, ease:Sine.easeInOut}, "-=0.4")
    tl.set(["#card3Wrapper .cardDog", ".cardCorner"], {opacity:1, ease:Sine.easeInOut}, "-=0.25")
    
    tl.from("#cornerWrapper", 1, {x:100, ease:Sine.easeOut}, "+=0.3")
    tl.from(["#cornerWrapper .card", "#cornerWrapper .cardDog"], 1, {x:-70, y:70, ease:Sine.easeOut}, "-=1")
    tl.from(".cardCorner", 1, {x:50, y:100, ease:Sine.easeOut}, "-=1")
    tl.to(["#highlight2Wrapper", "#text2"], 0.3, {opacity:0, ease:Sine.easeInOut}, "+=1")
    tl.to("#card1Wrapper", 0.5, {x:-650, y:-250, rotation:-200, ease:Sine.easeIn}, "-=0.3")
    tl.to("#card2Wrapper", 0.5, {x:-80, y:-650, rotation:-200, ease:Sine.easeIn}, "-=0.9")
    tl.to("#card3Wrapper", 0.5, {x:660, y:250, rotation:200, ease:Sine.easeIn}, "-=0.9")

    return tl;
}

function endTL(){
    tl = gsap.timeline({});
    tl.from("#text3", 0.5, {opacity:0, ease:Sine.easeOut}, "+=0")
    tl.from("#logoExtra", 0.5, {opacity:0, ease:Sine.easeOut}, "-=0.5")
    tl.from("#poster", 1, {scale:0, rotation:-180, transformOrigin: "45% 33%", ease:Back.easeOut}, "-=0")
    tl.set("#priceBlock", {opacity:1})
    tl.from("#priceBlock", 0.5, {x:-220, y:-40, ease:Sine.easeOut}, "+=0")
    tl.from("#highlight3Wrapper", 0.5, {width:0, ease:Sine.easeInOut}, "-=0.1")
    tl.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "+=0.2")

    return tl;
}

function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

