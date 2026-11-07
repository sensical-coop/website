---
title: "Mesh Things: una plataforma de dades per a sensors en malla LoRa"
seoTitle: "Mesh Things: dades de sensors en malla LoRa | Sensical"
description: "La nostra plataforma de codi obert per recollir, emmagatzemar i processar dades de sensors de xarxes en malla LoRa, en un servidor al núvol o en una Raspberry Pi."
draft: false
featured: true
weight: 1
translationKey: meshthings
heroHeading: "Mesh Things"
heroSubHeading: "Emmagatzematge, processament i consola per a xarxes de sensors Meshtastic"
client: "Sensical (producte propi)"
year: 2026
partners:
services:
- environmentaldatacollection
- meshtasticsensorintegration
labels:
- "Meshtastic"
- "Plataforma de dades"
- "Codi obert"
image: "/images/projects/mesh-things/cover-map.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Mesh Things és la nostra plataforma de codi obert per recollir, emmagatzemar i processar dades de sensors de xarxes en malla LoRa com [Meshtastic](https://meshtastic.org). Rep el trànsit de ràdio xifrat d'una malla i el converteix en lectures netes i emmagatzemades, amb alarmes, controls de qualitat i una API REST. Mesh Things pot funcionar en un servidor al núvol o en una Raspberry Pi. Està en funcionament a [things.sensical.es](https://things.sensical.es).

{{< carousel fit="contain" ratio="5/2" label="Mesh Things" >}}
![Il·lustració d'una xarxa de malla: nodes de ràdio enllaçats entre si, amb tres passarel·les destacades i la ruta d'un paquet cap a una d'elles](/images/projects/mesh-things/mesh-grid.svg "Una xarxa Meshtastic: els nodes es retransmeten els paquets fins que una passarel·la els envia a MQTT.")
![La consola de Mesh Things: una llista en directe de paquets entrants, un mapa de passarel·les i nodes per Espanya i les opcions de desplegament](/images/projects/mesh-things/console-overview.png "Paquets en directe, un mapa de la xarxa i desplegament en una Raspberry Pi o al núvol.")
![Tres passos: registrar una xarxa, començar a rebre dades, accedir a les dades i actuar](/images/projects/mesh-things/three-steps.png "Per començar: registrar la xarxa, rebre dades i actuar.")
![Panells de la consola: un inventari de dispositius en temps real, el control de passarel·les permeses i bloquejades, i un gràfic de temperatura](/images/projects/mesh-things/console-features.png "Inventari de dispositius, control de les passarel·les que publiquen i gràfics.")
{{< /carousel >}}

## El repte

Meshtastic ha fet que les **xarxes en malla LoRa siguin barates i fàcils de muntar**: de llarg abast i autònomes, encaixen de manera natural amb els sensors ambientals en llocs sense electricitat ni cobertura. Ara bé, **treure'n les dades i aprofitar-les és més difícil**: les passarel·les publiquen els paquets de la malla a MQTT xifrats i en el format _protobuf_ propi de Meshtastic, el mateix paquet sovint arriba diverses vegades a través de passarel·les diferents, i les plataformes IoT habituals no són compatibles amb Meshtastic de manera nativa. {{<accent>}}Mesh Things és una solució unificada que ajuda els equips a construir xarxes de recollida de dades en malla LoRa sense haver de construir ni mantenir la seva pròpia capa de descodificació.{{</accent>}}

## Mesh Things

Mesh Things et permet:

+ **Registrar malles i dispositius**, i desxifrar i descodificar els seus paquets amb la clau del canal. La detecció automàtica registra les passarel·les i els nodes que hi ha al darrere a partir del mateix trànsit.
+ **Emmagatzemar cada lectura en una base de dades de sèries temporals**, amb un arxiu Parquet opcional en emmagatzematge compatible amb S3 per a l'anàlisi a llarg termini.
+ **Processar les dades al vol**: el calibratge de sensors i els canals derivats, els controls de qualitat de les dades i la detecció de patrons s'apliquen a mesura que arriben les dades.
+ **Llançar alarmes** per llindars, lectures planes o absents i buits, amb avisos per correu electrònic i altres canals.
+ **Connectar amb altres sistemes**: importar malles des de brokers MQTT remots i compartir les lectures descodificades amb tercers per MQTT, perquè arribin a la plataforma que ja fas servir.
+ **Una consola i una API**: fes servir la nostra consola, amb l'inventari de dispositius en directe, mapes de la malla i analítica del trànsit. Crea gràfics, tria quines passarel·les i nodes s'emmagatzemen, i gestiona les alarmes i les plantilles de processament de dades. Accedeix a les dades mitjançant una **API REST, emmagatzematge S3 i DuckDB, amb un paquet de Python per accedir a les dades de manera nativa.**

## Opcions de desplegament flexibles

Mesh Things funciona amb Docker Compose en dues mides:

- una versió *lite*, que rep, descodifica i emmagatzema les dades, i és prou lleugera per a un ordinador de placa única, com una Raspberry Pi sobre el terreny.
- una versió *full*, que hi afegeix processament en flux, controls de qualitat, compartició per MQTT i l'arxiu, construïda sobre tecnologies consolidades com Kafka, Flink, EMQX, InfluxDB, PostgreSQL i Redis.

## Codi obert

La plataforma i les seves aplicacions web estan publicades a GitHub, i la documentació és a [things.sensical.es/docs](https://things.sensical.es/docs):

+ [mesh-things](https://github.com/sensical-coop/mesh-things): recepció, descodificació, processament, emmagatzematge i API (GPL-3.0)
+ [mesh-things-apps](https://github.com/sensical-coop/mesh-things-apps): la consola i la documentació (LGPL-2.1)

## Contacte

Per fer servir Mesh Things amb els teus sensors o la teva xarxa, escriu-nos a [info@sensical.es](mailto:info@sensical.es).
