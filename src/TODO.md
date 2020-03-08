# TD3 : what to do

## Intro

1. Lancer l'appli (voir README.md) et jouer un peu avec 
2. Explorer un peu la structure du dossier `example`
  - Commencer par index.js et bien lire.
  - Regarder les components, c'est très proche de ce qu'on a fait au dernier TD
  - Regarder le state
  - Regarder les actions
2. Faire les exercices dans leurs dossiers respectifs.

## Exercices

### Exercice 1

Vous construirez une view avec la fonction `h` de hyperapp (cf exemple dans le dossier `example/src`) qui aura la forme suivante : 

```html
  <main>
    <header class="ex1__header">
      Trying hyperapp
    </header>
    <section>
      <p>Hi !</p>
      <p>Hyperapp is a JS micro framework intended to be <em>as barebones as possible.</em></p>
    </section>
  </main>
```

### Exercice 2

Il va à présent falloir utiliser le global state. Son but est de fournir les infos dynamiques à l'application, qui elle, à travers les interactions de l'utilisateur, modifiera ce state.

Pour l'instant, on se concentrera sur le fait d'utiliser des morceaux du state, qui est finalement juste un gros objet (donc des données exploitables sous forme d'arbre).

Le state contient trois clés : `name`, `job` et `gotLifeSentence` (<3 si vous avez la ref).

Le but est d'afficher ces infos sous la forme d'un arbre HTML comme celui-ci. Ce qu'il y a entre les accolades c'est à vous de gérer la logique, c'est du pseudo-code, mais les infos sont disponibles depuis l'état global.
```html
<main>
  <h1>{name}</h1>
  <h2>{job}</h2>
  <p>Got a life sentence : {if gotLifeSentence then yes else no}</p>
</main>
```

### Exercice 3

C'est bien de servir du contenu "dynamique" depuis le state, mais c'est mieux si ce contenu dynamique peut effectivement changer. Nous allons créer une petite application dont le but est de créer un poisson en ASCII de longueur variable. Pour une longueur de 4, on aura ce poisson :
```
><====°>
```
avec deux boutons, un pour incrémenter ce nombre, et l'autre pour le décrémenter.

L'intérêt d'utiliser des petits composants comme ça, c'est la capacité à pouvoir y associer de la logique qui n'est pas globale, et directement attacher des fonctions javascript à notre markup.

Il est de base possible de définir l'attribut `onclick` sur une balise, mais c'est très déconseillé. Là on a le droit parce qu'on fait ça comme des grands. C'est maitrisé car chaque élément possède un cycle de vie précis et qu'on est capable de maitriser ce qui est affiché ou non.

L'app aura ce format : 
```html
<main>
  <p>><=====°></p>
  <button>-</button>
  <button>+</button>
</main>
```

### Exercice 4

L'intérêt du framework JS c'est la réutilisabilité des composants que l'on crée. Un composant est simplement une fonction, qui prend des arguments ou non, et qui renvoie un ou plusieurs noeuds DOM.

Dans l'exemple, vous avez un composant `Description`, qui est utilisé, qui lui, sert simplement du contenu statique.
Mais vous pouvez également passer un objet à ce composant, cette fonction. Cet objet est communément appelé les **props**
de ce composant (pour *properties*)

Vous allez construire une vue avec la carte d'identité d'un personnage. Vous devrez donc créer un composant pour créer une carte d'identité, et un composant pour afficher un élément de liste, pour afficher un label et sa valeur :

```
Yeux : bruns
Cheveux : bleus
```

L'objet à utiliser **se trouve dans le state**.

Je représente ici les components comme des balises HTML, pour l'instant vous utilisez encore la fonction `h` mais on verra
rapidement qu'il y a moyen de rendre ça plus lisible en utilisant une syntaxe similaire.

Vue :
```html
<main>
  <IdCard picture="url" listEntries={{'Yeux': 'bruns', 'Cheveux': 'bleus'}} />
</main>
```

IdCard : 
```html
<div>
  <img src="url" />
  
  <!-- n fois --> <IdCardEntry key='Yeux' value='bruns' />
</div>
```

IdCardEntry :
```html
<p>{clé} : {valeur}</p>
```