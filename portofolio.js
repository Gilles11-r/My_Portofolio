const phrases = [
    "Frontend Develeppeur",
    "Designer",
    "Web Developpeur"
]
// Index de la phrase actuelle
let phraseIndex = 0;

// Index de la lettre actuelle
let letterIndex = 0;

// État : true = écriture, false = effacement
let isTyping = true;

// Variable pour contrôler l'animation
let animationTimeout;

// Vitesse d'écriture (en millisecondes)
const typingSpeed = 100;

// Vitesse d'effacement (en millisecondes)
const deletingSpeed = 50;

// Pause entre effacement et nouvelle phrase (en millisecondes)
const pauseAfterDelete = 500;

// Pause après avoir écrit une phrase complète (en millisecondes)
const pauseAfterType = 2000;


function Ecriture(){
    const textElement = document.getElementById('text');

    const CurrentPhrase = phrases[phraseIndex];

    if(isTyping){
        textElement.textContent = CurrentPhrase.substring(0, letterIndex + 1);
        letterIndex++;

        if(letterIndex === CurrentPhrase.length){
            isTyping = false;
            animationTimeout = setTimeout(Ecriture , pauseAfterType);
            return;
        }
        animationTimeout = setTimeout(Ecriture, typingSpeed);
    }else{
        textElement.textContent = CurrentPhrase.substring(0, letterIndex - 1);
        letterIndex--;

        if(letterIndex === 0){
            isTyping = true;

            phraseIndex = (phraseIndex + 1)%phrases.length ;

            animationTimeout = setTimeout(Ecriture, pauseAfterDelete);
            return;
        }
        animationTimeout = setTimeout(Ecriture, deletingSpeed);
    }
}

window.addEventListener('load', () => {
            Ecriture();
        })
