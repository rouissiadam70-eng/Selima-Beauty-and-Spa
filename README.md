# Selima Beauty & Spa — Site React

Site vitrine one-page construit avec **React + Vite** et du **CSS pur** (pas de framework CSS).

## Structure du projet

```
selima-react/
├── index.html              # Point d'entrée HTML (polices Google Fonts incluses)
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
├── public/
│   └── assets/              # Logo et photos (JPG)
└── src/
    ├── main.jsx              # Point d'entrée React
    ├── App.jsx                # Assemble toutes les sections
    ├── App.css                # Tous les styles du site
    ├── index.css               # Reset CSS de base
    ├── data.js                  # ⭐ Contenu éditable : tarifs, textes, liens
    └── components/
        ├── Header.jsx            # Barre de navigation
        ├── Hero.jsx                # Section d'accueil
        ├── About.jsx                # Section "L'Institut"
        ├── Services.jsx              # Liste des services & tarifs
        ├── Products.jsx               # Produit vedette (Pack Alice Cosmétiques)
        ├── Gallery.jsx                 # Galerie / pourquoi nous choisir
        ├── Contact.jsx                  # Coordonnées + carte
        └── Footer.jsx                     # Pied de page
```

---

## Étape par étape : comment lancer le site en local

### 1. Installer Node.js (si ce n'est pas déjà fait)
Le site a besoin de **Node.js** (version 18 ou plus récente) pour tourner.
- Téléchargez-le sur https://nodejs.org (choisissez la version "LTS")
- Vérifiez l'installation en ouvrant un terminal et en tapant :
  ```
  node -v
  ```
  Vous devriez voir un numéro de version (ex : `v20.11.0`).

### 2. Ouvrir un terminal dans le dossier du projet
Décompressez le dossier `selima-react` reçu, puis dans un terminal :
```bash
cd chemin/vers/selima-react
```

### 3. Installer les dépendances
Cette commande télécharge React, Vite et tous les outils nécessaires (une seule fois) :
```bash
npm install
```
Cela crée un dossier `node_modules` (ne pas le modifier ni le supprimer).

### 4. Lancer le site en mode développement
```bash
npm run dev
```
Le terminal affichera une adresse locale, généralement :
```
Local:   http://localhost:5173/
```
Ouvrez cette adresse dans votre navigateur : le site s'affiche, et se **recharge automatiquement** à chaque modification de code.

### 5. Arrêter le serveur
Dans le terminal, appuyez sur `Ctrl + C`.

---

## Étape par étape : mettre le site en ligne (production)

### 1. Générer la version optimisée
```bash
npm run build
```
Cela crée un dossier `dist/` contenant le site final (HTML/CSS/JS optimisés, prêt pour l'hébergement).

### 2. Prévisualiser la version de production en local (optionnel)
```bash
npm run preview
```

### 3. Héberger le dossier `dist/`
Vous pouvez déposer le contenu de `dist/` sur n'importe quel hébergeur statique :
- **Netlify** (glisser-déposer le dossier `dist` sur app.netlify.com/drop)
- **Vercel** (`vercel deploy` après installation de leur CLI)
- **GitHub Pages**
- Ou votre hébergeur web habituel (via FTP)

---

## Comment modifier le contenu du site

Pour changer un **texte, un tarif ou un lien**, il n'est presque jamais nécessaire de toucher aux composants : tout le contenu éditable est centralisé dans **`src/data.js`** :

- `contact` → téléphone, adresse, liens Instagram/Facebook, lien de la carte
- `serviceGroups` → toutes les catégories de services et leurs prix
- `featuredProduct` → le produit mis en avant (image, prix, description)
- `whyChooseUs` → la liste "Pourquoi nous choisir"

Exemple : pour changer le prix d'un service, ouvrez `src/data.js` et modifiez simplement le nombre :
```js
{ name: 'Coloration + coupe + brushing', price: 55 },  // ← changez 55 ici
```
Sauvegardez, et si `npm run dev` tourne déjà, le changement apparaît immédiatement dans le navigateur.

## Comment changer les photos

Remplacez les fichiers dans `public/assets/` en gardant les mêmes noms :
- `logo.jpg`
- `soin-visage.jpg`
- `pack-capillaire.jpg`

## Comment changer les couleurs

Toutes les couleurs sont définies en haut de `src/App.css` dans `:root` :
```css
:root {
  --ink: #211A15;        /* noir profond (texte, fond nav produits) */
  --ivory: #FAF5EC;       /* fond crème principal */
  --brass: #B08D4F;        /* or/laiton (accents) */
  --brass-light: #D8B76B;   /* or clair */
  ...
}
```
