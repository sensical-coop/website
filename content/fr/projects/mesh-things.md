---
title: "Mesh Things : une plateforme de données pour capteurs maillés LoRa"
seoTitle: "Mesh Things : données de capteurs maillés LoRa | Sensical"
description: "Notre plateforme open source pour collecter, stocker et traiter les données de capteurs des réseaux maillés LoRa, sur un serveur cloud ou un Raspberry Pi."
draft: false
featured: true
weight: 1
translationKey: meshthings
heroHeading: "Mesh Things"
heroSubHeading: "Stockage, traitement et console pour les réseaux de capteurs Meshtastic"
client: "Sensical (produit maison)"
year: 2026
partners:
services:
- environmentaldatacollection
- meshtasticsensorintegration
labels:
- "Meshtastic"
- "Plateforme de données"
- "Open source"
image: "/images/projects/mesh-things/cover-map.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Mesh Things est notre plateforme open source pour collecter, stocker et traiter les données de capteurs des réseaux maillés LoRa comme [Meshtastic](https://meshtastic.org). Elle reçoit le trafic radio chiffré d'un réseau maillé et le convertit en mesures propres et stockées, avec des alertes, des contrôles qualité et une API REST. Mesh Things peut fonctionner sur un serveur cloud ou sur un Raspberry Pi. Elle est en service sur [things.sensical.es](https://things.sensical.es).

{{< carousel fit="contain" ratio="5/2" label="Mesh Things" >}}
![Illustration d'un réseau maillé : des nœuds radio reliés entre eux, trois passerelles mises en évidence et le trajet d'un paquet vers l'une d'elles](/images/projects/mesh-things/mesh-grid.svg "Un réseau Meshtastic : les nœuds se relaient les paquets jusqu'à ce qu'une passerelle les envoie vers MQTT.")
![La console Mesh Things : une liste en direct des paquets entrants, une carte des passerelles et des nœuds en Espagne et les options de déploiement](/images/projects/mesh-things/console-overview.png "Paquets en direct, carte du réseau et déploiement sur un Raspberry Pi ou dans le cloud.")
![Trois étapes : enregistrer un réseau, commencer à recevoir des données, accéder aux données et agir](/images/projects/mesh-things/three-steps.png "Pour démarrer : enregistrer le réseau, recevoir les données, agir.")
![Panneaux de la console : un inventaire des appareils en temps réel, le contrôle des passerelles autorisées et bloquées, et un graphique de température](/images/projects/mesh-things/console-features.png "Inventaire des appareils, contrôle des passerelles qui publient, et graphiques.")
{{< /carousel >}}

## Le défi

Meshtastic a rendu les **réseaux maillés LoRa économiques et faciles à mettre en place** : longue portée et autonomes, ils conviennent naturellement aux capteurs environnementaux dans les lieux sans électricité ni couverture. En revanche, **récupérer les données et les exploiter est plus difficile** : les passerelles publient les paquets du réseau sur MQTT, chiffrés et dans le format _protobuf_ propre à Meshtastic, un même paquet arrive souvent plusieurs fois via différentes passerelles, et les plateformes IoT courantes ne prennent pas Meshtastic en charge nativement. {{<accent>}}Mesh Things est une solution unifiée qui aide les équipes à construire des réseaux de collecte de données maillés LoRa sans avoir à développer ni maintenir leur propre couche de décodage.{{</accent>}}

## Mesh Things

Mesh Things vous permet de :

+ **Enregistrer des réseaux et des appareils**, puis déchiffrer et décoder leurs paquets avec la clé du canal. La découverte automatique enregistre les passerelles et les nœuds qui se trouvent derrière elles à partir du trafic lui-même.
+ **Stocker chaque mesure dans une base de données de séries temporelles**, avec une archive Parquet facultative sur un stockage compatible S3 pour l'analyse à long terme.
+ **Traiter les données à la volée** : l'étalonnage des capteurs et les canaux dérivés, les contrôles de qualité des données et la détection de motifs sont appliqués dès l'arrivée des données.
+ **Déclencher des alertes** sur des seuils, des mesures figées ou manquantes et des interruptions, avec des notifications par e-mail et d'autres canaux.
+ **Se connecter à d'autres systèmes** : importer des réseaux depuis des brokers MQTT distants et partager les mesures décodées avec des tiers en MQTT, pour qu'elles arrivent dans la plateforme que vous utilisez déjà.
+ **Une console et une API** : utilisez notre console, avec l'inventaire des appareils en direct, des cartes du réseau et l'analyse du trafic. Créez des graphiques, choisissez quelles passerelles et quels nœuds sont stockés, et gérez les alertes et les modèles de traitement des données. Accédez aux données via une **API REST, un stockage S3 et DuckDB, avec un paquet Python pour y accéder nativement.**

## Des options de déploiement flexibles

Mesh Things fonctionne avec Docker Compose en deux tailles :

- une version *lite*, qui reçoit, décode et stocke les données, et reste assez légère pour un ordinateur monocarte comme un Raspberry Pi sur le terrain.
- une version *full*, qui ajoute le traitement en flux, les contrôles qualité, le partage MQTT et l'archive, construite sur des technologies éprouvées comme Kafka, Flink, EMQX, InfluxDB, PostgreSQL et Redis.

## Open source

La plateforme et ses applications web sont publiées sur GitHub, et la documentation se trouve sur [things.sensical.es/docs](https://things.sensical.es/docs) :

+ [mesh-things](https://github.com/sensical-coop/mesh-things) : réception, décodage, traitement, stockage et API (GPL-3.0)
+ [mesh-things-apps](https://github.com/sensical-coop/mesh-things-apps) : la console et la documentation (LGPL-2.1)

## Nous contacter

Pour utiliser Mesh Things avec vos capteurs ou votre réseau, écrivez-nous à [info@sensical.es](mailto:info@sensical.es).
