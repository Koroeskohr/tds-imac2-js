import hens from './hens.js'

/**
 * Exercise 1
 * Convert the following to ES6, whatever the method
*/

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21]

export const ex1 = numbers.reduce((acc, n) => acc + n, 0)

/**
 * Exercise 2
 * Use the spread operator to concatenate those two arrays
 * Also convert it to ES6
 */

const animals1 = ['dog', 'cat', 'axolotl', 'bird']
const animals2 = ['lion', 'squirrel', 'bear', 'pig']

export const allTheAnimals = animals1.concat(animals2)
export const ex2 = allTheAnimals

/**
 * Exercice 3
 * Convert this to ES6 using **arrow functions**, and try to refactor this piece of code.
 * The tests will directly pass, they're here to ensure the result stays the same and you haven't made a mistake
 */

const makeDogACat = (thing) =>
  thing === 'dog' ? 'cat' : thing

export const ex3 = makeDogACat

/**
 * Exercice 4
 * What value does this return?
 * The tests will directly pass, they're here to ensure the result stays the same and you haven't made a mistake
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
 * Create a function that takes two arguments : a function and a number.
 * It will call the function on the number
 * This function will be one that increment the number passed as its argument.
 */

const number = 41
export const transformNumber = (n) => n + 1

export const makeSomethingOutOfNumber = (f, n) => f(n)

/**
 * Exercice 6
 * Gaetan manages the redaction of its annual magazine. He wants every author to choose between one in four available signatures.
 * Each one will include the author full name.
 * Write a function that will take as its arguments the body of the article, one of those four signatures, and the name of the author
 * to generate the full signed article.
 */

export const articleBody = `Le pari de ce projet est de se centrer sur les images du quotidien de l’école et de s’intéresser à la construction
de l’individu à la lumière des transformations numériques dans l’éducation. Il s’agit de travailler l’espace du hall
d’accueil du nouveau rectorat pour mettre en résonance l’expérience de ses usagers avec une forme visuelle apprenante,
générative, et qui réfléchit les expériences d’apprentissage d’aujourd’hui.
Doué de facultés d’apprentissage automatique, le programme imaginé avec des chercheurs en analyse de l'image - régit,
répartit et génère les signes graphiques issus d'un index constitué d'observations sur le motif de l'école d'aujourd'hui.
Selon des critères liés aux étapes d’acquisition de la connaissance, les dessins sont ainsi décomposés, analysés,
séquencés en grille, et enfin regénérés pour prendre vie et forme dans le nouveau bâtiment.`

export const sig1 = (fullName) => `${fullName} the Immortal`
export const sig2 = (fullName) => `Definitely not ${fullName}`
// Ok, dead memes
export const sig3 = (fullName) => `${fullName}, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons`

export const generateArticleWithSignature = (body, sig, name) => body + sig(name)
export const finalArticle = generateArticleWithSignature(articleBody, sig1, 'victor')

/**
 * Exercice 7
 * Programming made you mad, you decided to go open a zoo in the country side of France, bringing a few pidgeons to start with.
 * You need to manage your animal crew, and for this you'll need to develop some more (not sorry)
 *
 * Here's the format of an animal
 * {
 *   name: 'Lenin',
 *   species: 'bear',
 *   legs: 4,
 *   age: 16,
 *   furColor: 'red'
 * }
 *
 * Let's create a small function to generate them easily without making mistakes!
 * This is best practice, we are then certain our interface (the convention we decided to follow) is respected
 */

export const genAnimal = (name, species, legs, age, furColor) => ({
  name, species, legs, age, furColor
})

// Create your animal of choice
export const sampleAnimal = genAnimal('Lenin', 'bear', 4, 6, 'red')

// Your animal wants to change fur color, how do you propagate the changes on your created object?

/** 7.1
 * You just received your order of 8 hens to go with your pidgeons, but you'd rather not call `genAnimal`
 * and write `hen` every time to specify the species.
 * You will not write not instantiating an object.
 */

export const generateHen = (name, legs, age, furColor) => genAnimal(name, 'hen', legs, age, furColor)

/** 7.2
 * Hens have arrived! We'd like to have some kind of inventory to manage our fluffy friends.
 * We'll need key metrics to establish a backoffice
 *
 * We want to write the function that will take the array of hens as a parameter
 * and will return an array of their names and ages
 */
export const hensOnlyNameAndAge = (hens) => hens.map(hen => ({ name: hen.name, age: hen.age }))

/** 7.3
 * We want to know if our hens are alright, and aren't suffering from genetic defects affecting their number of legs.
 * Write the function that will take the hens as parameter and will return the names of the affected hens.
 */
export const mutatedHens = (hens) => hens.filter(hen => hen.legs !== 2).map(hen => hen.name)

// 7.4
// We want to know the average age of our animals.
// Write the function that will return this average for a given array of animals
export const averageAgeForHens = (hens) => hens.reduce((acc, hen) => acc + hen.age, 0) / hens.length

// 7.5
// For reasons for simplicity of management, you're asked to only keep hens with names
// that are 7 characters or shorter.
// Write the function that will return these said names.

export const max7CharsHens = (hens) => hens.filter(hen => hen.name.length <= 7).map(hen => hen.name)

// 7.6
// A very unusual client asks for a very specific hen : with red feathers, older than 15 years old
// Write a function that will find the first one corresponding to those criteria

export const specificHen = (hens) => hens.find(hen => hen.furColor === 'red' && hen.age > 15)

// MORE ???
// Write a function that merges an array of objects into a single object with every key of the objects of the array
// Functions to access keys/values of an object exist on the Object prototype, look for them on the MDN
//
// Ex : mergeObjects([{a: 1, b: 2}, {b: 3, c: 4}]) --> {a: 1, b: 3, c: 4}

export const mergeObjects = (objects) => objects.reduce((acc, o) => ({ ...acc, ...o }), {})

// Write the function that will take two arrays, merge them but remove duplicates.

export const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])] // Fun trick

// Write the function that will take an array of arrays and return the flattened verse (only ony array with all the elements in it)

export const flatten = (arr) => arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatten(el) : el), [])

// Write the function that, for an array and a value, returns the array with the value placed between every two elements of the array
// Ex : intercalate(",", ["a", "b", "c", "d"]) --> ["a", ",", "b", ",", "c", ",", "d"])

export const intercalate = (el, arr) => flatten(arr.map(x => [x, el])).slice(0, -1)
