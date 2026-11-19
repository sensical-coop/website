---
title: "Calcul des émissions : de la réglementation aux résultats validés"
seoTitle: "Logiciel de calcul des émissions et d'évaluation RDE | Sensical"
description: "Évaluation réglementaire des émissions et RDE : analyse de la législation, contrôle des données capteurs, corrections et rapports, dans un add-in UniPlot."
draft: false
featured: true
weight: 7
translationKey: emissioncomputation
heroHeading: "Calcul des émissions"
heroSubHeading: "Du texte réglementaire aux résultats d'émissions validés"
client: "ENORISE (add-in UniPlot)"
year: "2020–2026"
services:
- engineeringdataworkflows
- engineeringproductmanagement
- environmentaldatacollection
related_projects:
- uniplot
labels:
- "Émissions"
- "Législation"
- "Données de capteurs"
image: "/images/projects/emission-computation/rde-trip-fr.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

Les véhicules et les moteurs doivent prouver que leurs émissions restent dans les limites légales, au banc d'essai comme sur route. Le résultat dépend d'analyseurs de gaz, de débitmètres et d'autres capteurs, ainsi que d'une longue chaîne de calculs que la réglementation définit en détail. Nous avons conçu un add-in pour [UniPlot](/fr/projets/uniplot/), dont nous pilotons le développement produit, qui transforme cette chaîne en une évaluation reproductible : {{< accent >}}du texte réglementaire aux données vérifiées, aux émissions corrigées et au rapport officiel{{< /accent >}}.

{{< carousel fit="contain" ratio="4/3" label="Calcul des émissions" >}}
![Trois graphiques superposés d'un trajet d'émissions en conduite réelle : la vitesse du véhicule sur les phases urbaine, rurale et autoroutière, le débit d'émission de NOx, et les NOx rapportés à la distance qui passent sous une ligne de limite en pointillés](/images/projects/emission-computation/rde-trip-fr.png "Un trajet d'émissions en conduite réelle : vitesse, débit d'émission de NOx et NOx rapportés à la distance face à une limite. Données synthétiques.")
![Schéma de la chaîne de calcul : signaux des capteurs, alignement temporel, contrôles des données, corrections, émissions instantanées, validation du trajet, évaluation et rapport, les règles de la législation alimentant chaque étape](/images/projects/emission-computation/computation-chain-fr.svg "La chaîne de calcul. Les règles de la législation alimentent chaque étape.")
{{< /carousel >}}

## Le défi

Les réglementations sur les émissions sont longues, précises, différentes d'une région à l'autre, et elles évoluent. Les règles européennes sur les émissions en conduite réelle (RDE), leur évolution vers Euro 7, les procédures de l'EPA américaine et les réglementations chinoises définissent chacune quels signaux sont mesurés, comment ils sont alignés et corrigés, quand un essai est valide et comment le chiffre final est calculé. Les équipes d'essais implémentent souvent ces règles dans des tableurs, un type d'essai à la fois. {{<accent>}}Le résultat doit être traçable, identique pour chaque essai et rapide à mettre à jour quand la réglementation change.{{</accent>}}

## Analyse de la législation

Avant toute ligne de code, la réglementation doit être lue comme une spécification. Pour chaque réglementation et chaque amendement, nous :

+ **Extrayons les étapes de calcul** : quelles grandeurs sont nécessaires, dans quelles unités, et dans quel ordre elles sont calculées.
+ **Listons les contrôles des données** : quelles conditions rendent une mesure ou un trajet entier valide ou invalide, et lesquelles ne font qu'étendre ou limiter l'évaluation.
+ **Identifions les différences** : ce qui change entre régions, types de véhicules et versions d'une même réglementation, pour qu'une seule évaluation puisse toutes les prendre en charge.
+ **Formalisons le tout sous forme de règles** : le résultat est un ensemble de tables et de cas de test que les développeurs peuvent implémenter et que les ingénieurs peuvent confronter à la réglementation.

## Des signaux des capteurs aux résultats

L'add-in suit la chaîne décrite par les réglementations :

+ **Données des capteurs** : concentrations de gaz mesurées par les analyseurs, débit d'échappement, données du véhicule et du moteur, position et conditions ambiantes, chacune avec sa propre fréquence d'échantillonnage et son propre retard.
+ **Alignement temporel** : les signaux sont synchronisés, car un analyseur voit le gaz quelques secondes après que le moteur l'a produit.
+ **Contrôles des données** : contrôles de dérive et de plausibilité des analyseurs, données manquantes, et conditions de trajet fixées par la réglementation.
+ **Corrections** : conversion des concentrations de base sèche en base humide, et les autres corrections exigées par la réglementation.
+ **Émissions instantanées et totales** : débits massiques d'émission pour chaque polluant, puis résultats par trajet et par phase (urbaine, rurale, autoroutière), selon la méthode d'évaluation de chaque réglementation.
+ **Rapports** : les résultats, les contrôles de validité et les graphiques, dans un rapport que les ingénieurs peuvent relire et archiver.

## Les choix techniques qui ont compté

+ **Les règles comme des données, pas comme du code.** Les paramètres réglementaires (limites, bornes des phases, conditions) sont conservés dans des tables modifiables : un nouvel amendement se traduit donc surtout par une modification de données, vérifiée sur des cas de test, plutôt que par une nouvelle version du logiciel.
+ **Chaque étape visible.** Chaque canal intermédiaire est disponible dans UniPlot : un ingénieur peut voir exactement d'où vient un résultat, et le comparer à celui d'un autre outil.
+ **Une seule évaluation pour plusieurs réglementations.** La chaîne commune est partagée et les différences entre régions sont isolées, ce qui circonscrit les mises à jour pour Euro 7, l'EPA ou la Chine.

## Pourquoi c'est important pour les capteurs

L'évaluation des émissions, c'est du traitement de données de capteurs soumis à des règles strictes : retards, dérive, unités, échantillons manquants et corrections déterminent si un résultat est fiable. C'est la même rigueur que nous appliquons à l'[intégration de capteurs environnementaux](/fr/services/integration-capteurs-environnementaux/), avec la réglementation comme référence.

## Nous contacter

Pour parler d'une évaluation des émissions, d'une réglementation à implémenter ou d'une chaîne de mesure à vérifier, écrivez-nous à [info@sensical.es](mailto:info@sensical.es).
