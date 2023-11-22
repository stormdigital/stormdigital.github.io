window.onload = init;

function init(id){

  var urlParams = new URLSearchParams(window.location.search);
  if(urlParams.size < 1){
    initAllProjects();
  }
  else{
    setUpPreview();
  }
  
  var tl = gsap.timeline({paused:true});
  
}

function initAllProjects(){

  window.data.forEach(project => {

    var newProject = document.createElement("div");
    newProject.classList.add("thumb");
    document.querySelector("#thumbNailWrapper").appendChild(newProject);

    var newProjectImage = document.createElement("img");
    newProjectImage.classList.add("thumbImage");
    newProjectImage.src = project.image;
    newProject.appendChild(newProjectImage);

    var newProjectName = document.createElement("div");
    newProjectName.classList.add("thumbName");
    newProjectName.innerText = project.name;
    newProject.appendChild(newProjectName);

    newProject.addEventListener("click", function(){
      generatePreview(project.id);
    })

  });
}

function generatePreview(id){

  var urlParams = new URLSearchParams(window.location.search);
  urlParams.set('id', id);
  window.location.search = urlParams;
  init();
}

function setUpPreview(){

  document.querySelector("#closeBtn").addEventListener("click", closePreview)

  var currentId = window.location.search.match(/\d+/).shift();
  gsap.set("#previewWrapper", {display:"inline-block"});


  window.data.forEach(project => {
    if(project.id == currentId){

      createVideo(project);
    }
  });

}

function createVideo(project){
  console.log(project);

  var newProjectName = document.createElement("div");
  newProjectName.classList.add("projectName");
  newProjectName.innerText = project.name;
  document.querySelector("#previewWrapper").appendChild(newProjectName);
  
  var newClientName = document.createElement("div");
  newClientName.classList.add("clientName");
  newClientName.innerText = project.client;
  document.querySelector("#previewWrapper").appendChild(newClientName);

  var newVideo = document.createElement("video");
  newVideo.id = "videoWrapper";
  newVideo.src= project.video;
  newVideo.muted= true;
  newVideo.loop= true;
  newVideo.autoplay= true;
  document.querySelector("#previewWrapper").appendChild(newVideo);

  project.sizes.forEach(size => {
    var newSize = document.createElement("a");
    newSize.innerText = size.size;
    newSize.classList.add("sizeLink");
    newSize.href = size.link;
    newSize.target = "_blank";
    document.querySelector("#previewWrapper").appendChild(newSize);
  });

}

function closePreview(){
  var urlParams = new URLSearchParams(window.location.search);
  urlParams.delete("id");
  window.location.search = urlParams;
}