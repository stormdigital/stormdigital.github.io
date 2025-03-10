document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    
    window.wordObjArray = prepareWordArray();
         
    document.querySelector('.PlayGameButton').addEventListener('click', () => {
        document.querySelector('.PlayGameButton').style.display = 'none';
        document.querySelector('.introScreenContainer').style.display = 'none';
        document.querySelector('.gameElementContainer').style.display = 'flex';
        
        startPreCountdown()

    });
};


function startPreCountdown() { 
    document.querySelector('.exampleWord').innerHTML = wordObjArray[0].word;

    gsap.to('.preCountDown', 3, {
        opacity: 1,
        delay:1,
        onUpdate: function () {
            document.querySelector('.preCountDown span').innerHTML = Math.round(3 - this.progress() * 3);
        },
        onComplete: function () {
            document.querySelector('.preCountDown').style.display = 'none';
            document.querySelector('.countdown').style.display = 'flex';
            document.querySelector('.countdownBarInner').style.background = '#FFF000';
            document.querySelector('.gameElementContainer p').innerHTML = 'Type out what it can do:';
            startGame();
        }
    });

}

function startGame() {

    document.querySelector('.exampleWord').innerHTML = wordObjArray[0].word;
    checkUserInput();
    startCountdown(13);
}

function startCountdown(seconds) {
    window.countdownbaranimation = gsap.to('.countdownBarInner', {
        duration: seconds, width: 0, ease: 'linear', onUpdate: function () {
        document.querySelector('.countdownText.countdown span').innerHTML = Math.round(seconds - this.progress() * seconds);   
    }, onComplete: function () {
            // console.log('time is up');
            document.querySelector('.countdownText.countdown').innerHTML = '&nbsp;';
            document.querySelector('.countdownText.countdown').style.display = 'none';
            document.querySelector('.gameElementContainer p').style.display = 'none';
            document.querySelector('.countdownBarInner').style.width = '100%';
            document.querySelector('.countdownBarInner').style.background = '#E60A14';
            document.querySelector('.exampleWord').innerHTML = 'TIMES UP!';
            document.querySelector('.exampleWord').style.color = '#fff';
            document.querySelector('.typedWord').innerHTML = '&nbsp;';
            document.querySelector('.typedWord').style.display = 'none';
            // document.querySelector('body').removeEventListener('keyup');
            window.gameFinished = true;
            goToEndScreen('fail');
    }});
}

function checkUserInput() { 
    window.characterCurrentCount = 0;
    window.completedWords = 0;
    window.wordInput = wordObjArray[0].characters;
    window.characterTotalCount = window.wordInput.length;
    window.inputExceptions = ['Shift', 'CapsLock', 'Control', 'Alt', 'Tab', 'Enter', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Meta', 'Escape', 'Home', 'End', 'PageUp', 'PageDown', 'Insert', 'ContextMenu', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
    window.wrongCharacterAnimationIsPlaying = false;

    
    document.querySelector('body').addEventListener('keyup', keyPress, true);
}
function keyPress(e) {      
    if (window.gameFinished == true) {
        return;
    }
            
    var input = e.key;
    
    if (input.toLowerCase() == wordInput[characterCurrentCount] || input == wordInput[characterCurrentCount].toLowerCase()) {
        document.querySelector('.typedWord').innerHTML += wordInput[characterCurrentCount];
        characterCurrentCount++;
    }
    else {
        if(inputExceptions.includes(e.key)) {
            return;
        }
        console.log('wrong');        
        if (wrongCharacterAnimationIsPlaying == true) {
            return;
        }   
        gsap.to('.wordInputContainer', {
            duration: 0.1, x: -10, yoyo: true, repeat: 3
            , onStart: function () {
                wrongCharacterAnimationIsPlaying = true;
            }
            , onComplete: function () {
                wrongCharacterAnimationIsPlaying = false;
            }
        });
    }
    // console.log(input)
    
    if (characterCurrentCount == characterTotalCount) {
        completedWords++;
        if (completedWords >= wordObjArray.length) { 
            console.log('game over');
            goToEndScreen('win');
            window.gameFinished = true;
            // return;
        }
        else {
            document.querySelector('.typedWord').innerHTML = '';
            // console.log(wordObjArray);
            
            document.querySelector('.exampleWord').innerHTML = wordObjArray[completedWords].word;
            wordInput = wordObjArray[completedWords].characters;
            characterTotalCount = wordInput.length;
            characterCurrentCount = 0;
        }
        console.log('finished');
        
    }
}


function goToEndScreen(result) {
    window.countdownbaranimation.pause();
    document.querySelector('.endScreenCTA').style.display = 'flex';

    if (result == 'win') {
        document.querySelector('.endScreenCTA').innerHTML = 'Enter to win';
        document.querySelector('.countdownBarInner').style.background = '#0AD000';
        document.querySelector('.countdownBarInner').style.width = '100%';
        document.querySelector('.countdownText').innerHTML = 'COMPLETED!';
        
        // Add confetti animation
        const confettiSettings = {
            target: 'confetti-canvas',
            color: ['#FF0000', '#00FF00', '#0000FF'],
            clock: 25,
            rotate: true,
            max: 100,
            start_from_edge: true,
            props: ["square"],
        };
        window.confetti = new ConfettiGenerator(confettiSettings);
        window.confetti.render();
        document.querySelector('.endScreenCTA').addEventListener('click', goToForm, true);
    }
    if (result == 'fail') { 
        document.querySelector('.endScreenCTA').innerHTML = 'Try Again';
        document.querySelector('.endScreenCTA').addEventListener('click', resetGame, true);
    }

    document.querySelector('body').removeEventListener('keyup', () => {
        console.log('event listener removed');
    });
}

function goToForm() {
    window.confetti.clear();
    document.querySelector('.formScreenContainer').style.display = 'flex';
    document.querySelector('.gameElementContainer').style.display = 'none';
    document.querySelector('.productContainer').style.display = 'none';
    console.log('go to form');
    document.querySelector('.endScreenCTA').removeEventListener('click', goToForm, true);
}

function resetGame() {
    console.log('reset game');
   
    document.querySelector('.endScreenCTA').removeEventListener('click', resetGame, true);
    location.reload();
}

function prepareWordArray() { 
    var words = [
        "Sous Vide",
        "Cooking Pilot",
        "Slow Cooking"
    ];

    var NewWordArray = words.map((word) => {
        return word.split('');
    });

    var wordInputArray = [];
    words.forEach((word, index) => {
        var wordObj = {
            word: words[index],
            characters: NewWordArray[index]
        }
        wordInputArray.push(wordObj);
    });    
    return wordInputArray;
}