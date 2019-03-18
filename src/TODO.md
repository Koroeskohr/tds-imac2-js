# TD4

**Ce TD sera à m'envoyer par mail à viale.victor+imac2@gmail.com**

Pour ce TD, je dois vous avoir présenté les points suivants au préalable, si j'ai oublié dites le moi :D
- différence views/components
- nécessités des "keys" dans les listes
- JSX
- Babel

Mon objectif c'est de corriger les éventuelles idées mal fondées que vous auriez sur tel ou tel point. Plus vous en ferez, plus je pourrai vous dire ce qu'il ne faut pas faire.

Pour cet exercice, vous ne serez pas guidés par des tests pour la simple raison que vous allez tout créer de zéro, je souhaite vous voir pratiquer vos compétences de compréhension d'un problème, d'analyse du domaine de ce problème, et de création d'architecture qui puisse y répondre. Je serai présent pour répondre à vos questions (encore une fois n'hésitez pas) tout le long du TD.

On vous demande de créer une page Web pour mettre en avant la liste des professeurs à l'IMAC, ainsi que les matières qui seront enseignées pendant les trois années de la formation.

Vous construirez une page qui aura la structure décrite ci-dessous, qui dépendra d'un state que vous créerez vous-même. On ne demandera pas d'interactivité sur cette page.

L'objectif de ce TD est de vous faire réfléchir sur la sémantique qui se cache derrière une page Web, chose que vous avez déjà à peu près manipulée dans les TD précédents, et par le passé lorsque vous faisiez du code HTML et que vous choisissiez les bonnes balises.

Pour ceux qui sont familiers avec la syntaxe JSX, elle est désormais activée sur ce TD et pour tous les suivants.

## Description de la structure de la page

```
+----------------------------------------------+
|
|                    Header
|
+----------------------------------------------+
|             Liste des professeurs
+----------------------------------------------+
|
|
|              Liste des matières
|
|
+----------------------------------------------+
```

Une entrée pour les professeurs ressemblera à la structure décrite dessous, la liste des professeurs sera juste une multitude de ces structures

```
+----------------------------------------------+
| Photo
| Nom - Prénom
| Matière
+----------------------------------------------+
```

La liste des matières ressemblera à ça : 

```
+----------------------------------------------+
| Catégorie 1
|   Matière 1
|   Matière 2...
| Catégorie 2
|   Matière 1
|   Matière 2...
| ...
+----------------------------------------------+
```

Une entrée de matière sera construite de la sorte :

```
+----------------------------------------------+
| Titre
| Quantité d'heures
| Années dans lesquelles c'est enseigné
| Description
| Nom du professeur
+----------------------------------------------+
```

La subtilité ici est que **je ne souhaite pas voir dupliquée les informations sur les professeurs**. Vous les identifierez par un identifiant unique (un "id") dans les objets associées, que vous mettrez dans les définitions de vos matières.

## Point particulier sur le rendu de listes

Vous l'avez compris, vous allez dessiner beaucoup de listes durant cet exercice. Il y a un point important à mettre en avant ici. L'algorithme qui vérifie si votre page doit changer a besoin d'un coup de main de votre part pour accélérer le rendu de structures itératives pour éviter de re-render des choses qui n'ont pas changé. Pour cela, lorsque vous définissez une liste d'enfants pour un noeud, vous devrez ajouter à chaque élément rendu par cette liste une clé particulière dans l'objet des `attributes`, qui se dénomme `key`. Elle doit être unique et être une chaîne de caractères, c'est la seule contrainte que l'on a sur cette clé. Idéalement, elle découlera de votre état. Si vous avez un tableau d'objets et que ces objets contiennent eux-mêmes un id, c'est le candidat parfait pour remplir ce rôle.

## Conseils

Il est très très TRES très important que la plus grande majorité de vos données soient traitées, transformées le plus haut possible dans votre arborescence de components, et que vos components enfants attendent comme `props` autant que possible une donnée directement prête à être utilisée.

Pour rappel, les `props` correspondent à l'objet que l'on passe en paramètre de la fonction qui crée le component.

Ceci permet d'éviter d'avoir de la logique qui modifie le comportement de votre application éparpillée partout dans votre code.

En ce qui concerne la nomenclature de vos components, essayez de réfléchir en terme d'arborescence. Dans le TD précédent, vous avez créé des `IdCard`, des `IdCardEntry`. Respectez le sens des mots que vous utilisez pour décrire vos components.

Utilisez la doc de Hyperapp pour vous aider si vous avez un doute.

Vous disposez de deux exemples dans le projet à la racine du dossier `src`, un démontrant la façon de rendre une liste, et un expliquant l'emploi d'un component pouvant prendre des balises ou components enfants en paramètre. 