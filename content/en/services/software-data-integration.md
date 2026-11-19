---
title: 'Software and data integration'
seoTitle: "Software and data integration: MQTT, APIs, protocols | Sensical"
description: "We connect devices, software and data platforms through MQTT, APIs, protocol decoding and open formats, so data reaches the tools people use without manual steps."
draft: false
featured: true
weight: 7
heroHeading: 'Software and data integration'
heroSubHeading: ''
section_title: 'Services'
translationKey: softwareintegration
labels:
- "Integration"
- "MQTT"
- "APIs"
related_pages:
- engineering-data-workflows
- meshtastic-sensor-integration
- environmental-sensor-integration
---

Data rarely stays where it is produced. A sensor, a device or a test system creates it, a broker or a database carries and stores it, and another application analyses it or acts on it. We {{< accent >}}connect these systems so that data moves reliably, in the right format and without manual steps{{< /accent >}}, and we design each integration around the people who will rely on it.

{{< alert type="bg-sensical" >}}

### The problem

On paper, most systems can exchange data: there is an API, an export, a message broker. In practice, files are still copied by hand, the same message arrives twice through different paths, units and timestamps get lost, and a change of format upstream silently breaks everything downstream. An integration that is fragile or awkward to use is one that nobody trusts. A good one starts from how the data will be used, then chooses the simplest technical link that supports it.

{{</alert>}}

## What we integrate

+ **Message brokers and streams**: MQTT publishing and subscriptions, bridges between brokers, removal of duplicate messages, and stream processing that routes and transforms messages as they arrive.
+ **Protocols and encodings**: decoding binary and encrypted device traffic, Protocol Buffers definitions, OSC and other control protocols, and conversion into clean readings with their units and timestamps.
+ **Third-party platforms**: delivering decoded data to the platform an organisation already uses, over MQTT or a REST API, or importing data from remote brokers, instead of forcing everyone onto one tool.
+ **Databases and storage**: time-series databases, PostgreSQL, Parquet archives on S3-compatible storage, and analysis access through DuckDB or a Python package.
+ **Devices and real-time control**: small bridges that put controllers, sensors and machines on one message bus, so that devices can be added or swapped without touching the rest of the system.
+ **Engineering data**: measurement and simulation files such as MDF4, HDF5, NetCDF, CSV and Excel, and the metadata that makes them usable later.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Examples from our work

+ [Mesh Things](/projects/mesh-things/) receives the encrypted MQTT traffic of Meshtastic networks, decodes it, removes the duplicates that arrive through several gateways, stores the readings and shares them with third-party platforms over MQTT, with a REST API and a Python package for analysis.
+ Our [Meshtastic firmware contributions](/projects/meshtastic-firmware-contributions/) define how new sensor readings are encoded in the Meshtastic protocol, so that they travel through the mesh, the apps and MQTT with their units.
+ In [Famulus 4.0](/projects/famulus-4-0/), a game controller and a MIDI controller publish commands on one MQTT bus, and a single dispatcher drives a robot over WebRTC.
+ In [Azul Petróleo](/projects/azul-petroleo-masks/), the show's lighting software cues wearable masks and stage LEDs wirelessly through OSC and sACN bridges.

## Who it is for

+ **Organisations whose data crosses several systems** (devices, brokers, databases, analysis tools) before it becomes useful.
+ **Device makers and platform providers** that want their product to exchange data with others through open protocols.
+ **Teams building interactive and real-time systems**, such as installations, robotics or stage technology, where controllers, devices and software have to talk to each other with little delay.

## Our offer

+ Integration concepts: the data flow, formats and protocols, the technical options and a recommendation
+ Requirements, architecture diagrams and effort estimates
+ Implementation of decoders, bridges, connectors, importers, exporters and APIs
+ Reliable links: units and timestamps kept intact, duplicates removed, and a defined behaviour when a link or a system fails
+ Documentation and handover, so that your team can run and extend the integration

{{< alert type="border-sensical" >}}

### Open protocols first

We prefer open, documented protocols and formats, such as MQTT, Protocol Buffers, REST and Parquet, and we publish our own tools as open source where we can. Your integration should not lock you into one vendor, including us.

{{< /alert >}}

## Get in touch

Tell us which systems your data has to cross at [info@sensical.es](mailto:info@sensical.es). For the sensor side, see our [environmental sensor integration](/services/environmental-sensor-integration/) service; for test and simulation data, see [engineering data workflows](/services/engineering-data-workflows/).
