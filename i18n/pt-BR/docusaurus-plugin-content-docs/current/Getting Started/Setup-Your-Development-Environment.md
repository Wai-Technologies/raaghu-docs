---
sidebar_position: 1
---

# Configure seu ambiente de desenvolvimento

# Começando
Ce tutoriel suppose que vous avez déjà acheté un[BP Licence commerciale](https://commercial.abp.io/pricing "")et avoir un compte commercial actif BP.

Ce document suppose que vous faites référence à l'utilisation de pages raaghu-réact comme le cadre UI et Entity Framework Core comme fournisseur de bases de données.
## créer un environnement de développement
Instaurer votre environnement de développement avant de créer le premier projet.
### exigences préalables
Les outils suivants doivent être installés sur votre machine de développement.

- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/ "")(v17.3 ⁇ ) pour Windows /[Studio visuel pour Mac](https://visualstudio.microsoft.com/vs/mac/ "")
- [.ET 7.0 ⁇](https://dotnet.microsoft.com/en-us/download/dotnet "")
- [Node v18.18](https://nodejs.org/en "")ou plus
- [npm v9.5](https://www.npmjs.com/package/npm "")et au-dessus ou[Yarn v1.20+ (non v2)](https://classic.yarnpkg.com/en/docs/install#windows-stable "")

### Installer l'amplitude de l'échelle
[BP LI](https://docs.abp.io/en/abp/latest/CLI "")est une interface de ligne de commandement qui sert à automatiser certaines tâches communes pour les solutions basées sur le BP.

[BP LI](https://docs.abp.io/en/abp/latest/CLI "")est un outil de source libre et ouvert pour le cadre BP. Il est également utilisé pour le développement des applications commerciales de BP.

Tout d'abord, vous devez installer l'IAP à l'aide du commandement suivant :

```bash
      dotnet tool install -g Volo.Abp.Cli
```
Si vous avez déjà installé, vous pouvez le mettre à jour à l'aide de la commande suivante :
```bash
      dotnet tool update -g Volo.Abp.Cli
```
### Inscrire un registre à votre compte
Afin d'utiliser les caractéristiques commerciales de BP, vous devez loger votre compte à l'aide de l'IPP :
```bash
    abp login username 
```
Il vous demandera un mot de passe, de sorte que vous devez entrer le mot de passe de votre compte.

Vous pouvez créer librement un nouveau compte à partir de[Compte BP](https://account.abp.io/Account/Login "")site Web. Toutefois, votre compte devrait être inscrit à un organisme en tant que développeur pour pouvoir utiliser le BP Commercial. Si votre entreprise a une licence commerciale BP, demandez à votre gestionnaire d'ajouter votre compte à la liste des promoteurs de l'organisation.
### Installer la séquence d'amplification
[Bureau BP](https://docs.abp.io/en/commercial/7.2/abp-suite/index "")C'est une demande qui vise à vous aider à votre développement.

Tout d'abord, vous devez installer la suite BP :
```bash
      abp suite install
```
Si vous avez déjà installé, vous pouvez le mettre à jour :
```bash
      abp suite update
```
### prochaine étape

- [Créer une nouvelle solution](Creating-A-New-Solution.md "")

