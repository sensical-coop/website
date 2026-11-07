---
title: "Famulus 4.0: un gos robot a escena"
seoTitle: "Famulus 4.0: control en directe d'un gos robot | Sensical"
description: "Un controlador a mida per a un gos robot Unitree Go2, manejat en directe amb un comandament de joc i un controlador MIDI a Famulus 4.0, d'Iron Skulls Co."
draft: false
featured: true
weight: 5
translationKey: famulus40
heroHeading: "Famulus 4.0"
heroSubHeading: "Control en directe d'un gos robot per a un espectacle de dansa"
client: "Iron Skulls Co"
year: "2024–2025"
location: "Estrena: Umore Azoka, Leioa"
services:
- technicaldevelopmentartists
related_projects:
- azulpetroleomasks
labels:
- "Robòtica"
- "MIDI"
- "Control d'espectacle"
image: "/images/projects/famulus/robot-and-dancers.jpg"
---
Quatre ballarins i un gos robot comparteixen escenari. Per a l'espectacle [Famulus 4.0](https://ironskulls.es/creaciones/famulus-4-0/) d'[Iron Skulls Co](https://ironskulls.es/), vam construir un controlador a mida per a un gos robot Unitree Go2, que permet a una persona controlar-lo en directe durant la funció amb comandaments fàcils de fer servir, com un Akai APC mini mk2 i un comandament de videojocs 8BitDo. [Óscar González](/ca/qui-som/#oscar-gonzalez), cofundador de Sensical i director tècnic d'Iron Skulls Co, va desenvolupar el sistema amb la companyia.

{{< carousel label="Famulus 4.0 a escena" >}}
![Un gos robot de quatre potes camina per un escenari cobert de palla, amb quatre ballarins vestits de negre al darrere](/images/projects/famulus/robot-and-dancers.jpg "Famulus 4.0 a escena. Foto: Iron Skulls Co.")
![El gos robot en primer pla, a prop de la càmera, amb quatre ballarins mirant-lo des del darrere](/images/projects/famulus/robot-close-up.jpg "Foto: Iron Skulls Co.")
![El gos robot camina cap a la càmera mentre els ballarins l'assenyalen des del darrere](/images/projects/famulus/robot-walking.jpg "Foto: Iron Skulls Co.")
![Tres ballarins estirant-se els uns als altres sobre l'escenari cobert de palla](/images/projects/famulus/dancers.jpg "Foto: Iron Skulls Co.")
{{< /carousel >}}

## L'espectacle

Una plataforma de 6 × 6 metres, limitada i infinita alhora. Quatre persones i un gos robot, en un diàleg entre allò humà i allò artificial. El seu nom uneix el llatí *famulus* (servent) i la Quarta Revolució Industrial: Famulus 4.0 explora la fragilitat dels vincles socials en una època d'hiperconnexió i automatització, a través del breaking teatral d'Iron Skulls.

L'espectacle es va estrenar el 16 de maig de 2025 a l'Umore Azoka, a Leioa, i està pensat per a teatres, espais públics i llocs no convencionals. Per al robot, això vol dir funcionar amb fiabilitat allà on vagi l'espectacle i reaccionar als ballarins en temps real.

## Un controlador pensat per a l'escenari

El Unitree Go2 està dissenyat per manejar-se des de la seva pròpia app i el seu comandament. Ara bé, un espectacle necessita més: un control precís i repetible, amb tots els ajustos a mà i una manera d'aturar-lo si alguna cosa falla. Amb aquests requisits, vam escriure el nostre propi sistema de control, basat en busos de missatges multinode per controlar el robot des de dues fonts diferents, i en una interfície de control centralitzada d'alta velocitat. Les seves característiques principals són:

+ **Connexió sense fils directa.** L'ordinador principal es comunica amb el robot per la xarxa local mitjançant WebRTC, a través del controlador de codi obert [go2_webrtc_connect](https://github.com/legion1581/go2_webrtc_connect), i en llegeix l'estat: mode, postura i sensors de les potes.
+ **Un únic bus de missatges.** Cada dispositiu d'entrada és un petit pont que publica ordres per MQTT. Un únic distribuïdor les envia al robot, de manera que es poden afegir o canviar dispositius sense tocar la resta.
+ **Comandament de videojocs per als moviments.** El comandament dirigeix les passes, els desplaçaments laterals i els girs del gos, o n'inclina el cos (balanceig, capcineig i guinyada).
+ **Controlador MIDI per a les ordres predefinides.** Un Akai APC mini mk2 dona accés als trucs i moviments del robot des dels seus pads. A més, els faders ajusten l'alçada del cos, l'alçada de la passa, el volum de l'altaveu, la brillantor dels LEDs i fins on i a quina velocitat poden moure el robot els joysticks. Les llums dels pads mostren l'estat i el mode actuals del robot, perquè la persona que l'opera els vegi d'un cop d'ull.
+ **La seguretat, primer.** Un botó dedicat atura el robot en qualsevol moment, i un altre el torna a una posició dreta equilibrada.

## Gravar, editar, reproduir

Alguns moments de l'espectacle han de ser exactament iguals cada nit. La persona que opera el robot pot gravar una seqüència d'ordres directament des dels comandaments, amb el seu tempo i una pista de música opcional, i reproduir-la després des d'un sol pad, amb un mode de previsualització opcional. Un petit editor d'escriptori permet a l'equip ajustar els detalls de cada gravació.

El sistema també té un mode d'assaig, per practicar els controls sense el robot, i eines per reproduir sons a l'altaveu del mateix robot. A més, estem experimentant amb convertir els sensors de les potes en notes MIDI, perquè les seves passes puguin disparar sons.

## Codi obert

El codi està publicat a GitHub amb llicència GPL-3.0:

- [iron-skulls-dog](https://github.com/oscgonfer/iron-skulls-dog)
