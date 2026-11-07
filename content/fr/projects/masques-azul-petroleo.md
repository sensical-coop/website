---
title: "Azul Petróleo : des masques lumineux interactifs"
seoTitle: "Azul Petróleo : masques LED radiocommandés pour la danse | Sensical"
description: "Masques lumineux et LED de scène pour Azul Petróleo d'Iron Skulls Co, pilotés en direct et sans fil depuis le logiciel lumière du spectacle."
draft: false
featured: true
weight: 10
translationKey: azulpetroleomasks
heroHeading: "Azul Petróleo"
heroSubHeading: "Des masques lumineux radiocommandés pour un spectacle de danse contemporaine"
client: "Iron Skulls Co"
year: "2022–2023"
partners:
- "Vicente Romero (design 3D)"
services:
- technicaldevelopmentartists
related_projects:
- famulus40
labels:
- "Wearables"
- "Radio"
- "LED"
image: "/images/projects/azul-petroleo/mask-crush.jpg"
---
Pour le spectacle [Azul Petróleo](https://ironskulls.es/creaciones/azul-petroleo/) d'[Iron Skulls Co](https://www.ironskulls.es/), nous avons conçu l'électronique et le code d'une série de masques qui s'allument à chaque top, ainsi que des bandes LED qui font partie de la scénographie. Les deux sont pilotés en direct depuis le logiciel lumière du spectacle. Le projet a été dirigé par [Óscar González](/fr/a-propos/#oscar-gonzalez), cofondateur de Sensical et directeur technique d'Iron Skulls Co.

{{< carousel label="Masques d'Azul Petróleo" >}}
![Trois danseurs sur une scène sombre, deux d'entre eux portant des masques aux lumières rouges, avec deux barres lumineuses rouges derrière eux](/images/projects/azul-petroleo/mask-crush.jpg "Azul Petróleo sur scène.")
![Un masque imprimé en 3D posé sur un plancher en bois, avec des bandes LED rouges allumées sur les cornes, les yeux et la mâchoire](/images/projects/azul-petroleo/mask.jpg "L'un des masques, avec ses LED RGB adressables allumées.")
![Les masques alignés dans l'obscurité, éclairés en bleu, l'un d'eux avec des lumières rouges et orange](/images/projects/azul-petroleo/masks.jpg "Les masques réunis. Chacun a sa propre adresse sur le réseau radio.")
![Un danseur accroupi dans l'obscurité, un faisceau laser rouge sortant de son masque et deux lumières blanches venant d'en haut](/images/projects/azul-petroleo/mask-features.jpg "Le laser et les deux LED blanches de forte puissance.")
{{< /carousel >}}

## Le spectacle

Azul Petróleo explore l'individualité, les instincts collectifs et la place de la technologie dans la société. Pendant la représentation, quatre danseurs portent des masques dotés de différents systèmes lumineux : lasers, LED de forte puissance et LED RGB adressables. Danse et lumière composent ensemble une chorégraphie visuelle complexe, dont tous les éléments techniques sont synchronisés depuis un seul poste de commande.

## Les masques

Les masques ont été dessinés par [Vicente Romero](mailto:info@vicenteromero.es). Nous les avons adaptés à l'impression 3D, pour qu'ils maintiennent solidement l'électronique pendant que les danseurs bougent. Chaque masque est imprimé en deux moitiés, assemblées par des vis et des inserts filetés, et contient :

+ 45 LED RGB adressables (144 LED/m)
+ 2 LED blanches de très forte puissance
+ 1 laser, dont l'intensité est réglée par PWM
+ Une carte Feather M0 avec une radio RFM69 433 MHz et une antenne externe pour la portée
+ Une carte d'extension sur mesure et une batterie LiPo de 2 000 mAh, rechargée par USB : plus de six heures en représentation, ou environ une heure avec toutes les lumières allumées en même temps

## Contrôle sans fil

Chaque masque fait tourner un petit serveur radio doté de sa propre adresse. Une carte cliente, reliée à l'ordinateur lumière, reçoit les messages [OSC](https://opensoundcontrol.stanford.edu/) du [logiciel lumière du spectacle](https://www.getdlight.com) et les transmet aux masques par radio, grâce à un protocole sur mesure basé sur [RadioHead](http://www.airspayce.com/mikem/arduino/RadioHead/).

Serveur et client sont asynchrones : un top peut être envoyé à tout moment et les masques réagissent immédiatement. Les animations sont stockées dans chaque masque et déclenchées à chaque top, pour les LED RGB, les LED de forte puissance et le laser.

## Les LED de scène

En plus des masques, nous avons fabriqué une série de bandes LED adressables sur mesure pour la scène, montées sur des barres de 50 cm. Elles sont pilotées à distance en sACN (E1.31) et fonctionnent de manière asynchrone, et nous avons écrit un second logiciel pour les séquencer. Les barres sont chaînées entre elles, et des configurations sur mesure peuvent piloter des centaines de mètres de LED.

![Trois danseurs sur une scène sombre, avec deux barres LED rouges allumées derrière eux](/images/projects/azul-petroleo/mask-crush.jpg "Les barres LED de la scène, derrière les danseurs.")

## Résultats

Azul Petróleo a été présenté pour la première fois en 2022 à LAVA (Valladolid), aux Teatros del Canal (Madrid) et à Summer Dance Forever (Amsterdam). Le spectacle tourne depuis à l'international.

{{< youtube id="P9CsZFBkOrY" loading="lazy" title="Azul Petróleo, d'Iron Skulls Co (vidéo)" >}}

## Open source

L'ensemble du code et du matériel est publié sous licence GPL-3.0 :

+ [iron-skulls-mask](https://github.com/oscgonfer/iron-skulls-mask) : modèles 3D (STL), PCB de la carte d'extension et nomenclature, firmware des masques, client radio et passerelle OSC
+ [iron-skulls-leds](https://github.com/oscgonfer/iron-skulls-leds) : séquenceur OSC vers sACN et firmware Teensy pour les LED de scène
