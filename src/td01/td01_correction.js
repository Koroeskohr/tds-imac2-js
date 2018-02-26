import hens from './hens.js'

/**
 * Exercice 1
 * Convertis le code ci-dessous en ES6, qu'importe la méthode
*/

let sum = 0
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21]

for (let i = 0; i < numbers.length; ++i) {
  sum += numbers[i]
}

export const ex1 = sum

/**
 * Exercice 2
 * Utilise le spread operator pour concaténener ces deux tableaux.
 * En même temps, convertis ce code en ES6
 */

const animals1 = ['dog', 'cat', 'faverjon', 'bird']
const animals2 = ['lion', 'squirrel', 'bear', 'pig']

export const allTheAnimals = [...animals1, ...animals2]
export const ex2 = allTheAnimals

/**
 * Exercice 3
 * Convertis ce code en ES6 en utilisant les `fat arrow functions`
 */

const makeDogACat = (thing) => {
  if (thing === 'dog') {
    return 'cat'
  }

  return thing
}

export const ex3 = makeDogACat

/**
 * Exercice 4
 * Que retourne cette fonction ?
 */

export function scope () {
  const a = 'dog'
  if (a === 'dog') {
    const a = 'cat'
    return a
  } else {
    return a
  }
}

/**
 * Exercice 5
 * First-class functions, callbacks
 *
 * Crée une fonction qui appelle une fonction (transformNumber)
 * qui prendra number en premier paramètre pour l'incrémenter.
 * // commentaire post-TD : qui prendra number ET la fonction d'incrémentation
 */

const number = 41
export const transformNumber = (x) => x + 1

export const makeSomethingOutOfNumber = (f, n) => f(n)

/**
 * Exercice 6
 * G coordonne la rédaction de son magazine annuel, et souhaite que chacun de ses rédacteurs puissent choisir entre
 * quatre signatures possibles, chacune incluant le nom et prénom du rédacteur concerné (au format "<Prénom> <Nom>").
 * Ecrivez une fonction qui prendra comme arguments le texte de l'article, une de ces quatre signatures
 * et le nom du rédacteur afin de générer l'article signé.
 */

export const articleBody = `Le pari de ce projet est de se centrer sur les images du quotidien de l’école et de s’intéresser à la construction
de l’individu à la lumière des transformations numériques dans l’éducation. Il s’agit de travailler l’espace du hall
d’accueil du nouveau rectorat pour mettre en résonance l’expérience de ses usagers avec une forme visuelle apprenante,
générative, et qui réfléchit les expériences d’apprentissage d’aujourd’hui.
Doué de facultés d’apprentissage automatique, le programme imaginé avec des chercheurs en analyse de l'image - régit,
répartit et génère les signes graphiques issus d'un index constitué d'observations sur le motif de l'école d'aujourd'hui.
Selon des critères liés aux étapes d’acquisition de la connaissance, les dessins sont ainsi décomposés, analysés,
séquencés en grille, et enfin regénérés pour prendre vie et forme dans le nouveau bâtiment.`

export const sig1 = (fullName) => `${fullName} l'immortel.le`
export const sig2 = (fullName) => `Pickle ${fullName}`
export const sig3 = (fullName) => `Jean-Michel ${fullName}`
export const sig4 = (fullName) => `${fullName}, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons`

export const generateArticleWithSignature =
  (text, signature, fullName) => text + '\n' + signature(fullName)

export const finalArticle = generateArticleWithSignature(articleBody, sig2, 'Victor') // TODO

/**
 * Exercice 7
 * La prog ça vous a saoulé du coup vous êtes partis gérer un zoo dans le Vercors, en emmenant qq ESIPE pour commencer.
 * Vous avez besoin de gérer votre cheptel, pour ça il va falloir coder un peu plus. (dézoo pas dézoo)
 *
 * Voilà le format d'un animal :
 * {
 *   name: 'Lénine',
 *   species: 'bear',
 *   legs: 4,
 *   age: 16,
 *   furColor: 'red'
 * }
 *
 * Créons une petite fonction pour les générer facilement sans se tromper !
 * C'est une bonne pratique, on est ainsi certain que notre interface est respectée.
 */

export const genAnimal = (name, species, legs, age, furColor) => ({
  name, species, legs, age, furColor
})

// Crée donc l'animal de ton choix :
export const sampleAnimal = genAnimal('Pouet', 'Cochon', 4, 10, 'black')

// Ton animal souhaite changer de couleur de fourrure, comment répercutes-tu la modif sur ton object ?

// 7.1
// Tu reçois ta commande de 8 poules pour aller avec tes ESIPE, et ça te saoule d'appeler genAnimal
// en écrivant 'hen' (poule en anglais) à chaque fois pour l'espèce.
// Tu ne réécriras PAS de code créant un object.

export const generateHen = (name, legs, age, furColor) => genAnimal(name, 'hen', legs, age, furColor) // TODO

// 7.2
// Les poules sont arrivées, on souhaiterait pouvoir avoir un inventaire précis de l'état de nos bêtes.
// Pour cela, il faut déterminer des chiffres clés pour établir un tableau de bord.

// On souhaite écrire la fonction qui prend les poules en entrée et renvoie un objet constitué du nom de la poule
// et de son âge. On utilisera Array.map

export const hensOnlyNameAndAge = (hens) => hens.map(hen => ({age: hen.age, name: hen.name}))
// également :
export const hensOnlyNameAndAge2 = (hens) => hens.map(({age, name}) => ({age: age, name: name}))
// voire même :
export const hensOnlyNameAndAge3 = (hens) => hens.map(({age, name}) => ({age, name}))
// on utilise ici la déstructuration d'objet     de là ^    à là ^, là  ^         ^ c'est un raccourci pour éviter de répéter
// comme à la ligne 143.

// 7.3
// On souhaite savoir si nos poules sont bien portantes et ne souffrent pas de mutations génétiques affectant leurs pattes.
// Ecrire la fonction qui prend les poules en entrée et renvoie les noms des poules affectées.

export const mutatedHens = (hens) =>
  hens
    .filter(hen => hen.legs !== 2) // on récupère les poules qui n'ont pas 2 pattes
    .map(h => h.name) // on ne prend que leurs noms

// 7.4
// On souhaite connaitre la moyenne d'âge de notre basse-cour.
// Ecrire la fonction qui prend les poules et renvoie cette moyenne. On utilisera Array.reduce.

export const averageAgeForHens = (hens) => hens.reduce(
  (acc, current) => acc + current.age,
  0
) / hens.length

// 7.5
// Pour des questions d'organisation et de simplicité de la gestion, on vous demande de ne garder que les poules possédant
// des noms de 7 lettres maximum
// Ecrire la fonction qui renverra les noms concernés.

export const max7CharsHens = (hens) =>
  hens
    .filter(hen => hen.name.length <= 7)
    .map(h => h.name)

// 7.6
// Un client très spécifique cherche une poule qui correspond à ses critères : une poule au plumage rouge âgée de plus de 15 ans.
// Ecrire une fonction qui renverra la première poule correspondant à ces critères.

export const specificHen = (hens) => hens.find(h => h.furColor === 'red' && h.age > 15)
