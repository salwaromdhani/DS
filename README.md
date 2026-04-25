DS2 préparé par ROMDHANI Saloua — CI/CD avec GitHub Actions

Application web (HTML / CSS / JavaScript) déployée automatiquement
sur GitHub Pages via un pipeline CI/CD GitHub Actions.
1. Architecture du projet
projet_cicd_guidé/
│
├── app/                          # Application web (frontend)
│   ├── index.html                # Page principale
│   ├── style.css                 # Styles CSS
│   └── app.js                    # Logique JavaScript
│
├── .github/
│   └── workflows/
│       ├── ci.yml                # Intégration continue (CI)
│       ├── cd.yml                # Déploiement continu (CD)
│       └── pr-check.yml          # Validation des Pull Requests
│
├── .env.example                  # Variables d’environnement (modèle)
├── .gitignore                    # Fichiers ignorés par Git
└── README.md                     # Documentation du projet
🚀 2. Mise en place du projet
📌 Étape 1 — Création du dépôt GitHub
Accéder à 👉 https://github.com
Cliquer sur New repository
Nom du projet : devpulse-cicd
Visibilité : Public (obligatoire pour GitHub Pages gratuit)
Initialisation : aucune option cochée
📌 Étape 2 — Clonage du projet
git clone https://github.com/<votre-username>/devpulse-cicd.git
cd devpulse-cicd

Copier ensuite les fichiers du projet dans ce répertoire.

📌 Étape 3 — Premier commit
git add .
git commit -m "feat: initialisation du projet DevPulse avec CI/CD"
git push origin main

👉 À ce stade, les workflows GitHub Actions sont automatiquement déclenchés.

⚙️ 3. Activation de GitHub Pages
Aller dans Settings du dépôt
Cliquer sur Pages
Section Source → sélectionner GitHub Actions
Enregistrer
🔁 4. Fonctionnement du pipeline CI/CD
🔍 CI — Intégration continue

Objectif : vérifier la qualité du code avant validation

Validation HTML
Validation CSS
Vérification de la structure du projet
🚀 CD — Déploiement continu

Objectif : automatiser la mise en production

Génération des métadonnées (build number, commit SHA)
Publication automatique sur GitHub Pages
🔎 PR Check — Validation des Pull Requests

Objectif : sécuriser les contributions

Analyse des fichiers modifiés
Vérification avant fusion
Simulation du build
🧪 5. Test du pipeline
🌿 Création d’une branche
git checkout -b feature/ajout-design

Modification du fichier :

--accent: #a78bfa;
📤 Push de la branche
git add app/style.css
git commit -m "style: mise à jour de la couleur principale"
git push origin feature/ajout-design
🔀 Pull Request
Création d’une PR sur GitHub
Lancement automatique du workflow pr-check.yml
Validation des tests CI
🚀 Fusion
Merge de la PR vers main
Déclenchement automatique du déploiement (cd.yml)
🌐 6. Accès au site déployé
https://<votre-username>.github.io/devpulse-cicd/

👉 L’URL est également visible dans l’onglet Deployments.

📊 7. Concepts CI/CD utilisés
Concept	Description
CI	Vérification automatique du code
CD	Déploiement automatique
Workflow	Ensemble de jobs automatisés
Job	Bloc d’exécution
Step	Instruction dans un job
Trigger	Déclencheur (push, PR)
Runner	Machine d’exécution GitHub
Artifact	Résultat du build
Deployment	Publication en production
⚠️ 8. Problèmes fréquents
Problème	Cause	Solution
GitHub Pages ne fonctionne pas	Source non activée	Activer "GitHub Actions"
Workflow échoue	YAML mal indenté	Utiliser espaces (pas tabulations)
Site non mis à jour	Cache navigateur	Ctrl + Shift + R
Fichiers manquants	mauvais push	vérifier git add .
📚 9. Outils et ressources
🔗 GitHub Actions : https://docs.github.com/actions
🔗 GitHub Pages : https://pages.github.com
🔗 Marketplace Actions : https://github.com/marketplace
🔗 YAML : https://yaml.orgtrigger deploy
