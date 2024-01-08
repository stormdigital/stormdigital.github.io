function init(){
    console.log('aaa');

    createIframes();
}


function createIframes(){
    buildFileArray.forEach(iframeElement => {
        var newIframe =  document.createElement('iframe');
        newIframe.src = `${iframeElement}/index.html`;
        document.querySelector('.iframeContainer').appendChild(newIframe)
        newIframe.onload = function(){
            newIframe.height = newIframe.contentWindow.document.querySelector('#banner').offsetHeight;
            newIframe.width = newIframe.contentWindow.document.querySelector('#banner').offsetWidth;
        }
    });
}

window.onload = function(){
    init();
}

