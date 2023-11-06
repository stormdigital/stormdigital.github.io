import assetHelper from '../helpers/asset.js';

const self = {
    eventBus: null,
    initialize: (eventBus) => {    
        self.eventBus = eventBus;
        let backgroundTL = self.createBackgroundTimeline();
        backgroundTL.play(0)
    },
    createBackgroundTimeline: () => {
        let b1 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
        let b2 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
              
        
        
        // linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)

        var tl = gsap.timeline({paused:true, repeat: -1, yoyo:true})
        tl.add('start')
        tl.add(gsap.set(".background", {background: b1}), 'start')
        tl.add(gsap.to(".background", 15, {ease: "sine.inOut", background: b2}), 'start')

        // tl.add(gsap.set(".headline", {background: b2}), 'start')
        // tl.add(gsap.to(".headline", 15, {ease: "sine.inOut", background: b1}), 'start')

        return tl;
    }
}

export default self;