const fs = require('fs')

let personne = {
    "prenom" : "Marie",
    "age" : 45,
    "passion": "loisirs créatifs, histoire",
    "taille": 172
}

let donnees = JSON.stringify(personne)
fs.writeFileSync('dedicatedbrand.json', donnees)
