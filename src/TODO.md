# TD3 : what to do

## Intro

1. Lancer l'appli (voir README.md) et jouer un peu avec 
2. Explorer un peu la structure du dossier en omettant les dossiers 'ex*'
  - Commencer par index.js et bien lire.
  - Regarder les components, c'est très proche de ce qu'on a fait au dernier TD
  - Regarder le state
  - Regarder les actions
2. Faire les exercices dans leurs dossiers respectifs.

## Exercices

### Exercice 1

Vous construirez une view avec la fonction `h` de hyperapp (cf exemple dans le dossier `src`) qui aura la forme suivante : 

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

Il va à présent falloir utiliser le global state. Son but est de fournir les infos dynamiques à l'application, qui elle, à travers les interactions de l'utilisateur, le modifiera.

Pour l'instant, on se concentrera sur le fait d'utiliser des morceaux du state, qui est finalement juste un gros objet (donc des données exploitables sous forme d'arbre).

Le state contient trois clés : `name`, `job` et `gotLifeSentence` (<3 si vous avez la ref).

Le but est d'afficher ces infos sous la forme d'un arbre HTML comme celui-ci. Ce qu'il y a entre les accolades c'est à vous de gérer la logique, mais les infos sont disponibles depuis l'état global.
```html
<main>
  <h1>{name}</h1>
  <h2>{job}</h2>
  <p>Got a life sentence : {if gotLifeSentence then yes else no}</p>
</main>
``