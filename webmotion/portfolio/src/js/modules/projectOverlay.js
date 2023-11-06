import assetHelper from '../helpers/asset.js';

const self = {
    eventBus: null,
    initialize: (eventBus) => {
        self.eventBus = eventBus;
        self.handleProjectClickEvent();
        self.addEventListeners();
    },
    handleProjectClickEvent: () => {
        self.eventBus.addEventListener('country-clicked', (e) => {
        //change opacity of all countries expect the one that's clicked
            window.mapProjectsData.forEach(country => {
                if(e.detail.id !== country.id){
                    document.querySelector(`#${country.id}_country`).style.opacity = '0.5';
                }
            })

            self.renderCountryData(e.detail)
        });
    },
    addEventListeners: () => {
        const projectOverviewCloseBtn = document.querySelector('#projectOverviewCloseBtn')
        projectOverviewCloseBtn.addEventListener('click', () => {
            self.collapseProjectOverlay();
        })

        document.querySelector('#projectsBackgroundOverlay').addEventListener('click', function(){
            self.collapseProjectOverlay();
        })
        
        var brazilArabicaButton = document.querySelector('#Arabica');
        var brazilRobustaButton = document.querySelector('#Robusta');
        var riskWrapper = document.querySelector('#risksWrapper');
        
        brazilArabicaButton.addEventListener('click', function(){
            brazilRobustaButton.classList.remove("active");
            brazilArabicaButton.classList.add("active");
            riskWrapper.innerHTML = "";
            gsap.set("#riskInfoWrapper", {display: "none"});
            gsap.set("#currentAndPastProjects", {display: "block"});
            self.renderBrazilRisks("Brazil_Arabica");
        })
        
        brazilRobustaButton.addEventListener('click', function(){
            brazilRobustaButton.classList.add("active");
            brazilArabicaButton.classList.remove("active");
            riskWrapper.innerHTML = "";
            gsap.set("#riskInfoWrapper", {display: "none"});
            gsap.set("#currentAndPastProjects", {display: "none"});
            self.renderBrazilRisks("Brazil_Robusta");
        })


    },
    collapseProjectOverlay: () => {

        gsap.set(['#projectsWrapper', '#projectsBackgroundOverlay'], {display:'none'})
        gsap.set(['#article'], {display:'none'})
        gsap.set(['#projectOverviewBackBtn'], {display:'none'})
        gsap.set(['#currentAndPastProjects'], {display:'block'})
        
        self.resetCountryData();
    },
    computeVisibleCountries: () => {
        
        return window.mapProjectsData.filter(country => {
            
            return country.projects.some(project => {
                return project.focusAreas.some( focusArea => {
                    return window.activeProjectTypes.includes(focusArea)
                })
            })
        
        })
    },
    resetCountryData: () => {

        document.querySelector("#Robusta").classList.remove("active");
        document.querySelector("#Arabica").classList.remove("active");

        document.querySelector("#risksWrapper").innerHTML = "";
        document.querySelector("#currentProjectsWrapper").innerHTML = "";
        document.querySelector("#pastProjectsWrapper").innerHTML = "";
        document.querySelector("#imagesDragContainer").innerHTML = "";
        document.querySelector("#focusAreasWrapper").innerHTML = "";
        document.querySelector("#partnersWrapper").innerHTML = "";
        document.querySelector("#projectPartnerWrapper").innerHTML = "";

        gsap.set("#imagesDragContainer", {x:0});
        gsap.set('.gradientLeft', {opacity:0});
        gsap.set(['#riskLevelsText', "#risksWrapper", "#riskInfoWrapper"], {display:"none"});
        gsap.set('#btnWrapperBrazil', {display:"none"});

        var visibleCountries = self.computeVisibleCountries().map( country => country.id);

        if(visibleCountries.length == 0){
            window.mapProjectsData.forEach(country => {
                document.querySelector(`#${country.id}_country`).style.opacity = '1';
            })
        }
        else{
            visibleCountries.forEach(country => {
                document.querySelector(`#${country}_country`).style.opacity = '1';
            })
        }

    },
    renderCountryData: (country) => {

        window.currentProjectsCount = 0;
        window.pastProjectsCount = 0;

        if(window.activeProjectTypes != ""){
            country.projects.forEach(project => {
                const matchingFocusAreasAndFilters = (window.activeProjectTypes.filter(function (obj) {
                    return project.focusAreas.indexOf(obj) !== -1;
                }));
                if(matchingFocusAreasAndFilters.length > 0){
                    self.creatProject(country, project);
                }
            });
        }
        else{
            country.projects.forEach(project => {
                self.creatProject(country, project);
            });
        }

        if(country.region == ""){
            document.querySelector("#region").style.display = 'none'
        }
        else{
            document.querySelector("#region").style.display = 'block'
            document.querySelector("#region").innerText = country.region;    
        }

        if(country.projects.length == 0){

        }
        
        document.querySelector("#country").innerText = country.name;

        if(country.risks.length > 1){

            if(window.activeProjectTypes.length > 0){
                for(var i=0; i < window.activeProjectTypes.length; i++){
                    country.risks.forEach(risk => {
                        if (window.activeProjectTypes[i] == risk.id){
                            self.renderRisks(risk);
                        } 
                    });
                }
            }
            else{
                country.risks.forEach(risk => {
                        self.renderRisks(risk);
                });
            }

            gsap.set("#riskLevelsText", {display:"block"});
            gsap.set("#risksWrapper", {display:"flex"});
        }
        
        else if(country.id == "Brazil"){
            document.querySelector("#Arabica").classList.add("active");
            self.renderBrazilRisks("Brazil_Arabica");
        };
        
        gsap.set(['#projectsWrapper', '#projectsBackgroundOverlay'], {display:'block'})
        gsap.from('#projectsWrapper', 0.5, {x:400, ease:Power2.easeOut});

        dataLayer.push({
            event: "sustainability_map_country_clicked",
            country: country.id
        });
    },
    renderRisks: (risk) => {
        window.mapProjectsTypes.forEach(projectType => {
                if(projectType.id == risk.id){
                    var newType = document.createElement("div");
                        newType.className = "articleProjectType";
                        document.querySelector("#risksWrapper").appendChild(newType);
                        
        
                    //createSVG
                        var newIcon = document.createElement("object");
                        newIcon.className = "projectIcon";
                        newIcon.data = assetHelper.createAssetUrl(projectType.icon);
                        newType.appendChild(newIcon);
        
                    //setTypeName    
                        var newTypeName = document.createElement("div");
                        newTypeName.className = "projectName";
                        newTypeName.innerText = projectType.name;
                        newType.appendChild(newTypeName);

                    //createRiskDop    
                        var riskDot = document.createElement("div");
                        riskDot.className = "riskDot";
                        riskDot.style.backgroundColor = risk.riskColor;
                        newType.appendChild(riskDot);

                    //add click
                        newType.addEventListener("click", function(){
                            self.checkRiskSummary(risk, projectType.name, newType);
                        });
                }
        });

    },
    renderBrazilRisks: (brazilRegion) => {

        gsap.set("#btnWrapperBrazil", {display: "flex"})

        if(window.activeProjectTypes.length > 0){
            for(var i=0; i < window.activeProjectTypes.length; i++){
                
                window.mapProjectsData.forEach(country => {
                    if(country.id == brazilRegion){
                        country.risks.forEach(risk => {
                            if (window.activeProjectTypes[i] == risk.id){
                                self.renderRisks(risk);
                            } 
                        });
                    }
                });
            }
        }
        else{
            window.mapProjectsData.forEach(country => {
                if(country.id == brazilRegion){
                    country.risks.forEach(risk => {
                        self.renderRisks(risk); 
                    });
                }
            });
        }

        gsap.set("#riskLevelsText", {display:"block"});
        gsap.set("#risksWrapper", {display:"flex"});
    },
    checkRiskSummary: (risk, name, target) => {

        if(target.classList.contains("active")){
            self.hideRiskSummary();
        }
        else{
            self.showRiskSummary(risk, name, target);
        }

    },
    hideRiskSummary: () => {
        var notSelectedArr = document.querySelectorAll("#risksWrapper .articleProjectType");
        for(var i = 0; i <notSelectedArr.length; i++){
            notSelectedArr[i].classList.remove("active");
            notSelectedArr[i].classList.remove("notActive");
        }
        gsap.set("#riskInfoWrapper", {display:"none"});
    },
    showRiskSummary: (risk, name, target) => {

        var notSelectedArr = document.querySelectorAll("#risksWrapper .articleProjectType");
        for(var i = 0; i <notSelectedArr.length; i++){
            if(notSelectedArr[i] == target){
                notSelectedArr[i].classList.add("active");
                notSelectedArr[i].classList.remove("notActive");
            }
            else{
                notSelectedArr[i].classList.remove("active");
                notSelectedArr[i].classList.add("notActive");
            }
        }
        
        gsap.set("#riskInfoWrapper", {display:"block"});
        
        document.querySelector("#riskInfoTitle").innerText = name;
        document.querySelector("#riskLevel").style.color = risk.riskColor;
        if(risk.riskColor == "#2f75b5"){
            //Lower risk
            document.querySelector("#riskLevel").innerText = "(Lower risk)";
        }
        else if(risk.riskColor == "#bdd7ee"){
            //Medium risk
            document.querySelector("#riskLevel").innerText = "(Medium risk)";
        }
        else if(risk.riskColor == "#ffc000"){
            //Higher risk
            document.querySelector("#riskLevel").innerText = "(Higher risk)";
        }
        else{
            //unknow
            document.querySelector("#riskLevel").innerText = "";
        }

        document.querySelector("#riskInfoSummary").innerText = risk.text;
    },
    creatProject: (country, project) => {
        if(project.forceCurrentProject === ""){

            var endYear = project.endYear;
            var currentYear = new Date().getFullYear();
            if(endYear >= currentYear){
                self.setProject("current", project, country);
            }
            else{
                self.setProject("past", project, country);
            }
        }
        else if(project.forceCurrentProject){
            self.setProject("current", project, country);
        }
        else{        
            self.setProject("past", project, country);
        }

        document.querySelector("#currentProjectCount").innerText = window.currentProjectsCount;    
        document.querySelector("#pastProjectCount").innerText = window.pastProjectsCount;    

        if(window.currentProjectsCount == 0){
            document.querySelector("#currentProjectsText").style.display = 'none'
        }
        else{
            document.querySelector("#currentProjectsText").style.display = 'block'
        }

        if(window.pastProjectsCount == 0){
            document.querySelector("#pastProjectsText").style.display = 'none'
        }
        else{
            document.querySelector("#pastProjectsText").style.display = 'block'
        }
    },
    setProject: (currentOrPast, project, country) => {
        window[currentOrPast+"ProjectsCount"]++;
        var newProject = document.createElement("div");
        newProject.className = "project";
        newProject.innerText = project.name;
        newProject.setAttribute('project-name', project.name)
        document.querySelector("#"+currentOrPast+"ProjectsWrapper").appendChild(newProject);

        newProject.addEventListener("click", function(e){
            const event = new CustomEvent('project-clicked', {detail: [e.target, country.projects, country]});
            gsap.to(['#currentAndPastProjects', "#riskLevelsText", "#risksWrapper", "#riskInfoWrapper", "#btnWrapperBrazil"], 0.4, {opacity:0, x:-15, onComplete: function(){
                gsap.set(['#currentAndPastProjects', "#riskLevelsText", "#risksWrapper", "#riskInfoWrapper", "#btnWrapperBrazil"], {clearProps: "all"})
                self.eventBus.dispatchEvent(event);
                self.hideRiskSummary();
                gsap.set("#btnWrapperBrazil", {display:"none"});
            }})

        })

        newProject.addEventListener("mouseover", function(e){
            gsap.to(newProject, 0.4, {x:5, color: '#a48f75'})
         })
 
         newProject.addEventListener("mouseout", function(e){
             gsap.to(newProject, 0.4, {x:0, color: '#7e694e'})
         })
    }
}

export default self;