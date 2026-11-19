---
title: 'Integració de programari d''enginyeria'
seoTitle: "Integració de programari d'enginyeria: eines i dades | Sensical"
description: "Connectem programari d'anàlisi, automatització d'assajos, simulació i bases de dades d'assaig: dades sense exportacions manuals i informes automàtics."
draft: false
featured: true
weight: 7
heroHeading: 'Integració de programari d''enginyeria'
heroSubHeading: ''
section_title: 'Serveis'
translationKey: engineeringsoftwareintegration
labels:
- "Integració"
- "ASAM ODS"
- "Automatització"
related_pages:
- fluxos-dades-enginyeria
- gestio-producte-programari-enginyeria
- integracio-sensors-meshtastic
---

Les dades d'enginyeria poques vegades es queden en una sola aplicació. Les produeix un banc d'assaig o una simulació, s'emmagatzemen en una base de dades, s'analitzen en una altra eina i acaben en un informe. {{< accent >}}Connectem aquestes aplicacions perquè les dades circulin sense exportacions manuals{{< /accent >}}, i dissenyem la integració pensant en l'enginyer que la farà servir cada dia.

{{< alert type="bg-sensical" >}}

### El problema

Sobre el paper, la majoria d'eines d'enginyeria poden intercanviar dades: hi ha una exportació, una API, una línia d'ordres. A la pràctica, els enginyers continuen desant fitxers a mà, canviant-los el nom, carregant-los en una altra eina i refent els mateixos gràfics. Una integració que existeix però és incòmoda de fer servir és una integració que no fa servir ningú. Una bona integració parteix del flux de treball de l'usuari i després tria l'enllaç tècnic més senzill que el faci possible.

{{</alert>}}

## Què integrem

+ **Sistemes d'automatització d'assajos**: informes generats automàticament en acabar un assaig, una opció "obrir a l'eina d'anàlisi" al sistema d'assaig, i resultats i valors clau escrits de nou a la plataforma de dades d'assaig.
+ **Programari de simulació**: l'eina d'anàlisi com a postprocessador, llançada des de la interfície de simulació, amb un espai de treball preparat que carrega els fitxers de resultats i executa seqüències d'anàlisi reutilitzables.
+ **Bases de dades d'assaig**: navegar, cercar i carregar mesures des de servidors ASAM ODS i openMDM, tornar-hi a escriure resultats calculats, informes i comentaris, i descàrregues per lots per a grans conjunts de dades.
+ **Scripts i altres aplicacions**: MATLAB, Python, Excel o eines pròpies que controlen l'anàlisi mitjançant COM/ActiveX, la línia d'ordres o interfícies d'scripting.
+ **Formats de dades**: importadors i exportadors per a formats de mesura i simulació com MDF4, HDF5, ATFX, NetCDF, CSV i Excel, i bases de dades SQL.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Per a qui és

+ **Editors de programari d'enginyeria** que volen que el seu producte funcioni amb un altre: com a font de dades, com a postprocessador o com a pas de generació d'informes.
+ **Departaments d'assaig i simulació** les dades dels quals travessen tres o quatre aplicacions abans de convertir-se en un resultat.
+ **Equips que adopten un sistema de gestió de dades d'assaig** i necessiten que les seves eines d'anàlisi en llegeixin les dades i hi puguin tornar a escriure.

## Què oferim

+ Conceptes d'integració: el flux de treball de l'usuari, les opcions tècniques (llançament, intercanvi de fitxers, COM, línia d'ordres, URL, API) i una recomanació
+ Requisits, diagrames d'arquitectura i estimacions d'esforç per paquet de treball
+ Implementació d'importadors, exportadors, scripts, seqüències i complements
+ Cadenes automatitzades de generació d'informes, de les dades en brut al PDF o al PowerPoint
+ Espais de treball de demostració, documentació i webinars per a la solució conjunta
+ Coordinació entre els equips i les empreses implicades, incloses les qüestions de llicències i desplegament

{{< alert type="border-sensical" >}}

### El mateix problema, a una altra escala

Portar les dades d'on es produeixen a on es fan servir també és el cor de la nostra feina amb sensors: d'una ràdio [Meshtastic](/ca/serveis/integracio-sensors-meshtastic/) a una base de dades, o d'un banc d'assaig a un informe. Les eines són diferents, però les preguntes són les mateixes: formats, temps, metadades i què passa quan alguna cosa falla.

{{< /alert >}}

## Parlem-ne

Explica'ns quines eines han de travessar les teves dades a [info@sensical.es](mailto:info@sensical.es). Per a la part de producte d'una integració, de l'abast fins a la versió, consulta el nostre servei de [gestió de producte per a programari d'enginyeria](/ca/serveis/gestio-producte-programari-enginyeria/).
