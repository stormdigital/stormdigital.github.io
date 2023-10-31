window.onload = function () {
    init();
}


function init() {

    gsap.registerPlugin(SplitText);

    document.querySelector("#mainExit").addEventListener("mouseover", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#d4512b", ease:Sine.easeInOut});
        }
    })
    
    document.querySelector("#mainExit").addEventListener("mouseout", function(){
        if(masterTL.progress() == 1){
            gsap.to("#cta", 0.2, {background:"#ea650d", ease:Sine.easeInOut});
        }
    })

    document.querySelector("#mainExit").addEventListener("click", function(){
        window.open(window.clickTag);
        masterTL.progress(1);
    })

    getAnimation();
}

function getAnimation(){

    Draggable.create("#dot", {
        bounds:"#dragBar",
        onDragEnd: dragEnded,
        onDrag: drag,
        lockAxis:"x"
    });

    var split = new SplitText("#text1", {type: "words"});
    var split2 = new SplitText("#text2", {type: "words"});

    masterTL = new TimelineLite({});
    masterTL.to("#loaderWrapper", 0.2, {opacity:0, ease:Sine.easeInOut}, 0)
    masterTL.add("start");
    masterTL.from("#logoWrapper", 0.5, {scale:0, ease:Back.easeOOut}, "start")
    masterTL.from("#logo", 0.5, {opacity:0, ease:Back.easeOut}, "start+=0.5")
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=0.7")
    masterTL.from(split.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2}, "start+=1.2");
    masterTL.to(split.words, {opacity: 0, x:10, ease:Sine.easeOut, stagger: -0.05}, "start+=3.5");
    masterTL.to("#logoWrapper", 0.4, {height:248, ease:Sine.easeInOut}, "start+=4")
    masterTL.from("#border", 0.4, {opacity:0, ease:Power3.easeOut}, "start+=4")
    masterTL.from(split2.words, {opacity: 0, x:-10, ease:Sine.easeOut, stagger: 0.2});
    masterTL.from("#dragWrapper", 0.5, {x:-30, opacity:0, ease:Sine.easeOut});
}

function dragEnded(){

    var barW = document.querySelector("#dragBar").offsetWidth;
    var barDragged = (this.x/barW)*100;

    console.log(barDragged);

    if(barDragged < 33){
        gsap.to("#dot", 0.5, {x:5});
        gsap.to("#priceBottom", 0.5, {x:5});
        gsap.to("#bar", 0.5, {width:0+"px"});
    }
    else if(barDragged >= 33 && barDragged <= 66){
        gsap.to("#dot", 0.5, {x:barW/2});
        gsap.to("#priceBottom", 0.5, {x:barW/2});
        gsap.to("#bar", 0.5, {width:50+"%"});
    }
    else{
        gsap.to("#dot", 0.5, {x:(barW-5)});
        gsap.to("#priceBottom", 0.5, {x:(barW-5)});
        gsap.to("#bar", 0.5, {width:100+"%"});
    }    
}

function drag(){
    var barW = document.querySelector("#dragBar").offsetWidth;
    var barDragged = (this.x/barW)*100;

    gsap.set("#bar", {width:this.x+"px"});
    gsap.set("#priceBottom", {x:this.x});

    if(barDragged < 33){
        document.querySelector("#priceBottom").innerText = "€385,-";
        document.querySelector("#price").innerText = "€128.30";
    }
    else if(barDragged >= 33 && barDragged <= 66){
        document.querySelector("#priceBottom").innerText = "€585,-";
        document.querySelector("#price").innerText = "€120.30";
    }
    else{
        document.querySelector("#priceBottom").innerText = "€885,-";
        document.querySelector("#price").innerText = "€108.30";
    } 

}