import { h } from 'hyperapp'

const NodeWithChildren = (props, children) =>
  h('div', {}, [
    h('p', {}, children) // Ici, on a défini ce que serait les enfants de la "balise" NodeWithChildren, cf en dessous)
  ])

/*
==
<div>
  <p>
    {children}
  </p>
</div>

NB : la syntaxe ci-dessus s'appelle du JSX et pourrait remplacer le retour de la fonction "NodeWithChildren".
Elle est **transformée** par le précompilateur en javascript valide.

ATTENTION. CE N'EST PAS DU JAVASCRIPT VALIDE.
JE REPETE.
CE N'EST PAS DU JAVASCRIPT VALIDE.

Chaque balise est transformée en un appel à la fonction 'h' que l'on utilise depuis le début.

Cette syntaxe a l'avantage d'être plus proche du problème que l'on essaie de résoudre (de son **domaine**),
donc de raisonner par rapport à une forme plus compréhensible. Elle **répond au problème** de la répétitivité
d'utiliser la fonction 'h'.

Elle est maintenant activée dans les TD (vous pouvez remplacer les corps des fonctions pour essayer).
Si vous vous sentez d'ajouter un élément en plus à comprendre pour ce TD, allez-y je vous y encourage.
Si c'est trop tôt c'est pas grave mais vous devrez finir par vous y habituer et l'utiliser.

*/

export default NodeWithChildren
