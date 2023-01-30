
let i= 0
const t = setInterval(() => {
    i++
    console.log('bonjour')
    if (i >= 5) {
       clearInterval(t) // arete de continuer l'execution de linterval 
    }
}, 1000); // interval en seconds