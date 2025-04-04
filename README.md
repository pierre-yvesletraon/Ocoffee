# O'Coffee ☕

## Description

O'Coffee est une application web de e-commerce spécialisée dans la vente de cafés d'exception. Développée avec Node.js, elle permet aux amateurs de café de découvrir une sélection exclusive de cafés du monde entier.

## Fonctionnalités

- 🏠 Page d'accueil avec présentation de la boutique
- 📋 Catalogue complet des cafés avec système de filtrage par catégorie
- 🔍 Pages détaillées pour chaque produit
- 📍 Page boutique avec carte interactive (Leaflet) et horaires d'ouverture
- 📝 Système d'upload de nouveaux produits
- 📧 Formulaire de contact fonctionnel (EmailJS)
- 📱 Design responsive (mobile-first)

## Technologies Utilisées

- **Frontend** :
  - HTML/EJS
  - CSS (avec Bootstrap 5)
  - JavaScript
- **Backend** :
  - Node.js
  - Express.js
  - PostgreSQL
- **Autres** :
  - Leaflet (cartographie)
  - EmailJS (système d'emails)
  - Multer (gestion des uploads)
  - dotenv (variables d'environnement)

## Installation

```bash
# Cloner le repository
git clone [votre-repo]

# Installer les dépendances
npm install

# Créer un fichier .env avec les variables suivantes
DATABASE_URL=votre_url_postgresql
PORT=3000
SESSION_SECRET=votre_secret
NODE_ENV=development

# Lancer le serveur de développement
npm run dev
```

## Structure de la Base de Données

La base de données PostgreSQL contient une table principale `coffees` avec les champs suivants :

- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- description (TEXT)
- reference (VARCHAR)
- origin (VARCHAR)
- price (NUMERIC)
- category (VARCHAR)
- availability (BOOLEAN)

## Routes Principales

- `/` : Page d'accueil
- `/catalog` : Catalogue des produits
- `/product/:id` : Page détaillée d'un produit
- `/shop` : Page de la boutique physique
- `/sendFiles` : Interface d'upload de nouveaux produits
- `/form` : Formulaire de contact

## Auteur

Pierre-Yves Le Traon

## Licence

[MIT](https://opensource.org/licenses/MIT)
