---
title: "Famulus 4.0 : un chien robot sur scène"
seoTitle: "Famulus 4.0 : pilotage en direct d'un chien robot | Sensical"
description: "Un contrôleur sur mesure pour un chien robot Unitree Go2, piloté en direct avec une manette de jeu et un contrôleur MIDI dans Famulus 4.0, d'Iron Skulls Co."
draft: false
featured: true
weight: 5
translationKey: famulus40
heroHeading: "Famulus 4.0"
heroSubHeading: "Le pilotage en direct d'un chien robot pour un spectacle de danse"
client: "Iron Skulls Co"
year: "2024–2025"
location: "Création : Umore Azoka, Leioa"
services:
- technicaldevelopmentartists
related_projects:
- azulpetroleomasks
labels:
- "Robotique"
- "MIDI"
- "Régie"
image: "/images/projects/famulus/robot-and-dancers.jpg"
---
Quatre danseurs et un chien robot partagent la scène. Pour le spectacle [Famulus 4.0](https://ironskulls.es/creaciones/famulus-4-0/) d'[Iron Skulls Co](https://ironskulls.es/en/), nous avons conçu un contrôleur sur mesure pour un chien robot Unitree Go2, qui permet à un opérateur de le piloter en direct pendant la représentation avec des manettes simples à utiliser, comme un Akai APC mini mk2 et une manette de jeu 8BitDo. [Óscar González](/fr/a-propos/#oscar-gonzalez), cofondateur de Sensical et directeur technique d'Iron Skulls Co, a développé le système avec la compagnie.

{{< carousel label="Famulus 4.0 sur scène" >}}
![Un chien robot à quatre pattes traverse une scène couverte de paille, avec quatre danseurs en noir derrière lui](/images/projects/famulus/robot-and-dancers.jpg "Famulus 4.0 sur scène. Photo : Iron Skulls Co.")
![Le chien robot au premier plan, près de l'objectif, avec quatre danseurs qui l'observent derrière](/images/projects/famulus/robot-close-up.jpg "Photo : Iron Skulls Co.")
![Le chien robot marche vers l'objectif tandis que les danseurs le désignent derrière lui](/images/projects/famulus/robot-walking.jpg "Photo : Iron Skulls Co.")
![Trois danseurs qui se tirent les uns les autres sur la scène couverte de paille](/images/projects/famulus/dancers.jpg "Photo : Iron Skulls Co.")
{{< /carousel >}}

## Le spectacle

Un plateau de 6 × 6 mètres, à la fois limité et infini. Quatre personnes et un chien robot, dans un dialogue entre l'humain et l'artificiel. Son nom associe le latin *famulus* (serviteur) et la quatrième révolution industrielle : Famulus 4.0 explore la fragilité des liens sociaux à l'ère de l'hyperconnexion et de l'automatisation, à travers le breaking théâtral d'Iron Skulls.

Le spectacle a été créé le 16 mai 2025 à Umore Azoka, à Leioa, et il est conçu pour les théâtres, l'espace public et les lieux non conventionnels. Pour le robot, cela signifie fonctionner de manière fiable partout où va le spectacle, et réagir aux danseurs en temps réel.

## Un contrôleur conçu pour la scène

Le Unitree Go2 est conçu pour être piloté depuis sa propre application et sa télécommande. Mais un spectacle demande davantage : un contrôle précis et reproductible, tous les réglages à portée de main, et un moyen de l'arrêter si quelque chose tourne mal. Avec ces exigences, nous avons écrit notre propre système de contrôle, basé sur des bus de messages multi-nœuds pour piloter le robot depuis deux sources différentes, et sur une interface de contrôle centralisée à haute vitesse. Ses principales fonctionnalités :

+ **Liaison sans fil directe.** L'ordinateur principal communique avec le robot sur le réseau local en WebRTC, grâce au pilote open source [go2_webrtc_connect](https://github.com/legion1581/go2_webrtc_connect), et lit son état : mode, posture et capteurs des pattes.
+ **Un seul bus de messages.** Chaque périphérique d'entrée est une petite passerelle qui publie des commandes en MQTT. Un répartiteur unique les transmet au robot : on peut ainsi ajouter ou remplacer un périphérique sans toucher au reste.
+ **Une manette de jeu pour les déplacements.** La manette commande les pas, les déplacements latéraux et les rotations du chien, ou incline son corps (roulis, tangage et lacet).
+ **Un contrôleur MIDI pour les commandes préréglées.** Un Akai APC mini mk2 donne accès aux figures et aux mouvements du robot depuis ses pads. Ses faders règlent en outre la hauteur du corps, la hauteur des pas, le volume du haut-parleur, la luminosité des LED, ainsi que l'amplitude et la vitesse que les joysticks peuvent imprimer au robot. Les voyants des pads indiquent l'état et le mode du robot, pour que l'opérateur les lise d'un coup d'œil.
+ **La sécurité d'abord.** Un bouton dédié arrête le robot à tout moment, et un autre le ramène dans une position debout stable.

## Enregistrer, modifier, rejouer

Certains moments du spectacle doivent être exactement identiques chaque soir. L'opérateur peut enregistrer une séquence de commandes directement depuis les manettes, avec son timing et une piste musicale facultative, puis la rejouer depuis un seul pad, avec un mode d'aperçu facultatif. Un petit éditeur de bureau permet à l'équipe de modifier les détails de chaque enregistrement.

Le système dispose aussi d'un mode répétition, pour s'entraîner aux commandes sans le robot, et d'outils pour jouer des sons sur le haut-parleur du robot. Nous expérimentons également la conversion des capteurs des pattes en notes MIDI, pour que ses pas puissent déclencher des sons.

## Open source

Le code est publié sur GitHub sous licence GPL-3.0 :

- [iron-skulls-dog](https://github.com/oscgonfer/iron-skulls-dog)
