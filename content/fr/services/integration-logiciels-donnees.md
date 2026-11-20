---
title: 'Intégration de logiciels et de données'
seoTitle: "Intégration de logiciels et de données : MQTT, API | Sensical"
description: "Nous relions appareils, logiciels et plateformes de données via MQTT, API, décodage de protocoles et formats ouverts, sans étape manuelle."
draft: false
featured: true
weight: 7
heroHeading: 'Intégration de logiciels et de données'
heroSubHeading: ''
section_title: 'Services'
translationKey: softwareintegration
labels:
- "Intégration"
- "MQTT"
- "API"
related_pages:
- flux-donnees-iot
- integration-capteurs-meshtastic
- integration-capteurs-environnementaux
---

Les données restent rarement là où elles sont produites. Un capteur, un appareil ou un système d'essai les crée, un broker ou une base de données les transporte et les stocke, et une autre application les analyse ou agit en conséquence. Nous {{< accent >}}connectons ces systèmes pour que les données circulent de manière fiable, dans le bon format et sans étape manuelle{{< /accent >}}, et nous concevons chaque intégration autour des personnes qui s'appuieront dessus.

{{< alert type="bg-sensical" >}}

### Le problème

Sur le papier, la plupart des systèmes savent échanger des données : il existe une API, un export, un broker de messages. En pratique, des fichiers sont encore copiés à la main, le même message arrive deux fois par des chemins différents, les unités et les horodatages se perdent, et un changement de format en amont casse silencieusement tout ce qui se trouve en aval. Une intégration fragile ou malcommode est une intégration à laquelle personne ne fait confiance. Une bonne intégration part de l'usage qui sera fait des données, puis choisit le lien technique le plus simple qui le permet.

{{</alert>}}

## Ce que nous intégrons

+ **Brokers de messages et flux** : publication et abonnements MQTT, ponts entre brokers, suppression des messages en double, et traitement des flux qui achemine et transforme les messages dès leur arrivée.
+ **Protocoles et encodages** : décodage du trafic binaire et chiffré des appareils, définitions Protocol Buffers, OSC et autres protocoles de contrôle, et conversion en mesures propres avec leurs unités et leurs horodatages.
+ **Plateformes tierces** : livraison des données décodées vers la plateforme qu'une organisation utilise déjà, via MQTT ou une API REST, ou import de données depuis des brokers distants, plutôt que d'imposer un outil unique à tout le monde.
+ **Bases de données et stockage** : bases de données de séries temporelles, PostgreSQL, archives Parquet sur un stockage compatible S3, et accès pour l'analyse via DuckDB ou un package Python.
+ **Appareils et contrôle en temps réel** : de petits ponts qui placent contrôleurs, capteurs et machines sur un même bus de messages, pour pouvoir ajouter ou remplacer des appareils sans toucher au reste du système.
+ **Données d'ingénierie** : fichiers de mesure et de simulation comme MDF4, HDF5, NetCDF, CSV et Excel, et les métadonnées qui les rendent exploitables plus tard.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Exemples tirés de nos projets

+ [Mesh Things](/fr/projets/mesh-things/) reçoit le trafic MQTT chiffré des réseaux Meshtastic, le décode, élimine les doublons qui arrivent par plusieurs passerelles, stocke les mesures et les partage avec des plateformes tierces via MQTT, avec une API REST et un package Python pour l'analyse.
+ Nos [contributions au firmware Meshtastic](/fr/projets/contributions-firmware-meshtastic/) définissent comment les nouvelles mesures de capteurs sont encodées dans le protocole Meshtastic, pour qu'elles circulent dans le réseau maillé, les applications et MQTT avec leurs unités.
+ Dans [Famulus 4.0](/fr/projets/famulus-4-0/), une manette de jeu et un contrôleur MIDI publient des commandes sur un même bus MQTT, et un répartiteur unique pilote un robot via WebRTC.
+ Dans [Azul Petróleo](/fr/projets/masques-azul-petroleo/), le logiciel lumière du spectacle pilote sans fil des masques lumineux et des LED de scène via des ponts OSC et sACN.

## Pour qui

+ **Organisations dont les données traversent plusieurs systèmes** (appareils, brokers, bases de données, outils d'analyse) avant de devenir utiles.
+ **Fabricants d'appareils et fournisseurs de plateformes** qui veulent que leur produit échange des données avec d'autres via des protocoles ouverts.
+ **Équipes qui construisent des systèmes interactifs et temps réel**, comme des installations, de la robotique ou de la technique de scène, où contrôleurs, appareils et logiciels doivent communiquer avec peu de latence.

## Ce que nous proposons

+ Des concepts d'intégration : le flux de données, les formats et protocoles, les options techniques et une recommandation
+ Des exigences, des schémas d'architecture et des estimations de charge
+ Le développement de décodeurs, de ponts, de connecteurs, d'importateurs, d'exportateurs et d'API
+ Des liaisons fiables : unités et horodatages préservés, doublons supprimés, et un comportement défini quand une liaison ou un système tombe en panne
+ La documentation et la passation, pour que votre équipe puisse exploiter et faire évoluer l'intégration

{{< alert type="border-sensical" >}}

### D'abord les protocoles ouverts

Nous privilégions les protocoles et formats ouverts et documentés, comme MQTT, Protocol Buffers, REST et Parquet, et nous publions nos propres outils en open source chaque fois que possible. Votre intégration ne doit pas vous enfermer chez un fournisseur, nous compris.

{{< /alert >}}

## Parlons-en

Dites-nous quels systèmes vos données doivent traverser à [info@sensical.es](mailto:info@sensical.es). Pour le volet capteurs, consultez notre service d'[intégration de capteurs environnementaux](/fr/services/integration-capteurs-environnementaux/) ; pour transformer les données en résultats validés et en rapports, consultez notre service [chaînes de données capteurs et IoT](/fr/services/flux-donnees-iot/).
