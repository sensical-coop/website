---
title: 'Integración de sensores en Meshtastic'
seoTitle: "Integración de sensores y firmware Meshtastic | Sensical"
description: "Llevamos sensores a Meshtastic: drivers integrados en el firmware oficial, definiciones de telemetría, I2C y energía fiables, y una plataforma para los datos."
draft: false
featured: true
weight: 2
heroHeading: 'Integración de sensores en Meshtastic'
heroSubHeading: ''
button: "Leer más"
section_title: 'Servicios'
translationKey: meshtasticsensorintegration
labels:
- "Meshtastic"
- "Firmware"
- "Sensores"
related_pages:
- integracion-sensores-ambientales
---

Llevamos sensores a [Meshtastic](https://meshtastic.org), el _firmware_ de código abierto que convierte radios LoRa asequibles en redes en malla autónomas. Escribimos los _drivers_, conseguimos que se {{< accent >}}integren en el firmware oficial{{< /accent >}} y nos aseguramos de que los datos te lleguen, para que tus sensores funcionen en dispositivos Meshtastic estándar y sigan funcionando versión tras versión.

## ¿Por qué Meshtastic?

Las redes Meshtastic no necesitan antenas de operador, tarjetas SIM ni suscripciones: cada radio retransmite los mensajes de sus radios vecinas, y unas pocas pasarelas pueden conectar una finca, un valle o un barrio entero. Detrás hay una gran comunidad y una gama creciente de _hardware_. Eso la convierte en una opción muy atractiva para la monitorización ambiental donde escasean la energía y la cobertura, siempre que los sensores estén soportados en el _firmware_, y bien soportados.

## Nuestra trayectoria

Desde 2025, se han integrado varias de nuestras _pull requests_ en el _firmware_ oficial de Meshtastic. Nuestro trabajo permite ahora utilizar sensores de CO2, materia particulada, formaldehído, VOC y NOx, temperatura y humedad, entradas analógicas y sondas _one-wire_, y hacen más robusta la lectura de sensores en todos los dispositivos. Consulta los detalles en nuestras [contribuciones al firmware de Meshtastic](/es/proyectos/contribuciones-firmware-meshtastic/).

{{< divider
    image="images/drawings/antenna-drawing.svg"
    height="100"
    margin="40vw"
>}}

## Para quién

+ **Fabricantes de sensores** que quieren que su sensor o dispositivo funcione en Meshtastic de serie.
+ **Integradores y fabricantes de dispositivos** que construyen _hardware_ Meshtastic con sensores ambientales.
+ **Equipos de investigación, administraciones y empresas** que despliegan redes de sensores que deben funcionar fuera de la red, con datos fiables.

## Qué ofrecemos

+ _Drivers_ de _firmware_ para nuevos sensores, desarrollados con el equipo de mantenimiento de Meshtastic e integrados en el proyecto oficial, para que lleguen en cada versión
+ Definiciones de telemetría en el protocolo de Meshtastic, para que tus lecturas viajen por la red, las apps y MQTT con sus unidades correctas
+ Compilaciones y configuraciones de _firmware_ a medida para tu dispositivo, y pruebas en _hardware_ existente o prototipo
+ [Mesh Things](/es/proyectos/mesh-things/): almacenamiento, procesamiento, alarmas, o datos decodificados enviados a tu propia plataforma
+ Mantenimiento a medida que Meshtastic evoluciona, para que tu integración no diverja con las nuevas versiones

{{< alert type="bg-sensical" >}}

### Contribuyendo al proyecto oficial

Siempre que podemos, contribuimos nuestro trabajo al _firmware_ oficial. Así, tu sensor pasa a formar parte de Meshtastic, revisado por su equipo y disponible para todo el mundo, en lugar de un _fork_ aislado.

{{< /alert >}}

## Hablemos

Cuéntanos sobre tu sensor o tu red en [info@sensical.es](mailto:info@sensical.es). Para una visión más amplia, de la selección de sensores a la calibración y el despliegue, consulta nuestro servicio de [integración de sensores ambientales](/es/servicios/integracion-sensores-ambientales/).
