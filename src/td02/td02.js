'use strict'

/**
 * Exercice 1
 * Ecrivez la fonction `every`, qui pour un prédicat et un tableau donné, vérifie
 * que tous les éléments du tableau vérifie ce prédicat. Elle renvoie true si c'est le cas,
 * false sinon. On utilisera une fonction vue dans le TD précédent
 */

export const every = () => {} // TODO

/**
 * Exercice 2
 *
 * On va construire une suite de fonctions qui, une fois composées, vont nous servir à atteindre un but bien précis.
 * On va essayer d'ancrer cet exercice dans un exemple concret, qui vous amènera vers une idée de l'utilisation de
 * frameworks front-end.
 *
 * Nous allons construire, à partir de l'état global de notre application, une série de balises HTML <figure>,
 * contenant une image (<img>) et une légende (<figcaption>).
 *
 * Imaginons une interface minimaliste utilisable pour décrire une balise (tag) dans notre pseudo-DOM.
 *
 * {
 *   name: 'div',
 *   children: [ tag1, 'texte', tag2 ], // optionnel
 *   attributes: {src: 'http://example.com/image.jpg'} // optionnel
 * }
 *
 * Créons une première fonction utilitaire pour créer un tag, comme au TD précédent.
 */

export const createTag = (name, attributes, children) => ({
  name: name,
  attributes: attributes,
  children: children
})

/**
 * Précision de syntaxe !
 * On a écrit :
 * (name, attributes, children) => ({
 *   name: name,
 *   attributes: attributes
 *   children: children,
 * })
 *
 * Un raccourci syntaxique pour éviter la redondance est d'écrire les noms des variables
 * dans l'objet et ces noms deviendront les clés associées à leurs valeurs :
 * (name, attributes, children) => ({
 *   name,
 *   attributes
 *   children,
 * })
 */

/** Exercice 2.1
 * Ecris des fonctions plus spécifiques, pour construire des balises <figure>, <figcaption>, <img> et <p>.
 * On passera `null` à `attributes` si on décide de ne pas en mettre. De même, pour `children`, on mettra un tableau vide.
 */

export const figure = () => {} // TODO
export const figcaption = () => {} // TODO
export const img = () => {} // TODO
export const p = () => {} // TODO

/**
 * Exercice 2.2
 * Dans le fichier './state.js', on retrouvera l'état de l'application à un instant donné.
 * Il contient une liste de chiens et l'info sur l'utilisateur connecté,
 * qui pourraient être par exemple la réponse à l'appel à une API.
 *
 * Ecrivons une fonction encore plus spécifique pour générer la structure HTML qui affichera ces chiens.
 * La structure HTML attendue est :
 * <figure>
 *   <img src={url_vers_la_photo} />
 *   <figcaption>
 *     <p>{nom_du_chien}</p>
 *     <p>{description_du_chien}</p>
 *   </figcaption>
 * </figure>
 */

export const generateMarkupForDog = (url, nom, description) => {} // TODO

/** Exercice 2.3
 * Ecrivons maintenant la fonction qui, pour une liste de chiens (voir celle de `./state.js`),
 * renvoie une liste de `figure` comme formatté précédemment. Etant donné la structure d'arbre de
 * notre markup, le noeud "racine" que vous devrez créer sera une div
 */

export const generateMarkupForAllDogs = (dogs) => {} // TODO

/** Exercice 2.4
 * Maintenant qu'on sait générer le markup, on veut l'afficher seulement si l'utilisateur aime les chiens,
 * sinon on affiche une div avec un message d'erreur.
 */

export const errorMessage = createTag(/* ... */) // TODO
export const conditionnallyDisplayDogs = (likesDogs, dogs) => {} // TODO
