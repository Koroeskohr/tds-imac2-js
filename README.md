# TD3 : what to do
## Exercices

### Exercice 1

Vous transformerez le premier component de la forme `React.createElement` vers JSX, puis le second de JSX vers la forme `React.createElement`.

### Exercice 2
Un component n'a que peu d'intérêt s'il ne fait qu'afficher des informations statiques, et React semblerait bien trop complexe à utiliser pour ça, on préfèrerait encore garder un bon vieux fichier HTML.

Cependant, la force des components réside dans le fait qu'ils puissent prendre des paramètres pour être modifié. On les appelle les `props` (pour *properties*). 

On souhaite représenter la fiche d'un personnage par un component que l'on appelera `Character`. On considèrera 5 caractéristiques de ce personnage. Ce component aura donc 5 paramètres : `name`, `age`, `job` , `imageUrl` et `isInPrison`.

#### Partie 1
Le but est d'afficher ces infos sous la structure suivante. On met toujours un component par fichier.

```html
<div>
  <h1>the character's name</h1>
  <h2>the character's job</h2>
  <p>the character's age</p>
  <p>"Is in prison" or "Is not in prison"</p>
</div>
```

#### Partie 2

Ajoutez d'autres personnages à la suite du premier en réutilisant le component que vous avez créé.

### Exercice 3

C'est bien d'avoir du contenu "dynamique", mais c'est mieux si ce contenu dynamique peut effectivement changer. Nous allons créer une petite application dont le but est de créer un poisson en ASCII de longueur variable. Pour une longueur de 4, on aura ce poisson :
```
><====°>
```
avec deux boutons, un pour incrémenter ce nombre, et l'autre pour le décrémenter.

L'intérêt d'utiliser des petits composants comme ça, c'est la capacité à pouvoir y associer de la logique qui n'est pas globale, et directement attacher des fonctions javascript à notre markup.

Lorsque l'on écrit du HTML de manière plus classique, il est possible de définir l'attribut `onclick` sur une balise et y ajouter un morceau de code Javascript, mais c'est très déconseillé.

Ca devient maintenant la chose à faire, car on se trouve déjà dans du code Javascript, injecter des fonctions pour définir le comportement face à un certain événement devient pertinent.

On accomplira ça en utilisant l'attribut `onClick` sur nos éléments DOM (notez la majuscule).

L'app aura ce format : 
```html
<main>
  <p>><=====°></p>
  <button>-</button>
  <button>+</button>
</main>
```

Le poisson (la balise <p>) sera son propre component, que vous définirez dans Fish.js. Il aura un seul `prop`: `size`, correspondant au nombre de `=` dans son corps.

### Exercice 4

L'intérêt du framework JS c'est la réutilisabilité des composants que l'on crée. Un composant est simplement une fonction, qui prend des arguments ou non, et qui renvoie un ou plusieurs noeuds DOM.

Le but de cet exercice sera de vous faire trouver vos propres abstractions en components à partir d'une source de données assez conséquente.

Le code prérempli dans l'exercice 4 fait un appel réseau pour télécharger un JSON rempli d'informations diverses sur des superhéros. La variable `superheroes` sera le tableau que l'appel réseau récupèrera. Ne vous inquiétez pas du fonctionnement de tout ça, on verra ça une autre fois.

Analysez les objets que vous obtenez, et créez un component qui en prend un sous-ensemble qui vous intéresse. Vous afficherez ensuite une liste de ce composant dans votre page web.