---
title: "Intégration de logiciels d'ingénierie"
seoTitle: "Intégration de logiciels d'ingénierie et bases d'essais | Sensical"
description: "Nous relions logiciels d'analyse, automatisation d'essais, simulation et bases de données d'essais : sans export manuel, et des rapports automatiques."
draft: false
featured: true
weight: 7
heroHeading: "Intégration de logiciels d'ingénierie"
heroSubHeading: ''
section_title: 'Services'
translationKey: engineeringsoftwareintegration
labels:
- "Intégration"
- "ASAM ODS"
- "Automatisation"
related_pages:
- flux-donnees-ingenierie
- gestion-produit-logiciel-ingenierie
- integration-capteurs-meshtastic
---

Les données d'ingénierie restent rarement dans une seule application. Elles sont produites par un banc d'essai ou une simulation, stockées dans une base de données, analysées dans un autre outil et finissent dans un rapport. Nous {{< accent >}}connectons ces applications pour que les données circulent sans export manuel{{< /accent >}}, et nous concevons l'intégration autour de l'ingénieur qui l'utilisera tous les jours.

{{< alert type="bg-sensical" >}}

### Le problème

Sur le papier, la plupart des outils d'ingénierie savent échanger des données : il existe un export, une API, une ligne de commande. En pratique, les ingénieurs enregistrent encore des fichiers à la main, les renomment, les chargent dans un autre outil et refont les mêmes graphiques. Une intégration qui existe mais qui est malcommode est une intégration que personne n'utilise. Une bonne intégration part du flux de travail de l'utilisateur, puis choisit le lien technique le plus simple qui le permet.

{{</alert>}}

## Ce que nous intégrons

+ **Systèmes d'automatisation d'essais** : des rapports créés automatiquement en fin d'essai, une entrée « afficher dans l'outil d'analyse » dans le système d'essai, et les résultats et valeurs caractéristiques renvoyés vers la plateforme de données d'essai.
+ **Logiciels de simulation** : l'outil d'analyse utilisé comme post-processeur, lancé depuis l'interface de simulation, avec un espace de travail prêt à l'emploi qui charge les fichiers de résultats et exécute des séquences d'analyse réutilisables.
+ **Bases de données d'essais** : parcourir, rechercher et charger des mesures depuis des serveurs ASAM ODS et openMDM, y réécrire les résultats calculés, les rapports et les commentaires, et télécharger par lots les grands volumes de données.
+ **Scripts et autres applications** : MATLAB, Python, Excel ou des outils internes qui pilotent l'analyse via COM/ActiveX, la ligne de commande ou des interfaces de script.
+ **Formats de données** : importateurs et exportateurs pour des formats de mesure et de simulation comme MDF4, HDF5, ATFX, NetCDF, CSV et Excel, ainsi que pour les bases de données SQL.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Pour qui

+ **Éditeurs de logiciels d'ingénierie** qui veulent que leur produit fonctionne avec un autre : comme source de données, comme post-processeur ou comme étape de génération de rapports.
+ **Services d'essais et de simulation** dont les données traversent trois ou quatre applications avant de devenir un résultat.
+ **Équipes qui adoptent un système de gestion des données d'essai** et dont les outils d'analyse doivent pouvoir y lire et y écrire.

## Ce que nous proposons

+ Des concepts d'intégration : le flux de travail de l'utilisateur, les options techniques (lancement, échange de fichiers, COM, ligne de commande, URL, API) et une recommandation
+ Des exigences, des schémas d'architecture et des estimations de charge par lot de travail
+ Le développement d'importateurs, d'exportateurs, de scripts, de séquences et d'add-ins
+ Des chaînes de génération automatique de rapports, des données brutes au PDF ou au PowerPoint
+ Des espaces de travail de démonstration, de la documentation et des webinaires pour la solution commune
+ La coordination entre les équipes et les entreprises impliquées, y compris sur les questions de licences et de déploiement

{{< alert type="border-sensical" >}}

### Même problème, autre échelle

Acheminer les données de là où elles sont produites jusqu'à là où elles sont utilisées est aussi au cœur de notre travail sur les capteurs : d'une radio [Meshtastic](/fr/services/integration-capteurs-meshtastic/) à une base de données, ou d'un banc d'essai à un rapport. Les outils diffèrent, les questions restent les mêmes : formats, délais, métadonnées, et ce qui se passe en cas de panne.

{{< /alert >}}

## Parlons-en

Dites-nous quels outils vos données doivent traverser à [info@sensical.es](mailto:info@sensical.es). Pour le volet produit d'une intégration, du périmètre à la version livrée, consultez notre service de [gestion de produit pour logiciels d'ingénierie](/fr/services/gestion-produit-logiciel-ingenierie/).
