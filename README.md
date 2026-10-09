# Application terrain — techniciens fibre optique

Application mobile développée pendant mon alternance. Elle sert d'aide aux techniciens qui font du raccordement fibre (FTTH) sur le terrain.

## Fonctionnalités

- Authentification (comptes de démonstration locaux)
- Guide de résolution des cas d'échec courants (infrastructure discontinue, fourreau bouché, RDV non honoré…)
- Annuaire des numéros utiles, avec appel en un clic
- Galerie de photos de référence d'équipements
- Carte (HERE Maps) et recherche
- Accès à des modèles de documents

## Stack

- React Native / Expo
- React Navigation (onglets et piles)
- AsyncStorage pour la session
- Firebase (hosting, functions) avec déploiement via GitHub Actions

## Configuration

Les données sensibles ne sont pas versionnées :

- `EXPO_PUBLIC_HERE_API_KEY` : clé API HERE Maps (variable d'environnement)
- `GoogleService-Info.plist` / `google-services.json` : à récupérer depuis la console Firebase
- `firebase.js` : à compléter avec la configuration de votre projet

Les numéros de téléphone et les documents du dépôt sont des valeurs fictives.

## Lancer

```bash
npm install
EXPO_PUBLIC_HERE_API_KEY=xxx npx expo start
```
