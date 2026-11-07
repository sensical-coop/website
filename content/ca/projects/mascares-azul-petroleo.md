---
title: "Azul Petróleo: màscares de llum interactives"
seoTitle: "Azul Petróleo: màscares LED per ràdio per a dansa | Sensical"
description: "Màscares de llum i LEDs d'escenari per a Azul Petróleo, d'Iron Skulls Co, controlats en directe i sense fils des del programari d'il·luminació."
draft: false
featured: true
weight: 10
translationKey: azulpetroleomasks
heroHeading: "Azul Petróleo"
heroSubHeading: "Màscares de llum controlades per ràdio per a un espectacle de dansa contemporània"
client: "Iron Skulls Co"
year: "2022–2023"
partners:
- "Vicente Romero (disseny 3D)"
services:
- technicaldevelopmentartists
related_projects:
- famulus40
labels:
- "Wearables"
- "Ràdio"
- "LEDs"
image: "/images/projects/azul-petroleo/mask-crush.jpg"
---
Per a l'espectacle [Azul Petróleo](https://ironskulls.es/creaciones/azul-petroleo/) d'[Iron Skulls Co](https://www.ironskulls.es/), vam dissenyar l'electrònica i el codi d'un conjunt de màscares que s'il·luminen a cada senyal, i de les tires LED que formen part de l'escenografia. Totes dues es controlen en directe des del programari d'il·luminació de l'espectacle. El projecte el va dirigir [Óscar González](/ca/qui-som/#oscar-gonzalez), cofundador de Sensical i director tècnic d'Iron Skulls Co.

{{< carousel label="Màscares d'Azul Petróleo" >}}
![Tres ballarins en un escenari fosc, dos d'ells amb màscares amb llums vermelles, i dues barres de llum vermelles al darrere](/images/projects/azul-petroleo/mask-crush.jpg "Azul Petróleo a escena.")
![Una màscara impresa en 3D sobre un terra de fusta, amb tires LED vermelles enceses a les banyes, els ulls i la mandíbula](/images/projects/azul-petroleo/mask.jpg "Una de les màscares, amb els LEDs RGB adreçables encesos.")
![Les màscares alineades a la foscor, il·luminades en blau, una d'elles amb llums vermelles i taronges](/images/projects/azul-petroleo/masks.jpg "Les màscares juntes. Cadascuna té la seva pròpia adreça a la xarxa de ràdio.")
![Un ballarí ajupit a la foscor, amb un raig làser vermell que surt de la seva màscara i dues llums blanques des de dalt](/images/projects/azul-petroleo/mask-features.jpg "El làser i els dos LEDs blancs d'alta potència.")
{{< /carousel >}}

## L'espectacle

Azul Petróleo explora la individualitat, els instints col·lectius i el paper de la tecnologia a la societat. Durant la funció, quatre ballarins porten màscares amb diferents sistemes d'il·luminació: làsers, LEDs d'alta potència i LEDs RGB adreçables. Dansa i llum treballen juntes en una coreografia visual complexa, amb tots els elements tècnics sincronitzats des d'un únic punt de control.

## Les màscares

Les màscares les va dissenyar [Vicente Romero](mailto:info@vicenteromero.es). Nosaltres les vam adaptar per a la impressió 3D, perquè subjectin l'electrònica amb seguretat mentre els ballarins es mouen. Cada màscara s'imprimeix en dues meitats, unides amb cargols i insercions roscades, i conté:

+ 45 LEDs RGB adreçables (144 LEDs/m)
+ 2 LEDs blancs de molt alta potència
+ 1 làser, regulat per PWM
+ Una placa Feather M0 amb ràdio RFM69 de 433 MHz i antena externa per guanyar abast
+ Una placa d'expansió pròpia i una bateria LiPo de 2.000 mAh, carregada per USB: més de sis hores en una funció, o una hora aproximadament amb totes les llums enceses alhora

## Control sense fils

Cada màscara executa un petit servidor de ràdio amb la seva pròpia adreça. Una placa client, connectada a l'ordinador d'il·luminació, rep missatges [OSC](https://opensoundcontrol.stanford.edu/) del [programari d'il·luminació de l'espectacle](https://www.getdlight.com) i els transmet a les màscares per ràdio, amb un protocol propi basat en [RadioHead](http://www.airspayce.com/mikem/arduino/RadioHead/).

Servidor i client són asíncrons, així que un senyal es pot enviar en qualsevol moment i les màscares reaccionen a l'instant. Les animacions es desen a cada màscara i s'activen amb cada senyal, per als LEDs RGB, els LEDs d'alta potència i el làser.

## LEDs de l'escenari

A més de les màscares, vam construir un conjunt de tires LED adreçables a mida per a l'escenari, muntades en barres de 50 cm. Es controlen a distància mitjançant sACN (E1.31) i funcionen de manera asíncrona, i vam escriure un segon programa per seqüenciar-les. Les barres es connecten en cadena, i les configuracions a mida poden controlar centenars de metres de LEDs.

![Tres ballarins en un escenari fosc, amb dues barres LED vermelles enceses al darrere](/images/projects/azul-petroleo/mask-crush.jpg "Les barres LED de l'escenari, darrere els ballarins.")

## Resultats

Azul Petróleo es va presentar per primera vegada el 2022 a LAVA (Valladolid), als Teatros del Canal (Madrid) i a Summer Dance Forever (Amsterdam). Des d'aleshores ha fet gira internacional.

{{< youtube id="P9CsZFBkOrY" loading="lazy" title="Azul Petróleo, d'Iron Skulls Co (vídeo)" >}}

## Codi obert

Tot el codi i el maquinari estan publicats amb llicència GPL-3.0:

+ [iron-skulls-mask](https://github.com/oscgonfer/iron-skulls-mask): models 3D (STL), PCB de la placa d'expansió i llista de materials, firmware de les màscares, client de ràdio i pont OSC
+ [iron-skulls-leds](https://github.com/oscgonfer/iron-skulls-leds): seqüenciador d'OSC a sACN i firmware Teensy per als LEDs de l'escenari
