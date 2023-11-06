import assetHelper from '../helpers/asset.js';


const self = {
    eventBus: null,
    initialize: (eventBus) => {
        self.eventBus = eventBus;
        self.handleProjectClickEvent();
        self.addEventListeners();
    },
    addEventListeners: () => {
        const projectOverviewBackBtn = document.querySelector('#projectOverviewBackBtn')
        projectOverviewBackBtn.addEventListener('click', () => {            
            self.goBackToProjects();
        })
    },
    goBackToProjects: () => {
        gsap.to('#article', 0.4, {opacity:0, x:15, onComplete: function(){

            gsap.set('#article', {clearProps: 'all'})
            self.resetArticleData(0);
            gsap.set(['#article'], {display:'none'})
            gsap.set(['#projectOverviewBackBtn'], {display:'none'})

            if(document.querySelector("#Arabica").classList.contains("active") || document.querySelector("#Robusta").classList.contains("active")){
                gsap.set("#btnWrapperBrazil", {display:'flex'})
            }
            
            if (document.querySelector("#risksWrapper").firstChild) {
                gsap.set("#riskLevelsText", {display:'block'})
                gsap.set("#risksWrapper", {display:'flex'});
            }
            
            gsap.set(['#currentAndPastProjects'], {display:'block'})
            gsap.from(['#currentAndPastProjects', "#riskLevelsText", "#risksWrapper", "#btnWrapperBrazil"], 0.4, {opacity:0, x:-15, onComplete: function(){
                // gsap.set(['#currentAndPastProjects', "#riskLevelsText", "#risksWrapper"], {clearProps: 'all'})
            }})
        }})
       
    },
    resetArticleData: () => {
        document.querySelector("#imagesDragContainer").innerHTML = "";
        document.querySelector("#focusAreasWrapper").innerHTML = "";
        document.querySelector("#partnersWrapper").innerHTML = "";
        document.querySelector("#projectPartnerWrapper").innerHTML = "";

        gsap.set("#imagesDragContainer", {x:0});
        gsap.set('.gradientLeft', {opacity:0});
    },
    handleProjectClickEvent: () => {
        self.eventBus.addEventListener('project-clicked', (e) => {
            // console.log(e.detail);
            gsap.set("#projectOverviewBackBtn", {display:"block"});
            gsap.from('#article', 0.4, {opacity:0, x:15})
            self.renderProjectArticle(e.detail[0], e.detail[1], e.detail[2])
        });
    },
    renderProjectArticle: (target, projects, country) => {
        document.getElementById('projectsWrapper').scrollTop = 0;

        projects.forEach(project => {
            // console.log(target.getAttribute('project-name'));
            // if(target.innerText == project.name){
            if(target.getAttribute('project-name') == project.name || target.innerText == project.name){
                var selectedProject = project;
                self.populateArticle(selectedProject);
                self.createDraggable(selectedProject);
                
                self.trackArticle(selectedProject, country);

            }
        });
    },
    trackArticle: (selectedProject, country) => {
        dataLayer.push({
            event: "sustainability_map_project_viewed",
            project: selectedProject.id,
            projectTypes: selectedProject.focusAreas,
            country: country.id
          });
    },
    createDraggable: (selectedProject) => {
        window.articleDraggable = Draggable.create(document.querySelector('#imagesDragContainer'), {
            bounds: document.querySelector("#imagesWrapper"),
            inertia: true,
            type:"x",
            zIndexBoost:false,
            allowContextMenu: true,

            onClick: function() {
            
            },
            onDragEnd: function() {
                var containerDraggedDistance = Math.abs(self.getTransform(document.querySelector('#imagesDragContainer')).x);
                var containerMiddlePosition = containerDraggedDistance

                var imagePositions = []
                document.querySelectorAll('.imgWrapper').forEach(element => {
                    imagePositions.push(element.offsetLeft)
                });


                var closest = imagePositions.reduce(function(prev, curr) {
                    return (Math.abs(curr - containerMiddlePosition) < Math.abs(prev - containerMiddlePosition) ? curr : prev);
                  });
                  
                  //fix to make sure last image gets aligned to right instead of left
                if(closest == imagePositions[imagePositions.length-1]){
                    TweenMax.to('#imagesDragContainer', {x: -(document.querySelector('#imagesDragContainer').offsetWidth - document.querySelector('#imagesWrapper').offsetWidth), ease: "power1.inOut", onComplete: function(){
                        self.checkBoundaries();
                    }})
                }
                else{
                    TweenMax.to('#imagesDragContainer', {x: -closest, ease: "power1.inOut", 
                    onUpdate: function(){
                        var elementX = document.querySelector('#imagesDragContainer').style.transform.replace(/translate3d|px|\(|\)/gi, '').split(',')[0]
                        if(document.querySelector('#imagesWrapper').offsetWidth + Math.abs(elementX) >= document.querySelector('#imagesDragContainer').offsetWidth){
                            gsap.killTweensOf(document.querySelector('#imagesDragContainer'))
                        }
                    },
                    onComplete: function(){
                        self.checkBoundaries();
                    }})
                }

            },
            onDrag: function() {
                self.checkBoundaries();
            }
        });

        var imagesTotalLength = 0;
        var loadedImages = 0;
        document.querySelectorAll('.imgAsset').forEach(image => {
        image.onload = function(){
            imagesTotalLength = imagesTotalLength + image.offsetWidth;
            loadedImages++       
            if(loadedImages >= selectedProject.images.length && imagesTotalLength < document.querySelector('#imagesWrapper').offsetWidth){
                gsap.to('.gradientRight', 0.2, {opacity:0})
                window.articleDraggable[0].disable();
            }
        }
        });

        // if(selectedProject.images.length == 1){
        //     gsap.to('.gradientRight', 0.2, {opacity:0})
        //     window.articleDraggable[0].disable();
        // }
    },

    checkBoundaries: () => {
        //check if left bound is reached
        if(document.querySelector('#imagesDragContainer').style.transform.replace(/translate3d|px|\(|\)/gi, '').split(',')[0] == 0){
            gsap.to('.gradientLeft', 0.2, {opacity:0})
        }
        else{
            gsap.to('.gradientLeft', 0.2, {opacity:1})
        }

        //check if right bound is reached
        if(Math.abs(document.querySelector('#imagesDragContainer').style.transform.replace(/translate3d|px|\(|\)/gi, '').split(',')[0]) + document.querySelector('#imagesWrapper').offsetWidth >= document.querySelector('#imagesDragContainer').offsetWidth-10){
            gsap.to('.gradientRight', 0.2, {opacity:0})
        }
        else{
            gsap.to('.gradientRight', 0.2, {opacity:1})
        }
    },
    getTransform: (element) => {
        const values = element.style.transform.split(/\w+\(|\);?/);
        const transform = values[1].split(/,\s?/g).map(parseInt);
    
        return {
          x: transform[0],
          y: transform[1],
          z: transform[2]
        };
    },
    populateArticle: (project) => {

        gsap.set("#currentAndPastProjects", {display:"none"});
        gsap.set("#article", {display:"flex"});

        document.querySelector("#articleName").innerText = project.name;
        document.querySelector("#years").innerText = `${project.startYear} - ${project.endYear}`;

        if(project.startYear == ""){
            document.querySelector("#years").innerText = `${project.endYear}`;
        }

        if(project.endYear == ""){
            document.querySelector("#years").innerText = `${project.startYear}`;
        }

        document.querySelector("#summary").innerText = project.summary;
        

        if(project.images.length == 0){
            document.querySelector('#imagesWrapper').style.display = 'none';
        }else{
            document.querySelector('#imagesWrapper').style.display = 'flex';
        }

        project.images.forEach(image => {
            var newImgWrapper = document.createElement("div");
            newImgWrapper.className = "imgWrapper";
            document.querySelector("#imagesDragContainer").appendChild(newImgWrapper);
            
            var newImage = document.createElement("img");
            newImage.className = "imgAsset";
            newImage.src = assetHelper.createAssetUrl(image.imageSrc);
            newImage.alt = image.imageName;
            newImgWrapper.appendChild(newImage);

            var newImgText = document.createElement("div");
            newImgText.className = "imgText";
            newImgText.innerText = image.imageInfo;
            newImgWrapper.appendChild(newImgText); 
        });
        document.querySelector("#description").innerText = project.description;
        document.querySelector("#description").innerHTML += `<div id="readMoreBtnContainer"><a id="readMoreBtn" href="/sustainability/stories/?filter=responsible-sourcing" target="blank">Read more</a></div>`;


        window.mapProjectsTypes.forEach(projectType => {
            var newType = document.createElement("div");
                newType.className = "articleProjectType";
                if(!project.focusAreas.includes(projectType.id)){
                    newType.style.opacity = 0.5;   
                }
                document.querySelector("#focusAreasWrapper").appendChild(newType);
                

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
            
        });

        project.partners.forEach(partner => {
            if(partner.logoURL == ""){
                return
            }

            var newDiv = document.createElement("div");
            newDiv.className = "partnerContainer";
            document.querySelector("#partnersWrapper").appendChild(newDiv);

            var newImage = document.createElement("img");
            newImage.className = "partner";
            newImage.src = assetHelper.createAssetUrl(partner.logoURL);
            newImage.alt = partner.name;
            newDiv.appendChild(newImage);

            newImage.addEventListener("click", function(){
                if(partner.logoExitURL != ""){
                    partner.logoExitURL = partner.logoExitURL.replace(/^https?:\/\//, '');
                    partner.logoExitURL = "http://"+partner.logoExitURL;
                    window.open(partner.logoExitURL, '_blank');
                }
            })
        });

        if(document.querySelector('#partnersWrapper').innerHTML == ""){
            document.querySelector('#partnersText').style.display = 'none';
        }
        else{
            document.querySelector('#partnersText').style.display = 'block';
        }

        project.projectLogoURL.forEach(projectLogo => {
            if(projectLogo.logoURL == ""){
                return
            }

            var newImage = document.createElement("img");
            newImage.className = "projectPartner";
            newImage.src = assetHelper.createAssetUrl(projectLogo.logoURL);
            newImage.alt = projectLogo.name;
            document.querySelector("#projectPartnerWrapper").appendChild(newImage);
        });

        if(document.querySelector('#projectPartnerWrapper').innerHTML == ""){
            document.querySelector('#projectByText').style.display = 'none';
        }
        else{
            document.querySelector('#projectByText').style.display = 'block';
        }
    }
}

export default self;