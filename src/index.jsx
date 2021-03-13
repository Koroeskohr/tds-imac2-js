import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
La fonction `ReactDOM.render` est la fonction qui sert à dessiner l'application
javascript sur le navigateur et à la rendre interactive.

Une application React prend 2 paramètres:
1. La vue. Elle représente votre page HTML comme vous l'aurez définie.
   C'est une valeur qui représente la structure du DOM,
   un modèle de données interprétable par la fonction `render`, qui génèrera l'application,
   et appliquera les modifications dans le DOM. C'est exactement ce qu'on a fait au TD d'avant.
2. Le noeud DOM dans lequel l'application devra dessiner.
   ici on prend `document.getElementById('root')`, un node à la racine de notre arborescence,
   mais on pourrait dessiner une application React dans une sous-partie d'une page web.
 */

/**
 * Vous modifierez cette fonction pour afficher les résultats de vos applications.
 * Il faudra importer la bonne view pour chaque exercice. Je vous conseille vivement de nommer
 * vos imports en conséquence pour savoir ce que vous utilisez pour render l'app.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
