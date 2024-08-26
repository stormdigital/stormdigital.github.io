import assetHelper from '../helpers/asset.js';

const self = {
    eventBus: null,
    initialize: (eventBus) => {    
        self.eventBus = eventBus;
        self.duplicateTickerItems();
        let tickerTL = self.createTickerTL();
        tickerTL.play(0)
    },
    duplicateTickerItems: () => {
        document.querySelector('.skillsTickerItemContainer').innerHTML += document.querySelector('.skillsTickerItemContainer').innerHTML      
    },
    createTickerTL: () => {
        var tl = gsap.timeline({ paused: true, repeat:-1 })
        tl.add('start')
        tl.to('.skillsTickerItemContainer', 30, { x: -document.querySelector('.skillsTickerItemContainer').offsetWidth/2, ease:"none" }, "start")
        return tl
    }
}

export default self;