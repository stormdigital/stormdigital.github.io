import background from './modules/background.js';
// import projectOverlay from './modules/projectOverlay';
// import projectFilters from './modules/projectFilters';
// import article from './modules/article';

const eventBus = new EventTarget();

window.addEventListener('load', () => {
  background.initialize(eventBus);
  // projectOverlay.initialize(eventBus);
  // projectFilters.initialize(eventBus);
  // article.initialize(eventBus);
})