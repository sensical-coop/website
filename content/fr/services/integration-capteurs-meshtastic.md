---
title: 'Intégration de capteurs Meshtastic'
seoTitle: "Intégration de capteurs et firmware Meshtastic | Sensical"
description: "Nous apportons des capteurs à Meshtastic : pilotes intégrés au firmware officiel, définitions de télémétrie, I2C et énergie fiables, et une plateforme pour les données."
draft: false
featured: true
weight: 2
heroHeading: 'Intégration de capteurs Meshtastic'
heroSubHeading: ''
button: "En savoir plus"
section_title: 'Services'
translationKey: meshtasticsensorintegration
labels:
- "Meshtastic"
- "Firmware"
- "Capteurs"
related_pages:
- integration-capteurs-environnementaux
---

Nous apportons des capteurs à [Meshtastic](https://meshtastic.org), le firmware open source qui transforme des radios LoRa abordables en réseaux maillés autonomes. Nous écrivons les pilotes, les faisons {{< accent >}}intégrer au firmware officiel{{< /accent >}} et veillons à ce que les données vous parviennent, pour que vos capteurs fonctionnent sur des appareils Meshtastic standard, version après version.

## Pourquoi Meshtastic

Les réseaux Meshtastic n'ont besoin ni d'antennes d'opérateur, ni de cartes SIM, ni d'abonnements : chaque radio relaie les messages de ses voisines, et quelques passerelles suffisent à connecter une exploitation agricole, une vallée ou un quartier entier. Une grande communauté et une gamme croissante de matériel le soutiennent. C'est donc une excellente option pour la mesure environnementale là où l'énergie et la couverture manquent, à condition que les capteurs soient pris en charge par le firmware, et bien pris en charge.

## Notre parcours

Depuis 2025, 48 de nos _pull requests_ ont été intégrées au firmware, aux définitions de protocole et aux bibliothèques de Meshtastic. Elles ajoutent des capteurs de CO2, de particules fines, de formaldéhyde, de COV et de NOx, de température et d'humidité, des entrées analogiques et des sondes _one-wire_, et rendent la lecture des capteurs plus robuste sur tous les appareils. Tous les détails dans nos [contributions au firmware Meshtastic](/fr/projets/contributions-firmware-meshtastic/).

{{< divider
    image="images/drawings/antenna-drawing.svg"
    height="100"
    margin="40vw"
>}}

## Pour qui

+ **Fabricants de capteurs** qui veulent que leur capteur ou leur appareil fonctionne d'emblée avec Meshtastic.
+ **Intégrateurs et fabricants d'appareils** qui conçoivent du matériel Meshtastic avec des capteurs environnementaux.
+ **Équipes de recherche, collectivités et entreprises** qui déploient des réseaux de capteurs devant fonctionner hors réseau, avec des données fiables.

## Ce que nous proposons

+ Des pilotes de firmware pour de nouveaux capteurs, développés avec l'équipe de maintenance de Meshtastic et intégrés au projet officiel, pour qu'ils soient présents dans chaque version
+ Des définitions de télémétrie dans le protocole Meshtastic, pour que vos mesures circulent dans le réseau, les applications et MQTT avec les bonnes unités
+ Une intégration robuste : vitesses et adresses du bus I2C, cycles de veille et de réveil, intervalles de mesure, étalonnage et commandes d'administration
+ Des compilations et configurations de firmware sur mesure pour votre appareil, et des tests sur du matériel réel
+ La partie données avec [Mesh Things](/fr/projets/mesh-things/) : stockage, traitement, alarmes, ou données décodées envoyées vers votre propre plateforme
+ La maintenance au fil de l'évolution de Meshtastic, pour que votre intégration ne casse pas avec les nouvelles versions

{{< alert type="bg-sensical" >}}

### D'abord dans le projet officiel

Chaque fois que possible, nous contribuons notre travail au firmware officiel. Votre capteur fait alors partie de Meshtastic lui-même, relu par ses mainteneurs et disponible pour tous, plutôt qu'un _fork_ que quelqu'un doit maintenir en vie.

{{< /alert >}}

## Parlons-en

Parlez-nous de votre capteur ou de votre réseau à [info@sensical.es](mailto:info@sensical.es). Pour une vision plus large, du choix des capteurs à l'étalonnage et au déploiement, consultez notre service d'[intégration de capteurs environnementaux](/fr/services/integration-capteurs-environnementaux/).
