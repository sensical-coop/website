---
title: "UniPlot: managing an engineering data analysis software"
seoTitle: "UniPlot: product management of engineering software | Sensical"
description: "Product management, integrations and data workflows for UniPlot, a data analysis, plotting and reporting application for test and simulation engineers."
draft: false
featured: true
weight: 6
translationKey: uniplot
heroHeading: "UniPlot"
heroSubHeading: "Product management of a data analysis software for test and simulation engineers"
client: "ENORISE"
year: "2020–2026"
services:
- engineeringproductmanagement
- engineeringdataworkflows
- engineeringsoftwareintegration
related_projects:
- emissioncomputation
labels:
- "Engineering software"
- "Product management"
- "Test data"
image: "/images/projects/uniplot/engine-map-en.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

[UniPlot](https://www.uniplot.com) is a Windows application for visualising, analysing and reporting engineering data. Test-bench and simulation engineers use it to load measurements from many file formats and databases, build 2D and 3D diagrams, compute new channels, and produce reports in PDF, PowerPoint or Word. [Adrien Laveau](/about/#adrien-laveau), co-founder of Sensical, is responsible for the development of UniPlot and its ecosystem, from the roadmap to the product's documentation, for its publisher ENORISE.

{{< carousel fit="contain" ratio="4/3" label="UniPlot" >}}
![Two diagrams of an engine efficiency map over engine speed and torque: a contour map with labelled isolines on the left and the same map as a coloured 3D surface on the right](/images/projects/uniplot/engine-map-en.png "An engine efficiency map as a contour plot and a 3D surface, created in UniPlot from synthetic data.")
![Diagram: measurement files, test-data databases, test benches and simulation tools feed UniPlot, where data is imported, computed with formulas, plotted in templates and automated in sequences, to produce PDF, PowerPoint, Word and Excel reports](/images/projects/uniplot/uniplot-workflow-en.svg "From data sources to reports: where UniPlot sits in an engineering workflow.")
![Three stacked plots of a real driving emissions trip: vehicle speed, NOx emission rate, and distance-specific NOx compared with a limit](/images/projects/emission-computation/rde-trip-en.png "An emission evaluation built with UniPlot, synthetic data. See the emission computation project.")
{{< /carousel >}}

## The challenge

UniPlot has been developed over many years and is used in demanding fields: engine and powertrain testing, emissions, batteries and simulation. Its users rely on calculations and report templates they have refined for years, and they expect every release to keep them working. At the same time, the requests keep coming: new data formats and bus protocols, regulations that change how results must be computed, integrations with test systems and simulation tools, and customer-specific reports. {{<accent>}}The work is to keep a deep, long-lived product evolving with a small team, without breaking what engineers depend on.{{</accent>}}

## What we do

+ **Roadmap and releases**: collecting requests from users, support and partners, prioritising them, specifying features with acceptance criteria, and preparing releases with the development team.
+ **From custom requests to product features**: deciding which customer requests become core features, licensable add-ins or project scripts, and scoping them into work packages.
+ **Domain add-ins**: product ownership of add-ins for specific engineering tasks, such as the [emission computation](/projects/emission-computation/) add-in.
+ **Integrations**: concepts and requirements for connecting UniPlot to test automation systems, simulation software used as a data source, and ASAM ODS test-data databases, through launch, command-line and URL workflows, COM and reusable analysis sequences.
+ **Customer workflows**: studying how engineering teams evaluate their data, often in spreadsheets, and rebuilding it as formula libraries, report templates and automated sequences, validated against their previous results.
+ **Licensing and deployment**: turning the product's licensing models into software behaviour and deployment that administrators can manage, and reviewing licence terms against what the product actually does.
+ **Support and quality**: indicators for the service desk and the backlog, issue investigation, and data-format problems reproduced and fixed with the developers.
+ **Documentation and enablement**: documentation, training courses, videos, webinars, trade fairs, brochures and the renewal of the product website.

## Technical decisions that mattered

+ **Automation through sequences, not only scripts.** A sequence of reusable analysis steps, started from another application or the command line, lets an engineer automate a report without writing code, and lets partners integrate UniPlot without a deep plugin.
+ **Keep the engineer's calculations.** When a team moves to UniPlot, its existing formulas and report layouts are reproduced first and validated against old results, before anything is improved.
+ **Rules as data.** Where calculations follow external rules, such as emission regulations, the rules are kept in editable tables so they can be updated without a new software release.

## What it shows

Years of work on UniPlot are the basis of our [product management](/services/engineering-software-product-management/), [engineering data workflows](/services/engineering-data-workflows/) and [software integration](/services/engineering-software-integration/) services: we know how engineers work with their data, and how to turn that into software they can rely on.

## Contact us

To talk about your engineering software or your data workflow, write to us at [info@sensical.es](mailto:info@sensical.es).
