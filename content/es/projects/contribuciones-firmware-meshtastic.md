---
title: "Firmware de Meshtastic: soporte de sensores en el proyecto oficial"
seoTitle: "Contribuciones de sensores al firmware de Meshtastic | Sensical"
description: "Nuestras pull requests aceptadas en el firmware de Meshtastic: drivers de CO2, partículas, formaldehído, sensores analógicos y one-wire, y lecturas más robustas."
draft: false
featured: true
weight: 2
translationKey: meshtasticcontributions
heroHeading: "Firmware de Meshtastic"
heroSubHeading: "Soporte de sensores para redes en malla LoRa"
year: "2025–2026"
services:
- meshtasticsensorintegration
- environmentaldatacollection
labels:
- "Meshtastic"
- "Firmware"
- "Calidad del aire"
image: "/images/projects/meshtastic/cover-sensors.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Desde 2025 incorporamos sensores ambientales a [Meshtastic](https://meshtastic.org), el firmware de código abierto para radios LoRa en malla. Hasta ahora, el trabajo suma más de **50 pull requests aceptadas**, en distintas áreas del firmware.

## Drivers de sensores

Cada sensor necesita un driver en el firmware y sus propios campos en el protocolo de telemetría de Meshtastic, para que sus lecturas puedan viajar por la malla, llegar a las apps y enviarse por MQTT. Hemos ampliado y reestructurado el módulo _AirQualityTelemetry_ con las siguientes contribuciones:

+ **CO2**: Sensirion SCD4X y SCD30, con comandos de administración para calibrarlos
+ **Partículas y gases**: Sensirion SEN5X y la serie SEN6X, con partículas (PM), temperatura, humedad, CO2, formaldehído e índices de COV y NOx; Seeed Studio HM330X; y una reescritura del Plantower PMSA003I
+ **Formaldehído**: Sensirion SFA30
+ **Temperatura y humedad**: la familia Sensirion SHT, unificada en un único driver
+ **Entradas analógicas**: convertidores ADS1X15 de Texas Instruments, con hasta ocho canales de tensión
+ **Sondas one-wire**: hasta ocho sondas de temperatura DS18B20 a través de puentes I2C DS2482 y DS2482-800
+ **Suelo y agua**: campos de telemetría para pH, conductividad, salinidad, nitrógeno, fósforo, potasio, nitratos, amonio, oxígeno disuelto, potencial redox, turbidez, demanda de oxígeno e irradiancia solar

{{< divider
    image="images/drawings/probe-drawing.svg"
    height="220"
    margin="60vw"
>}}

## Sensores fiables

Añadir un driver es sólo parte del trabajo. Un sensor que funciona sobre la mesa tiene que seguir funcionando sobre el terreno, en todas las placas compatibles y junto a los demás dispositivos con los que comparte bus. Eso exige un trabajo cuidadoso y a menudo invisible: respetar los tiempos de arranque y de medición de cada sensor, gestionar las lecturas fallidas y los dispositivos que comparten dirección, y probar en hardware real antes de proponer un cambio al proyecto oficial. Aplicamos el mismo cuidado a cada sensor que incorporamos a Meshtastic, para que sus lecturas sean fiables.

## Consulta el código

Todo el trabajo es público en GitHub: [las pull requests aceptadas](https://github.com/search?q=org%3Ameshtastic+author%3Aoscgonfer+is%3Apr+is%3Amerged&type=pullrequests), en [meshtastic/firmware](https://github.com/meshtastic/firmware) y [meshtastic/protobufs](https://github.com/meshtastic/protobufs).
