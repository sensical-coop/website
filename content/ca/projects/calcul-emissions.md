---
title: "Càlcul d'emissions: de la legislació a resultats validats"
seoTitle: "Programari de càlcul d'emissions i avaluació RDE | Sensical"
description: "Avaluació d'emissions reglamentàries i RDE: anàlisi de la legislació, comprovació de dades de sensors, correccions i informes, en un complement d'UniPlot."
draft: false
featured: true
weight: 7
translationKey: emissioncomputation
heroHeading: "Càlcul d'emissions"
heroSubHeading: "Del text legislatiu a resultats d'emissions validats"
client: "ENORISE (complement d'UniPlot)"
year: "2020–2026"
services:
- engineeringdataworkflows
- engineeringproductmanagement
- environmentaldatacollection
related_projects:
- uniplot
labels:
- "Emissions"
- "Legislació"
- "Dades de sensors"
image: "/images/projects/emission-computation/rde-trip-ca.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

Els vehicles i els motors han de demostrar que les seves emissions es mantenen dins dels límits legals, al banc d'assaig i a la carretera. El resultat depèn d'analitzadors de gasos, cabalímetres i altres sensors, i d'una llarga cadena de càlculs que la normativa defineix al detall. Hem dissenyat un complement per a [UniPlot](/ca/projectes/uniplot/), i en dirigim el desenvolupament de producte. Converteix aquesta cadena en una avaluació repetible: {{< accent >}}del text legislatiu a dades comprovades, emissions corregides i l'informe oficial{{< /accent >}}.

{{< carousel fit="contain" ratio="4/3" label="Càlcul d'emissions" >}}
![Tres gràfics superposats d'un trajecte d'emissions en conducció real: la velocitat del vehicle en les fases urbana, interurbana i d'autopista, la taxa d'emissió de NOx, i el NOx per quilòmetre, que baixa per sota d'una línia de límit discontínua](/images/projects/emission-computation/rde-trip-ca.png "Un trajecte d'emissions en conducció real: velocitat, taxa d'emissió de NOx i NOx per quilòmetre davant d'un límit. Dades sintètiques.")
![Diagrama de la cadena de càlcul: senyals dels sensors, alineació temporal, comprovació de dades, correccions, emissions instantànies, validació del trajecte, avaluació i informe, amb les regles de la legislació alimentant cada pas](/images/projects/emission-computation/computation-chain-ca.svg "La cadena de càlcul. Les regles de la legislació alimenten cada pas.")
{{< /carousel >}}

## El repte

Les normatives d'emissions són extenses, precises, diferents d'una regió a una altra, i canvien. La normativa europea d'emissions en conducció real (RDE), la seva evolució cap a l'Euro 7, els procediments de l'EPA dels Estats Units i la normativa xinesa defineixen, cadascuna, quins senyals es mesuren, com s'alineen i es corregeixen, quan un assaig és vàlid i com es calcula la xifra final. Els equips d'assaig sovint implementen aquestes regles en fulls de càlcul, un tipus d'assaig rere l'altre. {{<accent>}}El resultat ha de ser traçable, igual per a cada assaig i fàcil d'actualitzar quan canvia la normativa.{{</accent>}}

## Anàlisi de la legislació

Abans d'escriure codi, cal llegir la normativa com una especificació. Per a cada normativa i esmena:

+ **Extraiem els passos de càlcul**: quines magnituds calen, en quines unitats i en quin ordre es calculen.
+ **Llistem les comprovacions de dades**: quines condicions fan que una mesura o un trajecte sencer siguin vàlids o no vàlids, i quines només amplien o limiten l'avaluació.
+ **Identifiquem les diferències**: què canvia entre regions, tipus de vehicle i versions d'una mateixa normativa, perquè una sola avaluació les pugui cobrir totes.
+ **Ho escrivim com a regles**: el resultat és un conjunt de taules i casos de prova que els desenvolupadors poden implementar i els enginyers poden contrastar amb la normativa.

## Dels senyals dels sensors als resultats

El complement segueix la cadena que descriuen les normatives:

+ **Dades dels sensors**: concentracions de gasos dels analitzadors, cabal d'escapament, dades del vehicle i del motor, posició i condicions ambientals, cadascuna amb la seva freqüència de mostreig i el seu retard.
+ **Alineació temporal**: els senyals se sincronitzen, perquè un analitzador detecta el gas uns quants segons després que el motor l'hagi produït.
+ **Comprovació de dades**: comprovacions de deriva i de plausibilitat dels analitzadors, dades que falten i les condicions del trajecte que fixa la normativa.
+ **Correccions**: conversió de concentracions en base seca a base humida, i la resta de correccions que exigeix la normativa.
+ **Emissions instantànies i totals**: cabals màssics d'emissió de cada contaminant, i després resultats per trajecte i per fase (urbana, interurbana, autopista), amb el mètode d'avaluació de cada normativa.
+ **Informes**: els resultats, les comprovacions de validesa i els gràfics en un informe que els enginyers poden revisar i conservar.

## Decisions tècniques clau

+ **Les regles com a dades, no com a codi.** Els paràmetres reglamentaris (límits, fronteres entre fases, condicions) es guarden en taules editables, de manera que una nova esmena és sobretot un canvi de dades, verificat amb casos de prova, i no una nova versió del programari.
+ **Cada pas a la vista.** Tots els canals intermedis estan disponibles a UniPlot, perquè un enginyer pugui veure exactament d'on surt un resultat i comparar-lo amb una altra eina.
+ **Una sola avaluació per a diverses normatives.** La cadena comuna és compartida i les diferències entre regions queden aïllades, cosa que limita l'abast de les actualitzacions per a l'Euro 7, l'EPA o la Xina.

## Per què és important per als sensors

L'avaluació d'emissions és processament de dades de sensors amb regles estrictes: retards, deriva, unitats, mostres que falten i correccions decideixen si un resultat és fiable. És la mateixa disciplina que apliquem a la [integració de sensors ambientals](/ca/serveis/integracio-sensors-ambientals/), amb la normativa com a referència.

## Contacte

Per parlar d'una avaluació d'emissions, d'una normativa per implementar o d'una cadena de mesura per comprovar, escriu-nos a [info@sensical.es](mailto:info@sensical.es).
