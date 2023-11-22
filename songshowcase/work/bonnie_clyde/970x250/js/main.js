window.onload = function () {
    init();
    window.rolloverAllowed = true;
}

function init(){

    createTriangles();

    document.querySelector("#mainExit").addEventListener("click", exit);
    document.querySelector("#mainExit").addEventListener("mouseover", onOver);
    document.querySelector("#mainExit").addEventListener("mouseout", onOut);
    
    masterTL = new TimelineLite({paused:true});
    masterTL.to("#loaderWrapper", 0.25, {autoAlpha:0, ease:Sine.easeInOut});
    masterTL.to("#triangleWrapper", 0.01, {background:"transparent"});
    masterTL.add(animateTriangles().timeScale(2).reverse());
    masterTL.add("start", "-=0.9");
    masterTL.to("#bg", 4, {x:-197, ease:Sine.easeOut}, "start");
    masterTL.from("#clydeWrapper", 4, {x:250, ease:Sine.easeOut}, "start");
    masterTL.from("#gun", 4, {rotation:15, ease:Sine.easeInOut}, "start");
    masterTL.from(["#bonnie", "#bonnieGlasses"], 4, {x:270, ease:Sine.easeOut}, "start");
    masterTL.from("#logoBC", 0.4, {opacity:0, ease:Sine.easeOut}, "start+=0.5");
    masterTL.from("#shine", 0.7, {x:"-200%", ease:Power0.easeNone}, "start+=1");
    masterTL.from("#shine", 0.35, {opacity:0.4, repeat:1, yoyo:true, ease:Power1.easeInOut}, "start+=1");
    masterTL.from("#logoVL", 0.4, {opacity:0, ease:Sine.easeOut}, "start+=2");
    masterTL.from("#ctaPrice", 0.4, {scale:0, ease:Back.easeOut}, "start+=2.5");
    masterTL.from("#cta", 0.5, {scale:0, ease:Back.easeOut}, "start+=2.9");
    masterTL.to("#cta", 0.5, {x:-10, ease:Back.easeInOut}, "start+=5");
    masterTL.to("#ctaPrice", 0.5, {x:10, ease:Back.easeInOut}, "start+=5");
    masterTL.to("#cta", 0.5, {x:-0, ease:Back.easeInOut}, "start+=5.5");
    masterTL.to("#ctaPrice", 0.5, {x:0, ease:Back.easeInOut}, "start+=5.5");

    masterTL.play(0);

}

function onOver(){
    if(masterTL.progress() == 1 && window.rolloverAllowed){
        window.rolloverAllowed = false;
        gsap.to("#bg", 0.5, {x:-193, ease:Sine.easeInOut});
        gsap.to("#clydeWrapper", 0.5, {x:8, ease:Sine.easeInOut});
        gsap.to("#gun", 0.5, {rotation:2, ease:Sine.easeInOut});
        gsap.to(["#bonnie", "#bonnieGlasses"], 0.5, {x:13, ease:Sine.easeInOut});
        gsap.from("#shine", 0.5, {x:"-200%", ease:Power0.easeNone, onComplete:function(){
            window.rolloverAllowed = true;
        }});
        gsap.from("#shine", 0.25, {opacity:0.4, repeat:1, yoyo:true, ease:Power1.easeInOut});
        gsap.to("#ctaPrice", 0.3, {scale:0, ease:Back.easeIn});
        gsap.to("#cta", 0.3, {color:"#000", y:-19, background:"#fff", ease:Power1.easeInOut});
    }
}

function onOut(){
    if(masterTL.progress() == 1){
        gsap.to("#bg", 0.5, {x:-197, ease:Sine.easeInOut});
        gsap.to("#clydeWrapper", 0.5, {x:0, ease:Sine.easeInOut});
        gsap.to("#gun", 0.5, {rotation:0, ease:Sine.easeInOut});
        gsap.to(["#bonnie", "#bonnieGlasses"], 0.5, {x:0, ease:Sine.easeInOut});
        gsap.to("#ctaPrice", 0.3, {scale:1, ease:Back.easeOut});
        gsap.to("#cta", 0.3, {color:"#fff", y:0, background:"#ec4b4e", ease:Power1.easeInOut});
    
    }
}

function exit(){
    masterTL.progress(1);
    window.open(window.clickTag)
}

function createTriangles(){
    var wrapperW = document.querySelector("#triangleWrapper").offsetWidth;
    var wrapperH = document.querySelector("#triangleWrapper").offsetHeight;
    var triangleW = 50;
    this.lines = Math.ceil(wrapperW/triangleW);
    this.rows = Math.ceil(wrapperH/triangleW);    

    for(var j = 0; j < this.rows; j++){
        if(j%2){
            var mLeft = 25;
        }
        else{
            var mLeft = 0;
        }  

        for(var i = 0; i < this.lines; i++){
            for(var k = 0; k <= 1; k++){         
                var triangle = document.createElement("div");
                triangle.style.top = 48 * j + "px";
                if(k == 1){
                    triangle.className = "triangleDown triangle";
                    triangle.style.left = mLeft + (50 * i) + "px";
                }
                else{
                    triangle.className = "triangleUp triangle";
                    triangle.style.left = (mLeft + (50 * i)+ 25)+ "px";
                }
                document.querySelector("#triangleWrapper").appendChild(triangle);
            }
        }
    }
}

function animateTriangles(){
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    
    var triangles = document.querySelectorAll(".triangle");

    var tl = new TimelineLite({});
    var middle = Math.floor(this.lines);
    for(var i = 0; i < this.rows*2 ; i+=2){                
        for(var j = this.lines*i; j < this.lines*(i+2); j++){
            var delay = j - (this.lines*i) - middle;
            if(delay < 0){
                delay *= -1;
            }
            delay /= 20;
            if(gsap.utils.random(0, 1, 1) > 0 && isChrome || gsap.utils.random(0, 1, 1) > 0 && isSafari){
                if(triangles[j].className.indexOf("Down") > -1){    
                    tl.from(triangles[j], gsap.utils.random(0.2, 0.4, 0.01), {opacity:0, ease:Sine.easeInOut}, gsap.utils.random(delay+(0.2*(i/2)), delay+(0.2*(i/2))+0.2, 0.01));
                    tl.from(triangles[j], 0.4, {borderTop: "50px solid #FFF", ease:Power2.easeIn}, delay+(0.2*(i/2)));
                }
                else{
                    tl.from(triangles[j], gsap.utils.random(0.2, 0.4, 0.01), {opacity:0, ease:Sine.easeInOut}, gsap.utils.random(delay+(0.2*(i/2)), delay+(0.2*(i/2))+0.2, 0.01));
                    tl.from(triangles[j], 0.4, {borderBottom: "50px solid #FFF", ease:Power2.easeIn}, delay+(0.2*(i/2))); 
                }
            }
            else{
                tl.from(triangles[j], gsap.utils.random(0.2, 0.4, 0.01), {opacity:0, ease:Sine.easeInOut}, gsap.utils.random(delay+(0.2*(i/2)), delay+(0.2*(i/2))+0.2, 0.01));
            }
        }
    }
    return tl;
}

