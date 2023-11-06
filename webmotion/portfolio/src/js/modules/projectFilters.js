import assetHelper from '../helpers/asset.js';

const self = {
    eventBus: null,
    initialize: (eventBus) => {
        window.activeProjectTypes = [];
        self.eventBus = eventBus;
        self.createAreasArray();
        self.renderFilters();
        self.addEventListeners();
        self.initializeAssetUrls();
        self.setProjectTotalAmount();
        self.handleProjectCountUpdate();
        self.eventBus.addEventListener('map-is-visible', (e) => {
            self.initializeFilterBarIdleAnimation();
        });

        window.updatedProjectCounter = 0;
    },
    createAreasArray: () => {
        window.mapProjectsData.forEach(country => {
            country.projects.forEach(project => {
                var str = project.focusAreas;
                str = str.replaceAll(/\s/g,'')
                project.focusAreas = new Array();
                project.focusAreas = str.split(",");
            });
        });
    },
    collapseFilterMenu: () => {
        self.eventBus.addEventListener('hide-filters-bar', (e) => {
            if(document.querySelector("#arrowWrapper").classList.contains('expanded')){
                self.toggleVisibilityClass();
            }
        });
    },
    addEventListeners: () => {
        self.toggleFilterWrapperVisibilty();
        self.collapseFilterMenu();
    },
    initializeAssetUrls: () => {
        const projectsArrow = document.querySelector('#projectsArrow')
        projectsArrow.setAttribute('data', assetHelper.createAssetUrl(projectsArrow.getAttribute('data-src')))

        const projectsArrowWhite = document.querySelector('#projectsArrowWhite')
        projectsArrowWhite.setAttribute('data', assetHelper.createAssetUrl(projectsArrowWhite.getAttribute('data-src')))
    },
    
    initializeFilterBarIdleAnimation: () => {
        window.filterBarIdleTL = gsap.timeline({paused:true, repeat: 9, repeatDelay: 3, delay:5})
        filterBarIdleTL.add('start')
        filterBarIdleTL.to('#projectTypesWrapper', 0.4, {paddingTop: "+=0", paddingBottom: "+=5", repeat:3, yoyo:true, ease:"power1.easeInOut"}, 'start')
        filterBarIdleTL.play();
    },
    disableFilterBarIdle: () => {
        if(!window.filterBarIdleTL.paused()){
            window.filterBarIdleTL.pause(0);
            gsap.set('#projectTypesWrapper', {clearProps: 'all'})
        }
    },
    toggleFilterWrapperVisibilty: () => {
        //when arrowWrapper is clicked the projecttypes & arrowwrapper toggle their 'rotate' class
        document.querySelector("#projectTypesTopContentWrapper").addEventListener("click", function(){
            // e.preventDefault();
            self.toggleVisibilityClass();
            window.draggedStatus =true;
            gsap.set("#gestureOverlay", {display:"none"});
            window.swipeGestureAnimation.pause();
            window.tabGestureAnimation.pause();
        })
    },
    toggleVisibilityClass: () => {
        self.disableFilterBarIdle();
        var expandElements = [
            document.querySelector("#arrowWrapper"),
            document.querySelector('#projectTypesWrapper'),
            document.querySelector('#projectTypes'),
            document.querySelector('#projectTypesTopContentWrapper'),                
        ]

        expandElements.forEach(element => {
            element.classList.toggle("expanded");
        });

        if(expandElements[0].classList.contains("expanded")){
            var moveY = document.querySelector("#projectTypes").offsetHeight;
            gsap.from("#projectTypesWrapper", 0.5, {y:moveY, ease:Power2.easeOut});
        }
    },
    renderFilters: (e) => {   
        window.mapProjectsTypes.forEach(projectType => {
            //createNewType
                var newType = document.createElement("div");
                newType.id = projectType.id;
                newType.className = "newType forceActive";
                document.querySelector("#projectTypes").appendChild(newType);
                

            //createCloseButton
                var filterCloseIcon = document.createElement("object");
                filterCloseIcon.className = "filterCloseBtn";
                filterCloseIcon.data = assetHelper.createAssetUrl("images/filterCloseBtn-white.svg");
                newType.appendChild(filterCloseIcon);

            //createCloseButton
                var filterCloseIconBrown = document.createElement("object");
                filterCloseIconBrown.className = "filterCloseBtn filterCloseBtnBrown";
                filterCloseIconBrown.data = assetHelper.createAssetUrl("images/filterCloseBtn-brown.svg");
                newType.appendChild(filterCloseIconBrown);

            //createSVG
                var newIcon = document.createElement("object");
                newIcon.className = "projectIcon";
                newIcon.data = assetHelper.createAssetUrl(projectType.icon);
                newType.appendChild(newIcon);   
                    
            //createSVG
                var newIconWhite = document.createElement("object");
                newIconWhite.className = "projectIcon projectIconWhite";
                newIconWhite.type="image/svg+xml"
                newIconWhite.data = assetHelper.createAssetUrl(projectType.icon);
                newType.appendChild(newIconWhite); 
                newIconWhite.addEventListener("load",function() {
                    var iconSVG = newIconWhite.contentDocument.querySelector('svg');
                    iconSVG.querySelector('defs').querySelector('style').remove();
                    iconSVG.style.fill = '#fff';
               }, false);  
               

            //setTypeName    
                var newTypeName = document.createElement("div");
                newTypeName.className = "projectName";
                newTypeName.innerText = projectType.name;
                newType.appendChild(newTypeName);

            //toggleActiveFilters
                newType.addEventListener("click", self.addFiltersToggle);
        }) 
    },
    setProjectTotalAmount: () => {
        var allProjectsCount = 0;
        window.mapProjectsData.forEach(country => {
            allProjectsCount += country.projects.length;
        });
    
        document.querySelector("#projectCount").innerText = allProjectsCount;
    },
    handleProjectCountUpdate: e => {
        self.eventBus.addEventListener('update-project-count', (e) => {

            window.allProjectsCount += e.detail;
            var allNewTypes = document.querySelectorAll(".newType"); 
            
            window.updatedProjectCounter++;
            
            if(window.allProjectsCount == 0 && window.updatedProjectCounter == window.mapProjectsData.length){
                self.setProjectTotalAmount();
                window.mapProjectsData.forEach(country => {
                    document.querySelector(`#${country.id}_country`).style.display = 'block';
                    document.querySelector(`#${country.id}_country`).style.opacity = 1;
                    document.querySelector(`#${country.id}_country`).style.pointerEvents = "auto";
                    document.querySelector(`#${country.id}_country .countryText`).style.textShadow = "1px 2px 4px #000000";
                });
                allNewTypes.forEach(newType => {
                    newType.classList.add("forceActive");
                });
            }
            else{
                allNewTypes.forEach(newType => {
                    newType.classList.remove("forceActive");
                });
                document.querySelector("#projectCount").innerText = window.allProjectsCount;
            }
        });
    },
    addFiltersToggle: (e) => {
        e.preventDefault();
        if(e.target.classList.contains("active")){
            window.activeProjectTypes = window.activeProjectTypes.filter(f => f !== e.target.id);
        }
        else{
            window.activeProjectTypes.push(e.target.id)
        }

        e.target.classList.toggle("active");

        const event = new CustomEvent('filters-changed');
        self.eventBus.dispatchEvent(event);

        if(e.target.classList.contains("active")){
            dataLayer.push({
                event: "sustainability_map_project_type_filtered",
                projectType: e.target.id
            });
        }
    }
}

export default self;