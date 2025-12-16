//Exercice noté

let combattant1 = {
    name: "Paul",
    pv: 100,
    attaque: 10,
    précision: 0.5,
}

let combattant2 = {
    name: "Illyes",
    pv: 70,
    attaque: 25,
    précision: 0.3,
}

console.log("Bienvenue à" ,combattant1.name, "et" ,combattant2.name, "dans l'arene !")
console.log( combattant1.name,"possède" ,combattant1.pv, "pv," ,combattant1.attaque, "d'attaque et" ,combattant1.précision, "de précision.")
console.log( combattant2.name,"possède" ,combattant2.pv, "pv," ,combattant2.attaque, "d'attaque et" ,combattant2.précision, "de précision.")

// while (combattant2.pv > 0) {
console.log(combattant1.name, "lance une attaque.")
if (Math.random() < combattant1.précision) {
    (combattant2.pv - combattant1.attaque)
    console.log("Attaque réussi !" ,combattant2.name, "lui reste" ,combattant2.pv, "pv.")
} else console.log("Attaque échouée !");
}

// while (combattant1.pv > 0) {
if (combattant2.pv > 0) {
    console.log(combattant2.name, "lance une attaque.")

if (Math.random() < combattant2.précision) {
    (combattant1.pv - combattant2.attaque)
    console.log("Attaque réussi !" ,combattant1.name, "lui reste" ,combattant1.pv, "pv.")
} else console.log("Attaque échouée !");
} else console.log ("Le combat est terminé !" ,combattant1.name, "lui restait" ,combattant1.pv, "pv !")
}