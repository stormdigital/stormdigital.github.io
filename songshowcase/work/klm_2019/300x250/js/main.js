window.onload = function () {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }

    function enablerInitHandler() {
        if (Enabler.isPageLoaded()) {
            showAd();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
        }
	}
	
	function showAd() {
        //polyfill 
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                
                if (start + search.length > this.length) {
                    return false;
                } else {
                    return this.indexOf(search, start) !== -1;
                }
            };
            
        }
        init();
    }
    
    function init(){

        document.querySelector("#mainExit").addEventListener("click", exit);
        document.querySelector("#mainExit").addEventListener("mouseover", onOver);
        document.querySelector("#mainExit").addEventListener("mouseout", onOut);

        setUpRibbons();
        
        masterTL = new TimelineLite({paused:true});
        masterTL.add(removeLoader(),0);
        masterTL.add("start");
        masterTL.add(animateClouds(), "start");
        masterTL.add(introAnimation(), "start");
        masterTL.add(secondScreenAnimation(), "start+=3.6");
        masterTL.add(thirdScreenAnimation(), "start+=7.2");
        masterTL.add(endScreenAnimation(), "start+=11");
        
        masterTL.play(0);
        
        TweenMax.ticker.addEventListener("tick", checkDelta);
        TweenMax.ticker.fps(60);//test
    }
    
    function removeLoader(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.to("#loaderWrapper", 0.5, {autoAlpha:0, ease:Sine.easeInOut}, "start");

        return tl;
    }

    function animateClouds(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.to("#cloudsWrapper", 14.5, {x:-1200, force3D:true, repeat:0, ease:Power0.easeNone}, "start");        
        tl.to("#ribbonWrapper", 2.4, {x:-5, rotation:2, force3D:true, repeat:5, yoyo:true, ease:Sine.easeInOut}, "start");

        return tl;
    }

    function introAnimation(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.to("#ribbonLeft1", 1.3, {onUpdate:function(){tickRL1();}}, "start");
        tl.to("#ribbonLeft2", 1, {onUpdate:function(){tickRL2();}}, "start+=0.6");
        tl.to("#ribbonLeft3", 1.4, {onUpdate:function(){tickRL3();}}, "start+=0.8");
        tl.from("#dealLogo", 1, {scale:0, ease:Back.easeOut.config(1)}, "start+=1");
        tl.to("#dealLogo", 2.5, {y:-5, repeat:1, yoyo:true, ease:Sine.easeInOut}, "start+=1");
        
        tl.to("#dealLogo", 1, {x:-300, ease:Back.easeIn.config(0.5)}, "start+=3");
        tl.to("#ribbonWrapper", 1, {x:-300, ease:Back.easeIn.config(0.1)}, "start+=3");
        
        return tl;
    }

    function secondScreenAnimation(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.to("#ribbonLeft3", 1, {onUpdate:function(){tickRL3();}}, "start");
        tl.from("#dest1", 0.8, {x:300, ease:Power2.easeOut}, "start");
        tl.from("#dest1Box", 0.9, {x:300, ease:Power2.easeInOut}, "start");
        tl.to("#dest1", 2, {rotationY:3, y:-4, x:2, ease:Power1.easeInOut}, "start+=1");
        tl.to("#dest1Box", 1.9, {rotationY:2, y:3, x:-1, force3D:true, ease:Power1.easeInOut}, "start+=1.1");

        tl.to("#dest1", 1, {x:-300, ease:Back.easeIn.config(0.5)}, "start+=3");
        tl.to("#dest1Box", 1, {x:-300, ease:Back.easeIn.config(0.5)}, "start+=3.1");
        tl.to("#ribbonWrapper", 1, {x:-600, ease:Back.easeIn.config(0.1)}, "start+=3");
        
        return tl;
    }

    function thirdScreenAnimation(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.to("#ribbonLeft3", 1, {onUpdate:function(){tickRL3();}}, "start");
        tl.to("#ribbonRight1", 3, {onUpdate:function(){tickRR1();}}, "start+=0");
        tl.to("#ribbonRight2", 3, {onUpdate:function(){tickRR2();}}, "start+=0.8");
        tl.from("#dest2", 0.8, {x:300, ease:Power2.easeOut}, "start");
        tl.from("#dest2Box", 0.9, {x:300, ease:Power2.easeInOut}, "start");
        tl.to("#dest2", 2, {rotationY:-3, y:4, x:-2, ease:Power1.easeInOut}, "start+=1");
        tl.to("#dest2Box", 1.9, {rotationY:-2, y:-3, x:1, force3D:true, ease:Power1.easeInOut}, "start+=1.1");

        tl.to("#dest2", 1, {x:-300, ease:Back.easeIn.config(0.5)}, "start+=3");
        tl.to("#dest2Box", 1, {x:-300, ease:Back.easeIn.config(0.5)}, "start+=3.1");
        tl.to("#ribbonWrapper", 1, {x:-900, ease:Back.easeIn.config(0.1)}, "start+=3");
        
        return tl;
    }

    function endScreenAnimation(){

        var tl = new TimelineLite({});
        tl.add("start")
        tl.from("#plane", 3.5, {x:-300, y:50, scale:0.5, rotation:-5, ease:Power1.easeOut}, "start");
        tl.from("#blueBox", 1, {x:300, ease:Power1.easeOut}, "start");
        tl.from("#wing", 1, {x:100, ease:Power1.easeOut}, "start+=0.9");
        
        return tl;
    }

    function setUpRibbons(){

        canvasWidth = 1200;
        canvasHeight = 250;
    
        xPos = 0;
        yPos = 0;
        
        cntRL1 = 0;
        speedRL1 = 3;
        cnvsRL1 = document.querySelector("#ribbonLeft1");
        ctxRL1 = cnvsRL1.getContext('2d');
        cnvsRL1.setAttribute('width', canvasWidth);
        cnvsRL1.setAttribute('height', canvasHeight);
        imagebgRL1 = new Image();
        imagebgRL1.src = './img/ribbon_left_1.png';
        
        cntRL2 = 0;
        speedRL2 = 3;
        cnvsRL2 = document.querySelector("#ribbonLeft2");
        ctxRL2 = cnvsRL2.getContext('2d');
        cnvsRL2.setAttribute('width', canvasWidth);
        cnvsRL2.setAttribute('height', canvasHeight);
        imagebgRL2 = new Image();
        imagebgRL2.src = './img/ribbon_left_2.png';
        
        cntRL3 = 0;
        speedRL3 = 5;
        cnvsRL3 = document.querySelector("#ribbonLeft3");
        ctxRL3 = cnvsRL3.getContext('2d');
        cnvsRL3.setAttribute('width', canvasWidth);
        cnvsRL3.setAttribute('height', canvasHeight);
        imagebgRL3 = new Image();
        imagebgRL3.src = './img/ribbon_left_3.png';

        cntRR1 = 0;
        speedRR1 = 5;
        cnvsRR1 = document.querySelector("#ribbonRight1");
        ctxRR1 = cnvsRR1.getContext('2d');
        cnvsRR1.setAttribute('width', canvasWidth);
        cnvsRR1.setAttribute('height', canvasHeight);
        imagebgRR1 = new Image();
        imagebgRR1.src = './img/ribbon_right_1.png';

        cntRR2 = 0;
        speedRR2 = 5;
        cnvsRR2 = document.querySelector("#ribbonRight2");
        ctxRR2 = cnvsRR2.getContext('2d');
        cnvsRR2.setAttribute('width', canvasWidth);
        cnvsRR2.setAttribute('height', canvasHeight);
        imagebgRR2 = new Image();
        imagebgRR2.src = './img/ribbon_right_2.png';

        maskLeft = new Image();
        maskLeft.src = './img/mask_left.png';

        maskRight = new Image();
        maskRight.src = './img/mask_right.png';
    }

    function checkDelta(){
        let currentTime = new Date().getTime();
        window.delta = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime; 
    }
    
    function tickRL1(){
        // cntRL1 += speedRL1;
        cntRL1 += (this.delta*180);    
        console.log(cntRL1);
    
        ctxRL1.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxRL1.globalCompositeOperation = 'source-over';
        ctxRL1.drawImage(imagebgRL1, 0, 0, canvasWidth, canvasHeight);
        ctxRL1.globalCompositeOperation = 'destination-in';
        ctxRL1.drawImage(maskRight, -1200+cntRL1, yPos, 1200, 250);
    }

    function tickRL2(){
        cntRL2 += (delta*180);
        

        ctxRL2.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxRL2.globalCompositeOperation = 'source-over';
        ctxRL2.drawImage(imagebgRL2, 0, 0, canvasWidth, canvasHeight);
        ctxRL2.globalCompositeOperation = 'destination-in';
        ctxRL2.drawImage(maskLeft, -cntRL2, yPos, 1200, 250);
    }

    function tickRL3(){
        cntRL3 += (delta*300);

        ctxRL3.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxRL3.globalCompositeOperation = 'source-over';
        ctxRL3.drawImage(imagebgRL3, 0, 0, canvasWidth, canvasHeight);
        ctxRL3.globalCompositeOperation = 'destination-in';
        ctxRL3.drawImage(maskRight, -1200+cntRL3, yPos, 1200, 250);
    }

    function tickRR1(){
        cntRR1 += (delta*300);        

        ctxRR1.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxRR1.globalCompositeOperation = 'source-over';
        ctxRR1.drawImage(imagebgRR1, 0, 0, canvasWidth, canvasHeight);
        ctxRR1.globalCompositeOperation = 'destination-in';
        ctxRR1.drawImage(maskLeft, 1100-cntRR1, yPos, 1200, 250);
    }

    function tickRR2(){
        cntRR2 += (delta*300);

        console.log(cntRR2);

        ctxRR2.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxRR2.globalCompositeOperation = 'source-over';
        ctxRR2.drawImage(imagebgRR2, 0, 0, canvasWidth, canvasHeight);
        ctxRR2.globalCompositeOperation = 'destination-in';
        ctxRR2.drawImage(maskRight, -400+cntRR2, yPos, 1200, 250);
    }

    function onOver(){
        TweenMax.to("#cta", 0.5, {background:"#FFF", color:"#e77b2f", ease:Power1.easeInOut});
    }
    
    function onOut(){
        TweenMax.to("#cta", 0.25, {background:"#e77b2f", color:"#FFF", ease:Power1.easeInOut});
    }

    function exit(){
        
        masterTL.progress(1);
        onOut();
        Enabler.exit("Default exit");
    }
}
