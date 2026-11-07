---
title: "Firmware Meshtastic : la prise en charge des capteurs dans le projet officiel"
seoTitle: "Nos contributions capteurs au firmware Meshtastic | Sensical"
description: "Nos pull requests acceptées dans le firmware Meshtastic : pilotes pour le CO2, les particules, le formaldéhyde, les capteurs analogiques et one-wire."
draft: false
featured: true
weight: 2
translationKey: meshtasticcontributions
heroHeading: "Firmware Meshtastic"
heroSubHeading: "La prise en charge des capteurs pour les réseaux maillés LoRa"
year: "2025–2026"
services:
- meshtasticsensorintegration
- environmentaldatacollection
labels:
- "Meshtastic"
- "Firmware"
- "Qualité de l'air"
image: "/images/projects/meshtastic/cover-sensors.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Depuis 2025, nous apportons des capteurs environnementaux à [Meshtastic](https://meshtastic.org), le firmware open source pour les radios maillées LoRa. À ce jour, ce travail compte plus de **50 pull requests acceptées**, dans différentes parties du firmware.

## Pilotes de capteurs

Chaque capteur a besoin d'un pilote dans le firmware et de ses propres champs dans le protocole de télémétrie de Meshtastic, pour que ses mesures puissent circuler dans le réseau maillé, atteindre les applications et être remontées via MQTT. Nous avons enrichi et restructuré le module _AirQualityTelemetry_ avec les contributions suivantes :

+ **CO2** : Sensirion SCD4X et SCD30, avec des commandes d'administration pour leur étalonnage
+ **Particules et gaz** : Sensirion SEN5X et la série SEN6X, avec particules (PM), température, humidité, CO2, formaldéhyde et indices COV et NOx ; Seeed Studio HM330X ; et une réécriture du Plantower PMSA003I
+ **Formaldéhyde** : Sensirion SFA30
+ **Température et humidité** : la famille Sensirion SHT, regroupée dans un seul pilote
+ **Entrées analogiques** : convertisseurs ADS1X15 de Texas Instruments, jusqu'à huit voies de tension
+ **Sondes one-wire** : jusqu'à huit sondes de température DS18B20 via des ponts I2C DS2482 et DS2482-800
+ **Sol et eau** : des champs de télémétrie pour le pH, la conductivité, la salinité, l'azote, le phosphore, le potassium, les nitrates, l'ammonium, l'oxygène dissous, le potentiel redox, la turbidité, la demande en oxygène et l'irradiance solaire

{{< divider
    image="images/drawings/probe-drawing.svg"
    height="220"
    margin="60vw"
>}}

## Des capteurs fiables

Ajouter un pilote n'est que le début. Un capteur qui fonctionne sur un bureau doit continuer à fonctionner sur le terrain, sur toutes les cartes prises en charge et aux côtés des autres appareils avec lesquels il partage un bus. Cela demande un travail minutieux et souvent invisible : respecter les temps de démarrage et de mesure de chaque capteur, gérer les lectures en échec et les appareils qui partagent une adresse, et tester sur du matériel réel avant de proposer une modification au projet officiel. Nous appliquons le même soin à chaque capteur que nous apportons à Meshtastic, pour que ses mesures soient fiables.

## Consulter le code

Tout le travail est public sur GitHub : [les pull requests acceptées](https://github.com/search?q=org%3Ameshtastic+author%3Aoscgonfer+is%3Apr+is%3Amerged&type=pullrequests), dans [meshtastic/firmware](https://github.com/meshtastic/firmware) et [meshtastic/protobufs](https://github.com/meshtastic/protobufs).
