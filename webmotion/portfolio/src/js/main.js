import background from './modules/background.js';
import introAnimation from './modules/introAnimation.js';
import tickerLoop from './modules/tickerLoop.js';


const eventBus = new EventTarget();

window.addEventListener('load', () => {
  background.initialize(eventBus);
  introAnimation.initialize(eventBus);
  tickerLoop.initialize(eventBus);
  // projectOverlay.initialize(eventBus);
  // projectFilters.initialize(eventBus);
  // article.initialize(eventBus);
})