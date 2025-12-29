# Slice and Splice Algorithm

## Objectif

Créer une fonction JavaScript capable de fusionner deux tableaux en insérant les éléments du premier tableau dans le second, à partir d’un index donné. 
---

## Description du projet

La fonction `frankenSplice` reçoit : 

- un **premier tableau** (array source) 
- un **second tableau** (array cible) 
- un **index** (position d’insertion)

La fonction doit : 

- Copier chaque élément du premier tableau dans le second, en ordre, à partir de l’index fourni. 
- Retourner le nouveau tableau fusionné. 
- Laisser les deux tableaux d’entrée inchangés après exécution.

---

## Fonction attendue

```js

function frankenSplice(arr1, arr2, index)

```


## Fonctionnement

1. Créer une copie du second tableau (pour ne pas le modifier directement).
2. Insérer les éléments du premier tableau dans cette copie à la position indiquée par index.

  - Alternative 1 (spread operator) : 

  ```js 

  copyArr2.splice(index, 0, ...arr1);

  ```

  → Tous les éléments du premier tableau sont insérés d’un seul coup.


  - Alternative 2 (boucle for) :

  ```js

    for (let i = 0; i < arr1.length; ++i) { 
      copyArr2.splice(index + i, 0, arr1[i]); 
    }

  ```

   → Les éléments sont insérés un par un, en respectant l’ordre.


   - Alternative 3 (`slice + concat`) :

   ```js
   
    const before = arr2.slice(0, index); 
    const after = arr2.slice(index);
    const merged = before.concat(arr1, after);
    return merged;

  ```
→ On découpe le second tableau avec `slice()` avant et après l’index, puis `concat()` insère le premier tableau entre ces deux parties, en gardant l’ordre et sans modifier les originaux.

3. Retourner le tableau fusionné (`return copyArr2;`).
4. Vérifier **l’immuabilité** : les tableaux originaux (`arr1` et `arr2`) restent inchangés après l’exécution.

---


## Exemples 

```js

frankenSplice([1, 2, 3], [4, 5], 1);
// → [4, 1, 2, 3, 5]

frankenSplice([1, 2], ["a", "b"], 1);
// → ["a", 1, 2, "b"]

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// → ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

frankenSplice([1, 2, 3, 4], [], 0);
// → [1, 2, 3, 4]



```


## Compétences développées

- Manipulation des tableaux avec `slice()` et `splice()`
- Préservation des données originales (immutabilité)
- Fusion et insertion d’éléments dans un tableau
- Logique algorithmique et gestion des index
- Validation par tests unitaires

---

## Technologies utilisées

| Technologie | Description |
|--------------|-------------|
| **JavaScript (ES6+)** | Langage utilisé pour le script |
| **Node.js** | Environnement d’exécution |
| **VS Code** | Éditeur de code utilisé |

---


##  Lancer le projet

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/idriss-enone/slice-and-splice.git 

2. **Ouvrir le projet :**

  - Ouvrir le dossier dans **VS Code**.
  - Ouvrir le fichier `frankenSplce.js`.

3. **Exécuter le code :**
    - Via la console du navigateur dans une page HTML liée au script ;
    - Ou via Node.js :
      ```bash
      node frankenSplce.js

---

## Auteur

Projet réalisé par **Idriss Enone** dans le cadre d’un apprentissage en JavaScript.

---









