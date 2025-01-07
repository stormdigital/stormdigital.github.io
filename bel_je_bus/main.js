window.onload = init;

function init() {

    setListeners();
    
}

function setListeners(){

    var numbersArr = document.querySelectorAll("#numbersWrapper div");
    
    numbersArr.forEach(el => {
        el.addEventListener("click", function(){
            document.querySelector("#phoneDisplay").value += el.innerHTML;
        })     
    });

    document.querySelector("#hangUp").addEventListener("click", hangUp)
    document.querySelector("#call").addEventListener("click", call)
}

function hangUp(){
    document.querySelector("#phoneDisplay").value = "";
    document.getElementById("sound").src = "";
}

function call(){
    var numberVal = document.querySelector("#phoneDisplay").value;

    console.log(numberVal);

    if(numberVal == 239){
        playAudio("Benjamin")
    }
    else if(numberVal == 742){
        playAudio("Daniel")
    }
    else if(numberVal == 231){
        playAudio("Diede")
    }
    else if(numberVal == 327){
        playAudio("Floor")
    }
    else if(numberVal == 871){
        playAudio("Joost")
    }
    else if(numberVal == 831){
        playAudio("Linda")
    }
    else if(numberVal == 128){
        playAudio("Lisette")
    }
    else if(numberVal == 372){
        playAudio("Max")
    }
    else if(numberVal == 197){
        playAudio("Roxanne")
    }
    else if(numberVal == 269){
        playAudio("Sebas")
    }
    else{
        hangUp();
        document.querySelector("#phoneDisplay").value = "UNKNOWN";
    }
    
}

function playAudio(name){
    console.log(name);
    document.querySelector("#phoneDisplay").value = name;
    document.getElementById("sound").src = name+".mp3";

    document.getElementById("sound").play();
    
}