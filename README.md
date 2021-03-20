# TD4

## Ex 1: list rendering

Vous l'aurez vu dans le dernier exercice du TD3, render une liste de components est très utile et montre rapidement l'utilité de frameworks front-end: appliquer la même structure à un ensemble d'objets similaires revient à appeler `map` sur un tableau.

La structure avec laquelle on travaille (le virtual DOM) peut devenir très complexe rapidement, et son render dans la page Web peut rapidement ralentir et devenir désagréable pour l'utilisateur. Pour s'en sortir plus facilement lorsqu'on lui demande de render une liste de components, React nous demandera de lui donner un coup de main assez simple pour lui permettre d'identifier les éléments de la liste et ne pas la redessiner intégralement à chaque fois qu'une modification se passe dans un seul des éléments. Pour cela, on fournira un attribut `key` à chacun des components dans le tableau, une chaine de caractères dont l'unicité dans le tableau est garantie. Ex :

```js
const arr = [
  { name: 'John', age: 18, city: 'Paris' },
  // ...
]

const PeopleList = ({ people }) => (
  <div>
    {people.map(({ name, age, city }) => (
      <p key={name}>{name}, {age} years old, lives in {city}</p>
    ))}
  </div>
)
```

Des fois choisir une `key` n'est pas évidemment, ici on donne un nom qui existe peut-être plusieurs fois dans la liste. On peut imaginer concaténer le nom et la ville, ou simplement prétraiter notre tableau pour y ajouter un identifiant unique comme un UUID.

Ce n'est pas un sujet simple, mais il faut le garder à l'esprit, et faire au mieux.

Vous utiliserez le tableau se trouvant dans `src/ex1-list-rendering/movies.json` pour afficher une liste de films qui devra au minimum contenir son titre, son résumé et ses acteurs. Plusieurs stratégies possibles pour trouver les `key`, soyez inventifs (ou recherchez sur internet)

## Ex 2: user events

Une autre composante majeure d'une application web est la réaction aux événements utilisateurs (user events). Clic sur un lien ou un bouton, un glisser-déposer, un texte rentré dans un input, une checkbox cochée, tout ceci est la base de l'interaction d'un utilisateur avec la page.

React nous donne des outils pour attraper ces événements et les valeurs qui y sont associées: le texte contenu dans un champ texte, la position de la souris au clic, et bien d'autres.

Vous pouvez en retrouver une liste complète ici : https://fr.reactjs.org/docs/events.html#reference

Vous devrez pour cet exercice intercepter les événements utilisateurs pour les balises présentes dans `ex2-events` et logger certaines valeurs dans la console :
- pour la balise <input>
  - le changement de texte log le nouveau texte
  - le focus sur le champ log "Focus !"
  - l'appui sur la touche Entrée dans le champ log "Envoyé !"
- pour la balise <select>
  - le changement de choix dans la liste log le nom de la valeur
- pour la balise <button>
  - le clic sur le bouton log "Clic"

## Ex 3: state management

Pour pouvoir propager des changements d'un component à l'autre, ou pour modifier ce qui s'affiche dynamiquement en fonction des user events, il est nécessaire de stocker l'information quelque part.

Pour cela, nous utiliserons un système assez particulier inventé pour React, qui s'appellent les `hooks`. React en propose une certaine quantité immédiatement, mais il est possible aussi d'écrire les notres et d'en récupérer par des bibliothèques tierces. Un hook, par convention s'appelera toujours `use[...]`, et dans notre cas ça sera `useState`. C'est une fonction exportée par `react`, vous devrez donc l'importer.

Référez vous à la documentation de React pour l'utiliser : https://fr.reactjs.org/docs/hooks-reference.html#usestate

Le champ `input` pourra recevoir du texte, et lorsque vous appuierez sur Entrée, le texte contenu dans le champ viendra s'ajouter à votre state, qui sera donc une liste de chaine de caractères. Chacune des valeurs de votre state sera ensuite affiché dans la balise `ul` à l'intérieur d'une balise `li`.