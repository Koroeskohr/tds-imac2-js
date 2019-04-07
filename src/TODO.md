# TD7 : callbacks, Promises et code asynchrone

## Intro : le passé

Si vous avez déjà fait un peu de JavaScript et d'appels à des APIs par exemple, vous avez peut-être déjà utilisé des callbacks. Imaginons le scénario simple suivant : on veut récupérer sur une API l'heure actuelle.

Autrefois, on aurait procédé de la manière suivante avec cette fonction (qui n'existe pas), qui prend une URL et un callback à exécuter lorsqu'on a la réponse :

```javascript
const get = (url, onResponse) => {
  appelReseau(url).onEnd = (response, error) => onResponse(response, error)
}
```

Pour récupérer l'heure et faire quelque chose du résultat, on pourrait alors imaginer appeler la fonction de la manière suivante :

```javascript
get('http://example.com/heure', function (response, error) {
  if (error == null) {
    console.error("erreur : ", error)
  } else {
    console.log("success ! il est : ", response.body)
  }
})
```

Ok, mais là c'était facile. Imaginons, dans le contexte d'un réseau social, qu'on veuille récupérer l'utilisateur courant, puis la liste de ses amis, puis le profil d'un de ces amis.

Le code ressemblerait alors à ça :

```javascript
get("http://example.com/user/current", function (response, error) {
  if (error == null) {
    console.error("erreur : ", error)
  } else {
    const user = response.body
    const id = user.id
    get("http://example.com/user/" + id + "/friends", function (response, error) {
      if (error == null) { 
        console.error("erreur : ", error)
      } else {
        const friends = response.body
        const friend = friends[0]
        const id = friend.id
        get("http://example.com/user/" + id, function (response, error) {
          if (error == null) {
            console.error("erreur : ", error)
          } else {
            const user = response.body
            doSomethingWithUser(user) // ENFIN PTN.
          }
        })
      }
    })
  }
})
```

J'espère que vous vous rendez compte que c'est dégueulasse. On est à 6 niveaux d'indentation en 10 lignes de code (ce qui n'est jamais une bonne chose), on a trois déclarations de fonctions imbriquées les unes dans les autres, bref c'est l'enfer.

C'est communément appelé dans le jargon de javascript le "callback hell". Heureusement, des gens intelligents ont pensé à nous et ont créé un outil pour résoudre en grande partie ce problème : une structure appelée `Promise`.

## L'ange tombé du ciel : la Promise
### Qu'est-ce qu'une Promise ?

Une promise est une structure dont le but principal est d'exécuter du code asynchrone (mais pas forcément) et de le transformer en quelque chose de facilement utilisable dans un flow synchrone.

C'est, comme son nom l'indique, une promesse qu'une fois un résultat retourné par le service appelé (soit distant, soit simplement une bibliothèque qui utilise les Promise comme interface), une fonction (un callback) soit exécutée.

L'avantage de la Promise réside dans le fait qu'elle permet une disjonction entre le cas où tout se passe bien et le cas où une erreur survient, en proposant de lui fournir deux *handlers*, un pour chaque cas.

### Comment construire une Promise ?

Une simple fonction qui retourne une Promise :

```javascript
const myPromise = () => new Promise((resolve, reject) => {
  const willSucceed = returnsTrueOrFalse()

  if (willSucceed) {
    resolve('success')
  }

  reject(new Error('it failed'))
})
```

Une Promise prend en paramètre **une fonction** qui prend deux arguments. Ces deux arguments sont des fonctions que l'on va pouvoir passer plus tard à la Promise pour effectuer des actions.

Analysons la structure d'une Promise.

On utilise le mot-clé `new` pour l'instancier car c'est un prototype (~~ une classe) de l'API.
Le constructeur des Promises prend un seul argument en paramètre, une fonction très spécifique.

Cette fonction prend deux paramètres (cf exemple ci-dessus) :
- une fonction qui s'appelle `resolve`, à appeler dans le cas où tout se passe correctement
- une fonction qui s'appelle `reject`, à appeler dans le cas où une erreur survient

Il vous incombe ensuite d'appeler ces deux fonctions avec les bons arguments dans la définition de votre Promise afin de pouvoir appréhender leur puissance.

Une fois créée, la Promise s'exécute. Elle stockera dans sa structure le résultat de sa fonction, et le rendra accessible par son interface : les méthodes `then` et `catch`.

```javascript
myPromise()
  .then(anything => console.log(anything))
  .catch(err => console.log('error :', err.message))
```

`then` prend une fonction qui prend en paramètre ce qui sera passé dans `resolve`. C'est le chemin où tout va bien.
On y effectue les opérations nécessaires à notre application

`catch` prend une fonction qui prend en paramètre ce qui sera passé dans `reject`. C'est le chemin où une erreur s'est produite.
On y effectue la gestion des erreurs.

Le code horrible écrit ci-dessus aurait alors la forme :
```javascript

get("http://example.com/user/current")
  .then(response => {
    const profile = response.body
    return get("http://example.com/user/" + user.id + "friends")
  })
  .then(response => {
    const friend = response.body[0]
    return get("http://example.com/user/" + friend.id)
  })
  .then(response => {
    const friendProfile = response.body
    actions.setProfileOfFirstFriend(friendProfile)
  })
  .catch(error => {
    handleError(error)
  })
```

Un appel à `then` retourne une Promise également, on peut donc enchainer les `then` et les `catch`.

```javascript
myPromiseThatReturnsAString()
  .then(myString => myString + ' !!')
  .then(myStringWithBangs => myStringWithBangs.toUpperCase())
```

L'enchaînement de then et catch est un peu compliqué à comprendre dans les détails, l'expérience vous fera comprendre ce qu'il y a à comprendre.

Important à noter : une Promise, lorsqu'elle est créée, va immédiatement s'exécuter, elle n'attendra pas qu'on appelle `then` ou `catch` dessus

```javascript
const promise = new Promise((resolve, reject) => {
  console.log('hello im the promise')
})
```

## Exercices

### Exercice 1
Ecrire une fonction qui renvoie une Promise qui resolve tout le temps. Faire la même chose avec une Promise qui reject tout le temps.
Ce sont des méthodes de l'API native mais je veux que vous les refassiez.

### Exercice 2
Ecrire une fonction qui crée une Promise qui lance une fonction passée en paramètre, après un délai passé en second paramètre.

### Exercice 3
On va utiliser `fetch`, une API qui sert à faire des appels réseaux, et qui renvoie des Promise.
Je vous laisse regarder la documentation sur le MDN.

Vous pouvez démarrer un petit serveur avec `npm run server`, qui tourne sur le port 8080 et répond à GET / et POST /.

Ecrivez un wrapper qui pour une URL de base donnée (localhost:8080), appelle une URL relative et renvoie le résultat de fetch sur la concaténation des deux.

### Exercice 4

Utilisez votre wrapper pour faire des appels au serveur.
Vous devrez réaliser les scénarios suivants, mettez des console.log pour tracer ce qu'il se passe. Pensez bien à renvoyer une valeur dans chaque then/catch : 
fetch success -> then (observez votre console)
fetch success -> then -> catch
fetch fail -> then -> catch
fetch success -> then -> then -> catch
fetch success -> then -> catch -> then -> catch

### Exercice 5
Bossez votre projet