import { app } from 'hyperapp'
// import logger from '@hyperapp/logger'

import actions from './exercise/actions'
import state from './exercise/state'
import view from './exercise/components/views/CoursesOverview'

/*
RAPPEL :

La fonction app est la fonction qui sert à dessiner l'application javascript sur le navigateur
et à la rendre interactive.

Une application hyperapp prend 4 paramètres:
1. L'état global de l'application. Il correspond à une mémoire immédiate de tout ce qui se passe sur la page,
   stockée sous forme d'object **immutable**. Vous le définirez selon ce que vous essaierez d'accomplir. Il représente le domaine
   que vous essayez de représenter, alors employez des bons noms pour les clés.
2. Les actions. Comme l'état est immutable, on représente un changement de l'état par la création d'un nouvel état.
   C'est précisément ce pour quoi les actions existent. Ce sont des fonctions qui prennent en paramètres l'événement qui
   les déclenche et l'état global de l'application, et qui renvoient le nouvel état de l'application.
3. La vue. Elle représente votre page HTML comme vous l'aurez définie. C'est une fonction qui prend en paramètres
   l'état global de l'application et qui renvoie un modèle de données interprétable par la fonction app, qui dessinera
   l'application. C'est exactement ce qu'on a fait au TD d'avant.
4. Le noeud DOM dans lequel l'application devra dessiner. Ici on prend `document.body` mais on pourrait dessiner
   une application Hyperapp dans une sous-partie d'une page web.
 */

app(
  state,
  actions,
  view,
  document.body
)
