import assetHelper from '../helpers/asset.js';

const self = {
    eventBus: null,
    initialize: (eventBus) => {    
        self.eventBus = eventBus;
        let introAnimation = self.createIntroTimeline();
        introAnimation.play(0)
    },
    createIntroTimeline: () => {
        var tl = gsap.timeline({ paused: true })
        tl.add('start')
        // tl.to('.headline', 0, { x: "65vw" }, "start")
        // tl.to('.title01', 0.1, {opacity:0}, 'start+=15')
        // tl.to('.title02', 0.1, { opacity: 1 }, 'start+=15')
        

        // tl.fromTo('.headline', 2, {x:(document.querySelector('.headline .title01').offsetWidth + document.querySelector('.headline .title03').offsetWidth)/4 + 150 },{ x: (document.querySelector('.headline .title01').offsetWidth + document.querySelector('.headline .title03').offsetWidth)/4}, "start+=2")
        // tl.fromTo('.headline', 1, { x: '25vw' }, { x: 0 }, "start")
        // tl.fromTo('.headline', 1,{x: 0}, {x: -200}, "start+=2")
        // tl.fromTo('.headline', 12, {x:5200, ease: "sine.inOut"},{x:-5200}, "start")
        // tl.to('.headline', 0.6, {scale: 1, x:0, ease: "sine.inOut"}, "start+=12")
        return tl
    }
}

export default self;