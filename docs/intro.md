---
sidebar_position: 1
---

# Présentation

La **[badgeuse d'Austral Groupe Energie](https://badge-australenergie.netlify.app/)** est un outil permettant de gérer les entrées et sorties des employés de la partie technique. Elle permet également de gérer **les absences**, **les congés**, et **les heures supplémentaires**. Cette application vise à simplifier et automatiser le processus de suivi des heures de travail.

## Fonctionnalités principales

### 1. Pointage des heures
Les employés peuvent facilement pointer leurs heures d'entrée et de sortie en utilisant l'application. Pour cela, ils leur suffit d'entrer leur code de badge et l'application enregistre automatiquement l'heure d'entrée ou de sortie, selon l'heure où ils ont pointé.

### 2. Calcul des heures supplémentaires
L'application calcule automatiquement les heures supplémentaires en fonction des heures d'entrée et de sortie des employés. Elle tient compte des heures de travail régulières, des seuils horaires et des règles de calcul des heures supplémentaires conformément aux réglementations en vigueur. Les administrateurs peuvent également modifier manuellement les heures supplémentaires si nécessaire.

Le calcul des heures supplémentaires est basé sur les règles suivantes :

- Le temps de travail est calculé pour le mois en cours.
Pour chaque jours, on calcul le temps de travail en fonction des pointages d'entrée et de sortie, et on soustrait le temps de pause. (par défaut 45min)

:::info 
**Temps de travail pour un jour** = (Heure de sortie - Heure d'entrée) - Temps de pause

**Temps de travail pour un mois** = Somme des temps de travail pour chaque jour du mois
:::

- Les heures supplémentaires sont calculées en fonction du temps de travail et des seuils horaires suivant le statut de l'employé (Chef d'équipe ou non).

- [x] Sueil horaire Chef d'équipe = **169h/mois** (39h/semaine)
- [x] Sueil horaire Employé = **151h 40min/mois** (35h/semaine)

:::info 
**Heures supplémentaires** = Temps de travail du mois - Seuil horaire mensuel + solde des heures supplémentaires du mois précédent
:::

Chaque premiers du mois, un mail récapitulatif est envoyé à la partie technique avec le détail des heures supplémentaires de chaque employé.

### 3. Gestion des congés et des repos
Les employés peuvent soumettre des demandes de congés ou de repos directement à travers l'application. Les gestionnaires peuvent ensuite approuver ou rejeter ces demandes, assurant ainsi une gestion centralisée et transparente des congés et des repos.

### 4. Tableaux de bord et rapports
L'application offre des tableaux de bord et des rapports complets pour visualiser les heures de travail, les heures supplémentaires, les congés et les repos. Ces informations permettent aux gestionnaires et aux ressources humaines de suivre facilement les données et d'analyser les tendances.
s

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
