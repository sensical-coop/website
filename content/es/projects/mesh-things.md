---
title: "Mesh Things: una plataforma de datos para sensores en malla LoRa"
seoTitle: "Mesh Things: datos de sensores en malla LoRa | Sensical"
description: "Nuestra plataforma de código abierto para recoger, almacenar y procesar datos de sensores de redes en malla LoRa, en un servidor en la nube o en una Raspberry Pi."
draft: false
featured: true
weight: 1
translationKey: meshthings
heroHeading: "Mesh Things"
heroSubHeading: "Almacenamiento, procesamiento y consola para redes de sensores LoRa"
client: "Sensical (producto propio)"
year: 2026
partners:
services:
- environmentaldatacollection
- meshtasticsensorintegration
labels:
- "Meshtastic"
- "Plataforma de datos"
- "Código abierto"
image: "/images/projects/mesh-things/cover-map.png"
# The cover is a drawing on white: keep the plain black banner
heroImage: false
---
Mesh Things es nuestra plataforma de código abierto para recoger, almacenar y procesar datos de sensores de redes  LoRa mesh como [Meshtastic](https://meshtastic.org). Recibe el tráfico de radio cifrado de una red y lo convierte en lecturas ordenadas, incluyendo funcionalidades como alarmas, controles de calidad y una API REST. Mesh Things puede funcionar en un servidor en la nube o en una Raspberry Pi y se puede visitar en [things.sensical.es](https://things.sensical.es).

{{< carousel fit="contain" ratio="5/2" label="Mesh Things" >}}
![Ilustración de una red en malla: nodos de radio enlazados entre sí, con tres pasarelas destacadas y la ruta de un paquete hacia una de ellas](/images/projects/mesh-things/mesh-grid.svg "Una red Meshtastic: los nodos se retransmiten los paquetes hasta que una pasarela los envía a MQTT.")
![La consola de Mesh Things: una lista en directo de paquetes entrantes, un mapa de pasarelas y nodos por España y las opciones de despliegue](/images/projects/mesh-things/console-overview.png "Paquetes en directo, un mapa de la red y despliegue en una Raspberry Pi o en la nube.")
![Tres pasos: registrar una red, empezar a recibir datos, acceder a los datos y actuar](/images/projects/mesh-things/three-steps.png "Para empezar: registrar la red, recibir datos y actuar.")
![Paneles de la consola: un inventario de dispositivos en tiempo real, el control de pasarelas permitidas y bloqueadas, y un gráfico de temperatura](/images/projects/mesh-things/console-features.png "Inventario de dispositivos, control de las pasarelas que publican y gráficos.")
{{< /carousel >}}

## El reto

Meshtastic ha hecho que las **redes en malla LoRa sean baratas y fáciles de montar**: siendo de largo alcance y autónomas, encajan de forma natural con los sensores ambientales en lugares sin electricidad ni cobertura. Sin embargo, **extraer los datos y aprovecharlos eficientemente no es tan sencillo**: las pasarelas publican los paquetes de la malla en MQTT con encripción y en el formato _protobuf_ propio de Meshtastic, el mismo paquete suele llegar varias veces a través de distintas pasarelas, y las plataformas IoT habituales no son compatibles con Meshtastic de forma nativa. {{<accent>}}Mesh Things es una solución unificada que ayuda a equipos a construir redes de recogida de datos en malla LoRa sin tener que construir ni mantener su propia capa de decodificación.{{</accent>}}

## Mesh Things

Mesh Things te permite:

+ **Registrar mallas y dispositivos**, así como descifrar y decodificar sus paquetes con la clave del canal. El descubrimiento automático registra las pasarelas y los nodos que hay detrás de ellas a partir de su tráfico.
+ **Almacenar cada lectura en una base de datos de series temporales**, con un archivo Parquet opcional en almacenamiento compatible con S3 para analíticas de series temporales de larga duración.
+ **Procesar los datos en tiempo real**: Mesh Things permite calibrar sensores y sus canales derivados, establecer controles de calidad sobre los datos y detectar patrones en tiempo real.
+ **Detección y alarmas** por umbrales, lecturas planas o falta de datos, con avisos por correo electrónico y otros canales.
+ **Conectar con otros sistemas**: importar mallas desde brokers MQTT remotos y compartir las lecturas decodificadas con terceros por MQTT, para que lleguen a la plataforma que ya utilizas.
+ **Una consola y una API**: usa nuestra consola, con el inventario de dispositivos en directo, mapas de la malla y analítica del tráfico. Crea gráficos, elige qué pasarelas y nodos se almacenan, y gestiona las alarmas y las plantillas de procesamiento de datos. Accede a los datos mediante una **API REST, almacenamiento S3 y DuckDB, con un paquete de Python para acceder a los datos de forma nativa.**

## Opciones de despliegue flexibles

Mesh Things funciona con Docker Compose en dos distribuciones:

- una versión *lite*, que recibe, decodifica y almacena los datos, y es lo bastante ligera para un ordenador de placa única, como una Raspberry Pi.
- una versión *full*, que añade procesamiento de datos en tiempo real, controles de calidad, reenvío de datos por MQTT y el archivado de datos. Esta solución está construida sobre tecnologías consolidadas como Kafka, Flink, EMQX, InfluxDB, PostgreSQL y Redis.

## Código abierto

La plataforma y sus aplicaciones web están publicadas en GitHub, y la documentación está en [things.sensical.es/docs](https://things.sensical.es/docs):

+ [mesh-things](https://github.com/sensical-coop/mesh-things): recepción, decodificación, procesamiento, almacenamiento y API (GPL-3.0)
+ [mesh-things-apps](https://github.com/sensical-coop/mesh-things-apps): la consola y la documentación (LGPL-2.1)

## Contacto

Para usar Mesh Things con tus sensores o tu red, escríbenos a [info@sensical.es](mailto:info@sensical.es).
