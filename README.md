# TP Docker Compose - CI/CD Integration

Ce projet contient une application web composée d'un frontend en React (Vite) et d'un backend en Node.js (Express).

## Structure du Projet

- `backend/` : Serveur API Express fournissant une route de santé `/api/health`.
- `frontend/` : Application React consommant l'API du backend.
- `.github/workflows/` : Configurations de CI/CD GitHub Actions.

## Installation et Utilisation Locale

### Backend
1. Naviguer dans le dossier backend :
   ```bash
   cd backend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer en mode développement :
   ```bash
   npm run dev
   ```

### Frontend
1. Naviguer dans le dossier frontend :
   ```bash
   cd frontend
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer en mode développement :
   ```bash
   npm run dev
   ```

## Vérification Qualité et Tests

### Linters (ESLint)
Les linters vérifient la qualité du code et le respect des standards.

- **Backend** :
  ```bash
  cd backend
  # Lancer ESLint sur le dossier src
  npm run lint
  ```

- **Frontend** :
  ```bash
  cd frontend
  # Lancer ESLint sur les fichiers .js et .jsx du dossier src
  npm run lint
  ```

### Tests Unitaires
Les tests unitaires valident le comportement des routes API du backend.

- **Backend** :
  ```bash
  cd backend
  # Lancer les tests unitaires avec Jest
  npm test
  ```

## Intégration Continue (GitHub Actions)

Un workflow d'intégration continue est configuré dans `.github/workflows/ci.yml`. Il s'exécute automatiquement lors de chaque `push` ou `pull_request` sur n'importe quelle branche et effectue les étapes suivantes :

1. Récupération du code.
2. Installation des dépendances (via `npm ci`).
3. Validation du linting (backend et frontend).
4. Exécution des tests unitaires (backend).
