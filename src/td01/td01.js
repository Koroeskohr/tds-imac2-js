/**
 * Exercise 1
 * Convert the following to more modern JavaScript, whatever the method
*/

var sum = 0
var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21]

for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i]
}

export var ex1 = sum

/**
 * Exercise 2
 * Use the spread operator to concatenate those two arrays
 * Also convert it to ES6.
 */

var animals1 = ['dog', 'cat', 'axolotl', 'bird']
var animals2 = ['lion', 'squirrel', 'bear', 'pig']

export var allTheAnimals = [] // TODO
export var ex2 = allTheAnimals

/**
 * Exercice 3
 * Convert this to ES6 using **arrow functions**
 * You can also heavily simplify it with a tool covered by the lesson
 */

function makeDogACat (thing) {
  if (thing === 'dog') {
    return 'cat'
  }

  return thing
}

export var ex3 = makeDogACat

/**
 * Exercice 4
 * What value does this function return?
 */

export const scope = () => {
  const animal = 'dog'
  if (animal === 'dog') {
    const animal = 'cat'
    return animal
  } else {
    return animal
  }
}

// TODO
export const expectedValue = '?'

/**
 * Exercice 5
 * First-class functions, callbacks
 *
 * Create a function `useATransformationOnANumber` that takes two arguments : a function and a number.
 * It will return the function applied to the number.
 * 
 * The function passed will increment the number passed as its argument.
 */

const number = 41
export const transformNumber = () => {} // TODO

export const useATransformationOnANumber = () => {} // TODO

/**
 * Exercice 6
 * Gaetan manages the redaction of its annual magazine. He wants every author to choose between one in four available signatures.
 * Each one just has to include the author's full name, but they can title themselves however they want.
 * Write a function that will take the body of the article, a signature, and the name of the author
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

export const sig1 = (fullName) => `The glorious ${fullName}`
export const sig2 = (fullName) => `${fullName} the destroyer of worlds`
export const sig3 = (fullName) => `${fullName} with a mustache`

export const generateArticleWithSignature = () => {} // TODO
export const finalArticle = generateArticleWithSignature(/* ... */) // TODO

/**
 * Exercice 7
 * Programming made you mad, you decided to go open a zoo in the countryside of France, bringing a few pidgeons to start with.
 * You need to manage your animal crew, and for this you'll need to develop a few tools.
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
  name,
  species,
  legs,
  age,
  furColor
})

/**
 * Notice this particular syntax, we wrote an object with only keys. This is exactly equal to:
 * 
 * (name, species, legs, age, furColor) => ({
 *   name: name,
 *   species: species,
 *   legs: legs,
 *   age: age,
 *   furColor: furColor
 * })
 * 
 * You can probably guess what happens here: if we have a variable in scope with the same name as the key of the object,
 * we can add it to the object and it will be expanded to the `key: value` format. We do have the available variables in
 * scope because of the arguments of the function we provided.s
 */

// Create your animal of choice
// TODO
export const sampleAnimal = genAnimal(/* ... */);

/**
 * Your animal wants to change fur color (they *are* funky like that). You need to propagate the changes on your created object.
 * There are two ways to do it. First, list them both.
 * One of them is probably far superior to the other, given what you've been taught so far.
 * Which one ? Write it down
 */

// TODO
export const sampleAnimalButFunkier = null;

/** 7.1
 * You just received your order of 8 hens to go with your pidgeons, but you'd rather not call `genAnimal`
 * and write `hen` every time to specify the species.
 * You will not write an entire new object, you'll rather reuse what has been done before.
 */

export const generateHen = () => {} // TODO

/**
 * Starting from here, you'll be mostly working with methods on collection. 
 */

/** 7.2
 * Hens have arrived! We'd like to have some kind of inventory to manage our fluffy friends.
 * We'll need key metrics to establish a backoffice
 *
 * We want to write the function that will take the array of hens as a parameter
 * and will return the array of objects containing only their names and ages
 */
export const hensOnlyNameAndAge = (hens) => {} // TODO

/** 7.3
 * We want to know if our hens are alright, and aren't suffering from genetic defects affecting their legs.
 * Write the function that will take the hens as parameter and will return the names of all the affected hens.
 */
export const mutatedHens = (hens) => {} // TODO

// 7.4
// We want to know the average age of our animals.
// Write the function that will return this average for a given array of animals
export const averageAgeForHens = (hens) => {} // TODO

// 7.5
// For reasons for simplicity of management, you're asked to only keep hens with names
// that are 7 characters or shorter.
// Write the function that will return these said names.

export const max7CharsHens = (hens) => {} // TODO

// 7.6
// A very unusual client asks for a very specific hen : with red feathers, older than 15 years old
// Write a function that will find the first one corresponding to those criteria

export const specificHen = (hens) => {} // TODO

// MORE ???
// Write a function that merges an array of objects into a single object with every key of the objects of the array
// Functions to access keys/values of an object exist on the Object prototype, look for them on the MDN
//
// Ex : mergeObjects([{a: 1, b: 2}, {b: 3, c: 4}]) --> {a: 1, b: 3, c: 4}

export const mergeObjects = (objects) => {} // TODO

// Write the function that will take two arrays, merge them but remove duplicates. You are not allowed to use a Set.

export const union = (arr1, arr2) => {} // TODO

// Write the function that will take an array of arrays and return the flattened verse (only ony array with all the elements in it)

export const flatten = (arr) => {} // TODO

// Write the function that, for an array and a value, returns the array with the value placed between every two elements of the array
// Ex : intercalate(",", ["a", "b", "c", "d"]) --> ["a", ",", "b", ",", "c", ",", "d"])

export const intercalate = (el, arr) => {} // TODO
