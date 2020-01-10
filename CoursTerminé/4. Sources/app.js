// exemple de subtree modifications
// Attention il peut y avoir beaucoup de fichiers JS avec les extensions CHROME !

// Global
window.addEventListener('load', ()=>{
    console.log("hello");
})

const plusOne = document.querySelector('.plusOne');
const result = document.querySelector('.result');

let valeur = 0;


plusOne.addEventListener('click', () => {
    
    valeur = valeur + 1;
    
    result.innerHTML = valeur;
})



// Bien voir ce qui se passe en JS

const maChaine = "Hello world"
const myArr = maChaine.split('')
let nbDeO = 0;

function checkLetter(){
    for(i=0; i<myArr.length; i++) {
    
        if(myArr[i] === "o"){
            nbDeO++;
        }
    }
    console.log(`Nombre de "o" : ${nbDeO}`);
    
}
checkLetter();



// Pause on exceptions
console.log(resultat);
