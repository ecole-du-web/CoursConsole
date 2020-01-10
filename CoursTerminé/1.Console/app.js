console.log("Hello World");

// Erreur !
// console.log(tableau);
console.error("Erreur");


// Warning !
console.warn("Attention");

// Styled
console.log('%c Je suis un texte stylisé', 'color:red; font-size: 30px;');

// Testing
// si faux retourne second arg
console.assert(1 === 2, 'Faux !');


// Clear
// ctrl + l
// console.clear();


// Timing

console.time("fetch");

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json())
//     .then(data => {
//         console.timeEnd("fetch");
//         console.log(data);
        
//     })

// Alerte 
// alert("Hello world")



// dir
// Affiche toutes propriétés d'un élément
console.dir(document.querySelector('h1'));





