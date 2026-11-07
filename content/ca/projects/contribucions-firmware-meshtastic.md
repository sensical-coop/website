---
title: "Firmware de Meshtastic: suport de sensors al projecte oficial"
seoTitle: "Contribucions de sensors al firmware de Meshtastic | Sensical"
description: "Les nostres pull requests acceptades al firmware de Meshtastic: drivers de CO₂, partícules, formaldehid, sensors analògics i one-wire, i lectures més robustes."
draft: false
featured: true
weight: 2
translationKey: meshtasticcontributions
heroHeading: "Firmware de Meshtastic"
heroSubHeading: "Suport de sensors per a xarxes en malla LoRa"
year: "2025–2026"
services:
- meshtasticsensorintegration
- environmentaldatacollection
labels:
- "Meshtastic"
- "Firmware"
- "Qualitat de l'aire"
image: "/images/projects/meshtastic/cover-sensors.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Des del 2025 incorporem sensors ambientals a [Meshtastic](https://meshtastic.org), el firmware de codi obert per a ràdios LoRa en malla. Fins ara, la feina suma més de **50 pull requests acceptades**, en diferents àrees del firmware.

## Drivers de sensors

Cada sensor necessita un driver al firmware i els seus propis camps al protocol de telemetria de Meshtastic, perquè les seves lectures puguin viatjar per la malla, arribar a les apps i enviar-se per MQTT. Hem ampliat i reestructurat el mòdul _AirQualityTelemetry_ amb les contribucions següents:

+ **CO₂**: Sensirion SCD4X i SCD30, amb ordres d'administració per calibrar-los
+ **Partícules i gasos**: Sensirion SEN5X i la sèrie SEN6X, amb partícules (PM), temperatura, humitat, CO₂, formaldehid i índexs de COV i NOx; Seeed Studio HM330X; i una reescriptura del Plantower PMSA003I
+ **Formaldehid**: Sensirion SFA30
+ **Temperatura i humitat**: la família Sensirion SHT, unificada en un únic driver
+ **Entrades analògiques**: convertidors ADS1X15 de Texas Instruments, amb fins a vuit canals de tensió
+ **Sondes one-wire**: fins a vuit sondes de temperatura DS18B20 a través de ponts I2C DS2482 i DS2482-800
+ **Sòl i aigua**: camps de telemetria per a pH, conductivitat, salinitat, nitrogen, fòsfor, potassi, nitrats, amoni, oxigen dissolt, potencial redox, terbolesa, demanda d'oxigen i irradiància solar

{{< divider
    image="images/drawings/probe-drawing.svg"
    height="220"
    margin="60vw"
>}}

## Sensors fiables

Afegir un driver és el principi, no el final. Un sensor que funciona sobre la taula ha de continuar funcionant sobre el terreny, a totes les plaques compatibles i al costat dels altres dispositius amb què comparteix bus. Això exigeix una feina acurada i sovint invisible: respectar els temps d'arrencada i de mesura de cada sensor, gestionar les lectures fallides i els dispositius que comparteixen adreça, i provar en maquinari real abans de proposar un canvi al projecte oficial. Apliquem la mateixa cura a cada sensor que incorporem a Meshtastic, perquè les seves lectures siguin fiables.

## Consulta el codi

Tota la feina és pública a GitHub: [les pull requests acceptades](https://github.com/search?q=org%3Ameshtastic+author%3Aoscgonfer+is%3Apr+is%3Amerged&type=pullrequests), a [meshtastic/firmware](https://github.com/meshtastic/firmware) i [meshtastic/protobufs](https://github.com/meshtastic/protobufs).
