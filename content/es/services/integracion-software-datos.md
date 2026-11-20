---
title: 'Integración de software y datos'
seoTitle: "Integración de software y datos: MQTT, APIs, protocolos | Sensical"
description: "Conectamos dispositivos, software y plataformas de datos mediante MQTT, APIs, decodificación de protocolos y formatos abiertos, sin pasos manuales."
draft: false
featured: true
weight: 7
heroHeading: 'Integración de software y datos'
heroSubHeading: ''
section_title: 'Servicios'
translationKey: softwareintegration
labels:
- "Integración"
- "MQTT"
- "APIs"
related_pages:
- flujos-datos-iot
- integracion-sensores-meshtastic
- integracion-sensores-ambientales
---

Los datos rara vez se quedan donde se generan. Los produce un sensor, un dispositivo o un sistema de ensayo, un _broker_ o una base de datos los transporta y almacena, y otra aplicación los analiza o actúa en consecuencia. {{< accent >}}Conectamos estos sistemas para que los datos circulen de forma fiable, en el formato adecuado y sin pasos manuales{{< /accent >}}, y diseñamos cada integración pensando en las personas que van a depender de ella.

{{< alert type="bg-sensical" >}}

### El problema

Sobre el papel, la mayoría de los sistemas pueden intercambiar datos: hay una API, una exportación, un _broker_ de mensajes. En la práctica, los archivos se siguen copiando a mano, el mismo mensaje llega dos veces por caminos distintos, se pierden unidades y marcas de tiempo, y un cambio de formato aguas arriba rompe sin avisar todo lo que viene después. Una integración frágil o incómoda de usar es una integración en la que nadie confía. Una buena integración parte de cómo se van a usar los datos y después elige el enlace técnico más sencillo que lo haga posible.

{{</alert>}}

## Qué integramos

+ **_Brokers_ de mensajes y flujos de datos**: publicación y suscripciones MQTT, puentes entre _brokers_, eliminación de mensajes duplicados y procesamiento en flujo que encamina y transforma los mensajes a medida que llegan.
+ **Protocolos y codificaciones**: decodificación de tráfico binario y cifrado de dispositivos, definiciones Protocol Buffers, OSC y otros protocolos de control, y conversión en lecturas limpias con sus unidades y marcas de tiempo.
+ **Plataformas de terceros**: envío de los datos decodificados a la plataforma que una organización ya utiliza, por MQTT o mediante una API REST, o importación de datos desde _brokers_ remotos, en lugar de obligar a todo el mundo a usar una sola herramienta.
+ **Bases de datos y almacenamiento**: bases de datos de series temporales, PostgreSQL, archivos Parquet en almacenamiento compatible con S3, y acceso para el análisis mediante DuckDB o un paquete de Python.
+ **Dispositivos y control en tiempo real**: pequeños puentes que conectan controladores, sensores y máquinas a un mismo bus de mensajes, para poder añadir o sustituir dispositivos sin tocar el resto del sistema.
+ **Datos de ingeniería**: archivos de medida y de simulación como MDF4, HDF5, NetCDF, CSV y Excel, y los metadatos que permiten aprovecharlos más adelante.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Ejemplos de nuestro trabajo

+ [Mesh Things](/es/proyectos/mesh-things/) recibe el tráfico MQTT cifrado de las redes Meshtastic, lo decodifica, elimina los duplicados que llegan a través de varias pasarelas, almacena las lecturas y las comparte con plataformas de terceros por MQTT, con una API REST y un paquete de Python para el análisis.
+ Nuestras [contribuciones al firmware de Meshtastic](/es/proyectos/contribuciones-firmware-meshtastic/) definen cómo se codifican las nuevas lecturas de sensores en el protocolo de Meshtastic, para que viajen por la red en malla, las apps y MQTT con sus unidades.
+ En [Famulus 4.0](/es/proyectos/famulus-4-0/), un mando de videojuegos y un controlador MIDI publican órdenes en un mismo bus MQTT, y un único distribuidor controla un robot mediante WebRTC.
+ En [Azul Petróleo](/es/proyectos/mascaras-azul-petroleo/), el software de iluminación del espectáculo controla sin cables las máscaras luminosas y los LEDs de escenario mediante puentes OSC y sACN.

## Para quién

+ **Organizaciones cuyos datos atraviesan varios sistemas** (dispositivos, _brokers_, bases de datos, herramientas de análisis) antes de resultar útiles.
+ **Fabricantes de dispositivos y proveedores de plataformas** que quieren que su producto intercambie datos con otros mediante protocolos abiertos.
+ **Equipos que crean sistemas interactivos y en tiempo real**, como instalaciones, robótica o tecnología escénica, donde controladores, dispositivos y software tienen que comunicarse con poco retardo.

## Qué ofrecemos

+ Conceptos de integración: el flujo de datos, los formatos y protocolos, las opciones técnicas y una recomendación
+ Requisitos, diagramas de arquitectura y estimaciones de esfuerzo
+ Implementación de decodificadores, puentes, conectores, importadores, exportadores y APIs
+ Enlaces fiables: unidades y marcas de tiempo intactas, duplicados eliminados y un comportamiento definido cuando falla un enlace o un sistema
+ Documentación y traspaso, para que tu equipo pueda operar y ampliar la integración

{{< alert type="border-sensical" >}}

### Primero, protocolos abiertos

Preferimos protocolos y formatos abiertos y documentados, como MQTT, Protocol Buffers, REST y Parquet, y publicamos nuestras propias herramientas como código abierto siempre que podemos. Tu integración no debería atarte a un único proveedor, tampoco a nosotros.

{{< /alert >}}

## Hablemos

Cuéntanos qué sistemas tienen que atravesar tus datos en [info@sensical.es](mailto:info@sensical.es). Para la parte de sensores, consulta nuestro servicio de [integración de sensores ambientales](/es/servicios/integracion-sensores-ambientales/); para convertir los datos en resultados validados e informes, consulta [flujos de datos de sensores e IoT](/es/servicios/flujos-datos-iot/).
