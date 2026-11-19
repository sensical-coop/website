---
title: "Emission computation: from legislation to validated results"
seoTitle: "Emission computation and RDE evaluation software | Sensical"
description: "Regulatory emission and Real Driving Emissions evaluation: legislation analysis, sensor data checks, corrections and reports, in an add-in for UniPlot."
draft: false
featured: true
weight: 7
translationKey: emissioncomputation
heroHeading: "Emission computation"
heroSubHeading: "From the legislation text to validated emission results"
client: "ENORISE (UniPlot add-in)"
year: "2020–2026"
services:
- engineeringdataworkflows
- engineeringproductmanagement
- environmentaldatacollection
related_projects:
- uniplot
labels:
- "Emissions"
- "Legislation"
- "Sensor data"
image: "/images/projects/emission-computation/rde-trip-en.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

Vehicles and engines must prove that their emissions stay within legal limits, on the test bench and on the road. The result depends on gas analysers, flow meters and other sensors, and on a long chain of calculations that is defined, in detail, by the regulation. We designed, and lead the product development of, an add-in for [UniPlot](/projects/uniplot/) that turns this chain into a repeatable evaluation: {{< accent >}}from the legislation text to checked data, corrected emissions and the official report{{< /accent >}}.

{{< carousel fit="contain" ratio="4/3" label="Emission computation" >}}
![Three stacked plots of a real driving emissions trip: vehicle speed through urban, rural and motorway phases, the NOx emission rate, and the distance-specific NOx falling below a dashed limit line](/images/projects/emission-computation/rde-trip-en.png "A real driving emissions trip: speed, NOx emission rate and distance-specific NOx against a limit. Synthetic data.")
![Diagram of the computation chain: sensor signals, time alignment, data checks, corrections, instantaneous emissions, trip validation, evaluation and report, with the legislation rules feeding each step](/images/projects/emission-computation/computation-chain-en.svg "The computation chain. The legislation rules feed every step.")
{{< /carousel >}}

## The challenge

Emission regulations are long, precise and different from one region to the next, and they change. The European Real Driving Emissions rules, their evolution towards Euro 7, US EPA procedures and the Chinese regulations each define which signals are measured, how they are aligned and corrected, when a test is valid, and how the final figure is calculated. Test teams often implement these rules in spreadsheets, one test type at a time. {{<accent>}}The result has to be traceable, the same for every test, and quick to update when the regulation changes.{{</accent>}}

## Legislation analysis

Before any code, the regulation has to be read as a specification. For each regulation and amendment we:

+ **Extract the calculation steps**: which quantities are needed, in which units, and in which order they are computed.
+ **List the data checks**: which conditions make a measurement or a whole trip valid or invalid, and which ones only extend or limit the evaluation.
+ **Identify the differences**: what changes between regions, vehicle types and versions of the same regulation, so that one evaluation can support all of them.
+ **Write it down as rules**: the result is a set of tables and test cases that developers can implement and engineers can check against the regulation.

## From sensor signals to results

The add-in follows the chain that the regulations describe:

+ **Sensor data**: gas concentrations from the analysers, exhaust flow, vehicle and engine data, position and ambient conditions, each with its own sampling rate and delay.
+ **Time alignment**: signals are synchronised, because an analyser sees the gas some seconds after the engine produced it.
+ **Data checks**: analyser drift and plausibility checks, missing data, and the trip conditions set by the regulation.
+ **Corrections**: conversion of dry to wet concentrations, and the other corrections the regulation requires.
+ **Instantaneous and total emissions**: mass emission rates for each pollutant, then results per trip and per phase (urban, rural, motorway), using the evaluation method of each regulation.
+ **Reports**: the results, the validity checks and the plots in a report that engineers can review and keep.

## Technical decisions that mattered

+ **Rules as data, not code.** The regulatory parameters (limits, phase boundaries, conditions) are kept in editable tables, so a new amendment is mostly a change of data, checked against test cases, rather than a new software release.
+ **Every step visible.** Each intermediate channel is available in UniPlot, so an engineer can see exactly where a result comes from, and compare it with another tool.
+ **One evaluation for several regulations.** The common chain is shared, and the differences between regions are isolated, which keeps updates for Euro 7, the EPA or China contained.

## Why it matters for sensors

Emission evaluation is sensor data processing under strict rules: delays, drift, units, missing samples and corrections decide whether a result can be trusted. It is the same discipline we apply to [environmental sensor integration](/services/environmental-sensor-integration/), with the regulation as the reference.

## Contact us

To discuss an emission evaluation, a regulation to implement or a measurement chain to check, write to us at [info@sensical.es](mailto:info@sensical.es).
