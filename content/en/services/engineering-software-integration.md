---
title: 'Engineering software integration'
seoTitle: "Engineering software integration: tools, databases, reports | Sensical"
description: "We connect analysis software with test automation, simulation tools and test-data databases, so data arrives without manual export and reports run on their own."
draft: false
featured: true
weight: 7
heroHeading: 'Engineering software integration'
heroSubHeading: ''
section_title: 'Services'
translationKey: engineeringsoftwareintegration
labels:
- "Integration"
- "ASAM ODS"
- "Automation"
related_pages:
- engineering-data-workflows
- engineering-software-product-management
- meshtastic-sensor-integration
---

Engineering data rarely stays in one application. It is produced by a test bench or a simulation, stored in a database, analysed in another tool and ends up in a report. We {{< accent >}}connect these applications so that the data moves without manual exports{{< /accent >}}, and we design the integration around the engineer who will use it every day.

{{< alert type="bg-sensical" >}}

### The problem

Most engineering tools can exchange data on paper: there is an export, an API, a command line. In practice, engineers still save files by hand, rename them, load them into another tool and rebuild the same plots. Integrations that exist but are awkward to use are integrations nobody uses. A good one starts from the user's workflow, then chooses the simplest technical link that supports it.

{{</alert>}}

## What we integrate

+ **Test automation systems**: reports created automatically at the end of a test, a "view in the analysis tool" entry in the test system, and results and key figures written back to the test-data platform.
+ **Simulation software**: the analysis tool used as a post-processor, started from the simulation interface, with a ready-made workspace that loads the result files and runs reusable analysis sequences.
+ **Test-data databases**: browsing, searching and loading measurements from ASAM ODS and openMDM servers, writing computed results, reports and comments back, and batch downloads for large data sets.
+ **Scripts and other applications**: MATLAB, Python, Excel or in-house tools driving the analysis through COM/ActiveX, the command line or scripting interfaces.
+ **Data formats**: importers and exporters for measurement and simulation formats such as MDF4, HDF5, ATFX, NetCDF, CSV and Excel, and SQL databases.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Who it is for

+ **Engineering software vendors** that want their product to work with another one: as a data source, a post-processor or a reporting step.
+ **Test and simulation departments** whose data crosses three or four applications before it becomes a result.
+ **Teams adopting a test-data management system** that need their analysis tools to read from it and write back to it.

## Our offer

+ Integration concepts: the user workflow, the technical options (launch, file exchange, COM, command line, URL, API) and a recommendation
+ Requirements, architecture diagrams and effort estimates by work package
+ Implementation of importers, exporters, scripts, sequences and add-ins
+ Automated reporting pipelines, from raw data to PDF or PowerPoint
+ Demonstration workspaces, documentation and webinars for the joint solution
+ Coordination between the teams and companies involved, including licensing and deployment questions

{{< alert type="border-sensical" >}}

### Same problem, different scale

Getting data from where it is produced to where it is used is also at the heart of our sensor work: from a [Meshtastic](/services/meshtastic-sensor-integration/) radio to a database, or from a test bench to a report. The tools differ, the questions are the same: formats, timing, metadata and what happens when something fails.

{{< /alert >}}

## Get in touch

Tell us which tools your data has to cross at [info@sensical.es](mailto:info@sensical.es). For the product side of an integration, from scope to release, see our [product management for engineering software](/services/engineering-software-product-management/) service.
