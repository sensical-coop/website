---
title: "UniPlot: gestió d'un programari d'anàlisi de dades d'enginyeria"
seoTitle: "UniPlot: gestió de producte de programari d'enginyeria | Sensical"
description: "Gestió de producte, integracions i fluxos de dades per a UniPlot, una aplicació d'anàlisi, gràfics i informes per a enginyers d'assaig i simulació."
draft: false
featured: true
weight: 6
translationKey: uniplot
heroHeading: "UniPlot"
heroSubHeading: "Gestió de producte d'un programari d'anàlisi de dades per a enginyers d'assaig i simulació"
client: "ENORISE"
year: "2020–2026"
services:
- engineeringproductmanagement
- engineeringdataworkflows
- engineeringsoftwareintegration
related_projects:
- emissioncomputation
labels:
- "Programari d'enginyeria"
- "Gestió de producte"
- "Dades d'assaig"
image: "/images/projects/uniplot/engine-map-ca.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

[UniPlot](https://www.uniplot.com) és una aplicació per a Windows per visualitzar, analitzar i generar informes de dades d'enginyeria. Els enginyers de banc d'assaig i de simulació la fan servir per carregar mesures de molts formats de fitxer i bases de dades, crear diagrames 2D i 3D, calcular nous canals i generar informes en PDF, PowerPoint o Word. [Adrien Laveau](/ca/qui-som/#adrien-laveau), cofundador de Sensical, és el responsable del desenvolupament d'UniPlot i del seu ecosistema, del full de ruta a la documentació del producte, per a l'editor del programari, ENORISE.

{{< carousel fit="contain" ratio="4/3" label="UniPlot" >}}
![Dos diagrames d'un mapa de rendiment d'un motor en funció del règim i el parell: a l'esquerra, un mapa de contorns amb isolínies etiquetades; a la dreta, el mateix mapa com a superfície 3D acolorida](/images/projects/uniplot/engine-map-ca.png "Un mapa de rendiment d'un motor com a gràfic de contorns i com a superfície 3D, creat amb UniPlot a partir de dades sintètiques.")
![Diagrama: fitxers de mesura, bases de dades d'assaig, bancs d'assaig i eines de simulació alimenten UniPlot, on les dades s'importen, es calculen amb fórmules, es representen en plantilles i s'automatitzen en seqüències, per generar informes en PDF, PowerPoint, Word i Excel](/images/projects/uniplot/uniplot-workflow-ca.svg "De les fonts de dades als informes: el lloc d'UniPlot en un flux de treball d'enginyeria.")
![Tres gràfics superposats d'un trajecte d'emissions en conducció real: velocitat del vehicle, taxa d'emissió de NOx i NOx per quilòmetre comparat amb un límit](/images/projects/emission-computation/rde-trip-ca.png "Una avaluació d'emissions feta amb UniPlot, amb dades sintètiques. Vegeu el projecte de càlcul d'emissions.")
{{< /carousel >}}

## El repte

UniPlot s'ha desenvolupat al llarg de molts anys i es fa servir en àmbits exigents: assajos de motors i grups motopropulsors, emissions, bateries i simulació. Els seus usuaris depenen de càlculs i plantilles d'informe que han anat perfeccionant durant anys, i esperen que cada versió els mantingui en funcionament. Alhora, les peticions no paren d'arribar: nous formats de dades i protocols de bus, normatives que canvien com s'han de calcular els resultats, integracions amb sistemes d'assaig i eines de simulació, i informes a mida per a clients. {{<accent>}}La feina consisteix a fer evolucionar un producte profund i de llarga vida sense trencar allò de què depenen els enginyers.{{</accent>}}

## Què fem

+ **Full de ruta i versions**: recollir les peticions d'usuaris, suport i socis, prioritzar-les, especificar les funcionalitats amb criteris d'acceptació i preparar les versions amb l'equip de desenvolupament.
+ **De les peticions a mida a les funcionalitats del producte**: decidir quines peticions de clients es converteixen en funcionalitats del producte base, en complements amb llicència pròpia o en scripts de projecte, i definir-les en paquets de treball.
+ **Complements per a àmbits específics**: responsabilitat de producte de complements per a tasques d'enginyeria concretes, com el complement de [càlcul d'emissions](/ca/projectes/calcul-emissions/).
+ **Integracions**: conceptes i requisits per connectar UniPlot amb sistemes d'automatització d'assajos, amb programari de simulació com a font de dades i amb bases de dades d'assaig ASAM ODS, mitjançant fluxos de llançament, línia d'ordres i URL, COM i seqüències d'anàlisi reutilitzables.
+ **Fluxos de treball dels clients**: analitzar com els equips d'enginyeria avaluen les seves dades, sovint en fulls de càlcul, i reconstruir-ho com a biblioteques de fórmules, plantilles d'informe i seqüències automatitzades, validades amb els seus resultats anteriors.
+ **Llicències i desplegament**: traduir els models de llicència del producte en un comportament del programari i un desplegament que els administradors puguin gestionar, coherents amb les condicions de llicència.
+ **Suport i qualitat**: indicadors per al servei d'assistència i el _backlog_, i anàlisi de les consultes dels usuaris amb els desenvolupadors.
+ **Documentació i capacitació**: documentació, cursos de formació, vídeos, webinars, fires comercials, fullets i la renovació del web del producte.

## Decisions tècniques clau

+ **Automatització amb seqüències, no només amb scripts.** Una seqüència de passos d'anàlisi reutilitzables, llançada des d'una altra aplicació o des de la línia d'ordres, permet a un enginyer automatitzar un informe sense escriure codi, i als socis integrar UniPlot sense un connector complex.
+ **Mantenir els càlculs de l'enginyer.** Quan un equip passa a UniPlot, primer es reprodueixen les seves fórmules i el format dels seus informes, i es validen amb els resultats antics, abans de millorar res.
+ **Les regles com a dades.** Quan els càlculs segueixen regles externes, com les normatives d'emissions, les regles es guarden en taules editables perquè es puguin actualitzar sense publicar una nova versió del programari.

## Què demostra

Els anys de feina amb UniPlot són la base dels nostres serveis de [gestió de producte](/ca/serveis/gestio-producte-programari-enginyeria/), [fluxos de dades d'enginyeria](/ca/serveis/fluxos-dades-enginyeria/) i [integració de programari](/ca/serveis/integracio-programari-enginyeria/): sabem com treballen els enginyers amb les seves dades, i com convertir-ho en programari en què puguin confiar.

## Contacte

Per parlar del teu programari d'enginyeria o del teu flux de dades, escriu-nos a [info@sensical.es](mailto:info@sensical.es).
