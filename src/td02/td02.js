'use strict'

/**
 * Exercice 1
 * As a warm-up and a quick refresher from last time, write the `every` function
 * that will take a predicate and an array and return true if and only if the predicate
 * is true for every member for the array. We'll use a function we studied last time
 */

export const every = () => {} // TODO

/**
 * Exercise 2
 *
 * We're going to build a few functions which, once composed with one another, will help us reach a very specific goal.
 * Let's try and incorporate this exercise in a concrete example that will help us have a better understanding of
 * how to use front-end frameworks.
 * 
 * We're going to build, from a given application state, a structure of <figure> HTML tags, each containing a <img> tag
 * and a <figcaption> tag.
 *
 * Let's imaging a minimalist interface that we will be using to describe a tag in our pseudo DOM
 *
 * {
 *   name: 'div',
 *   children: [ tag1, 'text', tag2 ], // optional
 *   attributes: {src: 'http://example.com/image.jpg'} // optional
 * }
 *
 * Let's build a first utility function to create a tag, just like the `genAnimal` from last time
 */

export const createTag = (name, attributes, children) => ({
  name: name,
  attributes: attributes,
  children: children
})

/**
 * Syntax tip !
 * We wrote:
 * (name, attributes, children) => ({
 *   name: name,
 *   attributes: attributes
 *   children: children,
 * })
 *
 * A syntactic shortcut to avoid redundancy is to use the variables' names in the object,
 * and those names will become the keys associated to the values of the variables
 * (name, attributes, children) => ({
 *   name,
 *   attributes
 *   children,
 * })
 */

/** Exercise 2.1
 * Write specific functions for each of the tags <figure>, <figcaption>, <img> et <p>.
 * We'll pass `null` to `attributes` if there are none.
 * We'll pass an empty array to `children` if there are none.
 */

export const figure = () => {} // TODO
export const figcaption = () => {} // TODO
export const img = () => {} // TODO
export const p = () => {} // TODO

/**
 * Exercise 2.2
 * In `./state.js`, we'll find the global state of our application at a given moment.
 * It contains a list of dogs and the info for the connected user that could be
 * the response to an API call.
 *
 * Let's write an even more specific function to generate the following HTML structure, that will display the dogs.
 * <figure>
 *   <img src={url_vers_la_photo} />
 *   <figcaption>
 *     <p>{nom_du_chien}</p>
 *     <p>{description_du_chien}</p>
 *   </figcaption>
 * </figure>
 */

export const generateMarkupForDog = (url, nom, description) => {} // TODO

/** Exercise 2.3
 * Write a function which, for a list of dogs (see `./state.js`), returns a list of `figure` tags,
 * as defined previously. Given the tree structure of our markup, you will understand that a top structure
 * is required, the root will be a simple `div`
 */

export const generateMarkupForAllDogs = (dogs) => {} // TODO

/** Exercise 2.4
 * Now that we know how to generate the markup, we want to display it only if the user likes dogs,
 * otherwise we return an error message
 */

export const errorMessage = createTag(/* ... */) // TODO
export const conditionnallyDisplayDogs = (likesDogs, dogs) => {} // TODO
