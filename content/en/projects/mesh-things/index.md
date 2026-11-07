---
title: "Mesh Things: a data platform for LoRa Mesh sensors"
seoTitle: "Mesh Things: a data platform for LoRa Mesh sensors | Sensical"
description: "Our open-source platform to collect, store and process sensor data from LoRa mesh networks, on a cloud server or a Raspberry Pi."
draft: false
featured: true
weight: 1
translationKey: meshthings
heroHeading: "Mesh Things"
heroSubHeading: "Storage, processing and a console for Meshtastic sensor networks"
client: "Sensical (own product)"
year: 2026
partners:
services:
- environmentaldatacollection
- meshtasticsensorintegration
labels:
- "LoRa Mesh"
- "Data platform"
- "Open source"
- "Meshtastic"
image: "/images/projects/mesh-things/cover-map.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---

Mesh Things is our open-source platform for collecting, storing and processing sensor data from LoRa Mesh networks such as [Meshtastic](https://meshtastic.org). It ingests the encrypted radio traffic of a mesh and converts it into clean, stored readings, along with alarms, quality checks and a REST API. Mesh Things can run on a cloud server or on a Raspberry Pi. It is live at [things.sensical.es](https://things.sensical.es).

{{< carousel fit="contain" ratio="5/2" label="Mesh Things" >}}
![Illustration of a mesh network: radio nodes linked to each other, with three gateways highlighted and the route of a packet towards one of them](/images/projects/mesh-things/mesh-grid.svg "A Meshtastic mesh: nodes relay each other's packets until a gateway sends them to MQTT.")
![The Mesh Things console: a live list of incoming packets, a map of gateways and nodes across Spain, and the deployment options](/images/projects/mesh-things/console-overview.png "Live packets, a map of the mesh, and deployment on a Raspberry Pi or in the cloud.")
![Three steps: register a mesh, start receiving data, access your data and act on it](/images/projects/mesh-things/three-steps.png "Getting started: register the mesh, receive data, act on it.")
![Console panels: a real-time device inventory, gateway controls with allowed and blocked devices, and a temperature chart](/images/projects/mesh-things/console-features.png "Device inventory, control over which gateways publish, and charts.")
{{< /carousel >}}

## The challenge

Meshtastic has made long-range, off-grid **LoRa mesh networks cheap and easy to set up**, and it is a natural fit for environmental sensors in places without power or coverage. However, **getting the data out, and making use of it, is harder**: gateways publish the mesh's packets to MQTT encrypted and in Meshtastic's own _protobuf_ format, the same packet often arrives several times through different gateways, and the established IoT platforms do not support Meshtastic natively. {{<accent>}}Mesh Things is a unified solution that helps teams build LoRa mesh data collection networks without building and maintaining their own decoding layer.{{</accent>}}

## Mesh Things

Mesh Things allows you to:

+ **Register meshes and devices**, decrypt and decode their packets with the channel key. Auto-discovery allows gateways and the nodes behind them to be automatically stored from the traffic itself.
+ **Store every reading in a time-series database**, with an optional Parquet archive on S3-compatible storage for long-term analytics.
+ **Process data on-the-fly**: sensor calibration and derived channels, data-quality checks and pattern detection are performed as data arrives.
+ **Raise alarms** on thresholds, flat or missing readings and gaps, with notifications by email and more.
+ **Connect to other systems**: import meshes from remote MQTT brokers, and share decoded readings with third parties over MQTT, so they can flow into the platform you already use.
+ **A console and an API**: use our console with our live device inventory, featuring mesh maps and traffic analytics. Build charts, choose which gateways and nodes are stored, and manage alarms and data processing blueprints. Access data through a **REST API, S3 storage and DuckDB, with a Python package to access the data natively.**

## Flexible deployment options

Mesh Things runs with Docker Compose in two sizes:
- a *lite* version ingests, decodes and stores data, and is small enough for a single-board computer such as a Raspberry Pi in the field.
- a *full* version adds stream processing, quality checks, MQTT sharing and the archive, built on established technologies such as Kafka, Flink, EMQX, InfluxDB, PostgreSQL and Redis.

## Open source

The platform and its web apps are published on GitHub, and the documentation is at [things.sensical.es/docs](https://things.sensical.es/docs):

+ [mesh-things](https://github.com/sensical-coop/mesh-things): ingestion, decoding, processing, storage and API (GPL-3.0)
+ [mesh-things-apps](https://github.com/sensical-coop/mesh-things-apps): the console and documentation (LGPL-2.1)


## Contact us

To use Mesh Things for your sensors or your network, write to us at [info@sensical.es](mailto:info@sensical.es).

