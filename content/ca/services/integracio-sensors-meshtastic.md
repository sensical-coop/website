---
title: 'Integració de sensors a Meshtastic'
seoTitle: "Integració de sensors i firmware Meshtastic | Sensical"
description: "Portem sensors a Meshtastic: drivers integrats al firmware oficial, definicions de telemetria, I2C i energia fiables, i una plataforma per a les dades."
draft: false
featured: true
weight: 2
heroHeading: 'Integració de sensors a Meshtastic'
heroSubHeading: ''
button: "Llegir més"
section_title: 'Serveis'
translationKey: meshtasticsensorintegration
labels:
- "Meshtastic"
- "Firmware"
- "Sensors"
related_pages:
- integracio-sensors-ambientals
---

Portem sensors a [Meshtastic](https://meshtastic.org), el firmware de codi obert que converteix ràdios LoRa assequibles en xarxes en malla autònomes. Escrivim els _drivers_, aconseguim que s'{{< accent >}}integrin al firmware oficial{{< /accent >}} i ens assegurem que les dades t'arribin, perquè els teus sensors funcionin en dispositius Meshtastic estàndard i continuïn funcionant versió rere versió.

## Per què Meshtastic

Les xarxes Meshtastic no necessiten antenes d'operador, targetes SIM ni subscripcions: cada ràdio retransmet els missatges de les seves veïnes, i unes poques passarel·les poden connectar una finca, una vall o un barri sencer. Al darrere hi ha una gran comunitat i una gamma creixent de maquinari. Això en fa una gran opció per al monitoratge ambiental on escassegen l'energia i la cobertura, sempre que els sensors estiguin suportats al firmware, i ben suportats.

## La nostra trajectòria

Des del 2025, s'han integrat 48 de les nostres _pull requests_ al firmware, les definicions de protocol i les biblioteques de Meshtastic. Afegeixen sensors de CO₂, matèria particulada, formaldehid, VOC i NOx, temperatura i humitat, entrades analògiques i sondes _one-wire_, i fan més robusta la lectura de sensors a tots els dispositius. Consulta'n els detalls a les nostres [contribucions al firmware de Meshtastic](/ca/projectes/contribucions-firmware-meshtastic/).

{{< divider
    image="images/drawings/antenna-drawing.svg"
    height="100"
    margin="40vw"
>}}

## Per a qui és

+ **Fabricants de sensors** que volen que el seu sensor o dispositiu funcioni a Meshtastic de sèrie.
+ **Integradors i fabricants de dispositius** que construeixen maquinari Meshtastic amb sensors ambientals.
+ **Equips de recerca, administracions i empreses** que despleguen xarxes de sensors que han de funcionar fora de la xarxa, amb dades fiables.

## Què oferim

+ _Drivers_ de firmware per a nous sensors, desenvolupats amb l'equip de manteniment de Meshtastic i integrats al projecte oficial, perquè arribin a cada versió
+ Definicions de telemetria al protocol de Meshtastic, perquè les teves lectures viatgin per la xarxa, les apps i MQTT amb les unitats correctes
+ Integració robusta: velocitats i adreces del bus I2C, cicles de repòs i activació, intervals de lectura, calibratge i ordres d'administració
+ Compilacions i configuracions de firmware a mida per al teu dispositiu, i proves en maquinari real
+ La part de dades amb [Mesh Things](/ca/projectes/mesh-things/): emmagatzematge, processament, alarmes, o dades descodificades enviades a la teva pròpia plataforma
+ Manteniment a mesura que Meshtastic evoluciona, perquè la teva integració no es trenqui amb les noves versions

{{< alert type="bg-sensical" >}}

### Primer, al projecte oficial

Sempre que podem, contribuïm la nostra feina al firmware oficial. Així el teu sensor passa a formar part de Meshtastic, revisat pel seu equip i disponible per a tothom, en lloc d'un _fork_ que algú ha de mantenir viu.

{{< /alert >}}

## Parlem-ne

Explica'ns el teu sensor o la teva xarxa a [info@sensical.es](mailto:info@sensical.es). Per a una visió més àmplia, de la selecció de sensors al calibratge i el desplegament, consulta el nostre servei d'[integració de sensors ambientals](/ca/serveis/integracio-sensors-ambientals/).
