function init(){
    createIframes();
    createSidebar();
}

function createSidebar(){
    buildFileArray.forEach(filterElement => {
        var filterContainter = document.createElement('div');
        filterContainter.classList.add('filterContainter');
        document.querySelector('.sidebar').appendChild(filterContainter);

        var filterTitle = document.createElement('label')
        filterTitle.setAttribute('for', filterElement) 
        filterTitle.classList.add('filterTitle')
        filterTitle.innerHTML = filterElement;
        filterContainter.appendChild(filterTitle);

        var filterCheckbox = document.createElement('input')
        filterCheckbox.type = 'checkbox';
        filterCheckbox.name = filterElement;
        filterCheckbox.value = filterElement;
        filterCheckbox.id = filterElement;
        filterCheckbox.classList.add('filterCheckBox')
        filterContainter.appendChild(filterCheckbox);

        filterCheckbox.addEventListener('change', function(){
            checkActiveFilters();
        })

    });
}
function checkActiveFilters(){
    document.querySelectorAll('iframe').forEach(iframeElement => {
        iframeElement.style.display = 'none';
    })


    document.querySelectorAll('.filterCheckBox').forEach(checkbox => {
        if(checkbox.checked){
            document.querySelectorAll('iframe').forEach(iframeElement => {
                if(iframeElement.id == checkbox.id){
                    console.log(iframeElement);
                    iframeElement.style.display = 'inline-block'
                }
            });
        }
    });
}

function createIframes(){
    buildFileArray.forEach(iframeElement => {
        var newIframe =  document.createElement('iframe');
        newIframe.src = `${iframeElement}/index.html`;
        newIframe.id = iframeElement;
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

