---
title: 'Integració de programari i dades'
seoTitle: "Integració de programari i dades: MQTT, API, protocols | Sensical"
description: "Connectem dispositius, programari i plataformes de dades amb MQTT, API, descodificació de protocols i formats oberts, sense passos manuals."
draft: false
featured: true
weight: 7
heroHeading: 'Integració de programari i dades'
heroSubHeading: ''
section_title: 'Serveis'
translationKey: softwareintegration
labels:
- "Integració"
- "MQTT"
- "API"
related_pages:
- fluxos-dades-enginyeria
- integracio-sensors-meshtastic
- integracio-sensors-ambientals
---

Les dades poques vegades es queden on es produeixen. Les genera un sensor, un dispositiu o un sistema d'assaig, un _broker_ o una base de dades les transporta i les emmagatzema, i una altra aplicació les analitza o hi actua. {{< accent >}}Connectem aquests sistemes perquè les dades circulin de manera fiable, en el format correcte i sense passos manuals{{< /accent >}}, i dissenyem cada integració pensant en les persones que en dependran.

{{< alert type="bg-sensical" >}}

### El problema

Sobre el paper, la majoria de sistemes poden intercanviar dades: hi ha una API, una exportació, un _broker_ de missatges. A la pràctica, encara es copien fitxers a mà, el mateix missatge arriba dues vegades per camins diferents, es perden les unitats i les marques de temps, i un canvi de format a l'origen ho trenca tot en silenci més avall. Una integració fràgil o incòmoda de fer servir és una integració de la qual no es fia ningú. Una bona integració parteix de com es faran servir les dades i després tria l'enllaç tècnic més senzill que ho faci possible.

{{</alert>}}

## Què integrem

+ **_Brokers_ de missatges i fluxos**: publicacions i subscripcions MQTT, ponts entre _brokers_, eliminació de missatges duplicats i processament de fluxos que encamina i transforma els missatges a mesura que arriben.
+ **Protocols i codificacions**: descodificació de trànsit binari i xifrat de dispositius, definicions de Protocol Buffers, OSC i altres protocols de control, i conversió en lectures netes amb les seves unitats i marques de temps.
+ **Plataformes de tercers**: lliurament de dades descodificades a la plataforma que una organització ja fa servir, per MQTT o mitjançant una API REST, o importació de dades des de _brokers_ remots, en lloc d'obligar tothom a fer servir una sola eina.
+ **Bases de dades i emmagatzematge**: bases de dades de sèries temporals, PostgreSQL, arxius Parquet en emmagatzematge compatible amb S3, i accés per a l'anàlisi mitjançant DuckDB o un paquet de Python.
+ **Dispositius i control en temps real**: petits ponts que connecten controladors, sensors i màquines a un únic bus de missatges, perquè es puguin afegir o substituir dispositius sense tocar la resta del sistema.
+ **Dades d'enginyeria**: fitxers de mesura i simulació com MDF4, HDF5, NetCDF, CSV i Excel, i les metadades que els fan aprofitables més endavant.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Exemples de la nostra feina

+ [Mesh Things](/ca/projectes/mesh-things/) rep el trànsit MQTT xifrat de les xarxes Meshtastic, el descodifica, elimina els duplicats que arriben per diverses passarel·les, emmagatzema les lectures i les comparteix amb plataformes de tercers per MQTT, amb una API REST i un paquet de Python per a l'anàlisi.
+ Les nostres [contribucions al firmware de Meshtastic](/ca/projectes/contribucions-firmware-meshtastic/) defineixen com es codifiquen les noves lectures de sensors al protocol de Meshtastic, perquè viatgin per la malla, les apps i MQTT amb les seves unitats.
+ A [Famulus 4.0](/ca/projectes/famulus-4-0/), un comandament de videojocs i un controlador MIDI publiquen ordres en un únic bus MQTT, i un sol distribuïdor controla un robot per WebRTC.
+ A [Azul Petróleo](/ca/projectes/mascares-azul-petroleo/), el programari d'il·luminació de l'espectacle dispara sense fils les màscares i els LEDs d'escenari mitjançant ponts OSC i sACN.

## Per a qui és

+ **Organitzacions les dades de les quals travessen diversos sistemes** (dispositius, _brokers_, bases de dades, eines d'anàlisi) abans de ser útils.
+ **Fabricants de dispositius i proveïdors de plataformes** que volen que el seu producte intercanviï dades amb altres mitjançant protocols oberts.
+ **Equips que creen sistemes interactius i en temps real**, com ara instal·lacions, robòtica o tecnologia escènica, on controladors, dispositius i programari s'han de comunicar amb poc retard.

## Què oferim

+ Conceptes d'integració: el flux de dades, els formats i protocols, les opcions tècniques i una recomanació
+ Requisits, diagrames d'arquitectura i estimacions d'esforç
+ Implementació de descodificadors, ponts, connectors, importadors, exportadors i API
+ Enllaços fiables: unitats i marques de temps intactes, duplicats eliminats i un comportament definit quan falla un enllaç o un sistema
+ Documentació i traspàs, perquè el teu equip pugui operar i ampliar la integració

{{< alert type="border-sensical" >}}

### Primer, protocols oberts

Preferim protocols i formats oberts i documentats, com MQTT, Protocol Buffers, REST i Parquet, i publiquem les nostres pròpies eines com a codi obert sempre que podem. La teva integració no t'hauria de lligar a un sol proveïdor, tampoc a nosaltres.

{{< /alert >}}

## Parlem-ne

Explica'ns quins sistemes han de travessar les teves dades a [info@sensical.es](mailto:info@sensical.es). Per a la part dels sensors, consulta el nostre servei d'[integració de sensors ambientals](/ca/serveis/integracio-sensors-ambientals/); per a dades d'assaig i simulació, consulta [fluxos de dades d'enginyeria](/ca/serveis/fluxos-dades-enginyeria/).
