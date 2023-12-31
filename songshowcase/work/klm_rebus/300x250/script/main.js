window.onload = bannerInit;

function bannerInit() {


    document.querySelector('#mainExit').addEventListener('click', bgExitHandler, false);
    document.querySelector('#mainExit').addEventListener('mouseover', onOver, false);

    var dur = 8;

    window.masterTL = gsap.timeline({});
    window.masterTL.to("#loaderWrapper", 0.5, {opacity:0});
    window.masterTL.add("intro");
    window.masterTL.add(getWeatherAnimation().duration(29.5), "intro");
    window.masterTL.add(getBallAnimation().duration(29.5), "intro");
    window.masterTL.add(getOneAnimation().duration(29.5), "intro");
    window.masterTL.add(getSpaceAnimation().duration(29.5), "intro");
    window.masterTL.from("#sunWrapper", 0.5, {opacity:0, ease:Power2.easeOut}, "intro");
    window.masterTL.to("#sunWrapper", 0.5, {scale:0.3, y:110, x:-96, ease:Power1.easeInOut}, "intro+=1");
    window.masterTL.to("#wIsM", 0.001, {scale:0.7, y:102}, "intro+=1");
    window.masterTL.from("#wIsM", 0.5, {opacity:0, ease:Power2.easeOut}, "intro+=1");
    window.masterTL.from("#ballWrapper", 0.5, {opacity:0, ease:Power2.easeOut}, "intro+=1.5");
    window.masterTL.to("#ballWrapper", 0.5, {scale:0.3, y:110, x:-36, ease:Power1.easeInOut}, "intro+=2.5");
    window.masterTL.to("#minAl", 0.001, {scale:0.7, y:102}, "intro+=2.5");
    window.masterTL.from("#minAl", 0.5, {opacity:0, ease:Power2.easeOut}, "intro+=2.5");
    window.masterTL.from("#oneWrapper", 0.5, {opacity:0, ease:Power2.easeOut}, "intro+=3");
    window.masterTL.to("#oneWrapper", 0.5, {scale:0.3, y:110, x:33, ease:Power1.easeInOut}, "intro+=4");
    window.masterTL.to("#plus1", 0.001, {x:0, y:112, ease:Power1.easeInOut}, "intro+=4");
    window.masterTL.from("#plus1", 0.5, {opacity:0, ease:Power1.easeInOut}, "intro+=4");
    window.masterTL.from("#spaceWrapper", 0.5, {opacity:0, ease:Power2.easeOut}, "intro+=4.5");
    window.masterTL.to("#spaceWrapper", 0.5, {scale:0.333, x:104, ease:Power1.easeInOut}, "intro+=5.5");
    window.masterTL.to("#oneWrapper", 0.5, {scale:0.333, y:0, ease:Power2.easeInOut}, "intro+=5.5");
    window.masterTL.to("#ballWrapper", 0.5, {scale:0.333, y:0, ease:Power2.easeInOut}, "intro+=5.5");
    window.masterTL.to("#sunWrapper", 0.5, {scale:0.333, y:0, ease:Power2.easeInOut}, "intro+=5.5");
    window.masterTL.from("#plus2", 0.5, {opacity:0, ease:Power1.easeInOut}, "intro+=5.5");
    window.masterTL.to("#plus1", 0.5, {x:0, y:0, ease:Power1.easeInOut}, "intro+=5.5");
    window.masterTL.to("#wIsM", 0.5, {x:0, y:0, scale:1, ease:Power1.easeInOut}, "intro+=5.5");
    window.masterTL.to("#minAl", 0.5, {x:0, y:0, scale:1, ease:Power1.easeInOut}, "intro+=5.5");
    window.masterTL.from("#ctaWrapper", 0.5, {opacity:0, ease:Power1.easeInOut}, "intro+=6");

    var del = 8;
    for(var i=0; i < 7; i++){ 

        window.masterTL.to("#cta", 1, {scale:0.95, ease:Power1.easeInOut}, del);
        window.masterTL.to("#cta", 1, {scale:1, ease:Power1.easeInOut}, del+1);
        window.masterTL.to("#ctaArrow", 0.2, {x:3, ease:Power1.easeInOut}, del+2);
        window.masterTL.to("#ctaArrow", 0.2, {x:0, ease:Power1.easeInOut}, del+2.2);
        window.masterTL.to("#ctaArrow", 0.2, {x:3, ease:Power1.easeInOut}, del+2.5);
        window.masterTL.to("#ctaArrow", 0.2, {x:0, ease:Power1.easeInOut}, del+2.7);
        del+=3; 
    }
    
}

function getWeatherAnimation(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.from("#wing", 1, {x:100, ease:Power3.easeOut}, "start");
    tl.from("#sunStrings", 2, {scale:0.8, ease:Power0.easeNone, repeat:14, yoyo:true}, "start");
    tl.to("#rain1", 2, {x:-50, y:100, ease:Power0.easeNone, repeat:14}, "start");
    tl.to("#rain2", 2, {x:-50, y:100, ease:Power0.easeNone, repeat:14}, "start+=1");
    tl.to("#rain1", 0.0001, {x:0, y:0, ease:Power0.easeNone}, "-=1");
    tl.to("#rain1", 1, {x:-25, y:50, ease:Power0.easeNone}, "-=0.999");

    return tl;
}

function getBallAnimation(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.to("#ball", 4, {rotation:360, repeat:7, ease:Power0.easeNone}, "start");

    return tl;
}

function getOneAnimation(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.from("#one", 1, {scale:0.75, repeat:28, yoyo:true, ease:Power2.easeInOut}, "start");

    return tl;
}

function getSpaceAnimation(){
    var tl = gsap.timeline({});
    tl.add("start")
    tl.from("#star1", 1, {opacity:0, repeat:28, yoyo:true, ease:Power2.easeInOut}, "intro");
    tl.from("#star2", 0.8, {opacity:0, repeat:30, yoyo:true, ease:Power2.easeInOut}, "intro");
    tl.to("#spaceship", 2, {y:5, repeat:14, yoyo:true, ease:Power2.easeInOut}, "intro");

    return tl;
}

function bgExitHandler(e) {
    window.open(window.clickTag)
    masterTL.progress(1);
}

function onOver(){
    if(window.mobileAndTabletcheck()){}
    else{
        if(window.masterTL.progress() == 1){
            gsap.to("#cta", 0.25, {x:3, repeat:1, yoyo:true, ease:Power2.easeIn});
        }
    }
}

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};